export const PREGNANCY_WEEKS = 40;
export const TRIMESTER_WEEKS = {
  first: { start: 1, end: 13 },
  second: { start: 14, end: 26 },
  third: { start: 27, end: 40 },
} as const;

export type Trimester = keyof typeof TRIMESTER_WEEKS;

export function getTrimester(week: number): Trimester {
  if (week <= 13) return 'first';
  if (week <= 26) return 'second';
  return 'third';
}

export function getProgressPercent(week: number): number {
  return Math.min((week / PREGNANCY_WEEKS) * 100, 100);
}
