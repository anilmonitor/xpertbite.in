import type { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/home/cta-section";
import { services } from "@/data/mock-data";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive range of software development services including web development, mobile apps, AI, cloud solutions, and more.",
};

const gradientPalette = [
  "from-violet-500 to-indigo-600",
  "from-cyan-500 to-blue-600",
  "from-pink-500 to-rose-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-fuchsia-500 to-purple-600",
  "from-sky-500 to-blue-600",
  "from-lime-500 to-green-600",
  "from-red-500 to-pink-600",
  "from-indigo-500 to-violet-600",
  "from-teal-500 to-cyan-600",
  "from-orange-500 to-amber-600",
];

export default function ServicesPage() {
  const categories = Array.from(new Set(services.map((s) => s.category)));

  let globalIndex = 0;

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
              <h3 className="text-2xl font-heading font-bold mb-10 flex items-center gap-3">
                <div className="h-1 w-8 gradient-primary rounded-full" />
                {category}
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services
                .filter((s) => s.category === category)
                .map((service) => {
                  const Icon = service.icon;
                  const idx = globalIndex++;
                  const gradient = gradientPalette[idx % gradientPalette.length];
                  return (
                    <StaggerItem key={service.slug}>
                      <Link href={`/services/${service.slug}`} className="group block h-full">
                        <div className="h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/30">
                          {/* Hover glow effect */}
                          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          {/* Cover Image — clean, no shade */}
                          <div className="relative h-44 w-full overflow-hidden">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Floating gradient icon */}
                            <div className={`absolute bottom-3 left-5 inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl ring-4 ring-card`}>
                              <Icon className="h-6 w-6" />
                            </div>
                            {/* Number badge */}
                            <span className="absolute top-3 right-4 text-3xl font-black text-white/30 font-heading">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                          </div>

                          <div className="p-6 pt-4 flex-1 flex flex-col relative z-10">
                            {/* Title */}
                            <h4 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                              {service.title}
                            </h4>

                            {/* Description */}
                            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                              {service.shortDescription}
                            </p>

                            {/* Tech pills */}
                            <div className="flex flex-wrap gap-2 mb-5">
                              {service.technologies.slice(0, 4).map((tech) => (
                                <span
                                  key={tech}
                                  className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-muted/80 text-muted-foreground border border-border/50 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {/* Bottom CTA */}
                            <div className="flex items-center justify-between pt-4 border-t border-border/50 group-hover:border-primary/20 transition-colors duration-300">
                              <span className="text-sm font-semibold text-primary">
                                Explore Service
                              </span>
                              <div className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-45">
                                <ArrowUpRight className="h-4 w-4" />
                              </div>
                            </div>
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
