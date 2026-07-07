import type { ServiceFaq } from "@/data/services";
import Reveal from "@/components/ui/Reveal";

/*
 * Domande e risposte su <details> nativi: accessibili senza JS, con il
 * solo segno "+" che ruota a "×". Niente accordion animati, niente box.
 */
export default function FaqList({ items }: { items: ServiceFaq[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <Reveal key={item.q} delay={0.06 * i}>
          <details className="group border-b border-ink/10">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-8 py-6 [&::-webkit-details-marker]:hidden">
              <span className="font-display text-2xl leading-snug font-light">
                {item.q}
              </span>
              <span
                aria-hidden
                className="shrink-0 font-display text-2xl font-light text-bronze transition-transform duration-500 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-2xl pb-8 text-sm leading-relaxed text-taupe sm:text-base">
              {item.a}
            </p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
