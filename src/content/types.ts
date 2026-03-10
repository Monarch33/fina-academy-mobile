// ──────────────────────────────────────────────
//  FINA - Content Type Definitions
// ──────────────────────────────────────────────

export interface Lesson {
  id: string;
  title: string;
  xp: number;
  duration: string;
  content: {
    introduction: string;
    keyPoints: string[];
    explanation: string;
    formula?: string;
    example?: string;
    finnSays: string;
  };
}

export interface QuizQuestion {
  id: string;
  lessonId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}
