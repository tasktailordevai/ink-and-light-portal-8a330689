import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-ink text-primary-foreground">
      <div className="mono-container text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-semibold mb-6">
          Ready to Discuss Your Legal Matter?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Schedule a consultation with our team to explore how we can support your legal objectives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Link to="/contact">
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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
