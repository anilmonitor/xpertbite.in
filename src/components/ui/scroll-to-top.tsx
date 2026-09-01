"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export function ScrollToTop() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (
      pathname?.startsWith("/durgapuja2026") ||
      pathname?.startsWith("/diwaliPuja2026") ||
      pathname?.startsWith("/chhathPuja2026")
    ) return;
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (
    pathname?.startsWith("/admin") ||
    pathname?.startsWith("/durgapuja2026") ||
    pathname?.startsWith("/diwaliPuja2026") ||
    pathname?.startsWith("/chhathPuja2026")
  ) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "fixed bottom-20 right-6 z-40 h-10 w-10 rounded-full shadow-lg transition-all duration-300 hover:bg-primary hover:text-white border-border bg-background/80 backdrop-blur-md hover:scale-110 active:scale-95 hover:shadow-primary/20",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
