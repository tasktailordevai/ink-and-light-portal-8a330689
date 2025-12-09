import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/v4" },
  { name: "Practice Areas", href: "/v4/practice-areas" },
  { name: "Team", href: "/v4/team" },
  { name: "Case Studies", href: "/v4/case-studies" },
  { name: "Insights", href: "/v4/insights" },
  { name: "About", href: "/v4/about" },
  { name: "Contact", href: "/v4/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-sm border-b"
      style={{ backgroundColor: "#002366", borderColor: "rgba(255, 255, 255, 0.2)" }}
    >
      <nav className="mono-container py-4 flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/v4" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Scale className="h-6 w-6" style={{ color: "#ffffff" }} />
            <span className="font-serif text-2xl tracking-tight font-semibold" style={{ color: "#ffffff" }}>Varuna Law</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            style={{ color: "#ffffff" }}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium leading-6 transition-colors"
              style={{ color: "#ffffff" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#e0e0e0"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild variant="default" size="sm" style={{ backgroundColor: "#002366", color: "#ffffff", border: "1px solid #ffffff" }}>
            <Link to="/v4/contact">Book Consultation</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1" style={{ backgroundColor: "#002366", borderColor: "rgba(255, 255, 255, 0.2)" }}>
            <div className="flex items-center justify-between">
              <Link to="/v4" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Scale className="h-5 w-5" style={{ color: "#ffffff" }} />
                <span className="font-serif text-xl tracking-tight font-semibold" style={{ color: "#ffffff" }}>Varuna Law</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                style={{ color: "#ffffff" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-line">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 transition-colors"
                      style={{ color: "#ffffff" }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild variant="default" className="w-full" style={{ backgroundColor: "#002366", color: "#ffffff", border: "1px solid #ffffff" }}>
                    <Link to="/v4/contact" onClick={() => setMobileMenuOpen(false)}>
                      Book Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

