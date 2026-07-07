import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface BaseProps {
  children: ReactNode;
  /** Su fondi scuri il filetto e il fill di hover passano allo champagne. */
  onDark?: boolean;
  className?: string;
}

type HairlineButtonProps = BaseProps &
  (
    | { to: string; search?: Record<string, unknown>; href?: never; type?: never; onClick?: never; disabled?: never }
    | { href: string; to?: never; type?: never; onClick?: never; disabled?: never }
    | {
        type?: "button" | "submit";
        onClick?: () => void;
        disabled?: boolean;
        to?: never;
        href?: never;
      }
  );

/*
 * L'unico "bottone" del sito: rettangolo a filetto sottile, angoli vivi,
 * riempimento pieno al passaggio. Niente radius, niente ombre.
 * Si rende come <Link>, <a> o <button> a seconda delle props.
 */
export default function HairlineButton(props: HairlineButtonProps) {
  const { children, onDark = false, className = "" } = props;

  const palette = onDark
    ? "border-champagne/50 text-champagne hover:bg-champagne hover:text-espresso"
    : "border-ink/30 text-ink hover:bg-ink hover:text-ivory";

  const classes = `eyebrow inline-block cursor-pointer border px-10 py-4.5 text-center transition-colors duration-500 disabled:cursor-default disabled:opacity-40 ${palette} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} search={props.search} className={classes}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    return (
      <a href={props.href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={"type" in props ? (props.type ?? "button") : "button"}
      onClick={"onClick" in props ? props.onClick : undefined}
      disabled={"disabled" in props ? props.disabled : undefined}
      className={classes}
    >
      {children}
    </button>
  );
}
