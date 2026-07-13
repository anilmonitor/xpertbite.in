"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Marquee } from "@/components/ui/marquee";
import { clients } from "@/data/mock-data";

export function TrustedCompanies() {
  return (
    <section className="py-20 relative overflow-hidden border-y bg-muted/20">
      <div className="container mx-auto px-4 mb-10">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Trusted by innovative companies worldwide
            </p>
          </div>
        </ScrollReveal>
      </div>

      <Marquee pauseOnHover duration="25s">
        {clients.map((client) => (
          <div
            key={client}
            className="flex items-center justify-center px-8 py-4 mx-4 rounded-xl border bg-card/50 hover:bg-card hover:shadow-sm transition-all duration-300 group cursor-default"
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {client.slice(0, 2)}
                </span>
              </div>
              <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground whitespace-nowrap transition-colors">
                {client}
              </span>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
