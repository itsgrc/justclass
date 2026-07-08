import HairlineButton from "@/components/ui/HairlineButton";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

const STRINGS = {
  it: {
    byInvitation: "Su invito",
    titleLine1: "Ogni viaggio comincia",
    titleLine2Before: "da",
    titleLine2Em: "una conversazione.",
    detail: "Raccontateci dove volete essere. Al resto pensiamo noi.",
    cta: "Iniziate la conversazione",
    affiliations: "MYBA · Operatori EASA / FAA · Les Clefs d'Or · Lloyd's of London",
  },
  en: {
    byInvitation: "By Invitation",
    titleLine1: "Every journey begins",
    titleLine2Before: "with",
    titleLine2Em: "a conversation.",
    detail: "Tell us where you want to be. We'll take care of the rest.",
    cta: "Start the Conversation",
    affiliations: "MYBA · EASA / FAA Operators · Les Clefs d'Or · Lloyd's of London",
  },
} as const;

export default function FinalCta() {
  const { locale } = useLanguage();
  const s = STRINGS[locale];
  return (
    <section id="contatti" className="grain relative overflow-hidden bg-umber text-cream">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 110%, rgba(201,169,106,0.22), transparent 65%)",
        }}
      />
      <div className="container-luxe relative py-32 text-center lg:py-44">
        <Reveal className="mx-auto max-w-2xl">
          <p className="eyebrow text-champagne">{s.byInvitation}</p>
          <h2 className="mt-10 font-display text-4xl leading-tight font-light sm:text-5xl lg:text-6xl">
            {s.titleLine1}
            <br />
            {s.titleLine2Before} <em className="font-normal">{s.titleLine2Em}</em>
          </h2>
          <p className="mx-auto mt-8 max-w-md leading-relaxed text-sand">{s.detail}</p>
          <div className="mt-14 flex flex-col items-center gap-8">
            <HairlineButton to="/request" onDark>
              {s.cta}
            </HairlineButton>
            <a
              href="mailto:private@justclass.com"
              className="link-luxe-lined link-luxe text-sm text-sand hover:text-cream"
            >
              private@justclass.com
            </a>
          </div>
          <p className="eyebrow mt-16 text-sand/50">{s.affiliations}</p>
        </Reveal>
      </div>
    </section>
  );
}
