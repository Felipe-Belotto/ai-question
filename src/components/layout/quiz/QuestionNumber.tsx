"use client";
import { useLanguage } from "@/context/LanguageContext";
import * as m from "@/paraglide/messages.js";

interface QuestionNumberProps {
  number: number;
}

export function QuestionNumber({ number }: QuestionNumberProps) {
  useLanguage();
  return (
    <span className="inline-block bg-primary/10 text-primary rounded-full text-sm font-medium mb-2 px-3 py-1">
      {m.question({ number })}
    </span>
  );
}
