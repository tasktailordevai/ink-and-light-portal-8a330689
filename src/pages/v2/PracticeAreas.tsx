import { Header } from "@/components/v2/layout/Header";
import { Footer } from "@/components/v2/layout/Footer";
import { Building2, Scale, FileText, Landmark, DollarSign, Home } from "lucide-react";

const PracticeAreasV2 = () => {
  const areas = [
    {
      icon: Building2,
      title: "Corporate Law",
      description: "Comprehensive legal support for M&A, due diligence, corporate governance, joint ventures, and complex commercial transactions.",
      gradient: "from-v2-accent to-blue-600",
    },
    {
      icon: Scale,
      title: "Arbitration & ADR",
      description: "Expert representation in domestic and international arbitration, mediation, and alternative dispute resolution mechanisms.",
      gradient: "from-v2-accent-alt to-yellow-600",
    },
    {
      icon: FileText,
      title: "Litigation",
      description: "Strategic representation in High Court and Supreme Court across civil, commercial, and constitutional matters.",
      gradient: "from-purple-600 to-v2-accent",
    },
    {
      icon: Landmark,
      title: "Regulatory Compliance",
      description: "Advisory and compliance support for SEBI, RBI, and other regulatory frameworks governing financial services.",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: DollarSign,
      title: "Tax Law",
      description: "Comprehensive tax advisory covering direct and indirect taxation, GST planning, and tax litigation support.",
      gradient: "from-orange-500 to-v2-accent-alt",
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Complete real estate legal services including property transactions, title verification, and dispute resolution.",
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-v2-bg">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-v2-bg via-v2-panel to-v2-accent-soft">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6 text-v2-text-headline">
              Practice Areas
            </h1>
            <p className="text-xl text-v2-text-main max-w-3xl mx-auto leading-relaxed">
              Comprehensive legal expertise across multiple domains
            </p>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-24 bg-v2-panel">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {areas.map((area, index) => (
                <div
                  key={area.title}
                  className="group bg-v2-surface rounded-3xl p-8 border-2 border-v2-gray-2 hover:border-v2-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${area.gradient} mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <area.icon className="text-v2-text-inverse" size={32} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-v2-text-headline">
                    {area.title}
                  </h3>
                  <p className="text-v2-text-main leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PracticeAreasV2;
