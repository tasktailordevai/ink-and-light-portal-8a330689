import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Scale } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-v2-surface/50 border-t border-v2-gray-2/50 backdrop-blur-sm rounded-t-[3rem] mt-24">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-3xl bg-gradient-to-br from-v2-accent to-v2-accent-alt flex items-center justify-center shadow-[0_4px_16px_rgba(54,89,180,0.2)]">
                <Scale className="text-v2-text-inverse" size={22} />
              </div>
              <span className="font-serif text-xl font-bold text-v2-text-headline tracking-tight">Varuna Law</span>
            </div>
            <p className="text-v2-text-light leading-relaxed font-light">Delivering excellence in legal services since 2009</p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-v2-text-headline">Quick Links</h3>
            <ul className="space-y-3">
              {["About", "Practice Areas", "Team", "Case Studies", "Insights"].map((item) => (
                <li key={item}>
                  <Link to={`/v2/${item.toLowerCase().replace(" ", "-")}`} className="text-v2-text-light hover:text-v2-accent transition-all duration-200 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-v2-accent-alt after:transition-all after:duration-200 hover:after:w-full font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-v2-text-headline">Practice Areas</h3>
            <ul className="space-y-3">
              {["Corporate Law", "Arbitration", "Litigation", "Tax Law", "Real Estate"].map((item) => (
                <li key={item}><span className="text-v2-text-light font-light">{item}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-v2-text-headline">Contact</h3>
            <ul className="space-y-3 text-v2-text-light">
              <li className="flex items-center space-x-3"><MapPin size={18} className="text-v2-accent flex-shrink-0" /><span className="font-light">Hyderabad, Telangana</span></li>
              <li className="flex items-center space-x-3"><Phone size={18} className="text-v2-accent flex-shrink-0" /><span className="font-light">+91 98765 43210</span></li>
              <li className="flex items-center space-x-3"><Mail size={18} className="text-v2-accent flex-shrink-0" /><span className="font-light">info@varunalaw.com</span></li>
            </ul>
            <div className="flex space-x-3 mt-8">
              <a href="#" className="w-11 h-11 flex items-center justify-center bg-v2-accent-soft hover:bg-gradient-to-br hover:from-v2-accent hover:to-v2-accent-alt rounded-2xl transition-all duration-200 group shadow-sm hover:shadow-md hover:scale-105">
                <Linkedin size={18} className="text-v2-accent group-hover:text-v2-text-inverse transition-colors" />
              </a>
              <a href="#" className="w-11 h-11 flex items-center justify-center bg-v2-accent-soft hover:bg-gradient-to-br hover:from-v2-accent hover:to-v2-accent-alt rounded-2xl transition-all duration-200 group shadow-sm hover:shadow-md hover:scale-105">
                <Twitter size={18} className="text-v2-accent group-hover:text-v2-text-inverse transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-v2-gray-2/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-v2-text-light text-sm font-light">© {new Date().getFullYear()} Varuna Law Associates LLP. All rights reserved.</p>
          <div className="flex space-x-8 text-sm">
            <Link to="/v2/privacy" className="text-v2-text-light hover:text-v2-accent transition-all duration-200 font-light relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-v2-accent-alt after:transition-all after:duration-200 hover:after:w-full">Privacy Policy</Link>
            <Link to="/v2/terms" className="text-v2-text-light hover:text-v2-accent transition-all duration-200 font-light relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-v2-accent-alt after:transition-all after:duration-200 hover:after:w-full">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
