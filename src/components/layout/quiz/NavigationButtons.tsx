import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import * as m from "@paraglide/messages";

interface NavigationButtonsProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function NavigationButtons({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
}: NavigationButtonsProps) {
  useLanguage();
  return (
    <div className="flex justify-between mt-6">
      <Button
        onClick={onPrevious}
        disabled={currentQuestion === 0}
        className="bg-gray-500 hover:bg-gray-600 text-white"
      >
        {m.previous()}
      </Button>
      <Button
        onClick={onNext}
        disabled={currentQuestion === totalQuestions - 1}
        className="bg-gray-500 hover:bg-gray-600 text-white"
      >
        {m.next()}
      </Button>
    </div>
  );
}
