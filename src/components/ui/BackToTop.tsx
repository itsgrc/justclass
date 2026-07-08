import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_LUXE } from "@/lib/motion";

/*
 * Torna su: appare solo dopo una lunga discesa, in punta di piedi,
 * e riporta in cima con la calma di casa.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Tornate all'inizio della pagina"
          className="no-print eyebrow fixed right-6 bottom-6 z-[60] cursor-pointer border border-ink/25 bg-ivory/85 px-5 py-3.5 text-ink backdrop-blur-sm transition-colors duration-500 hover:bg-ink hover:text-ivory"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.5, ease: EASE_LUXE }}
        >
          ↑ Su
        </motion.button>
      )}
    </AnimatePresence>
  );
}
