import { Header } from "@/components/v4/layout/Header";
import { Footer } from "@/components/v4/layout/Footer";
import { Hero } from "@/components/v4/home/Hero";
import { TrustStrip } from "@/components/v4/home/TrustStrip";
import { PracticeAreasPreview } from "@/components/v4/home/PracticeAreasPreview";
import { WhyVaruna } from "@/components/v4/home/WhyVaruna";
import { Testimonials } from "@/components/v4/home/Testimonials";
import { CTASection } from "@/components/v4/home/CTASection";

const IndexV4 = () => {
  return (
    <div className="v4-theme min-h-screen">
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

export default IndexV4;

