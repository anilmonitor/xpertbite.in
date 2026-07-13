import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description: "Details regarding software and source code delivery policies at XpertBite Technologies.",
};

export default function ShippingPolicyPage() {
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative max-w-4xl">
          <ScrollReveal>
            <SectionHeader title="Shipping & Delivery Policy" subtitle="Last Updated: July 13, 2026" />
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <div className="prose prose-slate dark:prose-invert mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Since XpertBite Technologies offers digital goods, custom software systems, and engineering services, physical shipping is not applicable.
              </p>

              <h2 className="text-xl font-heading font-bold text-foreground">1. Software System Delivery</h2>
              <p>
                Completed custom systems, design systems, and source code repositories are delivered electronically via secure version control networks (e.g. GitHub repositories, AWS deployment builds) upon milestone completion.
              </p>

              <h2 className="text-xl font-heading font-bold text-foreground">2. SaaS Product Access</h2>
              <p>
                For cloud SaaS tools, access credentials are generated immediately upon invoice verification and subscription completion.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PublicLayout>
  );
}
