import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  detail: string;
  children?: ReactNode;
}

/* Stato vuoto con tono utile: mai un vicolo cieco, sempre una via d'uscita. */
export default function EmptyState({ title, detail, children }: EmptyStateProps) {
  return (
    <div className="border-t border-b border-ink/10 py-20 text-center">
      <p className="font-display text-3xl font-light italic">{title}</p>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-taupe">{detail}</p>
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}
