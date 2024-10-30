"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as m from "@paraglide/messages";
import { QuestionGrid } from "./QuestionGrid";
import { ReviewPanel } from "./ReviewPanel";
import { SubmitButton } from "./SubmitButton";
import { CorrectAnswers, Question, SelectedAnswers } from "@/types/quiz";
import { useLanguage } from "@/context/LanguageContext";

interface NavigationPanelProps {
  questions: Question[];
  currentQuestion: number;
  selectedAnswers: SelectedAnswers;
  correctAnswers: CorrectAnswers;
  isReview: boolean;
  score: number;
  onNavigate: (index: number) => void;
  onRestart: () => void;
  onValidate: () => void;
}

export const NavigationPanel = ({
  questions,
  currentQuestion,
  selectedAnswers,
  correctAnswers,
  isReview,
  score,
  onNavigate,
  onRestart,
  onValidate,
}: NavigationPanelProps) => {
  useLanguage();
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <Card className="bg-white shadow-lg sticky top-4">
      <CardHeader className="bg-primary text-white rounded-t-lg">
        <CardTitle className="text-lg font-bold">
          {m.questionNavigation()}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <QuestionGrid
          questions={questions}
          currentQuestion={currentQuestion}
          selectedAnswers={selectedAnswers}
          correctAnswers={correctAnswers}
          isReview={isReview}
          onNavigate={onNavigate}
        />
        {isReview && (
          <ReviewPanel score={score} totalQuestions={questions.length} />
        )}
        <SubmitButton
          isReview={isReview}
          onRestart={onRestart}
          onValidate={onValidate}
          isLastQuestion={isLastQuestion}
        />
      </CardContent>
    </Card>
  );
};
