import Image from "next/image";
import {Instagram, Mail} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <a
              href="#"
              className="text-2xl font-bold tracking-[0.2em] uppercase text-white mb-6 block"
            >
              KORVA<span className="text-[#D4AF37]">.</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Redefiniendo el lujo desde 2026. Cada pieza cuenta una historia de
              precisión, herencia y elegancia.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-[#020617] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
             
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-[#020617] transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>


          {/* Support Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Support
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/politica-envios"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Política de Envío
                </a>
              </li>
              <li>
                <a
                  href="/politica-cambios-devoluciones"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Políticas de Devolución
                </a>
              </li>
              <li>
                <a
                  href="/politica-garantia"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Política de Garantía
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            © 2024 Chronos Luxe. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs">
              Cookies Settings
            </a>
          </div>

          <p className="mt-4 text-xs text-gray-600">
            Desarrollado por:{" "}
            <a
              href="https://juanjosegarcia.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#F1E2C3] transition-colors"
            >
              Juan José García
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
