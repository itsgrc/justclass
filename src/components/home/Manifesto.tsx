import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

const STRINGS = {
  it: {
    eyebrow: "La maison",
    before: "Non organizziamo viaggi. Custodiamo",
    time: "il tempo",
    after: "— l'unica cosa che non si può acquistare — e lo restituiamo ai nostri ospiti, impeccabile.",
  },
  en: {
    eyebrow: "The Maison",
    before: "We don't organise trips. We safeguard",
    time: "time",
    after: "— the one thing that can't be bought — and return it to our guests, impeccable.",
  },
} as const;

export default function Manifesto() {
  const { locale } = useLanguage();
  const s = STRINGS[locale];
  return (
    <section id="maison" className="bg-parchment">
      <div className="container-luxe py-32 lg:py-44">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-bronze">{s.eyebrow}</p>
          <p className="mt-12 font-display text-3xl leading-snug font-light sm:text-4xl lg:text-[2.75rem]">
            {s.before} <em>{s.time}</em> {s.after}
          </p>
          <div className="rule mx-auto mt-12 w-16" />
        </Reveal>
      </div>
    </section>
  );
}
