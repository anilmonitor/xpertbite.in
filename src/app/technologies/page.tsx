import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { technologies } from "@/data/mock-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Technologies", description: "Explore our comprehensive technology stack across frontend, backend, mobile, cloud, DevOps, and AI/ML." };

export default function TechnologiesPage() {
  const categories = Array.from(new Set(technologies.map((t) => t.category)));
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal><SectionHeader badge="Technologies" title="Our Tech Arsenal" subtitle="We leverage 50+ cutting-edge technologies to build scalable, performant solutions." /></ScrollReveal>
          {categories.map((cat) => (
            <div key={cat} className="mb-16 last:mb-0">
              <ScrollReveal><h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3"><div className="h-1 w-8 gradient-primary rounded-full" />{cat}</h3></ScrollReveal>
              <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {technologies.filter((t) => t.category === cat).map((tech) => (
                  <StaggerItem key={tech.name}>
                    <div className="group p-4 rounded-xl border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                        <span className="text-sm font-bold text-primary">{tech.name.slice(0, 2).toUpperCase()}</span>
                      </div>
                      <h4 className="font-medium text-sm mb-1">{tech.name}</h4>
                      <p className="text-xs text-muted-foreground">{tech.description}</p>
                      <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
                        <div className="h-full rounded-full gradient-primary transition-all duration-1000" style={{ width: `${tech.proficiency}%` }} />
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
