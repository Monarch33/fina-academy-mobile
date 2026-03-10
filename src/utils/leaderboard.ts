export interface LeaderboardEntry {
  rank: number;
  name: string;
  xp: number;
  streak: number;
  isMe?: boolean;
  finnEyes?: string;
}

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: 'Sophie M.', xp: 14820, streak: 45 },
  { rank: 2, name: 'Thomas K.', xp: 13200, streak: 32 },
  { rank: 3, name: 'Léa D.', xp: 12890, streak: 28 },
  { rank: 4, name: 'Camil', xp: 11450, streak: 21, isMe: true },
  { rank: 5, name: 'Hugo R.', xp: 10200, streak: 19 },
  { rank: 6, name: 'Emma L.', xp: 9870, streak: 15 },
  { rank: 7, name: 'Lucas P.', xp: 8540, streak: 12 },
  { rank: 8, name: 'Jade B.', xp: 7200, streak: 8 },
  { rank: 9, name: 'Antoine F.', xp: 6100, streak: 5 },
  { rank: 10, name: 'Chloé V.', xp: 5800, streak: 3 },
];

export function sortLeaderboard(
  entries: LeaderboardEntry[]
): LeaderboardEntry[] {
  return [...entries]
    .sort((a, b) => b.xp - a.xp)
    .map((entry, index) => ({ ...entry, rank: index + 1 }));
}

export function getUserRank(
  entries: LeaderboardEntry[],
  userName: string
): number {
  const sorted = sortLeaderboard(entries);
  const index = sorted.findIndex((e) => e.name === userName);
  return index >= 0 ? index + 1 : sorted.length + 1;
}
