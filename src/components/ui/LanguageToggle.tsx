import { useLanguage } from "@/i18n/LanguageContext";

/*
 * Selettore di lingua: due lettere, un filetto verticale tra le due —
 * stessa grammatica visiva del ThemeToggle. La lingua corrente è in
 * bronzo, l'altra in taupe con hover.
 */
export default function LanguageToggle({ onDark = false }: { onDark?: boolean }) {
  const { locale, setLocale } = useLanguage();

  const activeClass = onDark ? "text-champagne" : "text-bronze";
  const inactiveClass = onDark ? "text-sand hover:text-cream" : "text-taupe hover:text-ink";

  return (
    <div className="eyebrow flex items-center gap-3" role="group" aria-label="Lingua / Language">
      <button
        type="button"
        onClick={() => setLocale("it")}
        aria-current={locale === "it" || undefined}
        className={`-my-3.5 cursor-pointer px-1 py-3.5 transition-colors duration-500 ${
          locale === "it" ? activeClass : inactiveClass
        }`}
      >
        IT
      </button>
      <span className={`${onDark ? "rule-dark" : "rule"} h-3 w-px`} aria-hidden />
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-current={locale === "en" || undefined}
        className={`-my-3.5 cursor-pointer px-1 py-3.5 transition-colors duration-500 ${
          locale === "en" ? activeClass : inactiveClass
        }`}
      >
        EN
      </button>
    </div>
  );
}
