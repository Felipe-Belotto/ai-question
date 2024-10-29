// src/context/QuizContext.tsx
import React, {
	createContext,
	useState,
	useContext,
	type ReactNode,
} from "react";

interface QuizContextType {
	score: number;
	setScore: (score: number) => void;
	selectedAnswers: Record<number, string>;
	setSelectedAnswers: (answers: Record<number, string>) => void;
	correctAnswers: Record<number, string>;
	setCorrectAnswers: (answers: Record<number, string>) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
	const [score, setScore] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState<
		Record<number, string>
	>({});
	const [correctAnswers, setCorrectAnswers] = useState<Record<number, string>>(
		{},
	);

	return (
		<QuizContext.Provider
			value={{
				score,
				setScore,
				selectedAnswers,
				setSelectedAnswers,
				correctAnswers,
				setCorrectAnswers,
			}}
		>
			{children}
		</QuizContext.Provider>
	);
}

export function useQuiz() {
	const context = useContext(QuizContext);
	if (undefined === context) {
		throw new Error("useQuiz must be used within a QuizProvider");
	}
	return context;
}
