import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";
import BlurText from "@/components/ui/blur-text";

export const CTASection = () => {
  return (
    <section 
      className="pt-24 pb-24 relative overflow-hidden"
      style={{ 
        background: `radial-gradient(ellipse 100% 80% at 50% 0%, #2563EB 0%, #3B82F6 20%, #60A5FA 40%, #93C5FD 60%, #DBEAFE 80%, #f4f5f0 100%)`
      }}
    >
      <div className="mono-container text-center relative z-10">
        <div className="flex justify-center">
          <BlurText
            text="Ready to Discuss Your Legal Matter?"
            delay={300}
            animateBy="words"
            direction="top"
            className="text-4xl sm:text-5xl font-semibold mb-6 text-foreground"
            style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", "Libre Baskerville", "Georgia", serif' }}
          />
        </div>
        <p className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed text-foreground">
          Schedule a consultation with our team to explore how we can support your legal objectives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="outline" style={{ borderColor: "#002366", color: "#002366" }}>
            <Link to="/v4/contact">
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" style={{ borderColor: "#002366", color: "#002366" }}>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

