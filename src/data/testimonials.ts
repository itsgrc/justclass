export interface Testimonial {
  quote: string;
  initials: string;
  attribution: string;
}

/*
 * Per policy della maison i membri non vengono mai citati per nome:
 * iniziali e qualifica, nient'altro. La discrezione è parte del prodotto.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Hanno restituito ad agosto la sua parte migliore: il silenzio. Tre estati dopo, non saprei più organizzarne una senza di loro.",
    initials: "F. M.",
    attribution: "Armatore, Ginevra — membro dal 2021",
  },
  {
    quote:
      "Un messaggio alle undici di sera, un decollo alle sette del mattino. Nessuna domanda superflua, nessun dettaglio lasciato a me.",
    initials: "S. A.",
    attribution: "Famiglia imprenditoriale, Milano — membro dal 2019",
  },
  {
    quote:
      "In quattro anni non ho mai sentito il mio nome fuori posto. È il motivo per cui il loro numero è l'unico che condivido volentieri.",
    initials: "J.-P. R.",
    attribution: "Collezionista, Monte-Carlo — membro dal 2022",
  },
];
