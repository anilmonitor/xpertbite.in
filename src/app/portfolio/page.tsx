import type { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/home/cta-section";
import { portfolioItems } from "@/data/mock-data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of successful projects across fintech, healthcare, e-commerce, education, and more.",
};

export default function PortfolioPage() {
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <SectionHeader
              title="Our Work Speaks for Itself"
              subtitle="Discover how we've helped companies across industries achieve extraordinary results through technology."
            />
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {portfolioItems.map((project) => (
              <StaggerItem key={project.slug}>
                <Link href={`/portfolio/${project.slug}`} className="group block h-full">
                  <div className="h-full rounded-2xl border bg-card overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/10" />
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium flex items-center gap-2">View Project <ArrowRight className="h-4 w-4" /></span>
                      </div>
                      <div className="absolute top-4 left-4"><Badge variant="accent">{project.category}</Badge></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{project.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Client: {project.client}</span>
                        <span className="text-muted-foreground">{project.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <CTASection />
    </PublicLayout>
  );
}
