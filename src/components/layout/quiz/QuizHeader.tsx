"use client";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import * as m from "@/paraglide/messages.js";

interface QuizHeaderProps {
  topic: string;
}

export function QuizHeader({ topic }: QuizHeaderProps) {
  useLanguage();
  return (
    <CardHeader className="bg-primary text-white rounded-t-lg">
      <CardTitle className="text-2xl font-bold">
        {m.quizTitle({ topic: topic || m.defaultTopic() })}
      </CardTitle>
    </CardHeader>
  );
}
