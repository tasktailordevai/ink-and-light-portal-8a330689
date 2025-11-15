import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-v2-surface border-t border-v2-gray-2">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-v2-accent to-v2-accent-alt rounded-2xl flex items-center justify-center">
                <span className="text-v2-text-inverse font-bold text-lg">V</span>
              </div>
              <span className="font-serif text-xl font-bold text-v2-text-headline">
                Varuna Law
              </span>
            </div>
            <p className="text-v2-text-light leading-relaxed mb-4">
              Strategic legal counsel for complex matters across Telangana and beyond.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-v2-accent rounded-xl text-v2-text-inverse hover:bg-v2-accent-alt transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-v2-accent rounded-xl text-v2-text-inverse hover:bg-v2-accent-alt transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-v2-accent rounded-xl text-v2-text-inverse hover:bg-v2-accent-alt transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-v2-text-headline mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["About Us", "Practice Areas", "Team", "Case Studies", "Insights", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/v2/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-v2-text-main hover:text-v2-accent transition-colors inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-v2-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-v2-text-headline mb-4">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {["Corporate Law", "Arbitration", "Litigation", "Regulatory", "Tax Law", "Real Estate"].map((item) => (
                <li key={item}>
                  <Link
                    to="/v2/practice-areas"
                    className="text-v2-text-main hover:text-v2-accent transition-colors inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-v2-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-v2-text-headline mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 flex items-center justify-center bg-v2-accent-soft rounded-xl flex-shrink-0">
                  <MapPin size={18} className="text-v2-accent" />
                </div>
                <div>
                  <p className="text-v2-text-main text-sm leading-relaxed">
                    Hyderabad, Telangana<br />India
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 flex items-center justify-center bg-v2-accent-soft rounded-xl flex-shrink-0">
                  <Phone size={18} className="text-v2-accent" />
                </div>
                <div>
                  <a href="tel:+919876543210" className="text-v2-text-main hover:text-v2-accent transition-colors text-sm">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 flex items-center justify-center bg-v2-accent-soft rounded-xl flex-shrink-0">
                  <Mail size={18} className="text-v2-accent" />
                </div>
                <div>
                  <a href="mailto:info@varunalaw.com" className="text-v2-text-main hover:text-v2-accent transition-colors text-sm">
                    info@varunalaw.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-v2-gray-2 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-v2-text-light text-sm">
            © {new Date().getFullYear()} Varuna Law Associates LLP. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/v2/privacy" className="text-v2-text-light hover:text-v2-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/v2/terms" className="text-v2-text-light hover:text-v2-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
