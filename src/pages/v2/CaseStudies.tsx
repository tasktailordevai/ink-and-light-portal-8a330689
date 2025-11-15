import { Header } from "@/components/v2/layout/Header";
import { Footer } from "@/components/v2/layout/Footer";
import { ArrowRight } from "lucide-react";

const CaseStudiesV2 = () => {
  const cases = [
    {
      title: "High Court Arbitration Victory",
      client: "TechVentures India",
      area: "Arbitration",
      amount: "₹50 Lakhs",
      description: "Successfully represented client in complex commercial arbitration dispute.",
      gradient: "from-v2-accent to-blue-600",
    },
    {
      title: "NCLT Insolvency Resolution",
      client: "RetailCorp Limited",
      area: "Insolvency & Bankruptcy",
      amount: "₹2 Crores",
      description: "Achieved favorable resolution in complex NCLT insolvency proceedings.",
      gradient: "from-v2-accent-alt to-yellow-600",
    },
    {
      title: "Supreme Court Constitutional Matter",
      client: "Confidential",
      area: "Constitutional Law",
      amount: "Public Interest",
      description: "Landmark judgment on constitutional rights and civil liberties.",
      gradient: "from-purple-600 to-v2-accent",
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
              Case Studies
            </h1>
            <p className="text-xl text-v2-text-main max-w-3xl mx-auto leading-relaxed">
              Our track record of successful outcomes
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 bg-v2-panel">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((caseStudy, index) => (
                <div
                  key={caseStudy.title}
                  className="group bg-v2-surface rounded-3xl overflow-hidden border-2 border-v2-gray-2 hover:border-v2-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${caseStudy.gradient}`} />
                  <div className="p-8">
                    <div className="inline-block px-4 py-1 bg-v2-accent-soft text-v2-accent rounded-full text-sm font-medium mb-4">
                      {caseStudy.area}
                    </div>
                    <h3 className="font-serif text-2xl font-semibold mb-3 text-v2-text-headline">
                      {caseStudy.title}
                    </h3>
                    <p className="text-v2-text-light mb-2">Client: {caseStudy.client}</p>
                    <p className="text-v2-text-main mb-4 leading-relaxed">{caseStudy.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-v2-gray-2">
                      <span className="font-semibold text-v2-accent text-lg">{caseStudy.amount}</span>
                      <button className="flex items-center text-v2-accent hover:text-v2-accent-alt font-medium group">
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
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

export default CaseStudiesV2;
