import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { EASE_LUXE } from "@/lib/motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const PRIMARY = [
  { label: "Home", to: "/" },
  { label: "Flotta", to: "/fleet" },
  { label: "Calendario", to: "/calendar" },
  { label: "Journal", to: "/journal" },
  { label: "La maison", to: "/about" },
  { label: "Contatti", to: "/contact" },
];

/*
 * Overlay a tutto schermo su fondo espresso: voci principali in serif,
 * i quattro servizi come indice numerato, contatti in coda.
 * Le voci entrano sfalsate; Esc chiude; lo scroll resta bloccato.
 */
export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Menu di navigazione"
          className="fixed inset-0 z-[80] overflow-y-auto bg-espresso text-cream"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE_LUXE }}
        >
          <div className="container-luxe flex h-20 items-center justify-between">
            <span className="font-sans text-sm tracking-luxe text-cream">JUSTCLASS</span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="link-luxe eyebrow cursor-pointer text-champagne"
            >
              Chiudi
            </button>
          </div>

          <div className="container-luxe grid gap-16 pt-10 pb-20 sm:grid-cols-2">
            <nav aria-label="Pagine">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
              >
                {PRIMARY.map((item) => (
                  <motion.li
                    key={item.to}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_LUXE } },
                    }}
                  >
                    <Link
                      to={item.to}
                      onClick={onClose}
                      className="block border-b border-cream/10 py-5 font-display text-4xl font-light transition-colors duration-500 hover:text-champagne"
                      activeProps={{ className: "block border-b border-cream/10 py-5 font-display text-4xl font-light text-champagne italic" }}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            <div className="flex flex-col justify-between gap-16">
              <nav aria-label="Servizi">
                <p className="eyebrow text-champagne/70">I servizi</p>
                <motion.ul
                  className="mt-6"
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.4 } } }}
                >
                  {services.map((service) => (
                    <motion.li
                      key={service.id}
                      variants={{
                        hidden: { opacity: 0, y: 16 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_LUXE } },
                      }}
                    >
                      <Link
                        to="/services/$slug"
                        params={{ slug: service.id }}
                        onClick={onClose}
                        className="group flex items-baseline gap-5 py-3"
                      >
                        <span className="font-display text-sm text-bronze italic">{service.index}</span>
                        <span className="link-luxe text-lg font-light text-sand transition-colors duration-500 group-hover:text-cream">
                          {service.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, ease: EASE_LUXE, delay: 0.7 }}
              >
                <Link
                  to="/request"
                  onClick={onClose}
                  className="eyebrow mb-14 inline-block border border-champagne/50 px-10 py-4.5 text-center text-champagne transition-colors duration-500 hover:bg-champagne hover:text-espresso"
                >
                  Richiedete una proposta
                </Link>
                <p className="eyebrow text-champagne/70">Il desk</p>
                <a
                  href="mailto:private@justclass.com"
                  className="link-luxe mt-4 inline-block text-sand hover:text-cream"
                >
                  private@justclass.com
                </a>
                <p className="mt-2 text-sm text-sand/70">
                  Londra · Monte-Carlo · Milano — 24/7
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
