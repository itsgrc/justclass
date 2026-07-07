import { motion, useReducedMotion } from "framer-motion";
import { EASE_LUXE } from "@/lib/motion";

interface RuleRevealProps {
  delay?: number;
  className?: string;
  onDark?: boolean;
}

/** Filetto che si disegna da sinistra quando entra in viewport. */
export default function RuleReveal({ delay = 0, className = "", onDark = false }: RuleRevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={`${onDark ? "rule-dark" : "rule"} origin-left ${className}`}
      initial={reduced ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.4, ease: EASE_LUXE, delay }}
    />
  );
}
