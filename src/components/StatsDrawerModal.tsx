import type { User } from 'firebase/auth';
import { CheckCircle2, Cloud, LogIn, RotateCcw, Trophy, X, XCircle } from 'lucide-react';
import {
  calcAccuracy,
  OST_TOPICS,
  type LifetimeProgressView,
  type SessionStatsState,
} from '../topics';

interface StatsDrawerModalProps {
  open: boolean;
  onClose: () => void;
  user: User | null;
  activeTopicId: string;
  sessionStats: SessionStatsState;
  lifetimeStats: LifetimeProgressView;
  onSignIn: () => void;
  onResetSession: () => void;
}

export function StatsDrawerModal({
  open,
  onClose,
  user,
  activeTopicId,
  sessionStats,
  lifetimeStats,
  onSignIn,
  onResetSession,
}: StatsDrawerModalProps) {
  if (!open) return null;

  const sessionTotal = sessionStats.totalCorrect + sessionStats.totalWrong;
  const sessionAcc = calcAccuracy(sessionStats.totalCorrect, sessionStats.totalWrong);

  const lifetimeTotal = lifetimeStats.lifetimeCorrect + lifetimeStats.lifetimeWrong;
  const lifetimeAcc = calcAccuracy(lifetimeStats.lifetimeCorrect, lifetimeStats.lifetimeWrong);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90"
      role="dialog"
      aria-modal="true"
      aria-label="OST Playbook Student Progress"
    >
      <div className="w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0b101d] border-2 border-cyan-500/60 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-slate-800 bg-[#070b14]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/50 flex items-center justify-center text-amber-300 shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-lg sm:text-xl font-black text-white tracking-wide uppercase truncate">
                Algebra 1 OST Progress Tracker
              </h2>
              <p className="text-xs text-slate-400 truncate">
                {user
                  ? `Signed in as ${user.displayName || user.email} • Auto-saving to your Google account`
                  : 'Guest session — Sign in with Google to save your lifetime & topic stats'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {!user && (
              <button
                type="button"
                onClick={onSignIn}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs cursor-pointer transition shadow"
              >
                <LogIn className="w-3.5 h-3.5" />
                Sign in with Google
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold text-xs uppercase tracking-wider cursor-pointer transition"
            >
              <X className="w-4 h-4" />
              Back to Court
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overscroll-y-contain touch-pan-y p-4 sm:p-5 space-y-5">
          {/* Top Overview Cards: Session (All Topics) + Lifetime (All Topics) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Session Card */}
            <div className="rounded-xl bg-[#070b14] border border-cyan-500/40 p-4">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">
                    Current Session (All Topics)
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Questions answered since opening this page
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onResetSession}
                  disabled={sessionTotal === 0}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-40 border border-slate-700 text-[11px] font-bold text-slate-300 cursor-pointer disabled:cursor-not-allowed transition"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset Session
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-emerald-950/50 border border-emerald-500/40 py-2.5 px-2">
                  <div className="text-[11px] font-bold text-emerald-300 uppercase">Right</div>
                  <div className="text-2xl font-black text-emerald-400 tabular-nums">
                    {sessionStats.totalCorrect}
                  </div>
                </div>
                <div className="rounded-lg bg-rose-950/50 border border-rose-500/40 py-2.5 px-2">
                  <div className="text-[11px] font-bold text-rose-300 uppercase">Wrong</div>
                  <div className="text-2xl font-black text-rose-400 tabular-nums">
                    {sessionStats.totalWrong}
                  </div>
                </div>
                <div className="rounded-lg bg-slate-900/90 border border-slate-700 py-2.5 px-2">
                  <div className="text-[11px] font-bold text-slate-300 uppercase">Accuracy</div>
                  <div className="text-2xl font-black text-amber-300 tabular-nums">
                    {sessionAcc === null ? '—' : `${sessionAcc}%`}
                  </div>
                </div>
              </div>
            </div>

            {/* Lifetime Card */}
            <div className="rounded-xl bg-[#070b14] border border-emerald-500/40 p-4">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                    Lifetime Total (All Topics)
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {user
                      ? 'Synced across all games & devices'
                      : 'Sign in with Google to track lifetime progress'}
                  </div>
                </div>
                <span
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-bold ${
                    user
                      ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
                      : 'bg-amber-950/50 border-amber-500/40 text-amber-300'
                  }`}
                >
                  <Cloud className="w-3 h-3" />
                  {user ? 'Cloud Saved' : 'Guest Mode'}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-emerald-950/50 border border-emerald-500/40 py-2.5 px-2">
                  <div className="text-[11px] font-bold text-emerald-300 uppercase">Right</div>
                  <div className="text-2xl font-black text-emerald-400 tabular-nums">
                    {lifetimeStats.lifetimeCorrect}
                  </div>
                </div>
                <div className="rounded-lg bg-rose-950/50 border border-rose-500/40 py-2.5 px-2">
                  <div className="text-[11px] font-bold text-rose-300 uppercase">Wrong</div>
                  <div className="text-2xl font-black text-rose-400 tabular-nums">
                    {lifetimeStats.lifetimeWrong}
                  </div>
                </div>
                <div className="rounded-lg bg-slate-900/90 border border-slate-700 py-2.5 px-2">
                  <div className="text-[11px] font-bold text-slate-300 uppercase">Accuracy</div>
                  <div className="text-2xl font-black text-amber-300 tabular-nums">
                    {lifetimeAcc === null ? '—' : `${lifetimeAcc}%`}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All 10 Individual Topics Breakdown */}
          <div className="rounded-xl bg-[#070b14] border border-slate-800 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-2 bg-slate-900/60">
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                Individual OST Topic Breakdown (10 Playbook Topics)
              </h3>
              <span className="text-[11px] text-slate-400">
                {lifetimeTotal} lifetime Qs • {sessionTotal} session Qs
              </span>
            </div>

            <div className="divide-y divide-slate-800/80">
              {OST_TOPICS.map((topic) => {
                const s = sessionStats.topics[topic.id];
                const l = lifetimeStats.topics[topic.id];
                const lAcc = calcAccuracy(l.correct, l.wrong);
                const isSelected = activeTopicId === topic.id;
                return (
                  <div
                    key={topic.id}
                    className={`px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
                      isSelected ? 'bg-emerald-950/25' : 'hover:bg-slate-900/40'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: topic.badgeColor }}
                        />
                        <span className="text-xs sm:text-sm font-bold text-white truncate">
                          {topic.title}
                        </span>
                        {isSelected && (
                          <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/50 text-[10px] font-extrabold uppercase text-emerald-300 shrink-0">
                            Active
                          </span>
                        )}
                      </div>
                      {/* Lifetime Accuracy Bar */}
                      <div className="mt-1.5 flex items-center gap-2">
                        <div className="flex-1 max-w-[240px] h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{
                              width: `${lAcc ?? 0}%`,
                              backgroundColor:
                                lAcc === null
                                  ? '#334155'
                                  : lAcc >= 75
                                  ? '#10b981'
                                  : lAcc >= 50
                                  ? '#f59e0b'
                                  : '#ef4444',
                            }}
                          />
                        </div>
                        <span className="text-[11px] font-bold text-slate-400 tabular-nums">
                          {lAcc === null ? 'No lifetime data' : `${lAcc}% accuracy`}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 text-xs tabular-nums">
                      <div className="text-right">
                        <div className="text-[10px] uppercase font-bold text-slate-500">Session</div>
                        <div className="flex items-center gap-2 font-bold">
                          <span className="inline-flex items-center gap-0.5 text-emerald-400">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {s.correct}
                          </span>
                          <span className="inline-flex items-center gap-0.5 text-rose-400">
                            <XCircle className="w-3.5 h-3.5" />
                            {s.wrong}
                          </span>
                        </div>
                      </div>

                      <div className="h-7 w-px bg-slate-800" />

                      <div className="text-right min-w-[86px]">
                        <div className="text-[10px] uppercase font-bold text-slate-500">Lifetime</div>
                        <div className="flex items-center justify-end gap-2 font-bold">
                          <span className="inline-flex items-center gap-0.5 text-emerald-300">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {l.correct}
                          </span>
                          <span className="inline-flex items-center gap-0.5 text-rose-300">
                            <XCircle className="w-3.5 h-3.5" />
                            {l.wrong}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
