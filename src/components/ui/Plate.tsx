import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_LUXE } from "@/lib/motion";

export type PlateTone =
  | "dusk"
  | "sea"
  | "harbor"
  | "sail"
  | "teak"
  | "sky"
  | "alps"
  | "tarmac"
  | "lacquer"
  | "cognac"
  | "marble"
  | "salon"
  | "amber"
  | "riviera"
  | "night";

/*
 * "Lastre" fotografiche placeholder: gradienti caldi stratificati, grana
 * e una texture di superficie appena percettibile. Ogni tono simula una
 * situazione di luce reale (ora blu, alba in banchina, quota, abitacolo)
 * ed è pensato per essere sostituito 1:1 da fotografia vera mantenendo
 * figure/figcaption e aspect ratio.
 */
const TONES: Record<PlateTone, string> = {
  dusk: [
    "radial-gradient(110% 80% at 85% 12%, rgba(201,169,106,0.42), transparent 58%)",
    "linear-gradient(168deg, #191713 0%, #2e2b22 34%, #6c6046 68%, #c3a476 100%)",
  ].join(", "),
  sea: [
    "radial-gradient(120% 90% at 80% 8%, rgba(201,169,106,0.34), transparent 60%)",
    "linear-gradient(178deg, #20251f 0%, #39402f 40%, #6a6a4c 68%, #c8ae7c 96%)",
  ].join(", "),
  harbor: [
    "radial-gradient(130% 60% at 50% 0%, rgba(236,228,212,0.5), transparent 55%)",
    "linear-gradient(180deg, #d8c9a8 0%, #a99a7c 38%, #6f6a55 72%, #494738 100%)",
  ].join(", "),
  sail: [
    "radial-gradient(100% 60% at 30% 10%, rgba(246,241,231,0.4), transparent 60%)",
    "linear-gradient(190deg, #cfc3a8 0%, #9b9377 34%, #4f5442 70%, #262b22 100%)",
  ].join(", "),
  teak: [
    "repeating-linear-gradient(90deg, rgba(20,16,11,0.16) 0 2px, transparent 2px 34px)",
    "radial-gradient(120% 80% at 70% 20%, rgba(232,207,164,0.32), transparent 60%)",
    "linear-gradient(160deg, #6e5334 0%, #8a6a42 40%, #a98650 72%, #c9a96a 100%)",
  ].join(", "),
  sky: [
    "radial-gradient(140% 70% at 50% 108%, rgba(232,207,164,0.5), transparent 62%)",
    "linear-gradient(180deg, #17130f 0%, #3c2f22 48%, #a97f4a 82%, #e3c99e 100%)",
  ].join(", "),
  alps: [
    "radial-gradient(90% 55% at 20% 90%, rgba(201,169,106,0.38), transparent 60%)",
    "linear-gradient(196deg, #e8dfc9 0%, #b3a78f 30%, #5d5a4c 66%, #2b2a23 100%)",
  ].join(", "),
  tarmac: [
    "radial-gradient(120% 45% at 50% 96%, rgba(201,169,106,0.5), transparent 62%)",
    "linear-gradient(180deg, #100e0b 0%, #221d16 55%, #4a3c28 88%, #77603c 100%)",
  ].join(", "),
  lacquer: [
    "radial-gradient(90% 60% at 28% 18%, rgba(232,207,164,0.16), transparent 55%)",
    "linear-gradient(155deg, #0e0c0a 0%, #241d15 56%, #493a26 100%)",
  ].join(", "),
  cognac: [
    "radial-gradient(85% 70% at 70% 25%, rgba(232,207,164,0.34), transparent 60%)",
    "linear-gradient(150deg, #2a1c11 0%, #57371c 44%, #8a5c2e 78%, #b5854a 100%)",
  ].join(", "),
  marble: [
    "repeating-linear-gradient(112deg, transparent 0 54px, rgba(117,106,88,0.12) 54px 56px, transparent 56px 120px)",
    "radial-gradient(120% 80% at 30% 10%, rgba(255,252,244,0.7), transparent 60%)",
    "linear-gradient(160deg, #efe9db 0%, #ded4bf 46%, #beb096 100%)",
  ].join(", "),
  salon: [
    "radial-gradient(80% 70% at 72% 30%, rgba(201,169,106,0.42), transparent 62%)",
    "linear-gradient(200deg, #241c14 0%, #43301f 52%, #6e5334 100%)",
  ].join(", "),
  amber: [
    "radial-gradient(80% 70% at 72% 30%, rgba(201,169,106,0.42), transparent 62%)",
    "linear-gradient(200deg, #2a2118 0%, #43301f 50%, #6e5334 100%)",
  ].join(", "),
  riviera: [
    "radial-gradient(100% 65% at 75% 15%, rgba(232,190,150,0.5), transparent 58%)",
    "linear-gradient(185deg, #cfa47c 0%, #a67d5a 36%, #5d4a3a 72%, #2e2620 100%)",
  ].join(", "),
  night: [
    "radial-gradient(90% 40% at 50% 100%, rgba(201,169,106,0.36), transparent 60%)",
    "linear-gradient(180deg, #0b0a08 0%, #14110c 52%, #241c12 100%)",
  ].join(", "),
};

