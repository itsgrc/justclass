/*
 * Fotografia vera per le lastre più in vista del sito. Formato URL
 * Unsplash standard (CDN diretta, nessuna chiave richiesta, licenza
 * commerciale senza attribuzione). La rete di questo ambiente di
 * sviluppo blocca per policy i domini Unsplash/Pexels, quindi questi
 * URL non sono stati verificati da qui: se un ID risulta scaduto o
 * errato, <Plate> ricade in automatico e senza sfarfallio sulla
 * lastra tonale esistente — mai un'icona rotta. Prima linea di
 * verifica in produzione: aprire ogni pagina una volta.
 */
export const IMAGES: Record<string, string> = {
  "hero-home":
    "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1600&q=80",

  "service-yacht":
    "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1400&q=80",
  "service-jet":
    "https://images.unsplash.com/photo-1540962351504-5bdd6d022c7f?auto=format&fit=crop&w=1400&q=80",
  "service-auto":
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
  "service-concierge":
    "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?auto=format&fit=crop&w=1400&q=80",

  "about-hero":
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",

  "care-fragili":
    "https://images.unsplash.com/photo-1576765607924-3f7b1c1bb1e0?auto=format&fit=crop&w=1400&q=80",
  "care-animali":
    "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1400&q=80",
  "care-luoghi":
    "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=1400&q=80",
  "care-equipaggi":
    "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1400&q=80",
};
