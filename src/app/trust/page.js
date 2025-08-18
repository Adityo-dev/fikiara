import HeroSection from "@/components/trust/HeroSection";
import DataPrivacy from "@/components/trust/DataPrivacy";
import SecurityFeatures from "@/components/trust/SecurityFeatures";
import TermsConditions from "@/components/trust/TermsConditions";
import RefundPolicy from "@/components/trust/RefundPolicy";
import TransparencyStatement from "@/components/trust/TransparencyStatement";
import FinalCTA from "@/components/trust/FinalCTA";

export default function TrustPage() {
  return (
    <>
      <HeroSection />
      <DataPrivacy />
      <SecurityFeatures />
      <TermsConditions />
      <RefundPolicy />
      <TransparencyStatement />
      <FinalCTA />
    </>
  );
}
