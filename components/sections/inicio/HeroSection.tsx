import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Reloj from "@/public/images/relojhero.jpg";
import Reveal from "@/components/animations/Reveal";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#020617]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={Reloj}
          alt="Luxury watch"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
      </div>

      {/* Overlay */}
      <Reveal animation="fadeIn">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/10 to-[#F1E2C3] opacity-50" />

        {/* Content */}

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
          <p className="text-[#F1E2C3] uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6">
            The 2026 Gold Standard
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
            TIMELESS PRECISION
          </h1>

          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#F1E2C3] via-[#F2E3C9] to-[#D4AF37] text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Descubre la excelencia relojera. Una obra maestra para quienes
            aprecian el tiempo con distinción.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/catalogo"
              className="bg-[#F1E2C3] hover:bg-white text-[#020617] font-semibold py-4 px-10 rounded-lg transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Catálogo
            </a>
            <a
              href="#"
              className="text-white flex items-center gap-2 hover:text-[#F1E2C3] transition-colors"
            >
              Ver Colecciones
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
