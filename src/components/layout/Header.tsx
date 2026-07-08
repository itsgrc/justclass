import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import MobileMenu from "@/components/layout/MobileMenu";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const NAV = [
    { label: t.nav.fleet, to: "/fleet" },
    { label: t.nav.itineraries, to: "/itineraries" },
    { label: t.nav.calendar, to: "/calendar" },
    { label: t.nav.journal, to: "/journal" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.contact, to: "/contact" },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-ink/10 bg-ivory/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-luxe flex h-20 items-center justify-between">
          <Link
            to="/"
            className="font-sans text-sm font-normal tracking-luxe text-ink"
            aria-label="JUSTCLASS — home"
          >
            JUSTCLASS
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Principale">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                preload="intent"
                className="link-luxe eyebrow text-taupe transition-colors duration-500 hover:text-ink"
                activeProps={{ className: "link-luxe eyebrow text-bronze" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-8">
            <LanguageToggle />
            <ThemeToggle />
            <Link
              to="/request"
              preload="intent"
              className="link-luxe-lined link-luxe eyebrow hidden text-bronze sm:inline-block"
            >
              {t.nav.requestCta}
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="link-luxe eyebrow cursor-pointer text-ink lg:hidden"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
            >
              {t.nav.menu}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
