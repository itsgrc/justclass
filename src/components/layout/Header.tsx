import { useEffect, useState } from "react";

const NAV = [
  { label: "Servizi", href: "#servizi" },
  { label: "La maison", href: "#maison" },
  { label: "Contatti", href: "#contatti" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-ink/10 bg-ivory/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-luxe flex h-20 items-center justify-between">
        <a
          href="/"
          className="font-sans text-sm font-normal tracking-luxe text-ink"
        >
          JUSTCLASS
        </a>

        <nav className="hidden items-center gap-12 md:flex" aria-label="Principale">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="link-luxe eyebrow text-taupe hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contatti" className="link-luxe-lined link-luxe eyebrow text-bronze">
          Richiedi l'accesso
        </a>
      </div>
    </header>
  );
}
