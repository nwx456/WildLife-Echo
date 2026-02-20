import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { DeviceSection } from "@/components/DeviceSection";
import { TechSpecsSection } from "@/components/TechSpecsSection";
import { InventorySection } from "@/components/InventorySection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <DeviceSection />
      <TechSpecsSection />
      <InventorySection />
      <HowItWorksSection />
      <Footer />
    </main>
  );
}
