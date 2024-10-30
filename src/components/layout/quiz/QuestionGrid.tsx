import { Button } from "@/components/ui/button";
import { CorrectAnswers, Question, SelectedAnswers } from "@/types/quiz";

interface QuestionGridProps {
  questions: Question[];
  currentQuestion: number;
  selectedAnswers: SelectedAnswers;
  correctAnswers: CorrectAnswers;
  isReview: boolean;
  onNavigate: (index: number) => void;
}

export const QuestionGrid = ({
  questions,
  currentQuestion,
  selectedAnswers,
  correctAnswers,
  isReview,
  onNavigate,
}: QuestionGridProps) => (
  <div className="grid grid-cols-6 lg:grid-cols-4 gap-2">
    {questions.map((_, index) => (
      <Button
        key={index}
        onClick={() => onNavigate(index)}
        className={`h-10 w-10 p-0 ${
          currentQuestion === index
            ? "bg-primary text-white"
            : selectedAnswers[index]
              ? "bg-primary/20"
              : "bg-gray-100"
        } ${
          isReview && correctAnswers[index] && "bg-green-500 hover:bg-green-600"
        } ${
          isReview &&
          selectedAnswers[index] &&
          !correctAnswers[index] &&
          "bg-red-500 hover:bg-red-600"
        }`}
      >
        {index + 1}
      </Button>
    ))}
  </div>
);
