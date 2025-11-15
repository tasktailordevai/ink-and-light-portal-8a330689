import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-v2-bg via-v2-panel to-v2-accent-soft">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Announcement Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-v2-accent-soft to-v2-panel border-2 border-v2-accent/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles size={16} className="text-v2-accent" />
            <span className="text-sm font-medium text-v2-accent">Trusted by 500+ clients</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-[1.05] tracking-tight mb-8 animate-fade-in text-v2-text-headline" style={{ animationDelay: "0.1s" }}>
            Strategic Legal Counsel for{" "}
            <span className="bg-gradient-to-r from-v2-accent via-v2-accent to-v2-accent-alt bg-clip-text text-transparent">
              Complex Matters
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl leading-relaxed text-v2-text-main mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Varuna Law Associates delivers sophisticated legal solutions across corporate transactions, 
            high-stakes arbitration, and regulatory compliance in Telangana and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              asChild 
              size="lg" 
              className="text-base bg-v2-accent hover:bg-v2-accent/90 text-v2-text-inverse rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link to="/v2/contact">
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="text-base border-2 border-v2-accent text-v2-accent hover:bg-v2-accent-soft rounded-2xl transition-all hover:scale-105"
            >
              <Link to="/v2/practice-areas">
                Explore Practice Areas
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-v2-accent to-v2-accent-alt blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 opacity-20">
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-v2-accent-alt to-v2-accent blur-3xl" />
      </div>
    </section>
  );
};
