import * as m from "@paraglide/messages";
import { motion } from "framer-motion";
import Image from "next/image";

const CreatorInfo = () => {
  return (
    <div className="min-h-[40vh] lg:min-h-[40vh] flex justify-center items-center ">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-background border border-primary/10 rounded-xl shadow-xs transition-shadow duration-300 "
      >
        <div className="p-4 lg:p-14 flex flex-col md:flex-row items-center gap-14">
          <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-md border-2 border-primary/20 shrink-0">
            <Image
              src="https://github.com/Felipe-Belotto.png"
              alt={m.creatorImageAlt()}
              width={144}
              height={144}
              className="object-cover bg-primary"
            />
          </div>
          <div className="flex flex-col gap-4 md:text-left">
            <h2 className="text-2xl text-center lg:text-start font-semibold text-primary">
              Felipe Belotto
            </h2>
            <p
              className="text-muted-foreground text-base
             leading-relaxed text-center lg:text-start"
            >
              {m.creatorDescription()}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CreatorInfo;
