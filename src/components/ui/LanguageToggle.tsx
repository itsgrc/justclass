import { useLanguage } from "@/i18n/LanguageContext";

/*
 * Selettore di lingua: due lettere, un filetto verticale tra le due —
 * stessa grammatica visiva del ThemeToggle. La lingua corrente è in
 * bronzo, l'altra in taupe con hover.
 */
export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="eyebrow flex items-center gap-3" role="group" aria-label="Lingua / Language">
      <button
        type="button"
        onClick={() => setLocale("it")}
        aria-current={locale === "it" || undefined}
        className={`cursor-pointer transition-colors duration-500 ${
          locale === "it" ? "text-bronze" : "text-taupe hover:text-ink"
        }`}
      >
        IT
      </button>
      <span className="rule h-3 w-px" aria-hidden />
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-current={locale === "en" || undefined}
        className={`cursor-pointer transition-colors duration-500 ${
          locale === "en" ? "text-bronze" : "text-taupe hover:text-ink"
        }`}
      >
        EN
      </button>
    </div>
  );
}
