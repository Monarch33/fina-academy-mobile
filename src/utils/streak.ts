export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function isYesterday(date: Date, today: Date): boolean {
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  return isSameDay(date, yesterday);
}

export function calculateStreak(
  lastActivityDate: string | null,
  currentStreak: number
): { streak: number; streakBroken: boolean } {
  if (!lastActivityDate) {
    return { streak: 0, streakBroken: false };
  }

  const today = new Date();
  const lastDate = new Date(lastActivityDate);

  if (isSameDay(lastDate, today)) {
    return { streak: currentStreak, streakBroken: false };
  }

  if (isYesterday(lastDate, today)) {
    return { streak: currentStreak, streakBroken: false };
  }

  return { streak: 0, streakBroken: currentStreak > 0 };
}

export type FlameSize = 'small' | 'medium' | 'large';

export function getFlameSize(streak: number): FlameSize {
  if (streak >= 21) return 'large';
  if (streak >= 7) return 'medium';
  return 'small';
}

export function getDayOfWeek(): number {
  const day = new Date().getDay();
  // Convert Sunday=0 to Monday=0 format
  return day === 0 ? 6 : day - 1;
}

export function getWeekActivity(
  activityDates: string[]
): boolean[] {
  const today = new Date();
  const currentDayOfWeek = getDayOfWeek();
  const result: boolean[] = Array(7).fill(false);

  for (let i = 0; i <= currentDayOfWeek; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - (currentDayOfWeek - i));
    const dateStr = date.toISOString().split('T')[0];
    result[i] = activityDates.includes(dateStr);
  }

  return result;
}
