import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import ProductApproach from "@/components/sections/ProductApproach";
import SkillsShowcase from "@/components/sections/SkillsShowcase";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <ImpactMetrics />
      <ProductApproach />
      <SkillsShowcase />
      <Experience />
      <Contact />
    </main>
  );
}
