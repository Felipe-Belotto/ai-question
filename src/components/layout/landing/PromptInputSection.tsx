import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";

type PromptInputSectionProps = {
	message: string;
	setMessage: (value: string) => void;
};

const PromptInputSection = ({
	message,
	setMessage,
}: PromptInputSectionProps) => (
	<div className="bg-background/40 p-8 rounded-xl border border-primary/10 backdrop-blur-sm relative w-full max-w-2xl">
		<motion.div className="absolute -top-4 -right-4 text-primary/40 animate-[rotate_4s_ease-in-out_infinite]">
			<Sparkles className="w-8 h-8" />
		</motion.div>
		{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
		<label className="block text-center text-xl mb-8 font-medium text-primary">
			What topic would you like to be quizzed on?
		</label>
		<motion.div
			whileHover={{ scale: 1.01 }}
			transition={{ duration: 0.2 }}
			className="relative"
		>
			<Textarea
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				className="min-h-[120px] w-full bg-background/60 resize-none rounded-xl border-primary/10 focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-muted-foreground/50 text-lg"
				placeholder="Enter a topic of interest..."
			/>
			<motion.div className="absolute bottom-4 right-4 text-primary/20 animate-[rotate_3s_ease-in-out_infinite]">
				<Rocket className="w-6 h-6" />
			</motion.div>
		</motion.div>
	</div>
);

export default PromptInputSection;
