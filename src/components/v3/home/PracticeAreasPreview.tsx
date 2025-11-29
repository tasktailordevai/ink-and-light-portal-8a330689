import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Building, Home, Gavel, Shield, FileText, Landmark } from "lucide-react";

const practices = [
  {
    title: "Corporate Law",
    description: "M&A transactions, joint ventures, corporate governance, and regulatory compliance.",
    icon: Building,
    href: "/v3/practice-areas/corporate-law",
  },
  {
    title: "Real Estate",
    description: "Property transactions, title verification, RERA compliance, and dispute resolution.",
    icon: Home,
    href: "/v3/practice-areas/real-estate",
  },
  {
    title: "Arbitration",
    description: "Domestic and international arbitration, mediation, and alternative dispute resolution.",
    icon: Gavel,
    href: "/v3/practice-areas/arbitration",
  },
  {
    title: "White Collar Crime",
    description: "Economic offenses, fraud investigations, and regulatory enforcement defense.",
    icon: Shield,
    href: "/v3/practice-areas/white-collar-crime",
  },
  {
    title: "IBC & Insolvency",
    description: "Corporate insolvency, liquidation, CIRP representation before NCLT.",
    icon: FileText,
    href: "/v3/practice-areas/ibc",
  },
  {
    title: "High Court Advocacy",
    description: "Writ petitions, appellate work, and complex constitutional matters.",
    icon: Landmark,
    href: "/v3/practice-areas/high-court",
  },
];

export const PracticeAreasPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="mono-container">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold mb-6">Practice Areas</h2>
          <p className="text-lg text-foreground leading-relaxed">
            We provide comprehensive legal services across multiple domains, combining deep expertise 
            with strategic thinking to deliver results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((practice) => (
            <Link key={practice.title} to={practice.href} className="group">
              <Card className="h-full border-line hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <CardHeader>
                  <practice.icon className="h-8 w-8 mb-4 text-ink" />
                  <CardTitle className="text-xl font-serif group-hover:text-ink-2 transition-colors">
                    {practice.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground leading-relaxed mb-4">
                    {practice.description}
                  </p>
                  <span className="text-sm font-medium inline-flex items-center group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

