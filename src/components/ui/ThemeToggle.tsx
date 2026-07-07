import { useState } from "react";

type Theme = "giorno" | "sera";

function currentTheme(): Theme {
  if (typeof document === "undefined") return "giorno";
  return document.documentElement.dataset.theme === "sera" ? "sera" : "giorno";
}

/*
 * Il piccolo interruttore giorno/sera: un gesto di gentilezza per chi
 * legge di notte. Il tema è applicato pre-paint da index.html; qui si
 * cambia e si ricorda.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  const toggle = () => {
    const next: Theme = theme === "sera" ? "giorno" : "sera";
    if (next === "sera") {
      document.documentElement.dataset.theme = "sera";
    } else {
      delete document.documentElement.dataset.theme;
    }
    try {
      localStorage.setItem("jc-theme", next);
    } catch {
      /* la memoria del tema è una cortesia, non un requisito */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="link-luxe eyebrow cursor-pointer text-taupe transition-colors duration-500 hover:text-ink"
      aria-label={theme === "sera" ? "Passate alla modalità giorno" : "Passate alla modalità sera"}
    >
      {theme === "sera" ? "Giorno" : "Sera"}
    </button>
  );
}
