import { Header } from "@/components/v3/layout/Header";
import { Footer } from "@/components/v3/layout/Footer";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowRight } from "lucide-react";

// Mock data - in real app, this would come from CMS/database
const practiceData: Record<string, any> = {
  "corporate-law": {
    title: "Corporate Law",
    tagline: "Strategic Counsel for Complex Business Transactions",
    intro: "Our corporate law practice provides comprehensive legal advisory services to businesses ranging from startups to established corporations. We combine technical expertise with commercial awareness to structure transactions that advance our clients' strategic objectives.",
    services: [
      "Mergers & Acquisitions",
      "Joint Ventures & Strategic Alliances",
      "Corporate Restructuring",
      "Due Diligence & Risk Assessment",
      "Corporate Governance & Compliance",
      "Share Purchase & Subscription Agreements",
      "Commercial Contracts & Negotiations",
      "Foreign Investment Advisory",
    ],
    examples: [
      "Advised a US-based technology company on a ₹150 crore acquisition of an Indian SaaS startup, including regulatory approvals and integration planning.",
      "Structured a joint venture between a European manufacturer and an Indian distributor, negotiating governance rights and profit-sharing mechanisms.",
      "Conducted comprehensive due diligence for a private equity fund's investment in a mid-sized manufacturing company.",
    ],
    faqs: [
      {
        question: "What is the typical timeline for an M&A transaction?",
        answer: "Timeline varies based on transaction complexity, but typically ranges from 3-6 months from LOI to closing. Factors include regulatory approvals, due diligence scope, financing arrangements, and negotiation complexity.",
      },
      {
        question: "How do you structure fees for corporate advisory work?",
        answer: "We offer flexible fee structures including fixed fees for defined scope work, hourly billing for ongoing advisory, and success-based fees for transactions. The approach depends on the nature and scale of the engagement.",
      },
      {
        question: "Do you advise on foreign investment regulations?",
        answer: "Yes, we provide comprehensive advisory on FEMA compliance, FDI policy, DPIIT approvals, sectoral caps, and downstream investment requirements for both inbound and outbound investments.",
      },
    ],
  },
  "arbitration": {
    title: "Arbitration & ADR",
    tagline: "Effective Resolution of Complex Commercial Disputes",
    intro: "Our arbitration practice represents clients in domestic and international arbitrations, combining strategic thinking with persuasive advocacy. We handle all aspects of arbitration proceedings from drafting arbitration clauses to enforcement of awards.",
    services: [
      "Domestic Arbitration (Arbitration & Conciliation Act, 1996)",
      "International Commercial Arbitration",
      "Arbitration Clause Drafting & Review",
      "Emergency Arbitration Proceedings",
      "Enforcement of Domestic & Foreign Awards",
      "Section 9 & Section 17 Applications",
      "Mediation & Conciliation",
      "Expert Determination",
    ],
    examples: [
      "Successfully represented a construction company in a ₹50 crore arbitration dispute, securing a favorable award with interest and costs.",
      "Defended a multinational corporation in an ICC arbitration involving breach of distribution agreement claims exceeding USD 10 million.",
      "Obtained interim relief under Section 9 to protect client assets during pendency of arbitration proceedings.",
    ],
    faqs: [
      {
        question: "What are the advantages of arbitration over litigation?",
        answer: "Arbitration offers confidentiality, party autonomy in appointing arbitrators, flexibility in procedure, faster resolution, and enforceability across borders under the New York Convention. It's particularly suited for commercial disputes requiring specialized expertise.",
      },
      {
        question: "How long does arbitration typically take?",
        answer: "The Arbitration Act mandates completion within 12 months (extendable by 6 months). In practice, timeline depends on dispute complexity, number of hearings, and whether interim relief is sought. Most arbitrations conclude within 18-24 months.",
      },
      {
        question: "Can arbitration awards be challenged?",
        answer: "Arbitration awards can be challenged under Section 34 of the Arbitration Act on limited grounds within 3 months. However, judicial intervention is restricted and courts are reluctant to interfere with arbitral findings on merits.",
      },
    ],
  },
};

const PracticeAreaDetailV3 = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? practiceData[slug] : null;

  if (!data) {
    return (
      <div className="v3-theme min-h-screen">
        <Header />
        <main className="py-24">
          <div className="mono-container text-center">
            <h1 className="text-4xl font-serif font-semibold mb-4">Practice Area Not Found</h1>
            <Button asChild>
              <Link to="/v3/practice-areas">View All Practice Areas</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="v3-theme min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-24 bg-background border-b border-line">
          <div className="mono-container">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-serif font-semibold mb-6 tracking-tight">
                {data.title}
              </h1>
              <p className="text-2xl text-foreground font-serif font-medium">
                {data.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="mono-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Introduction */}
                <div>
                  <p className="text-lg leading-relaxed text-foreground">
                    {data.intro}
                  </p>
                </div>

                {/* Core Services */}
                <div>
                  <h2 className="text-3xl font-serif font-semibold mb-6">Core Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.services.map((service: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-ink mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Representative Matters */}
                <div>
                  <h2 className="text-3xl font-serif font-semibold mb-6">Representative Matters</h2>
                  <div className="space-y-4">
                    {data.examples.map((example: string, idx: number) => (
                      <Card key={idx} className="border-line">
                        <CardContent className="pt-6">
                          <p className="text-foreground leading-relaxed">{example}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <p className="text-sm text-foreground mt-4 italic">
                    Client names omitted for confidentiality. Specific details modified to protect attorney-client privilege.
                  </p>
                </div>

                {/* FAQs */}
                <div>
                  <h2 className="text-3xl font-serif font-semibold mb-6">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {data.faqs.map((faq: any, idx: number) => (
                      <AccordionItem key={idx} value={`item-${idx}`} className="border border-line rounded-lg px-6">
                        <AccordionTrigger className="text-left font-semibold hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-foreground leading-relaxed pt-2">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              {/* Right Column - CTA */}
              <div className="lg:col-span-1">
                <Card className="border-line sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Need Legal Counsel?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-foreground leading-relaxed">
                      Schedule a consultation to discuss your legal matter with our experienced attorneys.
                    </p>
                    <Button asChild className="w-full">
                      <Link to="/v3/contact">
                        Book Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <div className="pt-4 border-t border-line">
                      <p className="text-xs text-foreground mb-2">Or reach us directly:</p>
                      <p className="text-sm font-medium">+91 40 1234 5678</p>
                      <p className="text-sm text-foreground">contact@varunalaw.in</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PracticeAreaDetailV3;

