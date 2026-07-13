import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { industries } from "@/data/mock-data";
import { CTASection } from "@/components/home/cta-section";
import { Stethoscope, Landmark, ShoppingCart, GraduationCap, Truck, Home, Plane, Factory } from "lucide-react";

export const metadata: Metadata = { title: "Industries", description: "We serve clients across healthcare, finance, e-commerce, education, logistics, and more." };

const iconMap: Record<string, any> = {
  "🏥": Stethoscope,
  "🏦": Landmark,
  "🛒": ShoppingCart,
  "📚": GraduationCap,
  "🚚": Truck,
  "🏠": Home,
  "✈️": Plane,
  "🏭": Factory,
};

export default function IndustriesPage() {
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <SectionHeader
              title="Industries We Serve"
              subtitle="Deep domain expertise across multiple industries enables us to deliver solutions that truly understand your business."
            />
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {industries.map((ind) => {
              const IconComponent = iconMap[ind.icon] || Stethoscope;
              return (
                <StaggerItem key={ind.name}>
                  <div className="group p-6 rounded-2xl border bg-card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-primary transition-colors">{ind.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{ind.description}</p>
                    </div>
                    <div className="text-sm font-medium text-primary mt-auto">{ind.projects}+ projects delivered</div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
      <CTASection />
    </PublicLayout>
  );
}
