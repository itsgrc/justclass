import type { ReactNode } from "react";
import { motion } from "framer-motion";
import MaskLines from "@/components/ui/MaskLines";
import Breadcrumb, { type Crumb } from "@/components/ui/Breadcrumb";
import { EASE_LUXE } from "@/lib/motion";

interface PageHeaderProps {
  eyebrow?: string;
  titleLines: ReactNode[];
  standfirst?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
}

/*
 * Apertura standard delle pagine interne: percorso, occhiello, titolo
 * display a sipario, eventuale sottotitolo. Il resto della pagina
 * comincia sempre sotto un filetto.
 */
export default function PageHeader({
  eyebrow,
  titleLines,
  standfirst,
  crumbs,
  children,
}: PageHeaderProps) {
  return (
    <header className="container-luxe pt-36 pb-16 lg:pt-44 lg:pb-20">
      {crumbs && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: EASE_LUXE }}
        >
          <Breadcrumb items={crumbs} />
        </motion.div>
      )}

      {eyebrow && (
        <motion.p
          className={`eyebrow text-bronze ${crumbs ? "mt-14" : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: EASE_LUXE, delay: 0.1 }}
        >
          {eyebrow}
        </motion.p>
      )}

      <h1 className="mt-8 font-display text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[1.02] font-light tracking-[-0.01em]">
        <MaskLines lines={titleLines} delay={0.15} />
      </h1>

      {standfirst && (
        <motion.p
          className="mt-8 max-w-xl text-lg leading-relaxed font-light text-taupe"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE_LUXE, delay: 0.5 }}
        >
          {standfirst}
        </motion.p>
      )}

      {children}
    </header>
  );
}
