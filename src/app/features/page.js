import HeroSection from "@/components/features/HeroSection";
import ReaderModes from "@/components/features/ReaderModes";
import ProductivityTools from "@/components/features/ProductivityTools";
import MultimediaIntegration from "@/components/features/MultimediaIntegration";
import Gamification from "@/components/features/Gamification";
import BottomCTA from "@/components/features/BottomCTA";

export default function FeaturesPage() {
  return (
    <>
      <HeroSection />
      <ReaderModes />
      <ProductivityTools />
      <MultimediaIntegration />
      <Gamification />
      <BottomCTA />
    </>
  );
}
