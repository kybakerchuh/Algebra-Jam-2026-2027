/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { onAuthStateChanged, type User } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { BarChart3, CheckCircle2, LogOut, Maximize2, Minimize2, XCircle } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { StatsDrawerModal } from './components/StatsDrawerModal';
import {
  auth,
  db,
  ensureStudentProgressDoc,
  handleFirestoreError,
  OperationType,
  parseLifetimeDoc,
  recordAnswerInFirestore,
  signInWithGoogle,
  signOutStudent,
} from './firebase';
import {
  calcAccuracy,
  createEmptySessionStats,
  createEmptyTopicMap,
  isValidOstTopicId,
  OST_TOPICS,
  sanitizeTopicMap,
  type LifetimeProgressView,
  type OstTopicId,
  type SessionStatsState,
} from './topics';

const GUEST_STORAGE_KEY = 'nba_jam_guest_ost_stats_v1';

function createEmptyLifetime(): LifetimeProgressView {
  return {
    lifetimeCorrect: 0,
    lifetimeWrong: 0,
    topics: createEmptyTopicMap(),
  };
}

function loadGuestLifetime(): LifetimeProgressView {
  try {
    const raw = localStorage.getItem(GUEST_STORAGE_KEY);
    if (!raw) return createEmptyLifetime();
    return parseLifetimeDoc(JSON.parse(raw));
  } catch {
    return createEmptyLifetime();
  }
}

function saveGuestLifetime(stats: LifetimeProgressView): void {
  try {
    localStorage.setItem(GUEST_STORAGE_KEY, JSON.stringify(stats));
  } catch {
    // Ignore storage quota errors in guest mode
  }
}

function GoogleLogoIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.4c-.2 1.2-1.5 3.6-5.4 3.6-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.1 14.6 2.2 12 2.2 6.6 2.2 2.2 6.6 2.2 12s4.4 9.8 9.8 9.8c5.7 0 9.4-4 9.4-9.6 0-.6-.1-1.1-.2-1.6H12z"
      />
      <path
        fill="#34A853"
        d="M3.4 7.3l3.2 2.4C7.5 7.6 9.6 6.1 12 6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.1 14.6 2.2 12 2.2 8.2 2.2 4.9 4.4 3.4 7.3z"
      />
      <path
        fill="#FBBC05"
        d="M12 21.8c2.6 0 4.8-.9 6.4-2.4l-3-2.4c-.8.6-1.9 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1l-3.2 2.5c1.5 3.1 4.9 5.4 8.8 5.4z"
      />
      <path
        fill="#4285F4"
        d="M21.4 12.2c0-.6-.1-1.1-.2-1.6H12v3.9h5.4c-.3 1.3-1 2.3-2 3l3 2.4c1.8-1.6 3-4.1 3-7.7z"
      />
    </svg>
  );
}

function detectMobileOrTabletClient(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const isIPadOS = navigator.platform === 'MacIntel' && (navigator.maxTouchPoints || 0) > 1;
  const coarseNoHover = Boolean(
    window.matchMedia && window.matchMedia('(pointer: coarse) and (hover: none)').matches
  );
  const anyFineHover = Boolean(
    window.matchMedia && window.matchMedia('(pointer: fine) and (hover: hover)').matches
  );
  if (isMobileUA || isIPadOS) return true;
  if (coarseNoHover && !anyFineHover && (navigator.maxTouchPoints || 0) > 0) return true;
  return false;
}

