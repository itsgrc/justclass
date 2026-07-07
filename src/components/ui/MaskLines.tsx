import { motion, useReducedMotion } from "framer-motion";
import { EASE_LUXE } from "@/lib/motion";

interface MaskLinesProps {
  /** Una voce per riga: stringhe o nodi (es. <em>) */
  lines: React.ReactNode[];
  delay?: number;
  className?: string;
}

/*
 * Rivelazione a sipario per i titoli display: ogni riga risale dal
 * proprio overflow nascosto, sfalsata. Da usare DENTRO l'elemento
 * heading (h1/h2), che resta l'unico nodo semantico.
 *
 * Nota: l'observer sta sul wrapper esterno, non sulle righe traslate —
 * un elemento interamente ritagliato da overflow-hidden non risulta
 * mai "in view" per IntersectionObserver, e l'animazione non partirebbe.
 */
export default function MaskLines({ lines, delay = 0, className }: MaskLinesProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <span className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </span>
    );
  }

  return (
    <motion.span
      className={`block ${className ?? ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block will-change-transform"
            variants={{
              hidden: { y: "112%" },
              visible: {
                y: "0%",
                transition: { duration: 1.15, ease: EASE_LUXE, delay: delay + i * 0.14 },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
