import { Sidebar } from "@/components/admin/sidebar";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { User, LogOut, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Admin Header */}
        <header className="h-16 border-b px-6 flex items-center justify-between bg-card/40 backdrop-blur-xl sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-medium text-muted-foreground hidden sm:block">
              Welcome Back, Administrator
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <LogOut className="h-4.5 w-4.5" />
                <span className="sr-only">Logout</span>
              </Link>
            </Button>
          </div>
        </header>

        {/* Dashboard Area */}
        <main className="flex-grow p-6 md:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
