import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Users,
  Image,
  Mail,
  Settings,
  LogOut,
  Scale,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Posts", href: "/admin/posts", icon: FileText },
  { name: "Case Studies", href: "/admin/case-studies", icon: Briefcase },
  { name: "Attorneys", href: "/admin/attorneys", icon: Users },
  { name: "Media", href: "/admin/media", icon: Image },
  { name: "Forms", href: "/admin/forms", icon: Mail },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

const AdminLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-line bg-panel">
        <div className="flex h-16 items-center gap-3 border-b border-line px-6">
          <Scale className="h-6 w-6" />
          <span className="headline text-xl">Varuna CMS</span>
        </div>
        
        <nav className="space-y-1 p-4">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                  isActive
                    ? "bg-background text-ink-2 font-medium"
                    : "text-muted hover:bg-background/50 hover:text-ink"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-64 border-t border-line p-4">
          <button className="flex items-center gap-3 px-3 py-2 text-sm text-muted hover:text-ink transition-colors w-full">
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
