import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import MobileMenu from "@/components/layout/MobileMenu";
import ServicesMenu from "@/components/layout/ServicesMenu";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!servicesOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [servicesOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-9 z-50 transition-all duration-700 ${
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

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Principale">
            <ServicesMenu
              ref={servicesRef}
              open={servicesOpen}
              onToggle={() => setServicesOpen((v) => !v)}
              onClose={() => setServicesOpen(false)}
            />
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

          <div className="flex items-center gap-6">
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
              className="link-luxe eyebrow -my-3.5 cursor-pointer px-1 py-3.5 text-ink lg:hidden"
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
