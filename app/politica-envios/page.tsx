export default function PoliticaEnvios() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-[#D4AF37] uppercase tracking-tighter">Política de Envío</h1>
        
        <div className="space-y-8 text-white/70 leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Condiciones de Entrega</h2>
            <p>Los productos de Korva Watches son enviados dentro del área metropolitana a través de transportadores autorizados.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Tiempos Estimados</h2>
            <p>El tiempo de entrega es de 2 a 5 días hábiles, contados a partir de la confirmación de tu pago. El costo del envío te será informado antes de finalizar la compra.</p>
          </section>

          <section className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h2 className="text-lg font-semibold text-[#D4AF37] mb-2">Recepción del Producto</h2>
            <p className="text-sm">Es indispensable verificar el estado del reloj al recibirlo. Cualquier daño, faltante o inconsistencia debe reportarse dentro de las 24 horas siguientes.</p>
          </section>
        </div>
      </div>
    </main>
  );
}