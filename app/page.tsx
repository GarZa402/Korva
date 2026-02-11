import { HeroSection } from "@/components/sections/inicio/HeroSection";
import { FeaturesBar } from "@/components/sections/inicio/FeaturesBar";
import { CuratedSeriesSection } from "@/components/sections/inicio/CuratedSeriesSection";
import { NewArrivalsSection } from "@/components/sections/inicio/NewArrivalsSection";
import { New } from "@/components/sections/inicio/New";
import { CTAsection } from "@/components/sections/inicio/CTAsection";
import Reveal from "@/components/animations/Reveal";

export default function InicioPage() {
  return (
    <>
      <HeroSection />
      <FeaturesBar />
      <CuratedSeriesSection />
      <New />
      <CTAsection />
    </>
  );
}
