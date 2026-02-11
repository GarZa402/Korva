import { Truck, BadgeCheck, RefreshCw } from "lucide-react";
import Reveal from "@/components/animations/Reveal";



export function FeaturesBar() {
  return (
 
    <section className="bg-black border-b border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {/* Global Shipping */}
          <Reveal animation="fadeUp">
          <div className="flex items-center justify-center gap-4 py-2">
            <Truck className="text-[#F1E2C3] text-3xl" size={32} />
            <div className="text-left">
              <h3 className="text-white font-medium uppercase tracking-wide text-sm">
                Envío Gratis en Medellín
              </h3>
              <p className="text-gray-400 text-xs">
                Gratis en pedidos superiores a 150k COP
              </p>
            </div>
          </div>
          </Reveal>

          {/* 5-Year Warranty */}
          <Reveal animation="fadeUp">
          <div className="flex items-center justify-center gap-4 py-2">
            <BadgeCheck className="text-[#F1E2C3] text-3xl" size={32} />  
            <div className="text-left">
              <h3 className="text-white font-medium uppercase tracking-wide text-sm">
                5-Años de Garantía
              </h3>
              <p className="text-gray-400 text-xs">Calidad Garantizada</p>
            </div>
          </div>
          </Reveal>

          {/* 30-Day Returns */}
          <Reveal animation="fadeUp">
          <div className="flex items-center justify-center gap-4 py-2">
            <RefreshCw className="text-[#F1E2C3] text-3xl" size={32} />
            <div className="text-left">
              <h3 className="text-white font-medium uppercase tracking-wide text-sm">
                30-Días de Devolución
              </h3>
              <p className="text-gray-400 text-xs">Confía en Nuestros Productos</p>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>

  );
}