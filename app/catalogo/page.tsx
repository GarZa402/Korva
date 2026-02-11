import HeroSection from "@/components/sections/catalogo/HeroSection";
import CatalogoSection from "@/components/sections/catalogo/CatalogoSection";
import CTASection from "@/components/sections/catalogo/CTASection";


export default function CatalogoPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #0f0f0f 0%, #080808 100%)",
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <CatalogoSection />
      </div>

      <CTASection />
    </div>
  );
}