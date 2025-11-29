import { Header } from "@/components/v3/layout/Header";
import { Footer } from "@/components/v3/layout/Footer";
import { Hero } from "@/components/v3/home/Hero";
import { TrustStrip } from "@/components/v3/home/TrustStrip";
import { PracticeAreasPreview } from "@/components/v3/home/PracticeAreasPreview";
import { WhyVaruna } from "@/components/v3/home/WhyVaruna";
import { Testimonials } from "@/components/v3/home/Testimonials";
import { CTASection } from "@/components/v3/home/CTASection";

const IndexV3 = () => {
  return (
    <div className="v3-theme min-h-screen">
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

export default IndexV3;

