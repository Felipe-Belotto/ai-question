"use client";
import LandingScreen from "@/components/LandingScreen";
import Quiz from "@/components/Quiz";
import { QuizProvider } from "@/context/QuizContext";
import { generateQuiz, validateKey } from "@/lib/api";
import type { Question } from "@/types/quiz";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [topic, setTopic] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStart = async (message: string) => {
    setIsLoading(true);
    setHasError(false);

    try {
      const isValid = await validateKey();
      if (!isValid) {
        throw new Error("Invalid API key");
      }

      const quiz = await generateQuiz(message);
      if (!Array.isArray(quiz) || quiz.length === 0) {
        throw new Error("Invalid quiz data");
      }

      setQuestions(quiz);
      setTopic(message);
      setQuizStarted(true);

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error starting quiz:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRestart = () => {
    setQuizStarted(false);
    setQuestions([]);
    setTopic("");
  };

  return (
    <QuizProvider>
      <main>
        {!quizStarted ? (
          <LandingScreen
            onStart={handleStart}
            isLoading={isLoading}
            hasError={hasError}
          />
        ) : (
          <Quiz questions={questions} topic={topic} onRestart={handleRestart} />
        )}
      </main>
    </QuizProvider>
  );
}
