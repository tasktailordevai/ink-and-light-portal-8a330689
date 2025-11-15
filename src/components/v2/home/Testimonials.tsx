import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    { name: "Rajesh Kumar", role: "CEO, TechVentures", content: "Exceptional professionalism throughout our M&A transaction." },
    { name: "Priya Sharma", role: "General Counsel", content: "Expert regulatory compliance saved us from legal pitfalls." },
  ];

  return (
    <section className="py-28 bg-v2-panel">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif font-bold mb-8 text-v2-text-headline tracking-tight">Client Testimonials</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-v2-panel/90 rounded-[2rem] p-10 border border-v2-accent/20">
              <div className="flex mb-6">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-v2-accent-alt text-v2-accent-alt" />)}</div>
              <p className="text-v2-text-light italic font-serif text-lg mb-8">"{t.content}"</p>
              <div className="font-semibold text-v2-text-headline">{t.name}</div>
              <div className="text-sm text-v2-text-light font-light">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
