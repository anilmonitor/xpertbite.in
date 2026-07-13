"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Search, Palette, Code2, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Custom Requirement",
    description: "You share your unique business requirements and goals. We analyze them to plan a custom software architecture specifically suited to your workflows.",
    icon: Search,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    step: "02",
    title: "Bespoke Designing",
    description: "We design exclusive UI/UX mockups from scratch matching your brand. You review and approve the custom screen layouts before we start coding.",
    icon: Palette,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    step: "03",
    title: "Tailored Coding",
    description: "Our developers write clean, custom code exclusively for your product. We do dedicated QA testing to ensure your software is robust and bug-free.",
    icon: Code2,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    step: "04",
    title: "Delivered to Client",
    description: "We deploy the application live on your production servers and complete the client handover. Full ownership of the custom code is successfully delivered to you.",
    icon: Rocket,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
];

export function Process() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            badge="Our Process"
            title="How We Deliver Excellence"
            subtitle="A proven four-phase methodology that ensures every project is delivered on time, within budget, and beyond expectations."
          />
        </ScrollReveal>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.step} animation="fade-up" delay={index * 0.15}>
                <div className="relative bg-card/30 dark:bg-slate-900/20 backdrop-blur-sm border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center h-full">
                  {/* Connection Thread Line (Desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-7 -translate-y-1/2 items-center justify-center w-6 z-20 pointer-events-none">
                      <div className="w-full h-[2px] bg-gradient-to-r from-primary to-accent relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent/80 animate-ping" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent" />
                      </div>
                    </div>
                  )}

                  {/* Step Number watermark */}
                  <div className="absolute top-4 right-4 text-4xl font-black text-foreground/5 dark:text-white/5 select-none font-heading group-hover:text-primary/10 transition-colors duration-300">
                    {item.step}
                  </div>

                  {/* Icon Box */}
                  <div className={cn(
                    "h-14 w-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg",
                    item.bgColor
                  )}>
                    <Icon className={cn("h-7 w-7", item.color)} />
                  </div>

                  <h3 className="text-lg font-heading font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
  );
}
