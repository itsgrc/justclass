import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_LUXE } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Rivelazione allo scroll: dissolvenza + lieve risalita, una volta sola. */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1.1, ease: EASE_LUXE, delay }}
    >
      {children}
    </motion.div>
  );
}
