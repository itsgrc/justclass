import { motion, useScroll } from "framer-motion";

/*
 * Il segno di lettura: un filetto bronzo che avanza con voi lungo
 * l'articolo. Un'informazione, non un ornamento — per questo è alto
 * un pixel e non fa rumore.
 */
export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-9 z-[60] h-px origin-left bg-bronze"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
