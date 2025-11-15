import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechVentures India",
      content: "Varuna Law Associates handled our M&A transaction with exceptional professionalism. Their strategic counsel was invaluable throughout the process.",
      rating: 5,
      gradient: "from-v2-accent to-blue-600",
    },
    {
      name: "Priya Sharma",
      role: "General Counsel, RetailCorp",
      content: "The team's expertise in regulatory compliance saved us from potential legal pitfalls. Highly recommend their services.",
      rating: 5,
      gradient: "from-v2-accent-alt to-yellow-600",
    },
    {
      name: "Amit Patel",
      role: "Founder, StartupHub",
      content: "Outstanding arbitration representation. They achieved a favorable outcome in a complex commercial dispute.",
      rating: 5,
      gradient: "from-purple-600 to-v2-accent",
    },
  ];

  return (
    <section className="py-24 bg-v2-panel">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-v2-text-headline">
            Client Testimonials
          </h2>
          <p className="text-xl text-v2-text-main max-w-3xl mx-auto leading-relaxed">
            Hear from our satisfied clients about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group bg-gradient-to-br from-v2-surface to-v2-panel rounded-3xl p-8 border-2 border-v2-gray-2 hover:border-v2-accent transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonial.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                <Quote className="text-v2-text-inverse" size={24} />
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-v2-accent-alt text-v2-accent-alt" />
                ))}
              </div>

              <p className="text-v2-text-main leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="pt-6 border-t border-v2-gray-2">
                <div className="font-semibold text-v2-text-headline">
                  {testimonial.name}
                </div>
                <div className="text-sm text-v2-text-light">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
