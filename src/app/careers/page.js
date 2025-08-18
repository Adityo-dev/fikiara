import HeroSection from "@/components/careers/HeroSection";
import CareerOpportunities from "@/components/careers/CareerOpportunities";
import InternshipPrograms from "@/components/careers/InternshipPrograms";
import PartnershipPrograms from "@/components/careers/PartnershipPrograms";
import CollaborationOpportunities from "@/components/careers/CollaborationOpportunities";
import FinalCTA from "@/components/careers/FinalCTA";

export default function CareersPage() {
  return (
    <>
      <HeroSection />
      <CareerOpportunities />
      <InternshipPrograms />
      <PartnershipPrograms />
      <CollaborationOpportunities />
      <FinalCTA />
    </>
  );
}
