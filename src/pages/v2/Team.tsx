import { Header } from "@/components/v2/layout/Header";
import { Footer } from "@/components/v2/layout/Footer";
import { Linkedin, Mail } from "lucide-react";

const TeamV2 = () => {
  const team = [
    {
      name: "Adv. Rajesh Varma",
      role: "Managing Partner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      gradient: "from-v2-accent to-blue-600",
    },
    {
      name: "Adv. Priya Nair",
      role: "Senior Partner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      gradient: "from-v2-accent-alt to-yellow-600",
    },
    {
      name: "Adv. Amit Shah",
      role: "Partner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      gradient: "from-purple-600 to-v2-accent",
    },
    {
      name: "Adv. Sneha Reddy",
      role: "Senior Associate",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      gradient: "from-green-500 to-emerald-600",
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
              Meet Our Team
            </h1>
            <p className="text-xl text-v2-text-main max-w-3xl mx-auto leading-relaxed">
              Expert legal professionals dedicated to your success
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-24 bg-v2-panel">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-6 overflow-hidden rounded-3xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity z-10`} />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-2 text-v2-text-headline">
                    {member.name}
                  </h3>
                  <p className="text-v2-text-light mb-4">{member.role}</p>
                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center bg-v2-accent-soft hover:bg-v2-accent rounded-xl transition-colors group"
                    >
                      <Linkedin size={18} className="text-v2-accent group-hover:text-v2-text-inverse" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center bg-v2-accent-soft hover:bg-v2-accent rounded-xl transition-colors group"
                    >
                      <Mail size={18} className="text-v2-accent group-hover:text-v2-text-inverse" />
                    </a>
                  </div>
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

export default TeamV2;
