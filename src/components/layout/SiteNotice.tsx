import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/i18n/LanguageContext";

/*
 * Fascia sempre visibile, sopra l'header: questo è un progetto
 * dimostrativo, non una maison reale. Non si chiude — la trasparenza
 * non è un'opzione da nascondere dietro un pulsante "x".
 */
export default function SiteNotice() {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-x-0 top-0 z-[70] flex h-9 items-center gap-3 bg-espresso px-4 text-cream sm:px-6">
      <span className="flex shrink-0 items-center gap-2">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-error" aria-hidden />
        <span className="eyebrow shrink-0 whitespace-nowrap text-cream">{t.notice.badge}</span>
      </span>
      <span className="hidden truncate text-xs text-sand/80 sm:block">{t.notice.message}</span>
      <Link
        to="/legal"
        className="link-luxe-lined eyebrow ml-auto shrink-0 whitespace-nowrap text-champagne"
      >
        {t.notice.linkLabel}
      </Link>
    </div>
  );
}
