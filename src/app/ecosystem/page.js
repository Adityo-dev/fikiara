// app/ecosystem/page.tsx

import HeroSection from "@/components/ecosystem/HeroSection";
import CoreModules from "@/components/ecosystem/CoreModules";
import GrowthEarning from "@/components/ecosystem/GrowthEarning";
import CommunityFeatures from "@/components/ecosystem/CommunityFeatures";
import BottomCTA from "@/components/ecosystem/BottomCTA";

export default function EcosystemPage() {
  return (
    <>
      <HeroSection />
      <CoreModules />
      <GrowthEarning />
      <CommunityFeatures />
      <BottomCTA />
    </>
  );
}
