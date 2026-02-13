export default function PoliticaGarantia() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-[#D4AF37] uppercase tracking-tighter">Garantía Legal y Reembolsos</h1>
        
        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Garantía Korva Watches</h2>
            <p>Todos nuestros productos cuentan con una garantía de 3 meses bajo las siguientes circunstancias:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Defectos de fabricación.</li>
              <li>Inconsistencias con el modelo solicitado.</li>
              <li>Daños en el transporte.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 italic">Proceso de Reembolso</h2>
            <p>Una vez aprobada la devolución, el reembolso se realizará en un plazo máximo de 30 días calendario utilizando el mismo medio de pago.</p>
          </section>

          <section className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h2 className="text-sm font-bold text-white uppercase mb-4 tracking-widest">Atención al Cliente</h2>
            <p className="text-sm">WhatsApp: 3008343485</p>
            <p className="text-sm italic">Horario: Lunes a Viernes (8am - 5pm) / Sábados y Domingos (9am - 2pm)</p>
          </section>
        </div>
      </div>
    </main>
  );
}