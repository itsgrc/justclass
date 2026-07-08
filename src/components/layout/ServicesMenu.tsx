import { forwardRef } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { getServicesForLocale } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageContext";
import { EASE_LUXE } from "@/lib/motion";

interface ServicesMenuProps {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}

/*
 * Mega-menu dell'header: l'intero catalogo dei servizi, due colonne,
 * indice numerato come nelle pagine editoriali. Data-driven: cresce
 * da sola con ogni nuova voce in services.ts, senza toccare l'header.
 */
const ServicesMenu = forwardRef<HTMLDivElement, ServicesMenuProps>(function ServicesMenu(
  { open, onToggle, onClose },
  ref,
) {
  const { t, locale } = useLanguage();
  const services = getServicesForLocale(locale);

  return (
    <div ref={ref} className="relative hidden lg:block">
      <button
        type="button"
        onClick={onToggle}
        aria-haspopup="true"
        aria-expanded={open}
        className="link-luxe eyebrow cursor-pointer text-taupe transition-colors duration-500 hover:text-ink"
      >
        {t.nav.services}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE_LUXE }}
            className="absolute left-1/2 top-full z-50 mt-6 w-[42rem] -translate-x-1/2 border border-ink/10 bg-ivory p-10"
          >
            <div className="grid grid-cols-2 gap-x-10">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to="/services/$slug"
                  params={{ slug: service.id }}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 border-b border-ink/10 py-3.5"
                >
                  <span className="font-display text-sm text-bronze italic">{service.index}</span>
                  <span className="link-luxe text-base font-light text-ink transition-colors duration-500 group-hover:text-bronze">
                    {service.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default ServicesMenu;
