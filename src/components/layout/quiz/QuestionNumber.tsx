"use client";

import * as m from "@paraglide/messages";

interface QuestionNumberProps {
  number: number;
}

export function QuestionNumber({ number }: QuestionNumberProps) {
  return (
    <span className="inline-block bg-primary/10 text-primary rounded-full text-sm font-medium mb-2 px-3 py-1">
      {m.question({ number })}
    </span>
  );
}
