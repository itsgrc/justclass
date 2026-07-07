import { Fragment } from "react";
import { Link } from "@tanstack/react-router";

export interface Crumb {
  label: string;
  to?: string;
}

/* Percorso in maiuscoletto separato da filetti brevi. L'ultima voce è la pagina. */
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Percorso" className="flex flex-wrap items-center gap-4">
      <Link to="/" className="link-luxe eyebrow text-taupe hover:text-ink">
        JUSTCLASS
      </Link>
      {items.map((item) => (
        <Fragment key={item.label}>
          <span className="rule w-5" aria-hidden />
          {item.to ? (
            <Link to={item.to} className="link-luxe eyebrow text-taupe hover:text-ink">
              {item.label}
            </Link>
          ) : (
            <span className="eyebrow text-bronze" aria-current="page">
              {item.label}
            </span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
