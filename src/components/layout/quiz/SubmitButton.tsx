import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import * as m from "@/paraglide/messages.js";
import { useEffect, useRef } from "react";

interface SubmitButtonProps {
  isReview: boolean;
  onRestart: () => void;
  onValidate: () => void;
  isLastQuestion: boolean;
}

export const SubmitButton = ({
  isReview,
  onRestart,
  onValidate,
  isLastQuestion,
}: SubmitButtonProps) => {
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  useLanguage();
  useEffect(() => {
    if (isLastQuestion && submitButtonRef.current) {
      submitButtonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLastQuestion]);

  return (
    <Button
      ref={submitButtonRef}
      className={`w-full mt-4 p-4 text-lg font-medium transition-colors
        ${
          isReview
            ? "bg-gray-500 hover:bg-gray-600"
            : "bg-primary hover:bg-primary/80"
        } 
        text-white rounded-lg`}
      onClick={isReview ? onRestart : onValidate}
    >
      {isReview ? m.startOver() : m.submitAnswers()}
    </Button>
  );
};
