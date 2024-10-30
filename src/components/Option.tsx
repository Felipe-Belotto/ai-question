import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface OptionProps {
  text: string;
  index: number;
  questionIndex: number;
  isSelected: boolean;
  onSelect: (questionIndex: number, optionIndex: number) => void;
  disabled?: boolean;
  isCorrect?: boolean;
}

export const Option = ({
  text,
  index,
  questionIndex,
  isSelected,
  onSelect,
  disabled,
  isCorrect,
}: OptionProps) => {
  const letter = String.fromCharCode(65 + index);

  return (
    <Button
      className={`w-full p-4 flex items-start gap-4 hover:bg-gray-100 ${
        isSelected ? "bg-secondary/10 hover:bg-secondary/20" : ""
      } min-h-[3rem] text-left`}
      onClick={() => !disabled && onSelect(questionIndex, index)}
      variant="ghost"
    >
      <span className="flex-shrink-0 font-medium">{letter}</span>
      <span className="flex-grow whitespace-normal">{text}</span>
      {disabled && isSelected && (
        <span className="flex-shrink-0 ml-2">
          {isCorrect ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <X className="w-5 h-5 text-red-500" />
          )}
        </span>
      )}
    </Button>
  );
};
