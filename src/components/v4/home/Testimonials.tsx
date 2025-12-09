import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import BlurText from "@/components/ui/blur-text";

const testimonials = [
  {
    quote: "Varuna Law's corporate team guided us through a complex cross-border acquisition with exceptional attention to detail. Their strategic counsel was invaluable.",
    author: "Managing Director",
    company: "Technology Services Firm",
  },
  {
    quote: "In a high-stakes arbitration matter, their preparation and advocacy secured a favorable award that exceeded our expectations. Truly exceptional representation.",
    author: "CFO",
    company: "Manufacturing Conglomerate",
  },
  {
    quote: "Their real estate practice handled our multi-property transaction with efficiency and foresight, identifying issues we hadn't considered and providing practical solutions.",
    author: "Director",
    company: "Real Estate Development Company",
  },
];

export const Testimonials = () => {
  return (
    <section className="pt-24 pb-24 bg-background">
      <div className="mono-container">
        <div className="max-w-2xl mb-16">
          <BlurText
            text="Client Testimonials"
            delay={300}
            animateBy="words"
            direction="top"
            className="text-4xl sm:text-5xl font-semibold mb-6 text-foreground"
            style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", "Libre Baskerville", "Georgia", serif' }}
          />
          <p className="text-lg text-foreground leading-relaxed">
            Our clients' success is our measure of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="border-line" style={{ backgroundColor: "#002366" }}>
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 mb-4 text-white" />
                <p className="text-sm leading-relaxed mb-6 text-white">
                  "{testimonial.quote}"
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-white/90">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

