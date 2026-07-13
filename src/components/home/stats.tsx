"use client";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { STATS } from "@/lib/constants";
import { Award, Globe2, Users, Briefcase, Code2, Trophy } from "lucide-react";

const icons = [Briefcase, Code2, Users, Globe2, Award, Trophy];

export function Stats() {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="container mx-auto px-4 relative">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {STATS.map((stat, index) => {
              const Icon = icons[index] || Award;
              return (
                <div
                  key={stat.label}
                  className="group relative text-center p-4 rounded-xl border bg-card/60 dark:bg-card/25 backdrop-blur-md hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                >
                  {/* Subtle Background Radial Light on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Glowing top line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100" />

                  <div className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-primary/10 text-primary mb-2.5 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-0.5 group-hover:scale-105 transition-transform duration-300">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground group-hover:text-foreground font-medium transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
