import { testimonials } from "@/data/testimonials";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";

/*
 * Voci dei membri: iniziali e qualifica, mai nomi — la discrezione è
 * parte del prodotto e la sezione lo dice anche visivamente.
 */
export default function Testimonials() {
  return (
    <section className="bg-parchment">
      <div className="container-luxe py-24 lg:py-32">
        <Reveal>
          <p className="eyebrow text-bronze">I membri</p>
          <h2 className="mt-8 font-display text-4xl leading-tight font-light lg:text-5xl">
            Per policy, niente nomi.
            <br />
            <em className="font-normal">Per fortuna, parlano lo stesso.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-16 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.initials} delay={0.12 * i}>
              <RuleReveal delay={0.12 * i} />
              <blockquote className="mt-8">
                <p className="font-display text-2xl leading-snug font-light italic">
                  “{t.quote}”
                </p>
                <footer className="mt-8 flex items-baseline gap-4">
                  <span className="font-display text-lg text-bronze">{t.initials}</span>
                  <span className="eyebrow text-taupe">{t.attribution}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
