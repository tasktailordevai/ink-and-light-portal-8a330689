import { Header } from "@/components/v2/layout/Header";
import { Footer } from "@/components/v2/layout/Footer";
import { Scale, Award, Users, TrendingUp } from "lucide-react";

const AboutV2 = () => {
  return (
    <div className="min-h-screen bg-v2-bg">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-v2-bg via-v2-panel to-v2-accent-soft">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6 text-v2-text-headline text-center">
              About Varuna Law Associates
            </h1>
            <p className="text-xl text-v2-text-main text-center max-w-3xl mx-auto leading-relaxed">
              Delivering excellence in legal services since 2009
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-v2-panel">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-4xl font-serif font-bold mb-8 text-v2-text-headline">Our Story</h2>
            <div className="space-y-6 text-lg text-v2-text-main leading-relaxed">
              <p>
                Founded in 2009, Varuna Law Associates LLP has grown to become one of Telangana's most 
                trusted legal firms. Our journey began with a simple mission: to provide sophisticated 
                legal solutions with a personal touch.
              </p>
              <p>
                Over the years, we've built a reputation for excellence across multiple practice areas, 
                from corporate law and arbitration to regulatory compliance and litigation. Our team 
                combines deep legal expertise with innovative thinking to deliver results that exceed 
                our clients' expectations.
              </p>
              <p>
                Today, we serve over 500 clients across India, handling complex legal matters with 
                precision and care. Our commitment to excellence and client satisfaction remains 
                unwavering as we continue to grow and evolve.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-v2-surface">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-4xl font-serif font-bold mb-16 text-v2-text-headline text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Scale, title: "Integrity", description: "We uphold the highest ethical standards in everything we do." },
                { icon: Award, title: "Excellence", description: "We strive for excellence in every matter we handle." },
                { icon: Users, title: "Collaboration", description: "We work closely with clients to achieve their goals." },
                { icon: TrendingUp, title: "Innovation", description: "We embrace new approaches to solve complex problems." },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="bg-v2-panel rounded-3xl p-8 border-2 border-v2-gray-2 hover:border-v2-accent transition-all hover:shadow-xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-v2-accent to-blue-600 flex items-center justify-center mb-6">
                    <value.icon className="text-v2-text-inverse" size={28} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-v2-text-headline">
                    {value.title}
                  </h3>
                  <p className="text-v2-text-main leading-relaxed">
                    {value.description}
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

export default AboutV2;
