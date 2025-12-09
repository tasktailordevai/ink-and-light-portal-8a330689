import { Scale, Building2, Briefcase } from "lucide-react";

const trustedBy = [
  { name: "Telangana High Court", icon: Scale },
  { name: "NCLT Hyderabad", icon: Building2 },
  { name: "Leading Corporates", icon: Briefcase },
];

export const TrustStrip = () => {
  return (
    <section 
      className="border-y py-12"
      style={{ backgroundColor: "#002366", borderColor: "rgba(255, 255, 255, 0.2)" }}
    >
      <div className="mono-container">
        <p className="text-center text-sm font-medium mb-8 uppercase tracking-wider" style={{ color: "#ffffff" }}>
          Appearing Before
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustedBy.map((item) => (
            <div key={item.name} className="flex items-center justify-center gap-3">
              <item.icon className="h-5 w-5" style={{ color: "#ffffff" }} />
              <span className="text-sm font-medium" style={{ color: "#ffffff" }}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

