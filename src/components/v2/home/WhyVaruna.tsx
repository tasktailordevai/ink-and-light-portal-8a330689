import { CheckCircle2, Users, Lightbulb, Target } from "lucide-react";

export const WhyVaruna = () => {
  const reasons = [
    {
      icon: CheckCircle2,
      title: "Proven Track Record",
      description: "Over 15 years of delivering exceptional legal outcomes across diverse practice areas.",
      gradient: "from-v2-accent to-blue-600",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned attorneys with deep expertise in Indian and international law.",
      gradient: "from-v2-accent-alt to-yellow-600",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Strategic, creative approaches tailored to your unique legal challenges.",
      gradient: "from-purple-600 to-v2-accent",
    },
    {
      icon: Target,
      title: "Client-Centric",
      description: "Your goals are our priority. We deliver results that matter to you.",
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-v2-bg via-v2-panel to-v2-accent-soft">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-v2-text-headline">
              Why Choose Varuna Law?
            </h2>
            <p className="text-xl text-v2-text-main leading-relaxed mb-8">
              We combine deep legal expertise with a client-first approach, delivering strategic 
              solutions that drive your success.
            </p>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center`}>
                    <reason.icon className="text-v2-text-inverse" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2 text-v2-text-headline">
                      {reason.title}
                    </h3>
                    <p className="text-v2-text-main leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative">
            <div className="bg-v2-panel rounded-3xl p-12 border-2 border-v2-accent/20 shadow-2xl">
              <div className="space-y-8">
                <div className="text-center pb-8 border-b border-v2-gray-2">
                  <div className="text-6xl font-serif font-bold bg-gradient-to-r from-v2-accent to-v2-accent-alt bg-clip-text text-transparent mb-2">
                    98%
                  </div>
                  <div className="text-v2-text-main font-semibold">Client Satisfaction Rate</div>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-v2-text-headline mb-1">500+</div>
                    <div className="text-sm text-v2-text-light">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-v2-text-headline mb-1">15+</div>
                    <div className="text-sm text-v2-text-light">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-v2-text-headline mb-1">₹100Cr+</div>
                    <div className="text-sm text-v2-text-light">Cases Won</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-v2-text-headline mb-1">25+</div>
                    <div className="text-sm text-v2-text-light">Expert Attorneys</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-v2-accent/20 to-v2-accent-alt/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
