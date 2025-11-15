import { Link } from "react-router-dom";
import { Building2, Scale, FileText, ArrowRight } from "lucide-react";

export const PracticeAreasPreview = () => {
  const areas = [
    { icon: Building2, title: "Corporate Law", description: "M&A, due diligence, and corporate governance.", gradient: "from-v2-accent to-blue-600" },
    { icon: Scale, title: "Arbitration & ADR", description: "Domestic and international arbitration.", gradient: "from-v2-accent-alt to-yellow-600" },
    { icon: FileText, title: "Litigation", description: "High Court and Supreme Court representation.", gradient: "from-purple-600 to-v2-accent" },
  ];

  return (
    <section className="py-28 bg-v2-panel">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif font-bold mb-8 text-v2-text-headline tracking-tight">Practice Areas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {areas.map((area, i) => (
            <div key={area.title} className="bg-v2-panel/90 backdrop-blur-sm rounded-[2rem] p-10 border border-v2-gray-2/50 hover:border-v2-accent/40 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(54,89,180,0.12)] hover:-translate-y-1" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-8 shadow-[0_8px_24px_rgba(54,89,180,0.15)]`}>
                <area.icon className="text-v2-text-inverse" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-5 text-v2-text-headline">{area.title}</h3>
              <p className="text-v2-text-light leading-relaxed mb-8 font-light">{area.description}</p>
              <Link to="/v2/practice-areas" className="inline-flex items-center text-v2-accent hover:text-v2-accent-alt font-medium">Learn more <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
