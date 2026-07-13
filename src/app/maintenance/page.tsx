"use client";

import Link from "next/link";
import { AlertTriangle, Hammer, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 gradient-mesh" />
      
      <div className="container mx-auto px-4 text-center relative z-10 space-y-6 max-w-lg">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 mb-4 border border-amber-500/20">
          <Hammer className="h-8 w-8 animate-bounce" />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold font-heading">
          System <span className="text-amber-500">Maintenance</span>
        </h1>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          We are currently updating our databases and microservices. XpertBite Technologies platforms will return shortly. Thank you for your patience.
        </p>

        <div className="pt-6">
          <Button variant="outline" asChild>
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
