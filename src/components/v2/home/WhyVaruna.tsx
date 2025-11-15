import { CheckCircle2, Users } from "lucide-react";

export const WhyVaruna = () => {
  return (
    <section className="py-28 bg-gradient-to-br from-v2-surface/50 via-v2-bg to-v2-panel">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif font-bold mb-8 text-v2-text-headline tracking-tight">Why Choose Varuna Law</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-v2-panel/90 rounded-[2rem] p-10 border border-v2-gray-2/50">
            <CheckCircle2 className="w-16 h-16 text-v2-accent mb-6" />
            <h3 className="font-serif text-2xl font-semibold mb-4 text-v2-text-headline">Proven Track Record</h3>
            <p className="text-v2-text-light font-light">15+ years delivering exceptional outcomes</p>
          </div>
          <div className="bg-v2-panel/90 rounded-[2rem] p-10 border border-v2-gray-2/50">
            <Users className="w-16 h-16 text-v2-accent mb-6" />
            <h3 className="font-serif text-2xl font-semibold mb-4 text-v2-text-headline">Expert Team</h3>
            <p className="text-v2-text-light font-light">Seasoned attorneys with deep expertise</p>
          </div>
        </div>
      </div>
    </section>
  );
};
