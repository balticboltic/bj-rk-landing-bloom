import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import BeforeAfter from "@/components/BeforeAfter";
import PricingCards from "@/components/PricingCards";
import Doctor from "@/components/Doctor";
import WhyBjork from "@/components/WhyBjork";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import ConsultationUpsell from "@/components/ConsultationUpsell";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-[70px]">
      <Hero />
      <SocialProof />
      <BeforeAfter />
      <PricingCards />
      <Doctor />
      <WhyBjork />
      <HowItWorks />
      <FAQ />
      <ConsultationUpsell />
      <FinalCTA />
      <Footer />
      <StickyBottomBar />
    </div>
  );
};

export default Index;
