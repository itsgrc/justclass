import { motion, useReducedMotion } from "framer-motion";
import { EASE_LUXE } from "@/lib/motion";

export type PlateTone = "dusk" | "sea" | "sky" | "lacquer" | "amber";

/*
 * "Lastre" fotografiche placeholder: gradienti caldi stratificati + grana.
 * Pensate per essere sostituite 1:1 da fotografia vera (still life, no stock)
 * mantenendo figure/figcaption e aspect ratio.
 */
const TONES: Record<PlateTone, string> = {
  dusk: [
    "radial-gradient(110% 80% at 85% 12%, rgba(201,169,106,0.42), transparent 58%)",
    "linear-gradient(168deg, #191713 0%, #2e2b22 34%, #6c6046 68%, #c3a476 100%)",
  ].join(", "),
  sea: [
    "radial-gradient(120% 90% at 80% 8%, rgba(201,169,106,0.34), transparent 60%)",
    "linear-gradient(170deg, #20251f 0%, #39402f 42%, #77704f 74%, #c8ae7c 100%)",
  ].join(", "),
  sky: [
    "radial-gradient(140% 70% at 50% 108%, rgba(232,207,164,0.5), transparent 62%)",
    "linear-gradient(180deg, #17130f 0%, #3c2f22 48%, #a97f4a 82%, #e3c99e 100%)",
  ].join(", "),
  lacquer: [
    "radial-gradient(90% 60% at 28% 18%, rgba(232,207,164,0.16), transparent 55%)",
    "linear-gradient(155deg, #0e0c0a 0%, #241d15 56%, #493a26 100%)",
  ].join(", "),
  amber: [
    "radial-gradient(80% 70% at 72% 30%, rgba(201,169,106,0.42), transparent 62%)",
    "linear-gradient(200deg, #241c14 0%, #43301f 52%, #6e5334 100%)",
  ].join(", "),
};

interface PlateProps {
  tone: PlateTone;
  caption?: string;
  ratio?: string;
  className?: string;
}

export default function Plate({
  tone,
  caption,
  ratio = "4 / 5",
  className,
}: PlateProps) {
  const reduced = useReducedMotion();

  return (
    <figure className={className}>
      <div className="relative overflow-hidden" style={{ aspectRatio: ratio }}>
        <motion.div
          aria-hidden
          className="grain absolute inset-0"
          style={{ backgroundImage: TONES[tone] }}
          initial={reduced ? false : { scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 2.4, ease: EASE_LUXE }}
        />
        <div className="pointer-events-none absolute inset-0 border border-ivory/10" />
      </div>
      {caption && (
        <figcaption className="mt-4 flex items-baseline gap-4">
          <span className="rule w-8 shrink-0 self-center" aria-hidden />
          <span className="eyebrow text-taupe">{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
