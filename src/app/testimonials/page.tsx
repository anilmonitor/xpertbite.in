import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { testimonials } from "@/data/mock-data";
import { Star, Quote } from "lucide-react";

export const metadata: Metadata = { title: "Testimonials", description: "What our clients say about working with XpertBite Technologies." };

export default function TestimonialsPage() {
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal><SectionHeader badge="Testimonials" title="Client Success Stories" subtitle="Don't take our word for it — hear from the leaders who've trusted us with their most important projects." /></ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <div className="h-full p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                  <Quote className="absolute top-4 right-4 h-10 w-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
                  <div className="flex gap-0.5 mb-4">{Array.from({ length: t.rating }).map((_, j) => (<Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />))}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">{t.name.charAt(0)}</div>
                    <div><div className="text-sm font-semibold">{t.name}</div><div className="text-xs text-muted-foreground">{t.role}, {t.company}</div></div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PublicLayout>
  );
}
