import type { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/home/cta-section";
import { services } from "@/data/mock-data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive range of software development services including web development, mobile apps, AI, cloud solutions, and more.",
};

export default function ServicesPage() {
  const categories = Array.from(new Set(services.map((s) => s.category)));

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <SectionHeader
              title="End-to-End Software Solutions"
              subtitle="From ideation to deployment and beyond, we provide comprehensive software development services that drive real business outcomes."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Services by Category */}
      {categories.map((category) => (
        <section key={category} className="py-16 odd:bg-muted/30">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
                <div className="h-1 w-8 gradient-primary rounded-full" />
                {category}
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services
                .filter((s) => s.category === category)
                .map((service) => {
                  const Icon = service.icon;
                  return (
                    <StaggerItem key={service.slug}>
                      <Link href={`/services/${service.slug}`} className="group block h-full">
                        <div className="h-full rounded-2xl border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col">
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
                            <h4 className="text-lg font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                              {service.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                              {service.shortDescription}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {service.technologies.slice(0, 3).map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                              ))}
                            </div>
                            <span className="text-sm font-medium text-primary flex items-center gap-1">
                              Learn More <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </StaggerItem>
                  );
                })}
            </StaggerContainer>
          </div>
        </section>
      ))}

      <CTASection />
    </PublicLayout>
  );
}
