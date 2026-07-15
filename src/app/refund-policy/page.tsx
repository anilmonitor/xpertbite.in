import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund policy for products and services delivered by XpertBite Technologies.",
};

export default function RefundPolicyPage() {
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative max-w-4xl">
          <ScrollReveal>
            <SectionHeader title="Refund Policy" subtitle="Last Updated: February 18, 2026" />
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <div className="prose prose-slate dark:prose-invert mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="text-xl font-heading font-bold text-foreground">1. Custom Development Projects</h2>
              <p>
                For custom development, design, and integration services, refunds are evaluated based on terms written in individual client project agreements (SLAs). Milestone payments completed for approved sprint deliveries are generally non-refundable.
              </p>

              <h2 className="text-xl font-heading font-bold text-foreground">2. SaaS Product Subscriptions</h2>
              <p>
                For subscriptions purchased under our products (such as SwiftDeliver or DukaanCraft), we offer a 14-day money-back guarantee. If you are unsatisfied with the SaaS platform, you can email xpertbite@gmail.com to request a full refund within 14 days of purchase.
              </p>

              <h2 className="text-xl font-heading font-bold text-foreground">3. Processing Refunds</h2>
              <p>
                Once approved, your refund will be processed, and credit will automatically be applied to your credit card or original method of payment within 7-10 business days.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PublicLayout>
  );
}
