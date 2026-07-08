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
  "service-villa":
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
  "service-medical":
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1400&q=80",
  "service-experience":
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
  "service-fractional":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  "service-staff":
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  "service-auction":
    "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=1400&q=80",
  "service-dining":
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
  "service-legacy":
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=80",
  "service-security":
    "https://images.unsplash.com/photo-1556157382-97eab916d1d2?auto=format&fit=crop&w=1400&q=80",
  "service-shopping":
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80",
  "service-art":
    "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1400&q=80",
  "service-events":
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=80",

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
