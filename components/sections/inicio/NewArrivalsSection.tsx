"use client";

import { Heart } from "lucide-react";
import Image from "next/image";

const newArrivals = [
  {
    id: 1,
    name: "Chronos Aviator",
    subtitle: "Titanium Edition",
    price: "$1,250.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBt1cgOmY23wumxJ2qhTdOyZX0Y5bWy17IN1_lTXHLMav777pZNGk5b659V97bff3FAOPqvCVGFL9vd6_DB9xLrq1mM8Co_6kCEPR19eYm_hW7bAEST-l0mGekuUZ34XPVW3jOSa9pGzjT2sC7_6kh78HnXvLTEJcnVuflk9h8fiLzaQnfAWfcVvryYyg2qlSt9PNDWEgQ1kkxFe8zSyC43jd5umcHApFlt8Zc0sbJsQIzh0P0jjOsokT-MeEZuvTV9JzbQ3pOLTSQ",
    colors: ["gray", "brown"],
    isNew: false,
  },
  {
    id: 2,
    name: "Royal Oak Skeleton",
    subtitle: "18K Gold Plated",
    price: "$3,450.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALBgxJ54MFpjcxLNXUDhuGZFX3bMsI4lTJXJ7W8WEGSKx5tGGzi-XYz_rQ1Lli-C3m05JlOOFZ5yzyKyze2JhJtJ5ZvFmqGZlmzLE4ic9Ijvc5JcPuVLzXLWIs60bXet4DCpbxtQmQq7Enrn2ZZ9_-iZZO0hBZMUgk74EYzN0m6Tc0C6wYpgRCo8PYZ0TyVa_-DpRr6OYqGWRqyWQxD9xT6QP73gkn2BgpQuFvczks525nAR34VCYqY4Wza4mCLqjMrxwlkw1Gjfs",
    colors: [],
    isNew: true,
  },
  {
    id: 3,
    name: "Deep Sea Master",
    subtitle: "Professional Diver",
    price: "$895.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC00h2ctqbLWpol6F42u2QCcY_Unm-GuCyp9Q3dQgHBqOqUu-He7AewD7U_LO1X_O2NX5zOnUsgY3FJC5cqv4aejcVDsjotBLCe7BURrn8j2cwnIuSK-I-kBxcQRIMyosssA_QQou6rSE18SIt7el5oSr5h_RhV5HtbfubmK7Qs4JmOzrrEfWdNsNLr8Acyxncrl3Qm7frTDot4VcGVP_Adeq7vlrnkt5rI7zA1X1jeazTfW8dDE3Prt0ySJHoOmTqd217oORQe9sw",
    colors: ["blue", "black"],
    isNew: false,
  },
  {
    id: 4,
    name: "Noir Minimalist",
    subtitle: "Italian Leather",
    price: "$550.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiAcVNzqc8XNeW73dwMhfg6pRzY7LcPTmce-g7Ub6jes9WQjSEb2XPodrhq86YBQgXRtmwKyZcsjpKCin7EgcNrHM1KJf6AX05bIElvwedXoMCL_cqo9MWndrqKkGpzPaB3SsQUxqRdSdatXpvlodcfNgaj7cCDcsevkpGDNBCCmJBwrqQqCOfxwYJ-7ssM5fssOLyjBYNVz1k7Zjx9U7YDyWJOGPeMCjm7oxO5BabOS75AQjZaX12rtPMv7qhs45A4Mlr1IVa_Ac",
    colors: [],
    isNew: false,
  },
];

export function NewArrivalsSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold">
            Just Arrived
          </span>
          <h2 className="text-4xl font-bold text-white mt-3 uppercase tracking-wider">
            New Arrivals
          </h2>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex overflow-x-auto pb-12 gap-8 no-scrollbar snap-x snap-mandatory">
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="min-w-[300px] md:min-w-[340px] snap-center group"
            >
              <div className="relative bg-[#262626] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/5 border border-white/5 group-hover:border-[#D4AF37]/30">
                {/* Image Container */}
                <div className="aspect-[4/5] relative overflow-hidden bg-[#0e1621]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* New Badge */}
                  {product.isNew && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#D4AF37] text-[#020617] text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm">
                        New
                      </span>
                    </div>
                  )}

                  {/* Favorite Button */}
                  <div className="absolute top-4 right-4">
                    <button className="p-2 rounded-full bg-[#0F172A]/80 hover:bg-[#D4AF37] text-white hover:text-[#020617] transition-colors backdrop-blur-sm border border-white/10">
                      <Heart size={14} />
                    </button>
                  </div>

                  {/* Add to Cart - Shows on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-[#020617]/95 to-transparent">
                    <button className="w-full bg-[#D4AF37] text-[#020617] font-semibold py-3 rounded text-sm uppercase tracking-wider hover:bg-white transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-white text-lg font-medium mb-1 font-serif">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {product.subtitle}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#D4AF37] font-bold text-xl">
                      {product.price}
                    </span>
                    {product.colors.length > 0 && (
                      <div className="flex gap-1">
                        {product.colors.map((color, index) => (
                          <div
                            key={index}
                            className={`w-3 h-3 rounded-full border border-white/20 ${
                              color === "gray"
                                ? "bg-gray-400"
                                : color === "brown"
                                  ? "bg-[#8B4513]"
                                  : color === "blue"
                                    ? "bg-blue-900 ring-1 ring-offset-1 ring-offset-transparent ring-white/30"
                                    : "bg-black"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}