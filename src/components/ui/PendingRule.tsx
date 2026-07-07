/* Stato di attesa: un filetto che si disegna e si ritira. Niente spinner. */
export default function PendingRule() {
  return (
    <div className="container-luxe flex min-h-[60vh] flex-col items-center justify-center" role="status">
      <div className="rule-pending w-24" />
      <p className="eyebrow mt-6 text-taupe">Un istante</p>
    </div>
  );
}
