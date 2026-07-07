import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import MobileMenu from "@/components/layout/MobileMenu";

const NAV = [
  { label: "Flotta", to: "/fleet" },
  { label: "Journal", to: "/journal" },
  { label: "La maison", to: "/about" },
  { label: "Contatti", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

          <nav className="hidden items-center gap-12 lg:flex" aria-label="Principale">
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

          <div className="flex items-center gap-10">
            <Link
              to="/request"
              preload="intent"
              className="link-luxe-lined link-luxe eyebrow hidden text-bronze sm:inline-block"
            >
              Richiedi un preventivo
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="link-luxe eyebrow cursor-pointer text-ink lg:hidden"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
