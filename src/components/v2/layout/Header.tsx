import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 bg-v2-panel/95 backdrop-blur-sm border-b border-v2-gray-2 shadow-sm">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/v2" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-v2-accent to-v2-accent-alt rounded-2xl flex items-center justify-center">
              <span className="text-v2-text-inverse font-bold text-lg">V</span>
            </div>
            <span className="font-serif text-2xl font-bold text-v2-text-headline">
              Varuna Law
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 text-v2-text-main hover:text-v2-accent font-medium transition-colors rounded-xl hover:bg-v2-accent-soft/50"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              asChild 
              size="lg" 
              className="bg-v2-accent hover:bg-v2-accent/90 text-v2-text-inverse rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <Link to="/v2/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-v2-text-main hover:bg-v2-accent-soft rounded-xl transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-v2-gray-2 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-3 text-v2-text-main hover:text-v2-accent hover:bg-v2-accent-soft rounded-xl transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/v2/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-v2-accent hover:bg-v2-accent/90 text-v2-text-inverse rounded-xl">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
