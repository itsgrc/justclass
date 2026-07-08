import { getTestimonialsForLocale } from "@/data/testimonials";
import Reveal from "@/components/ui/Reveal";
import RuleReveal from "@/components/ui/RuleReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const STRINGS = {
  it: {
    eyebrow: "I membri",
    titleLine1: "Per policy, niente nomi.",
    titleLine2: "Per fortuna, parlano lo stesso.",
  },
  en: {
    eyebrow: "The Members",
    titleLine1: "By policy, no names.",
    titleLine2: "Fortunately, they speak just as well.",
  },
} as const;

/*
 * Voci dei membri: iniziali e qualifica, mai nomi — la discrezione è
 * parte del prodotto e la sezione lo dice anche visivamente.
 */
export default function Testimonials() {
  const { locale } = useLanguage();
  const s = STRINGS[locale];
  const testimonials = getTestimonialsForLocale(locale);

  return (
    <section className="bg-parchment">
      <div className="container-luxe py-24 lg:py-32">
        <Reveal>
          <p className="eyebrow text-bronze">{s.eyebrow}</p>
          <h2 className="mt-8 font-display text-4xl leading-tight font-light lg:text-5xl">
            {s.titleLine1}
            <br />
            <em className="font-normal">{s.titleLine2}</em>
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
