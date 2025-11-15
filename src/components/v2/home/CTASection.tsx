import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-v2-accent via-v2-accent to-blue-700 text-v2-text-inverse relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-v2-accent-alt blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-20">
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-v2-panel blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
          Ready to Discuss Your Legal Matter?
        </h2>
        <p className="text-xl text-v2-text-inverse/90 max-w-2xl mx-auto mb-12 leading-relaxed">
          Schedule a consultation with our team to explore how we can support your legal objectives.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-v2-accent-alt hover:bg-v2-accent-alt/90 text-v2-text-headline rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-base font-semibold"
          >
            <Link to="/v2/contact">
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="bg-v2-panel/10 backdrop-blur-sm border-2 border-v2-panel text-v2-text-inverse hover:bg-v2-panel hover:text-v2-accent rounded-2xl transition-all hover:scale-105 text-base font-semibold"
          >
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-12 border-t border-v2-panel/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-serif font-bold mb-1">500+</div>
              <div className="text-sm text-v2-text-inverse/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold mb-1">15+</div>
              <div className="text-sm text-v2-text-inverse/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold mb-1">98%</div>
              <div className="text-sm text-v2-text-inverse/80">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold mb-1">24/7</div>
              <div className="text-sm text-v2-text-inverse/80">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
