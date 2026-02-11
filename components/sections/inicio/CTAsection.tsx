"use client";

import { MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

export function CTAsection() {
  return (
    <section className="relative py-24 bg-[#262626] overflow-hidden">
      {/* Elementos decorativos de fondo sutiles */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna de Texto */}
          <Reveal animation="slideRight">
          <div>
            <span className="text-[#F1E2C3] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              Atención Exclusiva
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider leading-tight">
              ¿Buscas una pieza <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F1E2C3] to-[#F1E2C3]">
                extraordinaria?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
              Nuestro equipo de expertos está disponible para asesorarte en la elección de tu próximo guardatiempos o resolver cualquier duda técnica.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/tu-numero" 
                target="_blank"
                className="bg-[#F1E2C3] hover:bg-white text-[#020617] font-bold uppercase tracking-widest py-4 px-8 rounded-sm transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-[#D4AF37]/20"
              >
                <MessageCircle size={20} />
                Contactar Asesor
              </a>
            </div>
          </div>
          </Reveal>

          {/* Columna de Tarjetas de Contacto Rápido */}
          <Reveal animation="slideLeft">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Tarjeta Email */}
            <div className="bg-[#1A1A1A] p-8 rounded-sm border border-white/5 hover:border-[#F1E2C3]/50 transition-colors group">
              <Mail className="text-[#F1E2C3] mb-4 group-hover:scale-110 transition-transform" size={28} /> 
              <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Email</h3>
              <p className="text-gray-500 text-sm mb-4">consultas@korva.com</p>
              <a href="mailto:consultas@korva.com" className="text-white text-xs uppercase tracking-widest flex items-center gap-2 group-hover:text-[#F1E2C3]">
                Enviar correo <ArrowRight size={14} />
              </a>
            </div>

            {/* Tarjeta Ubicación */}
            <div className="bg-[#1A1A1A] p-8 rounded-sm border border-white/5 hover:border-[#F1E2C3]/50 transition-colors group">
              <MapPin className="text-[#F1E2C3] mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Showroom</h3>
              <p className="text-gray-500 text-sm mb-4">Av. Lujo 123, Madrid</p>
              <button className="text-white text-xs uppercase tracking-widest flex items-center gap-2 group-hover:text-[#D4AF37]">
                Ver mapa <ArrowRight size={14} />
              </button>
            </div>

            {/* Tarjeta Horarios (Ocupa 2 columnas en sm) */}
            <div className="sm:col-span-2 bg-gradient-to-r from-[#1A1A1A] to-[#222] p-6 rounded-sm border border-white/5 flex items-center justify-between">
              <div>
                <p className="text-[#F1E2C3] text-[10px] uppercase tracking-[0.2em] font-bold">Horario Global</p>
                <p className="text-white text-sm">Lunes a Sábado: 09:00 - 20:00</p>
              </div>
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            </div>
          </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}