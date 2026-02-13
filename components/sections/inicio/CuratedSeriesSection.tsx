import { ArrowRight } from "lucide-react";
import Image from "next/image";
import relojclassic from "@/public/images/relojclassic.jpg";
import Reveal from "@/components/animations/Reveal";



export function CuratedSeriesSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10 md:mb-12">
          <Reveal animation="slideRight">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F1E2C3] dark:text-white uppercase tracking-wide mb-2">
                Colecciones Seleccionadas
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Descubre un reloj para cada aspecto de tu vida.
              </p>
            </div>
          </Reveal>
          
          <Reveal animation="fadeIn" delay={300}>
            <a
              href="/catalogo"
              className="hidden md:flex items-center text-[#D4AF37] hover:text-[#B59025] transition-colors uppercase tracking-wider text-sm font-medium group"
            >
              Mira todo nuestro catálogo
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </Reveal>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* The Classic - Large Card */}
          <Reveal className="md:col-span-2" animation="fadeUp">
            <div className="group relative rounded-lg overflow-hidden h-[450px] md:h-[600px] bg-[#0F172A] cursor-pointer shadow-lg border border-white/5">
              <Image
                src={relojclassic}
                alt="Heritage watch"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-12">
                <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                  Heritage
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  The Classic
                </h3>
                <p className="text-gray-300 max-w-md mb-6 hidden md:block">
                  Refined elegance for the modern gentleman. Defined by clean
                  lines and understated luxury.
                </p>
                <span className="inline-flex items-center text-white border-b border-white/30 pb-1 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all uppercase tracking-widest text-sm">
                  Explore Series
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right Column - The Sport & The Future */}
          <div className="flex flex-col gap-6">
            
            {/* The Sport */}
            <Reveal animation="fadeUp" delay={200}>
              <div className="group relative rounded-lg overflow-hidden h-[350px] md:h-[288px] bg-[#0F172A] cursor-pointer shadow-lg border border-white/5">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgZ1GM6rGKsCFA5iZKwfoaoZLiHU9C0U2P7ldVvUua1cEMqNxbKwaZACTFJgW_dA_VOmt8zcu9ZkUA6LydRjRGwBU9Abmb8ljXMF-Y3ueS6ney9YS5jDtf1li6Bp09HZsTkLIVeS-962dBPXosnOA6Fp6HQ_hOeZYyz_S6ReBFQZevaQwxX4EjuRr-mj6nDIPRyuG1kty1-a4rWVG6gBPw_ZUFpfqVOTFMhHUDmlU9Baxw-WFZqoAgFo7FTlKtnHoVG9m_6mdmfmg"
                  alt="Sport watch"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-1 block">
                    Performance
                  </span>
                  <h3 className="text-2xl font-bold text-white">The Sport</h3>
                  <span className="mt-4 inline-flex items-center text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Shop Now
                  </span>
                </div>
              </div>
            </Reveal>

            {/* The Future */}
            <Reveal animation="fadeUp" delay={400}>
              <div className="group relative rounded-lg overflow-hidden h-[350px] md:h-[288px] bg-[#0F172A] cursor-pointer shadow-lg border border-white/5">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZAd9r-vs-QOmQrHmhzskx4KrxfaM6J54mwgfmrVuZGzAIaU3f7xykORIBDDzcvNfLXNO472mKJp-YsRBKsc4sBOtfI6In1TNQzSWnN75Z3eEsHSfOS49ey5ajtZ9wELNB9yljFFrYCVrboyECS0E7ZoZIFduvb-Z9FzgyRImul2HjqDMxmVq77pXhvNvSgZhMEAs0m7k8t3WIq9SxiduU23VtZyEgFS8pfv-SWcJUg6mEmFihIDR_ij8I4Bsun-L675Z05Yw5OI8"
                  alt="Future watch"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-1 block">
                    Innovation
                  </span>
                  <h3 className="text-2xl font-bold text-white">The Future</h3>
                  <span className="mt-4 inline-flex items-center text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Shop Now
                  </span>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}