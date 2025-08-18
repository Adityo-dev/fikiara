import HeroSection from "@/components/about/HeroSection";
import VisionCoreValues from "@/components/about/VisionCoreValues";
import FounderStory from "@/components/about/FounderStory";
import MediaUpdates from "@/components/about/MediaUpdates";
import SocialLinks from "@/components/about/SocialLinks";

export default function AboutPage() {
  return (
    <>
      <HeroSection/>
      <VisionCoreValues />
      <FounderStory />
      <MediaUpdates />
      <SocialLinks />
    </>
  );
}
