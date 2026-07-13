"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thank you! We'll notify you as soon as this page is live.");
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 text-center relative z-10 space-y-6 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 mb-4 animate-pulse-glow">
          <Sparkles className="h-3 w-3" /> Under Construction
        </div>

        <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
          Something <span className="gradient-text">Exciting</span> is Coming
        </h1>

        <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto leading-relaxed">
          Our developers are working around the clock to construct an interactive module. Sign up to get notified when we launch.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md mx-auto pt-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-card/50 backdrop-blur-sm border-border focus:border-primary"
            required
          />
          <Button type="submit" variant="gradient" className="shrink-0">
            Notify Me
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </form>

        <div className="pt-8">
          <Button variant="ghost" asChild>
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
