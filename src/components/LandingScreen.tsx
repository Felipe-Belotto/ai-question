import { motion } from "framer-motion";
import React, { useState } from "react";
import CreatorInfoSection from "./layout/landing/CreatorInfoSection";
import HowItWorksSection from "./layout/landing/HowItWorksSection";
import PromptInputSection from "./layout/landing/PromptInputSection";
import SubmitButtonSection from "./layout/landing/SubmitButtonSection";
import WelcomeSection from "./layout/landing/WelcomeSection";

type LandingScreenProps = {
	onStart: (message: string) => void;
	isLoading: boolean;
	hasError: boolean;
};

const LandingScreen = ({
	onStart,
	isLoading,
	hasError,
}: LandingScreenProps) => {
	const [message, setMessage] = useState("");
	const floatingBubbles = Array(6).fill(null);

	const handleSubmit = () => onStart(message);

	return (
		<main className=" flex flex-col justify-center items-center relative overflow-hidden bg-primary/5 pt-14">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				{floatingBubbles.map((_, i) => (
					<motion.div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={i}
						className="absolute rounded-full mix-blend-overlay bg-primary opacity-10 animate-[float_6s_ease-in-out_infinite]"
					/>
				))}
			</div>

			{/* Background grid overlay */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb)/_0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb)/_0.1)_1px,transparent_1px)] bg-[40px_40px] opacity-10" />

			<div className="container mx-auto px-4 py-16 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="flex flex-col justify-center items-center space-y-24"
				>
					{/* Welcome section with decoration */}
					<div className="w-full text-center">
						<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent to-primary rounded-full" />
						<WelcomeSection />
					</div>

					{/* Prompt input section with spacing */}
					<div className="w-full max-w-2xl">
						<PromptInputSection message={message} setMessage={setMessage} />
					</div>

					{/* Submit button section with decorative pulse effect */}
					<div className="w-full max-w-2xl">
						<div className="relative flex justify-center items-center">
							<div className="absolute w-12 h-12 rounded-full bg-primary/10 animate-pulse" />
							<SubmitButtonSection
								isLoading={isLoading}
								hasError={hasError}
								onSubmit={handleSubmit}
							/>
						</div>
					</div>

					{/* How It Works section with divider */}
					<div className="w-full max-w-4xl">
						<div className="relative flex justify-center items-center mb-12">
							<hr className="border-primary/20 w-full" />
							<div className="absolute bg-background px-4 text-primary font-semibold">
								How It Works
							</div>
						</div>
						<HowItWorksSection />
					</div>

					{/* Creator Information section with larger bottom spacing */}
					<div className="w-full max-w-4xl mb-24">
						<div className="relative flex justify-center items-center mb-12">
							<hr className="border-primary/20 w-full" />
							<div className="absolute bg-background px-4 text-primary font-semibold">
								About the Creator
							</div>
						</div>
						<CreatorInfoSection />
					</div>
				</motion.div>
			</div>
		</main>
	);
};

export default LandingScreen;
