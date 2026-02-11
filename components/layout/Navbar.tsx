"use client";

import { Search, User, ShoppingBag } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/90 dark:bg-[#262626]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/"
              className="text-2xl font-bold tracking-[0.2em] uppercase text-[#0F172A] dark:text-white group"
            >
              Korva
              <span className="text-[#D4AF37] group-hover:text-[#F1E2C3] transition-colors">
                .
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">

              <a
                href="/"
                className="text-sm font-medium uppercase tracking-widest text-[#0F172A] dark:text-gray-300 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] transition-colors"
              >
                Inicio
              </a>
              <a
                href="/catalogo"
                className="text-sm font-medium uppercase tracking-widest text-[#0F172A] dark:text-gray-300 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] transition-colors"
              >
                Catálogo
              </a>
              <a
                href="#"
                className="text-sm font-medium uppercase tracking-widest text-[#0F172A] dark:text-gray-300 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] transition-colors"
              >
                Colecciones
              </a>
            </div>
          </div>      
        </div>
      </div>
    </nav>
  );
}