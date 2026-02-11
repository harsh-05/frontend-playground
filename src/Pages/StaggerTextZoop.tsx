import { easeInOut, motion } from 'motion/react';

function StaggerTextAnimation({ children, href }: { children: string, href: string }) {
  const DURATION = 0.25;
  const STAGGER = 0.025
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden  "
      href={href}
    >
      <div>
        {children.split("").map((c: string, i: number) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              delay: STAGGER * i,
              ease: easeInOut,
            }}
            className="inline-block"
            key={i}
          >
            {c}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((c: string, i: number) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              delay: STAGGER * i,
              ease: easeInOut,
            }}
            className="inline-block"
            key={i}
          >
            {c}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
}


export function StaggerTextPage() {
    return (
      <div className="bg-[#569b21]  h-screen flex flex-col items-center justify-center gap-2 text-4xl font-black uppercase sm:text-6xl md:text-7xl lg:text-8xl">
        <StaggerTextAnimation href="#">Staggered</StaggerTextAnimation>
        <StaggerTextAnimation href="#">Text</StaggerTextAnimation>
        <StaggerTextAnimation href="#">Looks</StaggerTextAnimation>
        <StaggerTextAnimation href="#">Amazing...</StaggerTextAnimation>
      </div>
    );
}





