"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { portfolioItems } from "@/data/mock-data";

export function PortfolioPreview() {
  const featured = portfolioItems.slice(0, 3);

  return (
    <section className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            badge="Portfolio"
            title="Our Recent Work"
            subtitle="Explore a selection of projects where we've helped companies achieve remarkable results through technology."
          />
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block h-full"
              >
                <div className="relative h-full rounded-2xl border bg-card overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/10" />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium flex items-center gap-2">
                        View Case Study
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <Badge variant="accent" className="mb-3">
                      {project.category}
                    </Badge>
                    <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal animation="fade-up" delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View Full Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
