"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { services } from "@/data/mock-data";

export function FeaturedServices() {
  const featured = services.slice(0, 6);

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            badge="Our Services"
            title="What We Do Best"
            subtitle="We provide end-to-end software development services to help businesses transform, scale, and dominate their markets."
          />
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full"
                >
                  <div className="relative h-full rounded-2xl border bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col">
                    {/* Cover Image Container */}
                    <div className="relative h-40 w-full overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      
                      {/* Floating Icon */}
                      <div className="absolute bottom-3 left-6 inline-flex items-center justify-center h-11 w-11 rounded-xl bg-primary text-primary-foreground transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25 border border-white/10">
                        <Icon className="h-5.5 w-5.5" />
                      </div>
                    </div>

                    <div className="p-6 pt-4 flex-1 flex flex-col relative z-10">
                      {/* Content */}
                      <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                        {service.shortDescription}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {service.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center text-sm font-medium text-primary">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Gradient border on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-border" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal animation="fade-up" delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
