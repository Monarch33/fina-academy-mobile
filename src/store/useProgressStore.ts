import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CourseProgress {
  completedLessons: string[];
  currentLessonIndex: number;
  totalLessons: number;
  started: boolean;
  completed: boolean;
  bestQuizScore: number;
}

interface ProgressState {
  courses: Record<string, CourseProgress>;

  // Actions
  startCourse: (courseId: string, totalLessons: number) => void;
  completeLesson: (courseId: string, lessonId: string) => void;
  setQuizScore: (courseId: string, score: number) => void;
  getCourseProgress: (courseId: string) => CourseProgress | undefined;
  getCompletionPercent: (courseId: string) => number;
  getTotalCompletedLessons: () => number;
  loadFromStorage: () => Promise<void>;
  saveToStorage: () => Promise<void>;
}

const STORAGE_KEY = '@fina_progress';

const DEFAULT_PROGRESS: Record<string, CourseProgress> = {
  fundamentals: {
    completedLessons: Array.from({ length: 16 }, (_, i) => `fund-${i + 1}`),
    currentLessonIndex: 16,
    totalLessons: 24,
    started: true,
    completed: false,
    bestQuizScore: 85,
  },
  corporate: {
    completedLessons: Array.from({ length: 6 }, (_, i) => `corp-${i + 1}`),
    currentLessonIndex: 6,
    totalLessons: 28,
    started: true,
    completed: false,
    bestQuizScore: 72,
  },
};

export const useProgressStore = create<ProgressState>((set, get) => ({
  courses: DEFAULT_PROGRESS,

  startCourse: (courseId, totalLessons) => {
    const state = get();
    if (state.courses[courseId]) return;

    set({
      courses: {
        ...state.courses,
        [courseId]: {
          completedLessons: [],
          currentLessonIndex: 0,
          totalLessons,
          started: true,
          completed: false,
          bestQuizScore: 0,
        },
      },
    });
    get().saveToStorage();
  },

  completeLesson: (courseId, lessonId) => {
    const state = get();
    const course = state.courses[courseId];
    if (!course) return;

    if (course.completedLessons.includes(lessonId)) return;

    const newCompleted = [...course.completedLessons, lessonId];
    const isFullyComplete = newCompleted.length >= course.totalLessons;

    set({
      courses: {
        ...state.courses,
        [courseId]: {
          ...course,
          completedLessons: newCompleted,
          currentLessonIndex: newCompleted.length,
          completed: isFullyComplete,
        },
      },
    });
    get().saveToStorage();
  },

  setQuizScore: (courseId, score) => {
    const state = get();
    const course = state.courses[courseId];
    if (!course) return;

    if (score > course.bestQuizScore) {
      set({
        courses: {
          ...state.courses,
          [courseId]: {
            ...course,
            bestQuizScore: score,
          },
        },
      });
      get().saveToStorage();
    }
  },

  getCourseProgress: (courseId) => {
    return get().courses[courseId];
  },

  getCompletionPercent: (courseId) => {
    const course = get().courses[courseId];
    if (!course || course.totalLessons === 0) return 0;
    return Math.round(
      (course.completedLessons.length / course.totalLessons) * 100
    );
  },

  getTotalCompletedLessons: () => {
    const courses = get().courses;
    return Object.values(courses).reduce(
      (total, c) => total + c.completedLessons.length,
      0
    );
  },

  loadFromStorage: async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) {
        set({ courses: JSON.parse(data) });
      }
    } catch {
      // Ignore
    }
  },

  saveToStorage: async () => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(get().courses)
      );
    } catch {
      // Ignore
    }
  },
}));
