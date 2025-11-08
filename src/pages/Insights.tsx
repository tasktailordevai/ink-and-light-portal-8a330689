import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const insights = [
  {
    title: "IBC Amendments 2023: Key Changes for Corporate Debtors",
    category: "IBC & Insolvency",
    date: "November 15, 2023",
    readTime: "8 min read",
    excerpt: "Analysis of recent amendments to the Insolvency and Bankruptcy Code, including changes to pre-pack provisions, withdrawal timelines, and creditor rights. Practical implications for corporate debtors and resolution applicants.",
    author: "Vikram Reddy",
  },
  {
    title: "Cross-Border Arbitration: Enforcement Challenges in India",
    category: "Arbitration",
    date: "October 28, 2023",
    readTime: "12 min read",
    excerpt: "Comprehensive guide to enforcing foreign arbitral awards in India under the New York Convention. Recent judicial trends, Section 48 objections, and practical strategies for award creditors.",
    author: "Priya Sharma",
  },
  {
    title: "White Collar Crime: Navigating PMLA Investigations",
    category: "White Collar Crime",
    date: "October 10, 2023",
    readTime: "10 min read",
    excerpt: "Understanding the Prevention of Money Laundering Act investigation process, attachment orders, provisional bail conditions, and defense strategies. Essential reading for corporate counsel and executives.",
    author: "Ananya Iyer",
  },
];

const Insights = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-24 bg-background border-b border-line">
          <div className="mono-container">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-serif font-semibold mb-6 tracking-tight">
                Insights
              </h1>
              <p className="text-xl text-muted-text leading-relaxed">
                Legal analysis, regulatory updates, and practical guidance from our attorneys.
              </p>
            </div>
          </div>
        </section>

        {/* Insights Grid */}
        <section className="py-24">
          <div className="mono-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {insights.map((insight, idx) => (
                <Card key={idx} className="border-line hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {insight.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-serif leading-tight mb-4">
                      {insight.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-xs text-muted-text">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {insight.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {insight.readTime}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-text leading-relaxed mb-4">
                      {insight.excerpt}
                    </p>
                    <p className="text-sm font-medium">By {insight.author}</p>
                  </CardContent>
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

export default Insights;
