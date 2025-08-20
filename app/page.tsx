import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import SolutionsSection from "@/components/SolutionsSection";
import ReachSection from "@/components/ReachSection";
import ImpactSection from "@/components/ImpactSection";
import PartnershipsSection from "@/components/PartnershipsSection";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HighlightsSection />
      <SolutionsSection />
      <ReachSection />
      <ImpactSection />
      <PartnershipsSection />
      <Footer />
    </div>

  );
}
