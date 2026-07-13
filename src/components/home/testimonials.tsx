"use client";

import { Star, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Marquee } from "@/components/ui/marquee";
import { testimonials } from "@/data/mock-data";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [columns, setColumns] = useState<1 | 2>(2);

  return (
    <section className="py-12 md:py-16 relative bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what leaders from top companies have to say about working with us."
            centered={true}
            className="mb-8 md:mb-12"
          />
        </ScrollReveal>

        {/* Layout Toggle Button for Mobile View */}
        <div className="flex justify-center mb-6 block md:hidden">
          <div className="inline-flex rounded-lg bg-muted p-1 border border-border/40">
            <button
              onClick={() => setColumns(1)}
              className={cn(
                "px-3 py-1 text-[11px] font-semibold rounded-md transition-all",
                columns === 1
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              1 Review
            </button>
            <button
              onClick={() => setColumns(2)}
              className={cn(
                "px-3 py-1 text-[11px] font-semibold rounded-md transition-all",
                columns === 2
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              2 Reviews
            </button>
          </div>
        </div>

        {/* Desktop View (Scrolling Marquee) */}
        <div className="hidden md:block relative w-full py-2">
          {/* Edge fading gradients */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <Marquee pauseOnHover={true} duration="55s" className="py-4" repeat={3}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-[400px] shrink-0 px-3 h-full">
                <div className="h-full p-6 rounded-2xl border bg-card hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                  {/* Decorative quote */}
                  <Quote className="absolute top-4 right-4 h-10 w-10 text-primary/10 group-hover:text-primary/20 transition-colors" />

                  <div>
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 relative z-10">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border/50">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Mobile View: Dynamically switches based on columns state */}
        <div className="block md:hidden max-w-md mx-auto px-1">
          <div className={cn(
            "grid gap-3",
            columns === 1 ? "grid-cols-1" : "grid-cols-2 gap-2"
          )}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "w-full rounded-xl border border-slate-200 dark:border-slate-800/80 bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between",
                  columns === 1 ? "p-4" : "p-2.5"
                )}
              >
                {/* Decorative quote icon */}
                <Quote className={cn(
                  "absolute text-primary/10",
                  columns === 1 ? "top-3 right-3 h-5 w-5" : "top-1.5 right-1.5 h-3.5 w-3.5"
                )} />

                <div>
                  {/* Stars */}
                  <div className={cn(
                    "flex gap-0.5",
                    columns === 1 ? "mb-2" : "mb-1"
                  )}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "fill-amber-400 text-amber-400",
                          columns === 1 ? "h-3.5 w-3.5" : "h-2.5 w-2.5"
                        )}
                      />
                    ))}
                  </div>

                  {/* Quote content - fully visible */}
                  <p className={cn(
                    "text-muted-foreground leading-relaxed pr-1.5",
                    columns === 1 ? "text-[12px]" : "text-[9px]"
                  )}>
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

                {/* Compact Author info */}
                <div className={cn(
                  "flex items-center mt-2.5 pt-2 border-t border-border/40",
                  columns === 1 ? "gap-2.5" : "gap-1.5"
                )}>
                  <div className={cn(
                    "rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shrink-0",
                    columns === 1 ? "h-7 w-7 text-[10px]" : "h-5 w-5 text-[7px]"
                  )}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className={cn(
                      "font-bold text-foreground leading-none truncate",
                      columns === 1 ? "text-xs" : "text-[9px]"
                    )}>
                      {testimonial.name}
                    </span>
                    <span className={cn(
                      "text-muted-foreground leading-none mt-1 truncate",
                      columns === 1 ? "text-[10px]" : "text-[7.5px]"
                    )}>
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
