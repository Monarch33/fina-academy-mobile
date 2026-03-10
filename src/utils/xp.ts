export const XP_VALUES = {
  correctAnswer: 20,
  lessonComplete: 30,
  lessonCompleteHard: 50,
  courseComplete: 200,
  dailyChallenge: 100,
  duelWin: 50,
  streakMaintained: 10,
} as const;

export function getLevel(totalXP: number): number {
  return Math.floor(totalXP / 1000) + 1;
}

export function getXPForNextLevel(currentLevel: number): number {
  return currentLevel * 1000;
}

export function getXPProgress(totalXP: number): {
  level: number;
  currentXP: number;
  nextLevelXP: number;
  progress: number;
} {
  const level = getLevel(totalXP);
  const xpInCurrentLevel = totalXP - (level - 1) * 1000;
  const nextLevelXP = 1000;
  const progress = Math.min(xpInCurrentLevel / nextLevelXP, 1);

  return {
    level,
    currentXP: xpInCurrentLevel,
    nextLevelXP,
    progress,
  };
}

export type League = 'bronze' | 'silver' | 'gold' | 'diamond';

export function getLeague(totalXP: number): League {
  if (totalXP >= 10000) return 'diamond';
  if (totalXP >= 5000) return 'gold';
  if (totalXP >= 1000) return 'silver';
  return 'bronze';
}

export function getLeagueLabel(league: League): string {
  const labels: Record<League, string> = {
    bronze: 'Bronze',
    silver: 'Silver',
    gold: 'Gold',
    diamond: 'Diamant',
  };
  return labels[league];
}

export function getLeagueColor(league: League): string {
  const colors: Record<League, string> = {
    bronze: '#CD7F32',
    silver: '#94A3B8',
    gold: '#CA8A04',
    diamond: '#7C3AED',
  };
  return colors[league];
}
