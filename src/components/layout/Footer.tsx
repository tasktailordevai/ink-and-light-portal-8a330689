import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const practiceAreas = [
  { name: "Corporate Law", href: "/practice-areas/corporate-law" },
  { name: "Real Estate", href: "/practice-areas/real-estate" },
  { name: "Arbitration", href: "/practice-areas/arbitration" },
  { name: "White Collar Crime", href: "/practice-areas/white-collar-crime" },
  { name: "IBC & Insolvency", href: "/practice-areas/ibc" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export const Footer = () => {
  return (
    <footer className="bg-panel border-t border-line mt-24">
      <div className="mono-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Firm Info */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-semibold mb-6">Varuna Law Associates LLP</h3>
            <div className="space-y-3 text-sm text-muted-text">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>Level 3, Commercial Tower<br />Banjara Hills, Hyderabad 500034<br />Telangana, India</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+914012345678" className="hover:text-foreground transition-colors">
                  +91 40 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:contact@varunalaw.in" className="hover:text-foreground transition-colors">
                  contact@varunalaw.in
                </a>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-sm">
              {practiceAreas.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-muted-text hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-muted-text hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-line">
          <p className="text-xs text-muted-text text-center">
            © {new Date().getFullYear()} Varuna Law Associates LLP. All rights reserved. 
            <span className="mx-2">|</span>
            Attorney Advertising. Prior results do not guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
  );
};
