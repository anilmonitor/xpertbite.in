"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/admin/sidebar";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LogOut, Menu, ExternalLink, User, ChevronDown, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export function AdminLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();

  const userEmail = session?.user?.email || "anilarangi6@gmail.com";
  const initial = userEmail.charAt(0).toUpperCase();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile drawer and dropdown on route changes
  useEffect(() => {
    setMobileOpen(false);
    setProfileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Desktop Persistent Sidebar */}
      <Sidebar className="hidden md:flex sticky top-0 h-screen z-30" />

      {/* Mobile Drawer Backdrop & Slide-out Sidebar */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 animate-in fade-in"
          onClick={() => setMobileOpen(false)}
        >
          <div 
            className="fixed inset-y-0 left-0 w-[280px] max-w-[85vw] bg-card shadow-2xl z-50 flex flex-col animate-in slide-in-from-left duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar 
              className="w-full h-full border-r-0" 
              onClose={() => setMobileOpen(false)}
              showCloseButton={true}
            />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Clean Admin Topbar */}
        <header className="h-16 border-b px-4 sm:px-6 flex items-center justify-between bg-card/60 backdrop-blur-xl sticky top-0 z-30">
          <div className="flex items-center gap-3">
            {/* Hamburger Button for Mobile */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden h-9 w-9 shrink-0 bg-background border-border/80"
              onClick={() => setMobileOpen(true)}
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Mobile Logo Title */}
            <div className="flex items-center gap-2 md:hidden">
              <span className="font-heading font-bold text-base tracking-tight">
                XpertAdmin
              </span>
            </div>
          </div>
          
          {/* Top Right Actions & Profile Dropdown */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <ThemeToggle />

            {/* Profile Avatar Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-muted/60 transition-all border border-transparent hover:border-border/80 focus:outline-none"
                aria-expanded={profileOpen}
                aria-haspopup="true"
              >
                <div className="relative">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-accent text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    {initial}
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground hidden sm:block" />
              </button>

              {/* Dropdown Menu Popup */}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-card border shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {/* User Info Header */}
                  <div className="p-3 bg-muted/40 rounded-xl mb-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-md">
                        <Shield className="h-2.5 w-2.5" /> Super Admin
                      </span>
                    </div>
                    <div className="font-semibold text-sm text-foreground truncate">
                      Administrator
                    </div>
                    <div className="text-xs text-muted-foreground font-mono truncate mt-0.5">
                      {userEmail}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-1 text-xs">
                    <Link
                      href="/"
                      target="_blank"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                    >
                      <span>View Live Website</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>

                    <button
                      onClick={() => {
                        setProfileOpen(false);
                        signOut({ callbackUrl: "/admin/login" });
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors text-left font-medium"
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Dynamic Page Content */}
        <main className="flex-grow p-4 sm:p-6 md:p-8 overflow-y-auto max-w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
