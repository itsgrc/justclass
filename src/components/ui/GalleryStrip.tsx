import { useState } from "react";
import type { AssetPlate } from "@/data/fleet";
import { PlateSurface } from "@/components/ui/Plate";
import Lightbox from "@/components/ui/Lightbox";
import Reveal from "@/components/ui/Reveal";

interface GalleryStripProps {
  plates: AssetPlate[];
  label: string;
}

/*
 * Griglia editoriale: prima lastra a piena larghezza, le altre in fila.
 * Ogni lastra apre il visore. Contatore discreto sull'angolo.
 */
export default function GalleryStrip({ plates, label }: GalleryStripProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [main, ...rest] = plates;

  return (
    <div>
      <Reveal>
        <button
          type="button"
          onClick={() => setOpenIndex(0)}
          className="group relative block w-full cursor-pointer overflow-hidden text-left"
          style={{ aspectRatio: "16 / 9" }}
          aria-label={`Apri la galleria di ${label}`}
        >
          <PlateSurface tone={main.tone} />
          <span className="eyebrow absolute right-5 bottom-5 border border-cream/20 bg-espresso/40 px-4 py-2 text-cream/90 backdrop-blur-sm transition-colors duration-500 group-hover:bg-espresso/70">
            1 / {plates.length} — Apri
          </span>
        </button>
        <p className="eyebrow mt-4 text-taupe">{main.caption}</p>
      </Reveal>

      {rest.length > 0 && (
        <div className="mt-10 grid grid-cols-3 gap-5">
          {rest.map((plate, i) => (
            <Reveal key={plate.caption} delay={0.08 * (i + 1)}>
              <button
                type="button"
                onClick={() => setOpenIndex(i + 1)}
                className="relative block w-full cursor-pointer overflow-hidden"
                style={{ aspectRatio: "4 / 3" }}
                aria-label={`${plate.caption} — apri`}
              >
                <PlateSurface tone={plate.tone} still />
              </button>
            </Reveal>
          ))}
        </div>
      )}

      <Lightbox
        plates={plates}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
        label={label}
      />
    </div>
  );
}
