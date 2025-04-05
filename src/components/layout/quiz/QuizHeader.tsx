"use client";
import { CardHeader, CardTitle } from "@/components/ui/card";

import * as m from "@paraglide/messages";

interface QuizHeaderProps {
  topic: string;
}

export function QuizHeader({ topic }: QuizHeaderProps) {
  return (
    <CardHeader className="bg-primary text-white rounded-t-lg">
      <CardTitle className="text-2xl font-bold">
        {m.quizTitle({ topic: topic || m.defaultTopic() })}
      </CardTitle>
    </CardHeader>
  );
}
