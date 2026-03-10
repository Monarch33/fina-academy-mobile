import { create } from 'zustand';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface QuizState {
  // Quiz state
  isActive: boolean;
  mode: string | null;
  courseId: string | null;
  questions: QuizQuestion[];
  currentIndex: number;
  selectedAnswer: number | null;
  isConfirmed: boolean;
  score: number;
  isDone: boolean;
  answers: (number | null)[];
  timeStarted: number | null;

  // Actions
  startQuiz: (
    mode: string,
    questions: QuizQuestion[],
    courseId?: string
  ) => void;
  selectAnswer: (index: number) => void;
  confirmAnswer: () => void;
  nextQuestion: () => void;
  endQuiz: () => void;
  resetQuiz: () => void;
  getAccuracy: () => number;
  getXPEarned: () => number;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  isActive: false,
  mode: null,
  courseId: null,
  questions: [],
  currentIndex: 0,
  selectedAnswer: null,
  isConfirmed: false,
  score: 0,
  isDone: false,
  answers: [],
  timeStarted: null,

  startQuiz: (mode, questions, courseId) => {
    set({
      isActive: true,
      mode,
      courseId: courseId ?? null,
      questions,
      currentIndex: 0,
      selectedAnswer: null,
      isConfirmed: false,
      score: 0,
      isDone: false,
      answers: Array(questions.length).fill(null),
      timeStarted: Date.now(),
    });
  },

  selectAnswer: (index) => {
    const state = get();
    if (state.isConfirmed) return;
    set({ selectedAnswer: index });
  },

  confirmAnswer: () => {
    const state = get();
    if (state.selectedAnswer === null || state.isConfirmed) return;

    const question = state.questions[state.currentIndex];
    const isCorrect = state.selectedAnswer === question.correctIndex;
    const newAnswers = [...state.answers];
    newAnswers[state.currentIndex] = state.selectedAnswer;

    set({
      isConfirmed: true,
      score: isCorrect ? state.score + 1 : state.score,
      answers: newAnswers,
    });
  },

  nextQuestion: () => {
    const state = get();
    if (state.currentIndex + 1 >= state.questions.length) {
      set({ isDone: true });
    } else {
      set({
        currentIndex: state.currentIndex + 1,
        selectedAnswer: null,
        isConfirmed: false,
      });
    }
  },

  endQuiz: () => {
    set({
      isActive: false,
      mode: null,
      questions: [],
      currentIndex: 0,
      selectedAnswer: null,
      isConfirmed: false,
      score: 0,
      isDone: false,
      answers: [],
      timeStarted: null,
    });
  },

  resetQuiz: () => {
    const state = get();
    set({
      currentIndex: 0,
      selectedAnswer: null,
      isConfirmed: false,
      score: 0,
      isDone: false,
      answers: Array(state.questions.length).fill(null),
      timeStarted: Date.now(),
    });
  },

  getAccuracy: () => {
    const state = get();
    if (state.questions.length === 0) return 0;
    return Math.round((state.score / state.questions.length) * 100);
  },

  getXPEarned: () => {
    return get().score * 20;
  },
}));
