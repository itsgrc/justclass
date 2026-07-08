import HairlineButton from "@/components/ui/HairlineButton";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="container-luxe flex min-h-[70vh] flex-col items-center justify-center py-40 text-center">
      <Reveal>
        <p className="eyebrow text-bronze">{t.notFound.eyebrow}</p>
        <h1 className="mt-8 font-display text-5xl leading-tight font-light sm:text-6xl">
          {t.notFound.titleLine1}
          <br />
          <em className="font-normal">{t.notFound.titleLine2}</em>
        </h1>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-taupe">{t.notFound.detail}</p>
        <div className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
          <HairlineButton to="/">{t.notFound.ctaHome}</HairlineButton>
          <HairlineButton to="/contact">{t.notFound.ctaDesk}</HairlineButton>
        </div>
      </Reveal>
    </section>
  );
}
