import { useEffect, useRef } from "react";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SiteNotice from "@/components/layout/SiteNotice";
import NotFound from "@/components/layout/NotFound";
import BackToTop from "@/components/ui/BackToTop";
import { EASE_LUXE } from "@/lib/motion";
import { pageHead } from "@/lib/seo";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createRootRoute({
  head: () =>
    pageHead(
      "JUSTCLASS",
      "Charter nautico, aviazione privata, automobili d'eccezione e concierge dedicato. Su misura, su invito.",
    ),
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduced = useReducedMotion();
  const mainRef = useRef<HTMLElement>(null);
  const isFirstRender = useRef(true);
  const { t } = useLanguage();

  // Dopo ogni navigazione il focus riparte dal contenuto, non dal nulla.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <HeadContent />
      <a href="#contenuto" className="skip-link eyebrow">
        {t.common.skipToContent}
      </a>
      <SiteNotice />
      <Header />
      <main id="contenuto" ref={mainRef} tabIndex={-1} className="flex-1 focus:outline-none">
        <motion.div
          key={pathname}
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_LUXE }}
        >
          <Outlet />
        </motion.div>
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}