function StudentTrackerShell() {
  const rootRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const writeQueueRef = useRef<Promise<void>>(Promise.resolve());

  const [authReady, setAuthReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [signingIn, setSigningIn] = useState(false);
  const [authNotice, setAuthNotice] = useState<string | null>(null);
  const [syncError, setSyncError] = useState<Error | null>(null);

  const [activeTopicId, setActiveTopicId] = useState<string>('ALL');
  const [sessionStats, setSessionStats] = useState<SessionStatsState>(createEmptySessionStats);
  const [guestLifetime, setGuestLifetime] = useState<LifetimeProgressView>(loadGuestLifetime);
  const [cloudLifetime, setCloudLifetime] = useState<LifetimeProgressView>(createEmptyLifetime);
  const [statsModalOpen, setStatsModalOpen] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(detectMobileOrTabletClient);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (syncError) {
    throw syncError;
  }

  useEffect(() => {
    const syncDeviceAndFs = () => {
      setIsMobileDevice(detectMobileOrTabletClient());
      const docWithWebkit = document as Document & { webkitFullscreenElement?: Element | null };
      setIsFullscreen(Boolean(document.fullscreenElement || docWithWebkit.webkitFullscreenElement));
    };
    window.addEventListener('resize', syncDeviceAndFs);
    window.addEventListener('orientationchange', syncDeviceAndFs);
    document.addEventListener('fullscreenchange', syncDeviceAndFs);
    document.addEventListener('webkitfullscreenchange', syncDeviceAndFs);
    return () => {
      window.removeEventListener('resize', syncDeviceAndFs);
      window.removeEventListener('orientationchange', syncDeviceAndFs);
      document.removeEventListener('fullscreenchange', syncDeviceAndFs);
      document.removeEventListener('webkitfullscreenchange', syncDeviceAndFs);
    };
  }, []);

  const handleToggleLandscapeFullscreen = async () => {
    try {
      const docWithWebkit = document as Document & {
        webkitFullscreenElement?: Element | null;
        webkitExitFullscreen?: () => Promise<void> | void;
      };
      const fsActive = Boolean(document.fullscreenElement || docWithWebkit.webkitFullscreenElement);
      if (fsActive) {
        if (document.exitFullscreen) await document.exitFullscreen();
        else if (docWithWebkit.webkitExitFullscreen) await docWithWebkit.webkitExitFullscreen();
        try {
          const orient = screen.orientation as ScreenOrientation & { unlock?: () => void };
          orient?.unlock?.();
        } catch {
          // Ignore orientation unlock errors
        }
      } else {
        const el = (rootRef.current || document.documentElement) as HTMLElement & {
          webkitRequestFullscreen?: () => Promise<void> | void;
        };
        if (el.requestFullscreen) await el.requestFullscreen();
        else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
        try {
          const orient = screen.orientation as ScreenOrientation & {
            lock?: (o: 'landscape') => Promise<void>;
          };
          if (orient?.lock) await orient.lock('landscape');
        } catch {
          // Browsers like iOS Safari restrict programmatic lock; natural rotation still works
        }
      }
    } catch {
      // Gracefully ignore fullscreen blocks inside nested iframes
    } finally {
      returnFocusToGame();
    }
  };

  const returnFocusToGame = useCallback(() => {
    setTimeout(() => {
      iframeRef.current?.contentWindow?.focus();
    }, 30);
  }, []);

  // Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setAuthReady(true);
      if (!nextUser) {
        setCloudLifetime(createEmptyLifetime());
      } else {
        setAuthNotice(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Firestore real-time listener (only when authenticated)
  useEffect(() => {
    if (!authReady || !user) return;
    const path = `studentProgress/${user.uid}`;
    const docRef = doc(db, 'studentProgress', user.uid);

    void ensureStudentProgressDoc(user).catch((err) => {
      setSyncError(err instanceof Error ? err : new Error(String(err)));
    });

    const unsubscribe = onSnapshot(
      docRef,
      (snap) => {
        if (snap.exists()) {
          setCloudLifetime(parseLifetimeDoc(snap.data()));
        } else {
          setCloudLifetime(createEmptyLifetime());
        }
      },
      (error) => {
        try {
          handleFirestoreError(error, OperationType.GET, path);
        } catch (wrapped) {
          setSyncError(wrapped instanceof Error ? wrapped : new Error(String(wrapped)));
        }
      }
    );

    return () => unsubscribe();
  }, [authReady, user]);

  // Listen to OST events posted from the game iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      const data = event.data;
      if (!data || typeof data !== 'object') return;

      if (data.type === 'OST_TOPIC_CHANGED' && typeof data.topicId === 'string') {
        setActiveTopicId(data.topicId);
        return;
      }

      if (data.type === 'OST_ANSWER_RECORDED') {
        const { topicId, isCorrect } = data as { topicId?: unknown; isCorrect?: unknown };
        if (!isValidOstTopicId(topicId) || typeof isCorrect !== 'boolean') return;

        // 1. Always update current session stats (all topics + individual topic)
        setSessionStats((prev) => {
          const nextTopics = sanitizeTopicMap(prev.topics);
          if (isCorrect) {
            nextTopics[topicId].correct += 1;
          } else {
            nextTopics[topicId].wrong += 1;
          }
          return {
            totalCorrect: prev.totalCorrect + (isCorrect ? 1 : 0),
            totalWrong: prev.totalWrong + (isCorrect ? 0 : 1),
            topics: nextTopics,
          };
        });

        // 2. Persist lifetime stats to Google user in Firestore (or guest fallback)
        if (user) {
          // Optimistically mirror locally while serialized transaction commits
          setCloudLifetime((prev) => {
            const nextTopics = sanitizeTopicMap(prev.topics);
            if (isCorrect) {
              nextTopics[topicId].correct += 1;
            } else {
              nextTopics[topicId].wrong += 1;
            }
            return {
              lifetimeCorrect: prev.lifetimeCorrect + (isCorrect ? 1 : 0),
              lifetimeWrong: prev.lifetimeWrong + (isCorrect ? 0 : 1),
              topics: nextTopics,
            };
          });

          const activeUser = user;
          writeQueueRef.current = writeQueueRef.current
            .then(() => recordAnswerInFirestore(activeUser, topicId, isCorrect))
            .catch((err) => {
              setSyncError(err instanceof Error ? err : new Error(String(err)));
            });
        } else {
          setGuestLifetime((prev) => {
            const nextTopics = sanitizeTopicMap(prev.topics);
            if (isCorrect) {
              nextTopics[topicId].correct += 1;
            } else {
              nextTopics[topicId].wrong += 1;
            }
            const updated: LifetimeProgressView = {
              lifetimeCorrect: prev.lifetimeCorrect + (isCorrect ? 1 : 0),
              lifetimeWrong: prev.lifetimeWrong + (isCorrect ? 0 : 1),
              topics: nextTopics,
            };
            saveGuestLifetime(updated);
            return updated;
          });
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [user]);

  const displayedLifetime = user ? cloudLifetime : guestLifetime;
  const lifetimeAcc = useMemo(
    () => calcAccuracy(displayedLifetime.lifetimeCorrect, displayedLifetime.lifetimeWrong),
    [displayedLifetime.lifetimeCorrect, displayedLifetime.lifetimeWrong]
  );

  const activeTopicMeta = useMemo(() => {
    if (!isValidOstTopicId(activeTopicId)) return null;
    return OST_TOPICS.find((t) => t.id === activeTopicId) || null;
  }, [activeTopicId]);

  const activeTopicLifetime = useMemo(() => {
    if (!isValidOstTopicId(activeTopicId)) return null;
    return displayedLifetime.topics[activeTopicId as OstTopicId];
  }, [activeTopicId, displayedLifetime.topics]);

  const handleSignIn = async () => {
    if (signingIn) return;
    setSigningIn(true);
    setAuthNotice(null);
    try {
      await signInWithGoogle();
    } catch (err: unknown) {
      const code =
        err && typeof err === 'object' && 'code' in err ? String((err as { code?: unknown }).code) : '';
      if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
        setAuthNotice(null);
      } else if (code === 'auth/popup-blocked') {
        setAuthNotice('Popup was blocked by browser — allow popups for this site to sign in with Google.');
      } else if (code === 'auth/unauthorized-domain') {
        setAuthNotice(
          `Add "${window.location.hostname}" to Firebase Console → Authentication → Settings → Authorized domains.`
        );
      } else {
        setAuthNotice('Google Sign-In could not complete. Please try again.');
      }
    } finally {
      setSigningIn(false);
      returnFocusToGame();
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutStudent();
      setSessionStats(createEmptySessionStats());
    } finally {
      returnFocusToGame();
    }
  };

  const openStatsModal = () => {
    try {
      iframeRef.current?.contentWindow?.postMessage(
        { type: 'OST_PAUSE_IF_PLAYING' },
        window.location.origin
      );
    } catch {
      // Ignore postMessage failure if iframe not ready
    }
    setStatsModalOpen(true);
  };

  const closeStatsModal = () => {
    setStatsModalOpen(false);
    returnFocusToGame();
  };

  const handleResetSession = () => {
    setSessionStats(createEmptySessionStats());
  };

  return (
    <div ref={rootRef} className="fixed inset-0 flex flex-col overflow-hidden bg-[#070b14] text-slate-100">
      {/* NON-INTRUSIVE TOP STUDENT TRACKER BAR (NEVER OVERLAPS THE COURT) */}
      <header className="tracker-header-landscape w-full shrink-0 bg-[#080d19] border-b border-slate-800/95 px-2 sm:px-4 py-1 sm:py-1.5 z-30">
        <div className="tracker-header-row max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
          {/* Left: Google Sign-In / Student Profile */}
          <div className="flex items-center gap-2 min-w-0">
            {!authReady ? (
              <span className="text-[11px] text-slate-400 font-medium px-2">Loading account...</span>
            ) : user ? (
              <div className="flex items-center gap-2 min-w-0">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || 'Student'}
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 rounded-full border border-emerald-400/70 shrink-0"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {(user.displayName || user.email || 'S')[0].toUpperCase()}
                  </div>
                )}
                <div className="min-w-0 flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white truncate max-w-[140px] sm:max-w-[200px]">
                    {user.displayName || user.email}
                  </span>
                  <span className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-bold text-emerald-300 uppercase">
                    Saved
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] font-semibold text-slate-300 hover:text-white cursor-pointer transition shrink-0"
                  title="Sign out"
                >
                  <LogOut className="w-3 h-3" />
                  <span className="hidden sm:inline">Sign out</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSignIn}
                  disabled={signingIn}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 disabled:opacity-60 text-slate-900 text-xs font-bold cursor-pointer transition shadow-sm shrink-0"
                >
                  <GoogleLogoIcon />
                  <span>{signingIn ? 'Signing in...' : 'Sign in with Google'}</span>
                </button>
                <span className="hidden lg:inline text-[11px] text-amber-300/90 font-medium">
                  Sign in to save lifetime stats
                </span>
              </div>
            )}
          </div>

          {/* Right: Live Session + Topic + Lifetime Stats Pills + Details Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto">
            {/* Session (All Topics) */}
            <button
              type="button"
              onClick={openStatsModal}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0d1424] hover:bg-slate-800 border border-slate-700/80 text-[11px] font-bold cursor-pointer transition shrink-0 tabular-nums"
              title="View session & topic breakdown"
            >
              <span className="text-slate-400 uppercase text-[10px]">Session</span>
              <span className="inline-flex items-center gap-0.5 text-emerald-400">
                <CheckCircle2 className="w-3 h-3" />
                {sessionStats.totalCorrect}
              </span>
              <span className="inline-flex items-center gap-0.5 text-rose-400">
                <XCircle className="w-3 h-3" />
                {sessionStats.totalWrong}
              </span>
            </button>

            {/* Active Individual Topic (if a specific topic is picked) */}
            {activeTopicMeta && activeTopicLifetime && (
              <button
                type="button"
                onClick={openStatsModal}
                className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0d1424] hover:bg-slate-800 border border-slate-700/80 text-[11px] font-bold cursor-pointer transition shrink-0 tabular-nums"
                title={`Lifetime stats for ${activeTopicMeta.title}`}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: activeTopicMeta.badgeColor }}
                />
                <span className="text-cyan-300 uppercase text-[10px]">{activeTopicMeta.shortTitle}</span>
                <span className="text-emerald-400">{activeTopicLifetime.correct}</span>
                <span className="text-slate-600">/</span>
                <span className="text-rose-400">{activeTopicLifetime.wrong}</span>
              </button>
            )}

            {/* Lifetime Total (All Topics) */}
            <button
              type="button"
              onClick={openStatsModal}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0d1424] hover:bg-slate-800 border border-emerald-500/40 text-[11px] font-bold cursor-pointer transition shrink-0 tabular-nums"
              title="Lifetime stats across all 10 topics"
            >
              <span className="text-emerald-300 uppercase text-[10px]">
                {user ? 'Lifetime' : 'Guest'}
              </span>
              <span className="inline-flex items-center gap-0.5 text-emerald-400">
                <CheckCircle2 className="w-3 h-3" />
                {displayedLifetime.lifetimeCorrect}
              </span>
              <span className="inline-flex items-center gap-0.5 text-rose-400">
                <XCircle className="w-3 h-3" />
                {displayedLifetime.lifetimeWrong}
              </span>
              {lifetimeAcc !== null && (
                <span className="text-amber-300 font-extrabold">({lifetimeAcc}%)</span>
              )}
            </button>

            {/* Open Full 10-Topic Breakdown Modal */}
            <button
              type="button"
              onClick={openStatsModal}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-950/70 hover:bg-cyan-900/80 border border-cyan-400/60 text-cyan-200 text-[11px] font-extrabold uppercase tracking-wider cursor-pointer transition shrink-0"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Topic Stats</span>
            </button>

            {/* Phone/Tablet Only: Fullscreen Landscape Button */}
            {isMobileDevice && (
              <button
                type="button"
                onClick={handleToggleLandscapeFullscreen}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-orange-950/80 hover:bg-orange-900/80 border border-orange-400/60 text-orange-200 text-[11px] font-extrabold uppercase tracking-wider cursor-pointer transition shrink-0"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen / Landscape Mode'}
              >
                {isFullscreen ? (
                  <Minimize2 className="w-3.5 h-3.5" />
                ) : (
                  <Maximize2 className="w-3.5 h-3.5" />
                )}
                <span className="hidden sm:inline">{isFullscreen ? 'Exit' : 'Full'}</span>
              </button>
            )}
          </div>
        </div>

        {authNotice && (
          <div className="max-w-[1440px] mx-auto mt-1 px-2.5 py-1 rounded bg-amber-950/70 border border-amber-500/50 text-amber-200 text-[11px] flex items-center justify-between gap-2">
            <span>{authNotice}</span>
            <button
              type="button"
              onClick={() => {
                setAuthNotice(null);
                returnFocusToGame();
              }}
              className="text-amber-300 hover:text-white font-bold cursor-pointer shrink-0"
            >
              Dismiss
            </button>
          </div>
        )}
      </header>

      {/* GAME CANVAS IFRAME (FULL REMAINING VIEWPORT HEIGHT, UNOBSTRUCTED) */}
      <iframe
        ref={iframeRef}
        title="NBA Jam: On Fire Edition (2026-27 Season)"
        src="./heights-jam.html"
        onLoad={() => iframeRef.current?.contentWindow?.focus()}
        className="w-full flex-1 min-h-0 border-0 block bg-[#080c14]"
      />

      {/* ALL-TOPICS & LIFETIME PROGRESS MODAL */}
      <StatsDrawerModal
        open={statsModalOpen}
        onClose={closeStatsModal}
        user={user}
        activeTopicId={activeTopicId}
        sessionStats={sessionStats}
        lifetimeStats={displayedLifetime}
        onSignIn={handleSignIn}
        onResetSession={handleResetSession}
      />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <StudentTrackerShell />
    </ErrorBoundary>
  );
}
