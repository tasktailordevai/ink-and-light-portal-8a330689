import { Header } from "@/components/v4/layout/Header";
import { Footer } from "@/components/v4/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import BlurText from "@/components/ui/blur-text";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We maintain the highest standards in legal research, analysis, and advocacy.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your objectives drive our strategy. We deliver solutions aligned with your goals.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We combine traditional legal expertise with modern, efficient approaches.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "Ethical conduct and professional responsibility guide every action we take.",
  },
];

const AboutV4 = () => {
  return (
    <div className="v4-theme min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-24 bg-background border-b border-line">
          <div className="mono-container">
            <div className="max-w-3xl">
              <BlurText
                text="About Varuna Law"
                delay={300}
                animateBy="words"
                direction="top"
                className="text-5xl sm:text-6xl font-semibold mb-6 tracking-tight"
                style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", "Libre Baskerville", "Georgia", serif', color: "#000000" }}
              />
              <p className="text-2xl text-foreground font-serif font-medium leading-relaxed" style={{ color: "#000000" }}>
                Strategic legal counsel built on expertise, integrity, and results.
              </p>
            </div>
          </div>
        </section>

        {/* Firm Overview */}
        <section className="py-24">
          <div className="mono-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6 text-lg leading-relaxed text-foreground" style={{ color: "#000000" }}>
                <p>
                  Varuna Law Associates LLP is a full-service law firm based in Hyderabad, providing 
                  sophisticated legal services across corporate transactions, commercial disputes, 
                  regulatory compliance, and high-stakes litigation.
                </p>
                <p>
                  Founded on the principle that exceptional legal work requires both technical mastery 
                  and commercial awareness, our practice combines rigorous legal analysis with strategic 
                  thinking aligned to our clients' business objectives.
                </p>
                <p>
                  We represent corporations, financial institutions, entrepreneurs, and high-net-worth 
                  individuals in matters ranging from complex M&A transactions to bet-the-company litigation 
                  before the Telangana High Court, NCLT, and arbitral tribunals.
                </p>
              </div>

              <div className="space-y-8">
                <Card className="border-line" style={{ backgroundColor: "#002366" }}>
                  <CardContent className="pt-6">
                    <div className="text-5xl font-serif font-bold mb-2 text-white">15+</div>
                    <p className="text-white">Years Combined Experience</p>
                  </CardContent>
                </Card>
                <Card className="border-line" style={{ backgroundColor: "#002366" }}>
                  <CardContent className="pt-6">
                    <div className="text-5xl font-serif font-bold mb-2 text-white">₹500Cr+</div>
                    <p className="text-white">Transaction Value Advised</p>
                  </CardContent>
                </Card>
                <Card className="border-line" style={{ backgroundColor: "#002366" }}>
                  <CardContent className="pt-6">
                    <div className="text-5xl font-serif font-bold mb-2 text-white">100+</div>
                    <p className="text-white">Matters Successfully Resolved</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-panel border-y border-line">
          <div className="mono-container">
            <div className="max-w-2xl mb-16">
              <BlurText
                text="Our Values"
                delay={300}
                animateBy="words"
                direction="top"
                className="text-4xl sm:text-5xl font-semibold mb-6"
                style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", "Libre Baskerville", "Georgia", serif', color: "#000000" }}
              />
              <p className="text-lg text-foreground leading-relaxed" style={{ color: "#000000" }}>
                These principles guide every engagement and define our approach to practicing law.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-background border border-line flex items-center justify-center" style={{ borderColor: "#000000", backgroundColor: "#002366" }}>
                      <value.icon className="h-5 w-5" style={{ color: "#000000" }} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: "#000000" }}>{value.title}</h3>
                    <p className="text-foreground leading-relaxed" style={{ color: "#000000" }}>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-24">
          <div className="mono-container">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-12">
                <BlurText
                  text="Our Approach"
                  delay={300}
                  animateBy="words"
                  direction="top"
                  className="text-4xl sm:text-5xl font-semibold"
                  style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", "Libre Baskerville", "Georgia", serif', color: "#000000" }}
                />
              </div>
              
              <div className="space-y-12">
                <div className="space-y-4">
                  <BlurText
                    text="Strategic Partnership"
                    delay={300}
                    animateBy="words"
                    direction="top"
                    className="text-2xl font-semibold"
                    style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", "Libre Baskerville", "Georgia", serif', color: "#000000" }}
                  />
                  <p className="text-lg text-foreground leading-relaxed" style={{ color: "#000000" }}>
                    We don't just provide legal advice—we partner with you to understand your business, 
                    anticipate challenges, and develop strategies that advance your objectives while 
                    managing legal risk.
                  </p>
                </div>

                <div className="space-y-4">
                  <BlurText
                    text="Efficiency & Responsiveness"
                    delay={300}
                    animateBy="words"
                    direction="top"
                    className="text-2xl font-semibold"
                    style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", "Libre Baskerville", "Georgia", serif', color: "#000000" }}
                  />
                  <p className="text-lg text-foreground leading-relaxed" style={{ color: "#000000" }}>
                    Business moves fast. Our lean structure enables quick decision-making and direct 
                    partner involvement on every matter, ensuring you receive timely, senior-level counsel.
                  </p>
                </div>

                <div className="space-y-4">
                  <BlurText
                    text="Results-Oriented"
                    delay={300}
                    animateBy="words"
                    direction="top"
                    className="text-2xl font-semibold"
                    style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", "Libre Baskerville", "Georgia", serif', color: "#000000" }}
                  />
                  <p className="text-lg text-foreground leading-relaxed" style={{ color: "#000000" }}>
                    We measure success by outcomes. Whether negotiating a transaction, resolving a dispute, 
                    or defending your interests in court, our focus is on achieving the best possible result 
                    for your situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutV4;

