import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
	const shouldReduceMotion = useReducedMotion();
	const images = Array.from({ length: 8 }, (_, i) => i + 1);

	return (
		<main className="relative h-[100svh] overflow-hidden">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black to-transparent backdrop-blur-[42px] [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] [mask-image:linear-gradient(to_bottom,black,transparent)] sm:h-28 md:h-32"
			/>

			<div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 w-full px-4 text-center">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="font-serif text-7xl tracking-tight md:text-8xl lg:text-9xl xl:text-[10vw]"
				>
					Studio
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
					className="mt-2 text-base sm:mt-3 sm:text-lg md:text-xl"
				>
					Making the Impossible
				</motion.p>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.25 }}
				transition={{ duration: 1, delay: 0.5 }}
				className="pointer-events-none absolute grid grid-cols-8 gap-[5px] overflow-hidden [transform:rotateX(50deg)_rotateZ(-35deg)_translate(20%,-20%)_scale(4.5)] md:gap-[10px] lg:gap-[15px] xl:gap-[20px] 2xl:gap-[30px] md:[transform:rotateX(50deg)_rotateZ(-35deg)_translate(20%,-20%)_scale(3)] xl:[transform:rotateX(50deg)_rotateZ(-35deg)_translate(20%,-20%)_scale(1.5)]"
			>
				{images.map((i) => (
					<motion.img
						key={i}
						src={`https://canvas-generations-v1.s3.us-west-2.amazonaws.com/${i}_flux_bg.webp`}
						alt="Background pattern"
						width={320}
						height={180}
						loading="eager"
						className="h-auto w-full object-cover"
						animate={
							!shouldReduceMotion && {
								y: i % 2 === 0 ? ["0%", "-5%", "0%"] : ["0%", "5%", "0%"],
							}
						}
						transition={{
							duration: 15,
							ease: [0.4, 0, 0.2, 1],
							repeat: Infinity,
						}}
					/>
				))}
			</motion.div>
		</main>
	);
}
