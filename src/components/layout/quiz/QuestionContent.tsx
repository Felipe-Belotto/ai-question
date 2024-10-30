import { Question, SelectedAnswers } from "@/types/quiz";
import { QuestionNumber } from "./QuestionNumber";
import { Option } from "@/components/Option";
import * as m from "@paraglide/messages";
import { useLanguage } from "@/context/LanguageContext";

interface QuestionContentProps {
  question: Question;
  currentQuestion: number;
  selectedAnswers: SelectedAnswers;
  isReview: boolean;
  onSelect: (qIndex: number, aIndex: number) => void;
}

export function QuestionContent({
  question,
  currentQuestion,
  selectedAnswers,
  isReview,
  onSelect,
}: QuestionContentProps) {
  useLanguage();
  return (
    <div className="mb-8">
      <div className="mb-4">
        <QuestionNumber number={currentQuestion + 1} />
        <p className="text-lg font-medium text-gray-800 mt-2">
          {question.statement}
        </p>
      </div>
      <div className="space-y-2">
        {question.options.map((alternative: string, altIndex: number) => (
          <Option
            key={altIndex}
            text={alternative}
            index={altIndex}
            questionIndex={currentQuestion}
            isSelected={selectedAnswers[currentQuestion] === alternative}
            onSelect={onSelect}
            disabled={isReview}
            isCorrect={alternative === question.answer}
          />
        ))}
      </div>
      {isReview && selectedAnswers[currentQuestion] !== question.answer && (
        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">
            {m.correctAnswer({
              answer: question.answer,
            })}
          </p>
        </div>
      )}
    </div>
  );
}
