import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate how much the section has scrolled
        const scrollAmount = window.scrollY;
        // Parallax effect: move background at 0.6x scroll speed (more pronounced)
        const parallaxOffset = scrollAmount * 0.6;
        setScrollY(parallaxOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-0"
        style={{ 
          backgroundImage: "url('/hero-books-bg.jpg')",
          transform: `translateY(${scrollY}px)`,
          willChange: "transform"
        }}
      />
      
      {/* Gradient overlay that fades from background color around text to transparent */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 20% 50%, #F3EBDD 0%, #F3EBDD 40%, rgba(243, 235, 221, 0.7) 60%, rgba(243, 235, 221, 0.3) 80%, transparent 100%)`
        }}
      />
      
      <div className="relative mono-container py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold leading-[1.05] tracking-tight mb-8 animate-fade-in">
            Strategic Legal Counsel for Complex Matters
            <span className="inline-block w-3 sm:w-4 h-[0.7em] bg-ink ml-2 align-middle animate-blink-cursor" />
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed text-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Varuna Law Associates delivers sophisticated legal solutions across corporate transactions, 
            high-stakes arbitration, and regulatory compliance in Telangana and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="text-base">
              <Link to="/v3/contact">
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/v3/practice-areas">
                Explore Practice Areas
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

