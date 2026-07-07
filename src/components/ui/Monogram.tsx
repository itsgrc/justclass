import { PlateSurface } from "@/components/ui/Plate";
import type { PlateTone } from "@/components/ui/Plate";

interface MonogramProps {
  initials: string;
  tone?: PlateTone;
  className?: string;
}

/*
 * Ritratto segnaposto: iniziali in serif su lastra tonale. Più dignitoso
 * di un avatar generico, in attesa della fotografia in bianco e nero.
 */
export default function Monogram({ initials, tone = "salon", className = "" }: MonogramProps) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: "3 / 4" }} aria-hidden>
      <PlateSurface tone={tone} still />
      <span className="absolute inset-0 flex items-center justify-center font-display text-5xl font-light text-cream/85 italic">
        {initials}
      </span>
    </div>
  );
}
