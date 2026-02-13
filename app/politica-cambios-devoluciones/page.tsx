export default function PoliticaCambios() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-[#D4AF37] uppercase tracking-tighter">Cambios y Devoluciones</h1>
        
        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 italic">Derecho de Retracto</h2>
            <p>Puedes ejercer el derecho de retracto dentro de los cinco (5) días hábiles siguientes a la entrega. El producto debe estar sin uso y en su empaque original. Los costos de transporte serán asumidos por el cliente.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 italic">Condiciones para Cambios</h2>
            <p>Se aceptan cambios única y exclusivamente por:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Producto defectuoso.</li>
              <li>Producto diferente al solicitado.</li>
              <li>Daños ocurridos durante el transporte.</li>
            </ul>
          </section>

          <section className="pt-6 border-t border-white/10">
            <p className="text-sm">Para iniciar el proceso, envía una solicitud con evidencia fotográfica a: <span className="text-[#D4AF37]">Korvawatches@gmail.com</span>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}