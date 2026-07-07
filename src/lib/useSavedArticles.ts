import { useState } from "react";

const KEY = "jc-saved-articles";

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
 * "Leggete dopo", senza account: un segnalibro locale, solo sul vostro
 * dispositivo. La gentilezza di non chiedere una registrazione per
 * ricordarsi di un articolo.
 */
export function useSavedArticles() {
  const [saved, setSaved] = useState<string[]>(read);

  const toggle = (slug: string) => {
    setSaved((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* il segnalibro è una cortesia, non un requisito */
      }
      return next;
    });
  };

  return { saved, toggle, isSaved: (slug: string) => saved.includes(slug) };
}
