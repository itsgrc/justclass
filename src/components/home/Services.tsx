import { getServicesForLocale } from "@/data/services";
import Reveal from "@/components/ui/Reveal";
import ServiceSection from "@/components/home/ServiceSection";
import { useLanguage } from "@/i18n/LanguageContext";

const STRINGS = {
  it: {
    eyebrow: "I servizi",
    titleLine1: "Quattro discipline.",
    titleLine2: "Una sola firma.",
  },
  en: {
    eyebrow: "The Services",
    titleLine1: "Four disciplines.",
    titleLine2: "One signature.",
  },
} as const;

export default function Services() {
  const { locale } = useLanguage();
  const s = STRINGS[locale];
  const services = getServicesForLocale(locale);

  return (
    <section id="servizi" className="container-luxe pt-32 lg:pt-44">
      <Reveal className="max-w-3xl pb-24 lg:pb-32">
        <p className="eyebrow text-bronze">{s.eyebrow}</p>
        <h2 className="mt-10 font-display text-5xl leading-[1.05] font-light sm:text-6xl lg:text-7xl">
          {s.titleLine1}
          <br />
          <em className="font-normal">{s.titleLine2}</em>
        </h2>
      </Reveal>

      {services.map((service, i) => (
        <ServiceSection key={service.id} service={service} flip={i % 2 === 1} />
      ))}
    </section>
  );
}