/* Texture di superficie: onde per l'acqua, trama di tela per gli interni */
type Texture = "waves" | "linen" | "none";

const TEXTURE_BY_TONE: Record<PlateTone, Texture> = {
  dusk: "waves",
  sea: "waves",
  harbor: "waves",
  sail: "waves",
  riviera: "waves",
  night: "waves",
  teak: "none",
  sky: "none",
  alps: "none",
  tarmac: "none",
  lacquer: "none",
  marble: "none",
  cognac: "linen",
  salon: "linen",
  amber: "linen",
};

function TextureOverlay({ texture }: { texture: Texture }) {
  if (texture === "none") return null;

  if (texture === "waves") {
    return (
      <svg
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 w-full opacity-[0.16] mix-blend-overlay"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="plate-waves" width="220" height="36" patternUnits="userSpaceOnUse">
            <path
              d="M0 18 Q 27.5 10, 55 18 T 110 18 T 165 18 T 220 18"
              fill="none"
              stroke="#f6f1e7"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#plate-waves)" />
      </svg>
    );
  }

  return (
    <svg aria-hidden className="absolute inset-0 h-full w-full opacity-[0.1] mix-blend-overlay">
      <defs>
        <pattern id="plate-linen" width="7" height="7" patternUnits="userSpaceOnUse">
          <path d="M0 3.5h7M3.5 0v7" stroke="#f6f1e7" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#plate-linen)" />
    </svg>
  );
}

interface PlateProps {
  tone: PlateTone;
  caption?: string;
  ratio?: string;
  className?: string;
  /** Disattiva l'animazione di scala (es. dentro lightbox o thumbnails) */
  still?: boolean;
  /** Didascalia chiara, per fondi scuri */
  captionOnDark?: boolean;
  /**
   * URL di una fotografia vera, opzionale. Il gradiente resta sempre
   * disegnato sotto: se l'immagine non carica (o non è impostata),
   * la lastra tonale fa comunque il suo mestiere — nessuna icona rotta.
   */
  src?: string;
  alt?: string;
  /** Salta il lazy-loading per le immagini sopra la piega (es. hero) */
  priority?: boolean;
}

export function PlateSurface({
  tone,
  still = false,
  src,
  alt = "",
  priority = false,
}: {
  tone: PlateTone;
  still?: boolean;
  src?: string;
  alt?: string;
  priority?: boolean;
}) {
  const reduced = useReducedMotion();
  const animate = !still && !reduced;
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <>
      <motion.div
        aria-hidden
        className="grain absolute inset-0"
        style={{ backgroundImage: TONES[tone] }}
        initial={animate ? { scale: 1.08 } : false}
        whileInView={animate ? { scale: 1 } : undefined}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 2.4, ease: EASE_LUXE }}
      />
      <TextureOverlay texture={TEXTURE_BY_TONE[tone]} />
      {src && !errored && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: loaded ? 1 : 0,
            transition: reduced ? "none" : "opacity 1.1s ease-out",
          }}
        />
      )}
      <div className="pointer-events-none absolute inset-0 border border-cream/10" />
    </>
  );
}

export default function Plate({
  tone,
  caption,
  ratio = "4 / 5",
  className,
  still = false,
  captionOnDark = false,
  src,
  alt,
  priority = false,
}: PlateProps) {
  return (
    <figure className={className}>
      <div className="relative overflow-hidden" style={{ aspectRatio: ratio }}>
        <PlateSurface tone={tone} still={still} src={src} alt={alt} priority={priority} />
      </div>
      {caption && (
        <figcaption className="mt-4 flex items-baseline gap-4">
          <span
            className={`w-8 shrink-0 self-center ${captionOnDark ? "rule-dark" : "rule"}`}
            aria-hidden
          />
          <span className={`eyebrow ${captionOnDark ? "text-sand" : "text-taupe"}`}>
            {caption}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
