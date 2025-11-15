import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-v2-accent to-v2-accent-alt rounded-[3rem] mx-6 my-24 shadow-[0_20px_60px_rgba(54,89,180,0.3)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent)]" />
      <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
        <h2 className="text-5xl font-serif font-bold mb-8 text-v2-text-inverse tracking-tight">Ready to Get Started?</h2>
        <p className="text-xl text-v2-text-inverse/95 mb-12 font-light">Schedule a consultation with our expert legal team today</p>
        <Button asChild size="lg" className="bg-v2-panel hover:bg-v2-surface text-v2-accent rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:scale-105 transition-all px-8 py-6">
          <Link to="/v2/contact">Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </section>
  );
};
