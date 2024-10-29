import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Option } from "./Option";

export interface Question {
	enunciado: string;
	alternativas: string[];
	resposta: string;
}

export interface QuizProps {
	questions: Question[];
	topic: string;
	onRestart: () => void;
}

export interface SelectedAnswers {
	[key: number]: string;
}

export interface CorrectAnswers {
	[key: number]: string;
}

const Quiz = ({ questions, topic, onRestart }: QuizProps) => {
	const [isReview, setIsReview] = useState<boolean>(false);
	const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
	const [correctAnswers, setCorrectAnswers] = useState<CorrectAnswers>({});
	const [score, setScore] = useState<number>(0);

	const validateAnswers = (): void => {
		const correct: CorrectAnswers = {};
		questions.forEach((question: Question, index: number) => {
			const selectedAnswer: string | undefined = selectedAnswers[index];
			const correctAnswer: string =
				question.alternativas[question.alternativas.indexOf(question.resposta)];
			if (selectedAnswer === correctAnswer) {
				correct[index] = selectedAnswer;
			}
		});
		setCorrectAnswers(correct);
		setScore(Object.keys(correct).length);
		setIsReview(true);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="max-w-3xl mx-auto p-4 space-y-6">
			<Card className="bg-white shadow-lg">
				<CardHeader className="bg-primary text-white rounded-t-lg">
					<CardTitle className="text-2xl font-bold">
						Quiz: {topic || "Elementary and High School Education"}
					</CardTitle>
					{isReview && (
						<div className="mt-4 flex items-center gap-4">
							<div className="bg-white/20 p-3 rounded-lg">
								<p className="text-sm font-medium">Result</p>
								<p
									className={`text-xl font-bold ${
										score > questions.length / 2
											? "text-green-500"
											: "text-red-500"
									}`}
								>
									{score > questions.length / 2 ? "Passed" : "Failed"}
								</p>
							</div>
							<div className="bg-white/20 p-3 rounded-lg">
								<p className="text-sm font-medium">Score</p>
								<p
									className={`text-xl font-bold ${
										score > questions.length / 2
											? "text-green-500"
											: "text-red-500"
									}`}
								>
									{score}/{questions.length}
								</p>
							</div>
						</div>
					)}
				</CardHeader>
				<CardContent className="mt-6">
					{questions.map((question: Question, index: number) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div key={index} className="mb-8">
							<div className="mb-4">
								<span className="inline-block bg-primary/10 text-primary rounded-full text-sm font-medium mb-2 px-3 py-1">
									Question {index + 1}
								</span>
								<p className="text-lg font-medium text-gray-800 mt-2">
									{question.enunciado}
								</p>
							</div>
							<div className="space-y-2">
								{question.alternativas.map(
									(alternative: string, altIndex: number) => (
										<Option
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={altIndex}
											text={alternative}
											index={altIndex}
											questionIndex={index}
											isSelected={selectedAnswers[index] === alternative}
											onSelect={(qIndex: number, aIndex: number): void =>
												setSelectedAnswers({
													...selectedAnswers,
													[qIndex]: question.alternativas[aIndex],
												})
											}
											disabled={isReview}
											isCorrect={alternative === question.resposta}
										/>
									),
								)}
							</div>
							{isReview && selectedAnswers[index] !== question.resposta && (
								<div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
									<p className="text-sm text-red-700">
										Correct answer:{" "}
										<span className="font-medium">{question.resposta}</span>
									</p>
								</div>
							)}
						</div>
					))}
				</CardContent>
			</Card>

			<Button
				className={`w-full p-4 text-lg font-medium transition-colors
          ${isReview ? "bg-gray-500 hover:bg-gray-600" : "bg-primary hover:bg-primary/80"} 
          text-white rounded-lg`}
				onClick={isReview ? onRestart : validateAnswers}
			>
				{isReview ? "Start Over" : "Submit Answers"}
			</Button>
		</div>
	);
};

export default Quiz;
