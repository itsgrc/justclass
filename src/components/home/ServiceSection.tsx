import type { Service } from "@/data/services";
import Plate from "@/components/ui/Plate";
import Reveal from "@/components/ui/Reveal";

interface ServiceSectionProps {
  service: Service;
  flip: boolean;
}

/*
 * Riga editoriale a due colonne, alternata destra/sinistra.
 * Indice numerato, titolo serif, scheda tecnica a filetti — niente card.
 */
export default function ServiceSection({ service, flip }: ServiceSectionProps) {
  return (
    <article
      id={service.id}
      className="grid items-center gap-12 border-t border-ink/10 py-24 lg:grid-cols-12 lg:gap-0 lg:py-32"
    >
      <Reveal
        className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}
      >
        <div className="flex items-baseline gap-6">
          <span className="font-display text-xl text-bronze italic">
            {service.index}
          </span>
          <p className="eyebrow text-taupe">{service.label}</p>
        </div>

        <h3 className="mt-8 font-display text-5xl leading-[1.05] font-light lg:text-6xl">
          {service.title}
        </h3>

        <p className="mt-8 max-w-md leading-relaxed text-taupe">
          {service.description}
        </p>

        <dl className="mt-12 max-w-md">
          {service.specs.map((spec) => (
            <div
              key={spec.term}
              className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-4"
            >
              <dt className="eyebrow text-taupe">{spec.term}</dt>
              <dd className="text-right font-display text-lg italic">
                {spec.detail}
              </dd>
            </div>
          ))}
        </dl>

        <a href="#contatti" className="link-luxe eyebrow mt-12 inline-block text-bronze">
          Componi la richiesta
        </a>
      </Reveal>

      <Reveal
        delay={0.15}
        className={`lg:col-span-6 ${
          flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"
        }`}
      >
        <Plate tone={service.tone} caption={service.caption} ratio="5 / 4" />
      </Reveal>
    </article>
  );
}
