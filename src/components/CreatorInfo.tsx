import { motion } from "framer-motion";
import Image from "next/image";

const CreatorInfo = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="flex flex-col md:flex-row items-center justify-center bg-background border border-primary/10 p-8 rounded-2xl shadow-sm space-y-8 md:space-y-0 md:space-x-12 hover:shadow-md transition-shadow duration-300"
		>
			<div className="relative w-36 h-36 rounded-full overflow-hidden shadow-md border-2 border-primary/20">
				<Image
					src="https://github.com/Felipe-Belotto.png"
					alt="Foto do criador"
					width={144}
					height={144}
					className="object-cover"
				/>
			</div>
			<div className="text-center md:text-left space-y-2 md:space-y-3">
				<h2 className="text-2xl font-semibold text-primary">Felipe Belotto</h2>
				<p className="text-muted-foreground text-base leading-relaxed md:max-w-md">
					Desenvolvedor front-end de Campinas, Brasil, com paixão por design de
					interfaces e construção de websites interativos. Este projeto busca
					demonstrar como ferramentas com IA podem potencializar a educação,
					expandindo o acesso ao conhecimento e promovendo a aprendizagem
					contínua.
				</p>
			</div>
		</motion.div>
	);
};

export default CreatorInfo;
