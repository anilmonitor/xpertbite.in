import type { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/data/mock-data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Case Studies", description: "In-depth case studies showing how we solved complex challenges for our clients." };

export default function CaseStudiesPage() {
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal><SectionHeader title="Real Results, Real Impact" subtitle="Deep dives into how we've helped companies overcome challenges and achieve extraordinary outcomes." /></ScrollReveal>
          <div className="space-y-12 mt-12">
            {caseStudies.map((cs, idx) => (
              <ScrollReveal key={cs.slug} animation={idx % 2 === 0 ? "fade-right" : "fade-left"}>
                <Link href={`/case-studies/${cs.slug}`} className="group block">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 rounded-2xl border bg-card hover:shadow-2xl transition-all duration-500">
                    <div className="h-64 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 bg-grid flex items-center justify-center">
                      <span className="text-4xl font-heading font-bold gradient-text opacity-30">{cs.title.split(":")[0]}</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <Badge variant="accent" className="w-fit mb-3">{cs.category}</Badge>
                      <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">{cs.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{cs.challenge}</p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {cs.results.slice(0, 4).map((r) => (
                          <div key={r.metric} className="text-center p-3 rounded-lg bg-muted/50">
                            <div className="text-lg font-bold text-primary">{r.value}</div>
                            <div className="text-xs text-muted-foreground">{r.metric}</div>
                          </div>
                        ))}
                      </div>
                      <span className="text-sm font-medium text-primary flex items-center gap-1">Read Full Case Study <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
