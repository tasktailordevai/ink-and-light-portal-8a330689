import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mono-container py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold leading-[1.05] tracking-tight mb-8 animate-fade-in">
            Strategic Legal Counsel for Complex Matters
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed text-muted-text mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Varuna Law Associates delivers sophisticated legal solutions across corporate transactions, 
            high-stakes arbitration, and regulatory compliance in Telangana and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="text-base">
              <Link to="/contact">
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/practice-areas">
                Explore Practice Areas
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-ink blur-3xl" />
      </div>
    </section>
  );
};
