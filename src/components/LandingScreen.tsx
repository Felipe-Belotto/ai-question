"use client";
import * as m from "@paraglide/messages";
import { motion } from "framer-motion";
import React, { useState } from "react";
import HowItWorksSection from "./layout/landing/HowItWorksSection";
import PromptInputSection from "./layout/landing/PromptInputSection";
import WelcomeSection from "./layout/landing/WelcomeSection";
import CreatorInfo from "./CreatorInfo";

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
    <main className="flex flex-col justify-center items-center relative overflow-hidden bg-primary/5">
      {floatingBubbles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-overlay bg-primary opacity-10 animate-[float_6s_ease-in-out_infinite]"
        />
      ))}

      <div className="container mx-auto px-4 py-14 lg:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center space-y-32"
        >
          <div className="flex flex-col w-full items-center space-y-14 min-h-[30vh] lg:min-h-[40vh] ">
            <WelcomeSection />
            <PromptInputSection
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              hasError={hasError}
              message={message}
              setMessage={setMessage}
            />
          </div>

          <div className="w-full max-w-4xl ">
            <SectionSeparator text={m.howItWorks()} />
            <HowItWorksSection />
          </div>

          <div className="w-full max-w-4xl ">
            <SectionSeparator text={m.creatorInfo()} />
            <CreatorInfo />
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default LandingScreen;

type sectionSeparatorProps = {
  text: string;
};

function SectionSeparator({ text }: sectionSeparatorProps) {
  return (
    <div className="relative flex justify-center items-center mb-14">
      <hr className="border-primary/20 w-full" />
      <div className="absolute bg-background px-4 text-secondary font-semibold ">
        {text}
      </div>
    </div>
  );
}
