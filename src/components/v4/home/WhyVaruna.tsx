import { Target, Users, TrendingUp, Award } from "lucide-react";
import BlurText from "@/components/ui/blur-text";

const features = [
  {
    icon: Target,
    title: "Strategic Focus",
    description: "We don't just interpret the law—we align legal strategy with your business objectives.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Direct partner involvement ensures personalized attention and accountability on every matter.",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description: "Track record of favorable outcomes in complex litigation and high-value transactions.",
  },
  {
    icon: Award,
    title: "Excellence Standard",
    description: "Rigorous research, meticulous drafting, and compelling advocacy in every engagement.",
  },
];

export const WhyVaruna = () => {
  return (
    <section 
      className="py-24 border-y border-line"
      style={{ backgroundColor: "#002366" }}
    >
      <div className="mono-container">
        <div className="max-w-2xl mb-16">
          <BlurText
            text="Why Varuna Law"
            delay={300}
            animateBy="words"
            direction="top"
            className="text-4xl sm:text-5xl font-semibold mb-6 blur-text-white"
            style={{ color: "#ffffff", fontFamily: '"Playfair Display", "Cormorant Garamond", "Libre Baskerville", "Georgia", serif' }}
          />
          <p className="text-lg leading-relaxed" style={{ color: "#ffffff" }}>
            Our approach combines technical legal expertise with commercial pragmatism, 
            ensuring our clients receive counsel that is both legally sound and business-savvy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
                  <feature.icon className="h-5 w-5" style={{ color: "#ffffff" }} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: "#ffffff" }}>{feature.title}</h3>
                <p className="leading-relaxed" style={{ color: "#ffffff" }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

