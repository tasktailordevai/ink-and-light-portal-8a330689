import { Header } from "@/components/v2/layout/Header";
import { Footer } from "@/components/v2/layout/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const InsightsV2 = () => {
  const posts = [
    {
      title: "Understanding the New Arbitration Rules 2024",
      excerpt: "Comprehensive analysis of the recent amendments to arbitration procedures and their impact on commercial disputes.",
      category: "Arbitration",
      date: "March 15, 2024",
      readTime: "5 min read",
      gradient: "from-v2-accent to-blue-600",
    },
    {
      title: "Corporate Governance Best Practices",
      excerpt: "Essential guidelines for maintaining strong corporate governance in Indian companies.",
      category: "Corporate Law",
      date: "March 10, 2024",
      readTime: "7 min read",
      gradient: "from-v2-accent-alt to-yellow-600",
    },
    {
      title: "Tax Planning Strategies for 2024",
      excerpt: "Effective tax planning approaches for businesses and high net worth individuals.",
      category: "Tax Law",
      date: "March 5, 2024",
      readTime: "6 min read",
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
              Legal Insights
            </h1>
            <p className="text-xl text-v2-text-main max-w-3xl mx-auto leading-relaxed">
              Expert perspectives on current legal developments
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-24 bg-v2-panel">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article
                  key={post.title}
                  className="group bg-v2-surface rounded-3xl overflow-hidden border-2 border-v2-gray-2 hover:border-v2-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-48 bg-gradient-to-br ${post.gradient} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-v2-text-inverse text-6xl font-serif font-bold opacity-20">
                        {post.category.charAt(0)}
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="inline-block px-4 py-1 bg-v2-accent-soft text-v2-accent rounded-full text-sm font-medium mb-4">
                      {post.category}
                    </div>
                    <h3 className="font-serif text-2xl font-semibold mb-3 text-v2-text-headline group-hover:text-v2-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-v2-text-main mb-6 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-v2-text-light mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {post.readTime}
                      </div>
                    </div>
                    <button className="flex items-center text-v2-accent hover:text-v2-accent-alt font-semibold group">
                      Read article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InsightsV2;
