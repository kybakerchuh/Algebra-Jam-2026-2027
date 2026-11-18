import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  type User,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  getDocFromServer,
  getFirestore,
  runTransaction,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';
import {
  createEmptyTopicMap,
  OST_TOPIC_IDS,
  type LifetimeProgressView,
  type OstTopicId,
  sanitizeTopicMap,
} from './topics';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

async function testConnection(): Promise<void> {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}

void testConnection();

export function sanitizeDisplayName(user: Pick<User, 'displayName' | 'email'>): string {
  const raw = user.displayName || user.email?.split('@')[0] || 'Student';
  const trimmed = raw.trim().slice(0, 120);
  return trimmed.length > 0 ? trimmed : 'Student';
}

export async function signInWithGoogle() {
  return signInWithPopup(auth, googleProvider);
}

export async function signOutStudent() {
  return signOut(auth);
}

export function parseLifetimeDoc(data: unknown): LifetimeProgressView {
  if (!data || typeof data !== 'object') {
    return {
      lifetimeCorrect: 0,
      lifetimeWrong: 0,
      topics: createEmptyTopicMap(),
    };
  }
  const rec = data as Record<string, unknown>;
  const topics = sanitizeTopicMap(rec.topics);
  const lifetimeCorrect =
    typeof rec.lifetimeCorrect === 'number' && Number.isFinite(rec.lifetimeCorrect)
      ? Math.max(0, Math.min(10_000_000, Math.floor(rec.lifetimeCorrect)))
      : OST_TOPIC_IDS.reduce((acc, id) => acc + topics[id].correct, 0);
  const lifetimeWrong =
    typeof rec.lifetimeWrong === 'number' && Number.isFinite(rec.lifetimeWrong)
      ? Math.max(0, Math.min(10_000_000, Math.floor(rec.lifetimeWrong)))
      : OST_TOPIC_IDS.reduce((acc, id) => acc + topics[id].wrong, 0);

  return {
    lifetimeCorrect,
    lifetimeWrong,
    topics,
  };
}

export async function ensureStudentProgressDoc(user: User): Promise<void> {
  const path = `studentProgress/${user.uid}`;
  const docRef = doc(db, 'studentProgress', user.uid);
  try {
    const existingSnap = await getDoc(docRef);
    if (!existingSnap.exists()) {
      await setDoc(docRef, {
        uid: user.uid,
        displayName: sanitizeDisplayName(user),
        lifetimeCorrect: 0,
        lifetimeWrong: 0,
        topics: createEmptyTopicMap(),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export async function recordAnswerInFirestore(
  user: User,
  topicId: OstTopicId,
  isCorrect: boolean
): Promise<void> {
  const path = `studentProgress/${user.uid}`;
  const docRef = doc(db, 'studentProgress', user.uid);
  const safeName = sanitizeDisplayName(user);

  try {
    await runTransaction(db, async (tx) => {
      const snap = await tx.get(docRef);
      if (!snap.exists()) {
        const topics = createEmptyTopicMap();
        if (isCorrect) {
          topics[topicId].correct = 1;
        } else {
          topics[topicId].wrong = 1;
        }
        tx.set(docRef, {
          uid: user.uid,
          displayName: safeName,
          lifetimeCorrect: isCorrect ? 1 : 0,
          lifetimeWrong: isCorrect ? 0 : 1,
          topics,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
        return;
      }

      const current = parseLifetimeDoc(snap.data());
      const nextTopics = sanitizeTopicMap(current.topics);
      if (isCorrect) {
        nextTopics[topicId].correct = Math.min(1_000_000, nextTopics[topicId].correct + 1);
      } else {
        nextTopics[topicId].wrong = Math.min(1_000_000, nextTopics[topicId].wrong + 1);
      }

      const nextCorrect = Math.min(10_000_000, current.lifetimeCorrect + (isCorrect ? 1 : 0));
      const nextWrong = Math.min(10_000_000, current.lifetimeWrong + (isCorrect ? 0 : 1));

      tx.update(docRef, {
        displayName: safeName,
        lifetimeCorrect: nextCorrect,
        lifetimeWrong: nextWrong,
        topics: nextTopics,
        updatedAt: serverTimestamp(),
      });
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}
