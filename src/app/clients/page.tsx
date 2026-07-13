import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { clients } from "@/data/mock-data";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = { title: "Clients", description: "Trusted by innovative companies worldwide. See who we've worked with." };

export default function ClientsPage() {
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal><SectionHeader badge="Clients" title="Trusted by Industry Leaders" subtitle="We're proud to partner with companies of all sizes — from ambitious startups to Fortune 500 enterprises." /></ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
            {clients.map((client) => (
              <StaggerItem key={client}>
                <div className="group p-6 rounded-2xl border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                    <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors">{client.slice(0, 2)}</span>
                  </div>
                  <h3 className="font-medium text-sm">{client}</h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <CTASection />
    </PublicLayout>
  );
}
