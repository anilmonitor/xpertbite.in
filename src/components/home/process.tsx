"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Search, Palette, Code2, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We deep-dive into your requirements, research your market, and craft a comprehensive project roadmap tailored to your business goals.",
    icon: Search,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description: "Our design team creates stunning wireframes and interactive prototypes, ensuring every pixel serves a purpose and delights your users.",
    icon: Palette,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Our engineers write clean, scalable code following best practices. Rigorous testing ensures your product is rock-solid before launch.",
    icon: Code2,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We handle deployment, monitoring, and post-launch optimization. Our team stays by your side to ensure continuous growth and success.",
    icon: Rocket,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
];

export function Process() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            badge="Our Process"
            title="How We Deliver Excellence"
            subtitle="A proven four-phase methodology that ensures every project is delivered on time, within budget, and beyond expectations."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-emerald-500/30" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.step} animation="fade-up" delay={index * 0.15}>
                <div className="relative text-center group">
                  {/* Step Number Circle */}
                  <div className="relative mx-auto mb-6">
                    <div className={cn(
                      "h-[72px] w-[72px] rounded-2xl mx-auto flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg",
                      item.bgColor
                    )}>
                      <Icon className={cn("h-8 w-8", item.color)} />
                    </div>
                    <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      {item.step}
                    </div>
                  </div>

                  <h3 className="text-lg font-heading font-bold mb-3">
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
    </section>
  );
}
