export interface Question {
  statement: string;
  options: string[];
  answer: string;
}

export interface QuizProps {
  questions: Question[];
  topic: string;
  onRestart: () => void;
}

export interface SelectedAnswers {
  [key: number]: string;
}

export interface CorrectAnswers {
  [key: number]: string;
}
