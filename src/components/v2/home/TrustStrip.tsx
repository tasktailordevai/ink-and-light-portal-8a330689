import { Shield, Award, Users, TrendingUp } from "lucide-react";

export const TrustStrip = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served", color: "from-v2-accent to-v2-accent/80" },
    { icon: Award, value: "15+", label: "Years Experience", color: "from-v2-accent-alt to-yellow-500" },
    { icon: Shield, value: "98%", label: "Success Rate", color: "from-v2-accent to-blue-600" },
    { icon: TrendingUp, value: "₹100Cr+", label: "Cases Won", color: "from-v2-accent-alt to-orange-500" },
  ];

  return (
    <section className="py-16 bg-v2-panel border-y border-v2-gray-2">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-v2-accent-soft to-v2-panel border-2 border-v2-accent/20 mb-4 hover:scale-110 transition-transform">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="text-v2-text-inverse" size={24} />
                </div>
              </div>
              <div className="font-serif text-4xl font-bold text-v2-text-headline mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-v2-text-light font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
