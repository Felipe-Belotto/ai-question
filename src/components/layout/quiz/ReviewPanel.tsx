import { useLanguage } from "@/context/LanguageContext";
import * as m from "@/paraglide/messages.js";

interface ReviewPanelProps {
  score: number;
  totalQuestions: number;
}

export function ReviewPanel({ score, totalQuestions }: ReviewPanelProps) {
  useLanguage();
  return (
    <div className="mt-4 space-y-2">
      <div className="p-3 bg-white/20 rounded-lg">
        <p className="text-sm font-medium">{m.score()}</p>
        <p
          className={`text-xl font-bold ${
            score > totalQuestions / 2 ? "text-green-500" : "text-red-500"
          }`}
        >
          {score}/{totalQuestions}
        </p>
      </div>
      <div className="p-3 bg-white/20 rounded-lg">
        <p className="text-sm font-medium">{m.result()}</p>
        <p
          className={`text-xl font-bold ${
            score > totalQuestions / 2 ? "text-green-500" : "text-red-500"
          }`}
        >
          {score > totalQuestions / 2 ? m.passed() : m.failed()}
        </p>
      </div>
    </div>
  );
}
