import type { AnchorHTMLAttributes, ReactNode } from "react";

interface HairlineButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  /** Su fondi scuri il filetto e il fill di hover passano allo champagne. */
  onDark?: boolean;
}

/*
 * L'unico "bottone" del sito: rettangolo a filetto sottile, angoli vivi,
 * riempimento pieno al passaggio. Niente radius, niente ombre.
 */
export default function HairlineButton({
  children,
  onDark = false,
  className = "",
  ...rest
}: HairlineButtonProps) {
  const palette = onDark
    ? "border-champagne/50 text-champagne hover:bg-champagne hover:text-espresso"
    : "border-ink/30 text-ink hover:bg-ink hover:text-ivory";

  return (
    <a
      {...rest}
      className={`eyebrow inline-block border px-10 py-4.5 transition-colors duration-500 ${palette} ${className}`}
    >
      {children}
    </a>
  );
}
