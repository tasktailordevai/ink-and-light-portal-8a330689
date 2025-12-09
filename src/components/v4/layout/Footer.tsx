import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const practiceAreas = [
  { name: "Corporate Law", href: "/v4/practice-areas/corporate-law" },
  { name: "Real Estate", href: "/v4/practice-areas/real-estate" },
  { name: "Arbitration", href: "/v4/practice-areas/arbitration" },
  { name: "White Collar Crime", href: "/v4/practice-areas/white-collar-crime" },
  { name: "IBC & Insolvency", href: "/v4/practice-areas/ibc" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export const Footer = () => {
  return (
    <footer 
      className="border-t border-line mt-0"
      style={{ backgroundColor: "#002366" }}
    >
      <div className="mono-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Firm Info */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-semibold mb-6" style={{ color: "#ffffff" }}>Varuna Law Associates LLP</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#ffffff" }} />
                <p style={{ color: "#ffffff" }}>Level 3, Commercial Tower<br />Banjara Hills, Hyderabad 500034<br />Telangana, India</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: "#ffffff" }} />
                <a href="tel:+914012345678" className="hover:opacity-80 transition-colors" style={{ color: "#ffffff" }}>
                  +91 40 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: "#ffffff" }} />
                <a href="mailto:contact@varunalaw.in" className="hover:opacity-80 transition-colors" style={{ color: "#ffffff" }}>
                  contact@varunalaw.in
                </a>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "#ffffff" }}>Practice Areas</h4>
            <ul className="space-y-2 text-sm">
              {practiceAreas.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:opacity-80 transition-colors" style={{ color: "#ffffff" }}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "#ffffff" }}>Legal</h4>
            <ul className="space-y-2 text-sm">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:opacity-80 transition-colors" style={{ color: "#ffffff" }}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}>
          <p className="text-xs text-center" style={{ color: "#ffffff" }}>
            © {new Date().getFullYear()} Varuna Law Associates LLP. All rights reserved. 
            <span className="mx-2">|</span>
            Attorney Advertising. Prior results do not guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
  );
};

