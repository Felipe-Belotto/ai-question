import { Textarea } from "@/components/ui/textarea";
import * as m from "@paraglide/messages";
import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";
import SubmitButtonSection from "./SubmitButtonSection";

type PromptInputSectionProps = {
  message: string;
  setMessage: (value: string) => void;
  isLoading: boolean;
  hasError: boolean;
  handleSubmit: () => void;
};

const PromptInputSection = ({
  message,
  setMessage,
  isLoading,
  hasError,
  handleSubmit,
}: PromptInputSectionProps) => (
  <div className="bg-background/40 p-8 rounded-xl border border-primary/10 backdrop-blur-xs relative w-full max-w-2xl shadow-lg">
    <motion.div className="absolute -top-4 -right-4 text-primary/40 animate-[rotate_4s_ease-in-out_infinite]">
      <Sparkles className="w-8 h-8 text-secondary" />
    </motion.div>
    <label className="block text-center text-xl mb-8 font-medium text-primary">
      {m.inputPromptMessage()}
    </label>
    <motion.div transition={{ duration: 0.2 }} className="relative">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="min-h-[120px] w-full bg-background/60 resize-none rounded-xl ring-0 transition-colors duration-200 placeholder:text-muted-foreground/50 text-lg"
        placeholder={m.inputPromptPlaceholder()}
      />
      <motion.div className="absolute bottom-4 right-4 text-primary/20 animate-[rotate_3s_ease-in-out_infinite]">
        <Rocket className="w-6 h-6" />
      </motion.div>
    </motion.div>
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
  </div>
);

export default PromptInputSection;
