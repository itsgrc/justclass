import { useState } from "react";

const KEY = "jc-fleet-selection";

function read(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((s) => typeof s === "string") : [];
  } catch {
    return [];
  }
}

/*
 * La selezione personale sulla flotta: nessun cuoricino, nessun account —
 * un appunto locale, come piegare l'angolo di una pagina del catalogo.
 */
export function useSelection() {
  const [selection, setSelection] = useState<string[]>(read);

  const toggle = (id: string) => {
    setSelection((prev) => {
      const next = prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id];
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* la selezione è una cortesia, non un requisito */
      }
      return next;
    });
  };

  return { selection, toggle, isSelected: (id: string) => selection.includes(id) };
}
