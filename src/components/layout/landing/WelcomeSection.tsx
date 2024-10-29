import { motion } from "framer-motion";
import { Brain, Star } from "lucide-react";

const WelcomeSection = () => (
	<div className="text-center space-y-8 mb-12">
		<div className="relative inline-block">
			<motion.div
				className="absolute -top-8 -right-8 text-primary/30"
				animate={{ rotate: 360 }}
				transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
			>
				<Star className="w-12 h-12" />
			</motion.div>
			<h1 className="text-5xl md:text-6xl font-bold text-primary">
				Welcome to AI Question
			</h1>
		</div>

		<div className="flex flex-col items-center space-y-6">
			<motion.div className="p-3 rounded-full bg-primary/10 animate-[pulse_2s_ease-in-out_infinite]">
				<Brain className="w-8 h-8 text-primary" />
			</motion.div>
			<p className="text-muted-foreground text-lg md:text-xl max-w-lg">
				Generate personalized AI-powered exams for enhanced learning
			</p>
		</div>
	</div>
);

export default WelcomeSection;
