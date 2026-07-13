"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { services } from "@/data/mock-data";
import { useState } from "react";

export function FeaturedServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featured = services.slice(0, 4);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            badge="Our Services"
            title="What We Do Best"
            subtitle="We provide end-to-end software development services to help businesses transform, scale, and dominate their markets."
          />
        </ScrollReveal>

        {/* Desktop View (Grid Layout) */}
        <div className="hidden md:block">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Mobile View (Slider Layout) */}
        <div className="block md:hidden max-w-sm mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="relative">
              {/* Active Service Card */}
              <ServiceCard service={featured[activeIndex]} />

              {/* Slider Navigation Controls */}
              <div className="flex items-center justify-between mt-6 px-2">
                <button
                  onClick={handlePrev}
                  className="h-10 w-10 rounded-full border border-border/60 bg-card/85 backdrop-blur-md flex items-center justify-center hover:bg-muted text-foreground transition-all active:scale-95 shadow-sm"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Dots indicator */}
                <div className="flex gap-1.5">
                  {featured.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === idx 
                          ? "w-5 bg-primary" 
                          : "w-1.5 bg-muted-foreground/35"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="h-10 w-10 rounded-full border border-border/60 bg-card/85 backdrop-blur-md flex items-center justify-center hover:bg-muted text-foreground transition-all active:scale-95 shadow-sm"
                  aria-label="Next service"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

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

// Inner helper component to render service cards cleanly
function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block h-full max-w-[330px] mx-auto w-full"
    >
      <div className="relative h-full min-h-[420px] rounded-2xl border border-border/60 bg-card/55 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/25 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden flex flex-col">
        {/* Cover Image Container — clean, no overlay */}
        <div className="relative h-44 w-full overflow-hidden shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Floating Icon */}
          <div className="absolute bottom-3 left-5 inline-flex items-center justify-center h-11 w-11 rounded-xl bg-primary text-primary-foreground transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25 border border-white/20 ring-4 ring-card">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <div className="p-6 pt-5 flex-grow flex flex-col justify-between relative z-10">
          <div>
            <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors mb-2.5">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed mb-4 min-h-[48px] line-clamp-3 font-medium">
              {service.shortDescription}
            </p>
          </div>

          <div className="mt-auto">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {service.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] px-2.5 py-0.5 rounded-full bg-muted/80 text-muted-foreground border border-border/30 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform pt-3 border-t border-border/40">
              Learn More
              <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </div>
          </div>
        </div>

        {/* Gradient border on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-border pointer-events-none" />
      </div>
    </Link>
  );
}
