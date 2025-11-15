import { Link } from "react-router-dom";
import { Building2, Scale, FileText, Landmark, DollarSign, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PracticeAreasPreview = () => {
  const areas = [
    {
      icon: Building2,
      title: "Corporate Law",
      description: "M&A, due diligence, corporate governance, and complex commercial transactions.",
      gradient: "from-v2-accent to-blue-600",
    },
    {
      icon: Scale,
      title: "Arbitration & ADR",
      description: "Domestic and international arbitration, mediation, and dispute resolution.",
      gradient: "from-v2-accent-alt to-yellow-600",
    },
    {
      icon: FileText,
      title: "Litigation",
      description: "High Court and Supreme Court representation in civil and commercial matters.",
      gradient: "from-purple-600 to-v2-accent",
    },
    {
      icon: Landmark,
      title: "Regulatory Compliance",
      description: "SEBI, RBI, and other regulatory frameworks and compliance advisory.",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: DollarSign,
      title: "Tax Law",
      description: "Direct and indirect taxation, GST advisory, and tax litigation.",
      gradient: "from-orange-500 to-v2-accent-alt",
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Property transactions, title verification, and real estate disputes.",
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <section className="py-24 bg-v2-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-v2-text-headline">
            Our Practice Areas
          </h2>
          <p className="text-xl text-v2-text-main max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal expertise across multiple domains to serve your diverse needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {areas.map((area, index) => (
            <div
              key={area.title}
              className="group bg-v2-panel rounded-3xl p-8 border-2 border-v2-gray-2 hover:border-v2-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${area.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                <area.icon className="text-v2-text-inverse" size={28} />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3 text-v2-text-headline">
                {area.title}
              </h3>
              <p className="text-v2-text-main leading-relaxed mb-4">
                {area.description}
              </p>
              <Link
                to="/v2/practice-areas"
                className="inline-flex items-center text-v2-accent font-semibold group-hover:text-v2-accent-alt transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-v2-accent hover:bg-v2-accent/90 text-v2-text-inverse rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Link to="/v2/practice-areas">
              View All Practice Areas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
