import { Header } from "@/components/v2/layout/Header";
import { Footer } from "@/components/v2/layout/Footer";
import { Hero } from "@/components/v2/home/Hero";
import { TrustStrip } from "@/components/v2/home/TrustStrip";
import { PracticeAreasPreview } from "@/components/v2/home/PracticeAreasPreview";
import { WhyVaruna } from "@/components/v2/home/WhyVaruna";
import { Testimonials } from "@/components/v2/home/Testimonials";
import { CTASection } from "@/components/v2/home/CTASection";

const IndexV2 = () => {
  return (
    <div className="min-h-screen bg-v2-bg">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <PracticeAreasPreview />
        <WhyVaruna />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default IndexV2;
