import { Header } from "@/components/v4/layout/Header";
import { Footer } from "@/components/v4/layout/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Home, Gavel, Shield, FileText, Landmark, ArrowRight } from "lucide-react";
import BlurText from "@/components/ui/blur-text";

const practices = [
  {
    title: "Corporate Law",
    slug: "corporate-law",
    description: "Comprehensive corporate advisory covering mergers & acquisitions, joint ventures, due diligence, corporate governance, regulatory compliance, and commercial contracts.",
    icon: Building,
  },
  {
    title: "Real Estate Law",
    slug: "real-estate",
    description: "Property transactions, title verification, conveyancing, RERA compliance, land acquisition, lease agreements, and real estate dispute resolution.",
    icon: Home,
  },
  {
    title: "Arbitration & ADR",
    slug: "arbitration",
    description: "Domestic and international arbitration, mediation, conciliation, and alternative dispute resolution mechanisms under the Arbitration & Conciliation Act.",
    icon: Gavel,
  },
  {
    title: "White Collar Crime",
    slug: "white-collar-crime",
    description: "Defense against economic offenses, fraud investigations, PMLA matters, corporate fraud, regulatory enforcement, and internal investigations.",
    icon: Shield,
  },
  {
    title: "IBC & Insolvency",
    slug: "ibc",
    description: "Corporate insolvency resolution, liquidation proceedings, CIRP representation before NCLT/NCLAT, creditor rights, and stressed asset resolution.",
    icon: FileText,
  },
  {
    title: "High Court Advocacy",
    slug: "high-court",
    description: "Writ petitions, appellate work, constitutional matters, service law, public interest litigation, and complex civil litigation before Telangana High Court.",
    icon: Landmark,
  },
];

const PracticeAreasV4 = () => {
  return (
    <div className="v4-theme min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-background border-b border-line">
          <div className="mono-container">
            <div className="max-w-3xl">
              <BlurText
                text="Practice Areas"
                delay={300}
                animateBy="words"
                direction="top"
                className="text-5xl sm:text-6xl font-semibold mb-6 tracking-tight"
                style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", "Libre Baskerville", "Georgia", serif', color: "#000000" }}
              />
              <p className="text-xl text-foreground leading-relaxed" style={{ color: "#000000" }}>
                Our firm offers specialized legal services across multiple practice areas, 
                delivering strategic counsel and effective advocacy tailored to each client's unique needs.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-24">
          <div className="mono-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practices.map((practice) => (
                <Link key={practice.slug} to={`/v4/practice-areas/${practice.slug}`} className="group">
                  <Card className="h-full border-line hover:shadow-lg transition-all duration-200 hover:-translate-y-1" style={{ backgroundColor: "#002366" }}>
                    <CardHeader>
                      <practice.icon className="h-10 w-10 mb-4 text-white" />
                      <CardTitle className="text-2xl font-serif group-hover:text-white/90 transition-colors text-white">
                        {practice.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="leading-relaxed mb-4 text-white">
                        {practice.description}
                      </p>
                      <span className="text-sm font-medium inline-flex items-center group-hover:gap-2 transition-all text-white">
                        View Details
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PracticeAreasV4;

