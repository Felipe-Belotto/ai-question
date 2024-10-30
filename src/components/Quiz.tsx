import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CorrectAnswers,
  Question,
  QuizProps,
  SelectedAnswers,
} from "@/types/quiz";
import { QuizHeader } from "./layout/quiz/QuizHeader";
import { QuestionContent } from "./layout/quiz/QuestionContent";
import { NavigationButtons } from "./layout/quiz/NavigationButtons";
import { NavigationPanel } from "./layout/quiz/NavigationPanel";

const Quiz = ({ questions, topic, onRestart }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [isReview, setIsReview] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [correctAnswers, setCorrectAnswers] = useState<CorrectAnswers>({});
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const validateAnswers = (): void => {
    const correct: CorrectAnswers = {};
    questions.forEach((question: Question, index: number) => {
      const selectedAnswer: string | undefined = selectedAnswers[index];
      const correctAnswer: string =
        question.options[question.options.indexOf(question.answer)];
      if (selectedAnswer === correctAnswer) {
        correct[index] = selectedAnswer;
      }
    });
    setCorrectAnswers(correct);
    setScore(Object.keys(correct).length);
    setIsReview(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelect = (qIndex: number, aIndex: number): void => {
    setSelectedAnswers({
      ...selectedAnswers,
      [qIndex]: questions[qIndex].options[aIndex],
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 order-2 lg:order-1">
          <Card className="bg-white shadow-lg">
            <QuizHeader topic={topic} />
            <CardContent className="mt-6">
              <QuestionContent
                question={questions[currentQuestion]}
                currentQuestion={currentQuestion}
                selectedAnswers={selectedAnswers}
                isReview={isReview}
                onSelect={handleSelect}
              />
              <NavigationButtons
                currentQuestion={currentQuestion}
                totalQuestions={questions.length}
                onPrevious={() => setCurrentQuestion(currentQuestion - 1)}
                onNext={() => setCurrentQuestion(currentQuestion + 1)}
              />
            </CardContent>
          </Card>
        </div>

        <div className="w-full lg:w-64 order-3 lg:order-2 lg:sticky lg:top-0">
          <NavigationPanel
            questions={questions}
            currentQuestion={currentQuestion}
            selectedAnswers={selectedAnswers}
            correctAnswers={correctAnswers}
            isReview={isReview}
            score={score}
            onNavigate={setCurrentQuestion}
            onRestart={onRestart}
            onValidate={validateAnswers}
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
