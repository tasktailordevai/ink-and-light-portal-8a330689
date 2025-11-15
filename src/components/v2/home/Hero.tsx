import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-v2-bg via-v2-surface/30 to-v2-accent-soft/50">
      <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:py-48">
        <div className="max-w-4xl">
          {/* Announcement Badge */}
          <div className="inline-flex items-center space-x-3 bg-v2-panel/90 backdrop-blur-md border border-v2-accent/20 rounded-full px-6 py-3 mb-10 animate-fade-in shadow-[0_4px_16px_rgba(54,89,180,0.08)] hover:shadow-[0_8px_24px_rgba(54,89,180,0.12)] transition-all duration-200">
            <Sparkles size={18} className="text-v2-accent-alt" />
            <span className="text-sm font-medium text-v2-accent tracking-wide">Trusted by 500+ clients</span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold leading-[1.05] tracking-tighter mb-10 animate-fade-in text-v2-text-headline" style={{ animationDelay: "0.1s" }}>
            Strategic Legal Counsel for{" "}
            <span className="bg-gradient-to-r from-v2-accent via-v2-accent to-v2-accent-alt bg-clip-text text-transparent italic">
              Complex Matters
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl leading-relaxed text-v2-text-light mb-14 animate-fade-in font-light tracking-wide max-w-3xl" style={{ animationDelay: "0.2s" }}>
            Varuna Law Associates delivers sophisticated legal solutions across corporate transactions, 
            high-stakes arbitration, and regulatory compliance in Telangana and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              asChild 
              size="lg" 
              className="text-base bg-gradient-to-r from-v2-accent to-v2-accent hover:from-v2-accent-alt hover:to-v2-accent text-v2-text-inverse rounded-3xl shadow-[0_8px_24px_rgba(54,89,180,0.3)] hover:shadow-[0_12px_32px_rgba(230,180,65,0.4)] transition-all duration-200 hover:scale-105 px-8 py-6 font-medium"
            >
              <Link to="/v2/contact">
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="text-base border-2 border-v2-accent/30 text-v2-accent hover:bg-v2-accent-soft/50 hover:border-v2-accent backdrop-blur-sm rounded-3xl transition-all duration-200 hover:scale-105 px-8 py-6 font-medium bg-v2-panel/50"
            >
              <Link to="/v2/practice-areas">
                Explore Practice Areas
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-20">
        <div className="absolute top-1/4 right-1/4 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-v2-accent via-v2-accent to-v2-accent-alt blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 opacity-15">
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-v2-accent-alt to-v2-accent blur-3xl" />
      </div>
    </section>
  );
};
