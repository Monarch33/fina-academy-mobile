import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLevel, getLeague, type League } from '../utils/xp';

export type UserGoal = 'leisure' | 'student' | 'market' | 'corporate' | 'invest';
export type UserLevel = 'beginner' | 'intermediate' | 'advanced';

interface UserState {
  // Auth
  isAuthenticated: boolean;
  hasCompletedOnboarding: boolean;
  name: string;
  email: string;
  avatarUrl: string | null;

  // Onboarding
  goal: UserGoal | null;
  userLevel: UserLevel | null;

  // Gamification
  totalXP: number;
  dailyXP: number;
  dailyGoal: number;
  streak: number;
  lastActivityDate: string | null;
  activityDates: string[];

  // Subscription
  subscription: 'free' | 'pro' | 'ultimate';

  // Computed-like getters
  level: number;
  league: League;

  // Actions
  setOnboarding: (goal: UserGoal, level: UserLevel) => void;
  completeOnboarding: () => void;
  setAuth: (name: string, email: string, avatarUrl?: string) => void;
  logout: () => void;
  addXP: (amount: number) => void;
  resetDailyXP: () => void;
  updateStreak: () => void;
  setDailyGoal: (goal: number) => void;
  setSubscription: (sub: 'free' | 'pro' | 'ultimate') => void;
  loadFromStorage: () => Promise<void>;
  saveToStorage: () => Promise<void>;
}

const STORAGE_KEY = '@fina_user';

export const useUserStore = create<UserState>((set, get) => ({
  isAuthenticated: false,
  hasCompletedOnboarding: false,
  name: 'Camil',
  email: '',
  avatarUrl: null,

  goal: null,
  userLevel: null,

  totalXP: 11450,
  dailyXP: 85,
  dailyGoal: 150,
  streak: 21,
  lastActivityDate: new Date().toISOString().split('T')[0],
  activityDates: (() => {
    const dates: string[] = [];
    const today = new Date();
    for (let i = 0; i < 5; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      dates.push(d.toISOString().split('T')[0]);
    }
    return dates;
  })(),

  subscription: 'pro',

  level: getLevel(11450),
  league: getLeague(11450),

  setOnboarding: (goal, userLevel) => {
    set({ goal, userLevel });
  },

  completeOnboarding: () => {
    set({ hasCompletedOnboarding: true });
    get().saveToStorage();
  },

  setAuth: (name, email, avatarUrl) => {
    set({ isAuthenticated: true, name, email, avatarUrl: avatarUrl ?? null });
    get().saveToStorage();
  },

  logout: () => {
    set({
      isAuthenticated: false,
      name: '',
      email: '',
      avatarUrl: null,
    });
    AsyncStorage.removeItem(STORAGE_KEY);
  },

  addXP: (amount) => {
    const state = get();
    const newTotal = state.totalXP + amount;
    const newDaily = state.dailyXP + amount;
    const today = new Date().toISOString().split('T')[0];
    const newDates = state.activityDates.includes(today)
      ? state.activityDates
      : [...state.activityDates, today];

    set({
      totalXP: newTotal,
      dailyXP: newDaily,
      level: getLevel(newTotal),
      league: getLeague(newTotal),
      lastActivityDate: today,
      activityDates: newDates,
    });
    get().saveToStorage();
  },

  resetDailyXP: () => {
    set({ dailyXP: 0 });
  },

  updateStreak: () => {
    const state = get();
    const today = new Date().toISOString().split('T')[0];
    const lastDate = state.lastActivityDate;

    if (!lastDate) {
      set({ streak: 0 });
      return;
    }

    if (lastDate === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    if (lastDate === yesterdayStr) {
      // Streak continues
      return;
    }

    // Streak broken
    set({ streak: 0 });
    get().saveToStorage();
  },

  setDailyGoal: (goal) => {
    set({ dailyGoal: goal });
    get().saveToStorage();
  },

  setSubscription: (sub) => {
    set({ subscription: sub });
    get().saveToStorage();
  },

  loadFromStorage: async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        set({
          ...parsed,
          level: getLevel(parsed.totalXP || 0),
          league: getLeague(parsed.totalXP || 0),
        });
      }
    } catch {
      // Ignore errors
    }
  },

  saveToStorage: async () => {
    try {
      const state = get();
      const toSave = {
        isAuthenticated: state.isAuthenticated,
        hasCompletedOnboarding: state.hasCompletedOnboarding,
        name: state.name,
        email: state.email,
        goal: state.goal,
        userLevel: state.userLevel,
        totalXP: state.totalXP,
        dailyXP: state.dailyXP,
        dailyGoal: state.dailyGoal,
        streak: state.streak,
        lastActivityDate: state.lastActivityDate,
        activityDates: state.activityDates,
        subscription: state.subscription,
      };
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch {
      // Ignore errors
    }
  },
}));
