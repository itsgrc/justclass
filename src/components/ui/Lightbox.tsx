import { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { AssetPlate } from "@/data/fleet";
import { PlateSurface } from "@/components/ui/Plate";
import { EASE_LUXE } from "@/lib/motion";

interface LightboxProps {
  plates: AssetPlate[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  label: string;
}

/*
 * Visore a schermo intero: fondo espresso, contatore "3 / 12", frecce a
 * filetto. Esc chiude, frecce navigano, il focus torna al chiamante.
 */
export default function Lightbox({ plates, index, onClose, onNavigate, label }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;

  const prev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + plates.length) % plates.length);
  }, [index, plates.length, onNavigate]);

  const next = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % plates.length);
  }, [index, plates.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, onClose, prev, next]);

  const plate = index !== null ? plates[index] : null;

  return (
    <AnimatePresence>
      {open && plate && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Galleria — ${label}`}
          className="fixed inset-0 z-[90] flex flex-col bg-espresso/97"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE_LUXE }}
          onClick={onClose}
        >
          <div className="container-luxe flex h-20 shrink-0 items-center justify-between">
            <span className="eyebrow text-sand">{label}</span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="link-luxe eyebrow cursor-pointer text-champagne"
            >
              Chiudi
            </button>
          </div>

          <div
            className="container-luxe flex min-h-0 flex-1 items-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prev}
              aria-label="Immagine precedente"
              className="eyebrow hidden shrink-0 cursor-pointer border border-champagne/30 px-5 py-4 text-champagne transition-colors duration-500 hover:bg-champagne hover:text-espresso sm:block"
            >
              ←
            </button>

            <motion.figure
              key={index}
              className="min-w-0 flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: EASE_LUXE }}
            >
              <div
                className="relative mx-auto max-h-[62vh] overflow-hidden"
                style={{ aspectRatio: "3 / 2" }}
              >
                <PlateSurface tone={plate.tone} still />
              </div>
              <figcaption className="mt-6 flex items-baseline justify-between gap-6">
                <span className="eyebrow text-sand">{plate.caption}</span>
                <span className="eyebrow shrink-0 text-champagne">
                  {(index ?? 0) + 1} / {plates.length}
                </span>
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={next}
              aria-label="Immagine successiva"
              className="eyebrow hidden shrink-0 cursor-pointer border border-champagne/30 px-5 py-4 text-champagne transition-colors duration-500 hover:bg-champagne hover:text-espresso sm:block"
            >
              →
            </button>
          </div>

          <div
            className="container-luxe flex h-20 shrink-0 items-center justify-center gap-10 sm:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" onClick={prev} aria-label="Precedente" className="link-luxe eyebrow cursor-pointer text-champagne">
              ← Prec.
            </button>
            <button type="button" onClick={next} aria-label="Successiva" className="link-luxe eyebrow cursor-pointer text-champagne">
              Succ. →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
