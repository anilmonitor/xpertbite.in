"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { portfolioItems } from "@/data/mock-data";
import { useState } from "react";

export function PortfolioPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featured = portfolioItems
    .filter((item) => item.slug !== "apnadukaan-marketplace")
    .slice(0, 3);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 md:py-16 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            badge="Delivered"
            title="Delivered to Clients"
            subtitle="Explore the custom software products and systems that we have successfully built and delivered to our clients."
          />
        </ScrollReveal>

        {/* Desktop View (3 Columns) */}
        <div className="hidden md:block">
          <StaggerContainer className="grid grid-cols-3 gap-8">
            {featured.map((project) => (
              <StaggerItem key={project.slug}>
                <ProductCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Mobile View (Slider with Navigation) */}
        <div className="block md:hidden max-w-sm mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="relative">
              {/* Active Card */}
              <ProductCard project={featured[activeIndex]} />

              {/* Slider Controls Bottom */}
              <div className="flex items-center justify-between mt-6 px-2">
                <button
                  onClick={handlePrev}
                  className="h-10 w-10 rounded-full border border-border/60 bg-card/85 backdrop-blur-md flex items-center justify-center hover:bg-muted text-foreground transition-all active:scale-95 shadow-sm"
                  aria-label="Previous product"
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
                  aria-label="Next product"
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
              href="/products"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Inner helper card component for clean rendering
function ProductCard({ project }: { project: typeof portfolioItems[0] }) {
  return (
    <Link
      href={`/products/${project.slug.split("-")[0]}`}
      className="group block h-full flex flex-col"
    >
      <div className="relative h-full rounded-2xl border border-border/60 bg-card/55 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/25 transition-all duration-500 hover:-translate-y-1.5 flex flex-col">
        {/* Image container */}
        <div className="relative h-56 w-full overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Soft dark vignette gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card/85 via-transparent to-black/10" />
          
          {/* Floating Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-background/80 backdrop-blur-md border border-border/50 text-foreground text-[10px] px-2.5 py-0.5 shadow-sm">
              {project.category}
            </Badge>
          </div>

          {/* Hover Overlay Details */}
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
            <span className="text-white font-semibold text-sm flex items-center gap-2">
              View Product Details
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>

        {/* Content wrapper */}
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-1">
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-5 font-medium min-h-[48px]">
              {project.description}
            </p>
          </div>

          <div className="pt-4 border-t border-border/40 flex flex-wrap gap-1.5 items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] px-2 py-0.5 rounded bg-muted/65 text-muted-foreground border border-border/30 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <span className="text-xs text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
