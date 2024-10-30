import { Button } from "@/components/ui/button";
import * as m from "@paraglide/messages";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

type SubmitButtonSectionProps = {
	isLoading: boolean;
	hasError: boolean;
	onSubmit: () => void;
};

const SubmitButtonSection = ({
	isLoading,
	hasError,
	onSubmit,
}: SubmitButtonSectionProps) => {
	const pulseAnimation = [1.0, 1.05, 1.0];

	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			transition={{ duration: 0.2 }}
			className="mt-8 w-full max-w-2xl"
		>
			<Button
				className="w-full h-16 text-xl font-medium bg-primary hover:bg-primary/90 text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl disabled:opacity-70 relative overflow-hidden group"
				disabled={isLoading}
				onClick={onSubmit}
			>
				{isLoading ? (
					<motion.div
						animate={{ scale: pulseAnimation }}
						transition={{
							duration: 1,
							repeat: Number.POSITIVE_INFINITY,
						}}
						className="flex items-center gap-3"
					>
						<span>{m.submitWaitingMessage()}</span>
						<motion.div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-[rotate_1s_linear_infinite]" />
					</motion.div>
				) : hasError ? (
					<div className="flex items-center gap-2 text-red-50">
						<span>{m.somethingWrong()}</span>
					</div>
				) : (
					<div className="flex items-center gap-3 justify-center">
						<span>{m.startQuiz()}</span>
						<motion.div
							className="group-hover:translate-x-2 transition-transform"
							animate={{ x: [0, 4, 0] }}
							transition={{
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
							}}
						>
							<ChevronRight className="w-6 h-6" />
						</motion.div>
					</div>
				)}
			</Button>
		</motion.div>
	);
};

export default SubmitButtonSection;
