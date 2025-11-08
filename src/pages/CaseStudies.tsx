import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "High-Value M&A Transaction",
    practice: "Corporate Law",
    court: "Regulatory Approvals",
    year: "2023",
    value: "₹150 Crores",
    summary: "Successfully advised a US-based technology company on the acquisition of an Indian SaaS startup. Managed complex regulatory approvals including CCI clearance, negotiated earn-out provisions, and structured favorable indemnity caps.",
    outcome: "Transaction closed successfully within 5 months. Client achieved strategic market entry with full IP transfer and key employee retention.",
  },
  {
    title: "Commercial Arbitration Award",
    practice: "Arbitration",
    court: "Sole Arbitrator",
    year: "2023",
    value: "₹50 Crores",
    summary: "Represented a leading construction company in arbitration proceedings arising from termination of a turnkey infrastructure contract. Disputed claims included wrongful termination, withheld payments, and liquidated damages.",
    outcome: "Secured favorable award of ₹48 crores plus interest and costs. Successfully defended against Section 34 challenge in High Court.",
  },
  {
    title: "CIRP Successful Resolution",
    practice: "IBC & Insolvency",
    court: "NCLT Hyderabad",
    year: "2022",
    value: "₹200 Crores",
    summary: "Represented resolution applicant in the acquisition of a stressed manufacturing company through the CIRP process. Negotiated with financial creditors, operational creditors, and employees to structure viable resolution plan.",
    outcome: "Resolution plan approved by CoC with 89% voting share and confirmed by NCLT. Company successfully revived with 600+ jobs protected.",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-24 bg-background border-b border-line">
          <div className="mono-container">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-serif font-semibold mb-6 tracking-tight">
                Case Studies
              </h1>
              <p className="text-xl text-muted-text leading-relaxed">
                Selected matters demonstrating our expertise across practice areas. 
                Client names and specific details modified to protect confidentiality.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24">
          <div className="mono-container">
            <div className="space-y-8">
              {caseStudies.map((study, idx) => (
                <Card key={idx} className="border-line">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{study.practice}</Badge>
                        <Badge variant="outline">{study.year}</Badge>
                        <Badge variant="outline">{study.value}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-serif">{study.title}</CardTitle>
                    <p className="text-sm text-muted-text">{study.court}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Matter Summary</h4>
                      <p className="text-muted-text leading-relaxed text-sm">
                        {study.summary}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Outcome</h4>
                      <p className="text-muted-text leading-relaxed text-sm">
                        {study.outcome}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-panel border border-line rounded-lg">
              <p className="text-sm text-muted-text leading-relaxed italic">
                <strong className="text-foreground">Disclaimer:</strong> The case studies presented are illustrative of the firm's capabilities 
                and do not constitute guarantees of results in any future matter. All client information has been anonymized 
                to maintain attorney-client privilege and confidentiality obligations. Past results do not guarantee similar outcomes.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
