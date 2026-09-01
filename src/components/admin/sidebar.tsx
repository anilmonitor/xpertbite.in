"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Globe, 
  Settings, 
  FolderKanban, 
  Rss, 
  Briefcase, 
  Star, 
  MessageSquare, 
  Gift,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const adminNavItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Festivals", href: "/admin/festivals", icon: Gift },
  { label: "Services", href: "/admin/services", icon: Globe },
  { label: "Products", href: "/admin/products", icon: FolderKanban },
  { label: "Portfolio", href: "/admin/portfolio", icon: FolderKanban },
  { label: "Blogs", href: "/admin/blogs", icon: Rss },
  { label: "Testimonials", href: "/admin/testimonials", icon: Star },
  { label: "Careers & Jobs", href: "/admin/careers", icon: Briefcase },
  { label: "Inquiries & Leads", href: "/admin/leads", icon: MessageSquare },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

interface SidebarProps {
  className?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export function Sidebar({ className, onClose, showCloseButton = false }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={cn("w-64 bg-card/90 backdrop-blur-xl h-full flex flex-col border-r", className)}>
      <div className="h-16 flex items-center justify-between px-6 border-b shrink-0">
        <Link 
          href="/admin" 
          onClick={onClose}
          className="flex items-center gap-2.5"
        >
          <div className="h-9 w-9 flex items-center justify-center">
            <img 
              src="/logos/xpertbite_logo_light.png" 
              alt="XpertBite Logo" 
              className="h-9 w-auto object-contain block dark:hidden"
            />
            <img 
              src="/logos/xpertbite_logo_dark.png" 
              alt="XpertBite Logo" 
              className="h-9 w-auto object-contain hidden dark:block"
            />
          </div>
          <span className="font-heading font-bold text-lg tracking-tight text-foreground">
            XpertAdmin
          </span>
        </Link>

        {showCloseButton && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="md:hidden h-8 w-8 text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        )}
      </div>

      <nav className="flex-1 px-4 py-5 space-y-1 overflow-y-auto">
        {adminNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60 active:scale-[0.98]"
              )}
            >
              <Icon className={cn("h-4.5 w-4.5 shrink-0", isActive ? "text-primary-foreground" : "text-muted-foreground")} />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t text-center shrink-0 bg-muted/20">
        <Link 
          href="/" 
          target="_blank"
          className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-1 font-medium"
        >
          View Live Website ↗
        </Link>
      </div>
    </aside>
  );
}
