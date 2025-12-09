import { Header } from "@/components/v4/layout/Header";
import { Footer } from "@/components/v4/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin } from "lucide-react";
import BlurText from "@/components/ui/blur-text";

const team = [
  {
    name: "Arjun Menon",
    title: "Managing Partner",
    image: "/placeholder.svg",
    email: "arjun.menon@varunalaw.in",
    linkedin: "https://linkedin.com/in/arjunmenon",
    practices: ["Corporate Law", "M&A", "Private Equity"],
    education: "B.A. LL.B. (Hons), National Law University, Delhi; LL.M., Harvard Law School",
    admissions: "Bar Council of Delhi, Bar Council of Telangana",
    bio: "Arjun leads the firm's corporate practice with over 15 years of experience advising on complex cross-border transactions, private equity investments, and corporate restructuring. He has represented Fortune 500 companies and leading Indian conglomerates in transformative deals.",
  },
  {
    name: "Priya Sharma",
    title: "Partner",
    image: "/placeholder.svg",
    email: "priya.sharma@varunalaw.in",
    linkedin: "https://linkedin.com/in/priyasharma",
    practices: ["Arbitration", "Litigation", "Real Estate"],
    education: "B.A. LL.B. (Hons), NALSAR University of Law; Diploma in International Arbitration, MIDS Geneva",
    admissions: "Bar Council of Telangana, Bar Council of India",
    bio: "Priya specializes in commercial arbitration and complex civil litigation with a focus on real estate disputes. She has successfully represented clients in arbitrations involving claims exceeding ₹100 crores and appears regularly before the Telangana High Court.",
  },
  {
    name: "Vikram Reddy",
    title: "Senior Associate",
    image: "/placeholder.svg",
    email: "vikram.reddy@varunalaw.in",
    linkedin: "https://linkedin.com/in/vikramreddy",
    practices: ["IBC", "Corporate Insolvency", "Banking"],
    education: "B.Com. LL.B., Osmania University; LL.M. (Corporate Law), Symbiosis Law School",
    admissions: "Bar Council of Telangana",
    bio: "Vikram focuses on insolvency and bankruptcy matters under the IBC, representing corporate debtors, resolution applicants, and creditors before NCLT and NCLAT. His practice includes stressed asset resolution and recovery proceedings.",
  },
  {
    name: "Ananya Iyer",
    title: "Associate",
    image: "/placeholder.svg",
    email: "ananya.iyer@varunalaw.in",
    linkedin: "https://linkedin.com/in/ananyaiyer",
    practices: ["White Collar Crime", "Regulatory Compliance", "Corporate Governance"],
    education: "B.A. LL.B. (Hons), National Law School of India University, Bangalore",
    admissions: "Bar Council of Karnataka, Bar Council of Telangana",
    bio: "Ananya advises clients on economic offenses, internal investigations, and regulatory compliance matters. She assists corporations in navigating complex regulatory frameworks and defending against white collar crime allegations.",
  },
];

const TeamV4 = () => {
  return (
    <div className="v4-theme min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-24 bg-background border-b border-line">
          <div className="mono-container">
            <div className="max-w-3xl">
              <BlurText
                text="Our Team"
                delay={300}
                animateBy="words"
                direction="top"
                className="text-5xl sm:text-6xl font-semibold mb-6 tracking-tight text-foreground"
                style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", "Libre Baskerville", "Georgia", serif' }}
              />
              <p className="text-xl text-foreground leading-relaxed">
                Experienced attorneys committed to delivering exceptional legal services 
                and strategic counsel across complex matters.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-24">
          <div className="mono-container">
            <div className="space-y-16">
              {team.map((member) => (
                <Card key={member.name} className="border-line overflow-hidden" style={{ backgroundColor: "#002366" }}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="lg:col-span-1 bg-panel flex items-center justify-center p-12">
                      <div className="w-48 h-48 rounded-full bg-muted grayscale" />
                    </div>
                    
                    {/* Content */}
                    <CardContent className="lg:col-span-2 p-8 lg:p-12">
                      <div className="mb-4">
                        <h2 className="text-3xl font-serif font-semibold mb-2" style={{ color: "#ffffff" }}>{member.name}</h2>
                        <p className="text-lg text-foreground mb-4" style={{ color: "#ffffff" }}>{member.title}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {member.practices.map((practice) => (
                            <Badge 
                              key={practice} 
                              variant="secondary" 
                              className="text-xs"
                              style={{ 
                                backgroundColor: "#002366", 
                                color: "#ffffff", 
                                borderColor: "#ffffff",
                                borderWidth: "1px"
                              }}
                            >
                              {practice}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4 text-sm text-foreground leading-relaxed mb-6" style={{ color: "#ffffff" }}>
                        <p>{member.bio}</p>
                      </div>

                      <div className="space-y-3 text-sm border-t border-line pt-6">
                        <div>
                          <span className="font-semibold text-foreground" style={{ color: "#ffffff" }}>Education:</span>
                          <p className="text-foreground" style={{ color: "#ffffff" }}>{member.education}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-foreground" style={{ color: "#ffffff" }}>Admissions:</span>
                          <p className="text-foreground" style={{ color: "#ffffff" }}>{member.admissions}</p>
                        </div>
                      </div>

                      <div className="flex gap-4 mt-6">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 text-sm text-foreground hover:text-foreground transition-colors"
                          style={{ color: "#ffffff" }}
                        >
                          <Mail className="h-4 w-4" />
                          Email
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-foreground hover:text-foreground transition-colors"
                          style={{ color: "#ffffff" }}
                        >
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamV4;

