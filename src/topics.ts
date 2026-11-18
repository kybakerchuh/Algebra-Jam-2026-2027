export const OST_TOPIC_IDS = [
  'LAZY_WAY',
  'DATA_ANALYSIS',
  'POLYNOMIALS',
  'FUNCTIONS',
  'QUADRATICS',
  'EXPONENTIALS',
  'LINEAR_1',
  'LINEAR_2',
  'SYSTEMS',
  'EXPR_EQ_INEQ',
] as const;

export type OstTopicId = (typeof OST_TOPIC_IDS)[number];

export interface OstTopicInfo {
  id: OstTopicId;
  title: string;
  shortTitle: string;
  badgeColor: string;
}

export const OST_TOPICS: OstTopicInfo[] = [
  { id: 'LAZY_WAY', title: 'The Lazy Way Strategies', shortTitle: 'Lazy Way', badgeColor: '#f59e0b' },
  { id: 'DATA_ANALYSIS', title: 'Data Analysis', shortTitle: 'Data Analysis', badgeColor: '#06b6d4' },
  { id: 'POLYNOMIALS', title: 'All Things Polynomials', shortTitle: 'Polynomials', badgeColor: '#8b5cf6' },
  { id: 'FUNCTIONS', title: 'Functions and Function Notations', shortTitle: 'Functions', badgeColor: '#10b981' },
  { id: 'QUADRATICS', title: 'Factoring, Solving, Modeling, Analyzing Quadratics', shortTitle: 'Quadratics', badgeColor: '#f97316' },
  { id: 'EXPONENTIALS', title: 'Create, Analyze, Model Exponential Functions', shortTitle: 'Exponentials', badgeColor: '#ec4899' },
  { id: 'LINEAR_1', title: 'Creating, Graphing, Modeling Linear (Part 1)', shortTitle: 'Linear Pt. 1', badgeColor: '#3b82f6' },
  { id: 'LINEAR_2', title: 'Creating, Graphing, Modeling Linear (Part 2)', shortTitle: 'Linear Pt. 2', badgeColor: '#6366f1' },
  { id: 'SYSTEMS', title: 'Creating, Solving, Modeling Systems of Equations', shortTitle: 'Systems', badgeColor: '#ef4444' },
  { id: 'EXPR_EQ_INEQ', title: 'Expressions, Equations, and Inequalities', shortTitle: 'Equations', badgeColor: '#14b8a6' },
];

export interface TopicCount {
  correct: number;
  wrong: number;
}

export type TopicStatsMap = Record<OstTopicId, TopicCount>;

export interface SessionStatsState {
  totalCorrect: number;
  totalWrong: number;
  topics: TopicStatsMap;
}

export interface LifetimeProgressView {
  lifetimeCorrect: number;
  lifetimeWrong: number;
  topics: TopicStatsMap;
}

export function isValidOstTopicId(value: unknown): value is OstTopicId {
  return typeof value === 'string' && (OST_TOPIC_IDS as readonly string[]).includes(value);
}

export function createEmptyTopicMap(): TopicStatsMap {
  return {
    LAZY_WAY: { correct: 0, wrong: 0 },
    DATA_ANALYSIS: { correct: 0, wrong: 0 },
    POLYNOMIALS: { correct: 0, wrong: 0 },
    FUNCTIONS: { correct: 0, wrong: 0 },
    QUADRATICS: { correct: 0, wrong: 0 },
    EXPONENTIALS: { correct: 0, wrong: 0 },
    LINEAR_1: { correct: 0, wrong: 0 },
    LINEAR_2: { correct: 0, wrong: 0 },
    SYSTEMS: { correct: 0, wrong: 0 },
    EXPR_EQ_INEQ: { correct: 0, wrong: 0 },
  };
}

export function createEmptySessionStats(): SessionStatsState {
  return {
    totalCorrect: 0,
    totalWrong: 0,
    topics: createEmptyTopicMap(),
  };
}

function clampCount(val: unknown, max: number): number {
  if (typeof val !== 'number' || !Number.isFinite(val)) return 0;
  return Math.max(0, Math.min(max, Math.floor(val)));
}

export function sanitizeTopicMap(raw: unknown): TopicStatsMap {
  const clean = createEmptyTopicMap();
  if (!raw || typeof raw !== 'object') return clean;
  const obj = raw as Record<string, unknown>;
  for (const id of OST_TOPIC_IDS) {
    const entry = obj[id];
    if (entry && typeof entry === 'object') {
      const e = entry as Record<string, unknown>;
      clean[id] = {
        correct: clampCount(e.correct, 1_000_000),
        wrong: clampCount(e.wrong, 1_000_000),
      };
    }
  }
  return clean;
}

export function calcAccuracy(correct: number, wrong: number): number | null {
  const total = correct + wrong;
  if (total <= 0) return null;
  return Math.round((correct / total) * 100);
}
