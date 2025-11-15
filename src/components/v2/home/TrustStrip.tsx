import { Shield, Award, Users, TrendingUp } from "lucide-react";

export const TrustStrip = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served", color: "from-v2-accent to-v2-accent/80" },
    { icon: Award, value: "15+", label: "Years Experience", color: "from-v2-accent-alt to-yellow-500" },
    { icon: Shield, value: "98%", label: "Success Rate", color: "from-v2-accent to-blue-600" },
    { icon: TrendingUp, value: "₹100Cr+", label: "Cases Won", color: "from-v2-accent-alt to-orange-500" },
  ];

  return (
    <section className="py-20 bg-v2-surface/30 backdrop-blur-sm border-y border-v2-gray-2/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-v2-panel/90 backdrop-blur-md border border-v2-accent/10 mb-6 group-hover:scale-110 transition-all duration-200 shadow-[0_4px_16px_rgba(54,89,180,0.06)] group-hover:shadow-[0_8px_24px_rgba(54,89,180,0.12)]">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-inner`}>
                  <stat.icon className="text-v2-text-inverse" size={26} />
                </div>
              </div>
              <div className="font-serif text-5xl font-bold text-v2-text-headline mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-v2-text-light font-light tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
