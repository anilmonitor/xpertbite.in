"use client";

import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 gradient-mesh" />

      <div className="container mx-auto px-4 text-center relative z-10 space-y-6 max-w-lg">
        <div className="text-7xl md:text-9xl font-bold font-heading text-primary/30">404</div>

        <h1 className="text-2xl md:text-4xl font-bold font-heading">
          Page <span className="gradient-text">Not Found</span>
        </h1>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="pt-6">
          <Button variant="gradient" size="lg" asChild>
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
