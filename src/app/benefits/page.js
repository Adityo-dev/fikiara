import BottomCTA from "@/components/benefits/BottomCTA";
import CoreBenefits from "@/components/benefits/CoreBenefits";
import HeroSection from "@/components/benefits/HeroSection";
import TransformationPromise from "@/components/benefits/TransformationPromise";
import UserStories from "@/components/benefits/UserStories";


export default function BenefitsPage() {
  return (
    <>
      <HeroSection />
      <CoreBenefits />
      <TransformationPromise />
      <UserStories />
      <BottomCTA />
    </>
  );
}
