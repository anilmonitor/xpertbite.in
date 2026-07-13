"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Globe, Settings, Users, FolderKanban, Rss, Briefcase, HelpCircle, Star, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const adminNavItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Services", href: "/admin/services", icon: Globe },
  { label: "Products", href: "/admin/products", icon: FolderKanban },
  { label: "Portfolio", href: "/admin/portfolio", icon: FolderKanban },
  { label: "Blogs", href: "/admin/blogs", icon: Rss },
  { label: "Testimonials", href: "/admin/testimonials", icon: Star },
  { label: "Careers & Jobs", href: "/admin/careers", icon: Briefcase },
  { label: "Inquiries & Leads", href: "/admin/leads", icon: MessageSquare },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-card/60 backdrop-blur-xl h-screen flex flex-col sticky top-0 max-md:hidden">
      <div className="h-16 flex items-center px-6 border-b">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center text-white font-bold text-sm">
            X
          </div>
          <span className="font-heading font-bold text-lg">
            <span className="gradient-text">Xpert</span>
            <span className="text-foreground">Admin</span>
          </span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        {adminNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                isActive
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <Icon className="h-4.5 w-4.5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t text-center">
        <Link href="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">
          View Website Live
        </Link>
      </div>
    </aside>
  );
}
