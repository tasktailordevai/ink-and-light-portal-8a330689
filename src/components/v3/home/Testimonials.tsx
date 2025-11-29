import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

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
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold mb-6">Client Testimonials</h2>
          <p className="text-lg text-foreground leading-relaxed">
            Our clients' success is our measure of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="border-line">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-foreground mb-4" />
                <p className="text-sm leading-relaxed mb-6 text-foreground">
                  "{testimonial.quote}"
                </p>
                <div className="text-sm">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

