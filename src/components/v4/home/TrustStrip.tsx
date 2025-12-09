import { Scale, Building2, Briefcase } from "lucide-react";

const trustedBy = [
  { name: "Telangana High Court", icon: Scale },
  { name: "NCLT Hyderabad", icon: Building2 },
  { name: "Leading Corporates", icon: Briefcase },
];

export const TrustStrip = () => {
  return (
    <section 
      className="border-y border-line py-12"
      style={{ backgroundColor: "#f4f5f0" }}
    >
      <div className="mono-container">
        <p className="text-center text-sm font-medium text-foreground mb-8 uppercase tracking-wider">
          Appearing Before
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustedBy.map((item) => (
            <div key={item.name} className="flex items-center justify-center gap-3">
              <item.icon className="h-5 w-5 text-foreground" />
              <span className="text-sm font-medium text-foreground">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

