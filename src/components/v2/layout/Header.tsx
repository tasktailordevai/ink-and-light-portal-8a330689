import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/v2" },
    { name: "Practice Areas", path: "/v2/practice-areas" },
    { name: "About", path: "/v2/about" },
    { name: "Team", path: "/v2/team" },
    { name: "Case Studies", path: "/v2/case-studies" },
    { name: "Insights", path: "/v2/insights" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-v2-panel/80 backdrop-blur-xl border-b border-v2-gray-2/50 shadow-[0_2px_16px_rgba(54,89,180,0.06)]">
      <nav className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/v2" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-3xl bg-gradient-to-br from-v2-accent via-v2-accent to-v2-accent-alt flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-[0_4px_16px_rgba(54,89,180,0.2)]">
              <Scale className="text-v2-text-inverse" size={22} />
            </div>
            <span className="font-serif text-2xl font-bold text-v2-text-headline tracking-tight">Varuna Law</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="px-5 py-2.5 text-v2-text-main hover:text-v2-accent hover:bg-v2-accent-soft rounded-2xl transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-v2-accent-alt after:transition-all after:duration-200 hover:after:w-3/4">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-v2-accent to-v2-accent text-v2-text-inverse rounded-2xl shadow-[0_4px_16px_rgba(54,89,180,0.3)] hover:shadow-[0_8px_24px_rgba(230,180,65,0.4)] hover:scale-105 transition-all duration-200 px-6">
              <Link to="/v2/contact">Contact Us</Link>
            </Button>
          </div>

          <button className="lg:hidden p-2.5 text-v2-text-main hover:text-v2-accent hover:bg-v2-accent-soft rounded-2xl transition-all" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="block px-5 py-3.5 text-v2-text-main hover:text-v2-accent hover:bg-v2-accent-soft rounded-2xl transition-all font-medium" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 bg-gradient-to-r from-v2-accent to-v2-accent text-v2-text-inverse rounded-2xl">
              <Link to="/v2/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
