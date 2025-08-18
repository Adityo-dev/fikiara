import HeroSection from "@/components/pricing/HeroSection";
import SinglePurchase from  "@/components/pricing/SinglePurchase";
import SubscriptionPlans from "@/components/pricing/SubscriptionPlans";
import BundleOffers from"@/components/pricing/BundleOffers";
import WalletSystem from "@/components/pricing/WalletSystem";
import FreeVsPaid from  "@/components/pricing/FreeVsPaid";
import BottomCTA from "@/components/pricing/BottomCTA";

export default function PricingPage() {
  return (
    <>
      <HeroSection />
      <SinglePurchase />
      <SubscriptionPlans />
      <BundleOffers />
      <WalletSystem />
      <FreeVsPaid />
      <BottomCTA />
    </>
  );
}
