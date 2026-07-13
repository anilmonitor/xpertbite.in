"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, ChevronDown, ArrowRight, Code2, Database, Users, BookOpen, CreditCard, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { NAV_ITEMS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

const itemIcons: Record<string, any> = {
  "Services": Code2,
  "Products": Database,
  "Company": Users,
  "Resources": BookOpen,
  "Pricing": CreditCard,
  "Contact": Mail,
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>("Services");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-nav shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-10 w-10 flex items-center justify-center">
              {/* Light Mode Logo (Visible in Light Theme) */}
              <img 
                src="/logos/xpertbite_logo_light.png" 
                alt="XpertBite Logo" 
                className="h-10 w-auto object-contain block dark:hidden group-hover:scale-105 transition-transform duration-300"
              />
              {/* Dark Mode Logo (Visible in Dark Theme) */}
              <img 
                src="/logos/xpertbite_logo_dark.png" 
                alt="XpertBite Logo" 
                className="h-10 w-auto object-contain hidden dark:block group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.label}
                  {"children" in item && item.children && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {"children" in item && item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 w-[320px]">
                    <div className="bg-popover text-popover-foreground rounded-xl p-2 shadow-xl border border-border">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group/item"
                        >
                          <div className="flex-1">
                            <div className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">
                              {child.label}
                            </div>
                            {"description" in child && (
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {child.description}
                              </div>
                            )}
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-all -translate-x-1 group-hover/item:translate-x-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="gradient" size="sm" className="hidden sm:inline-flex" asChild>
              <Link href="/request-quote">Start a Project</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 rounded-xl">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background/95 dark:bg-slate-950/95 backdrop-blur-xl border-l border-border p-5 overflow-y-auto flex flex-col justify-between">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">Main navigation links</SheetDescription>
                
                <div className="flex-1 flex flex-col justify-start">
                  {/* Brand Header inside drawer */}
                  <div className="flex items-center mb-8 border-b pb-4">
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
                  </div>

                  <div className="space-y-3">
                    {NAV_ITEMS.map((item) => {
                      const Icon = itemIcons[item.label] || Code2;
                      const hasChildren = "children" in item && item.children;
                      const isExpanded = expandedSection === item.label;

                      return (
                        <div key={item.label} className="rounded-xl overflow-hidden">
                          {hasChildren ? (
                            <div>
                              {/* Collapsible Trigger */}
                              <button
                                onClick={() => setExpandedSection(isExpanded ? null : item.label)}
                                className={cn(
                                  "w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300",
                                  isExpanded 
                                    ? "bg-primary/5 text-primary" 
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                                )}
                              >
                                <div className="flex items-center gap-2.5">
                                  <Icon className="h-4.5 w-4.5" />
                                  <span>{item.label}</span>
                                </div>
                                <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isExpanded && "rotate-180")} />
                              </button>

                              {/* Collapsible Content */}
                              {isExpanded && (
                                <div className="mt-1 ml-4 pl-4 border-l-2 border-primary/20 space-y-1.5 py-1">
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            /* Simple Link */
                            <Link
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-xl transition-all duration-300"
                            >
                              <Icon className="h-4.5 w-4.5" />
                              <span>{item.label}</span>
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Drawer Footer CTA */}
                <div className="mt-8 pt-4 border-t border-border">
                  <Button variant="gradient" className="w-full h-10 shadow-lg shadow-primary/20" asChild>
                    <Link href="/request-quote" onClick={() => setMobileOpen(false)}>
                      Start a Project <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
