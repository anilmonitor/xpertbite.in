import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: "Guidelines and procedures for subscription or project cancellations at XpertBite Technologies.",
};

export default function CancellationPolicyPage() {
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative max-w-4xl">
          <ScrollReveal>
            <SectionHeader title="Cancellation Policy" subtitle="Last Updated: July 13, 2026" />
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <div className="prose prose-slate dark:prose-invert mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="text-xl font-heading font-bold text-foreground">1. custom Project Cancellation</h2>
              <p>
                Clients may request cancellation of ongoing custom software development engagements in writing. Upon cancellation, the client shall be liable for payment for all work performed, hours logged, and milestones achieved up to the effective cancellation date.
              </p>

              <h2 className="text-xl font-heading font-bold text-foreground">2. SaaS Subscription Cancellation</h2>
              <p>
                You may cancel your SaaS subscriptions at any time through your product account settings page. Cancellation will take effect at the end of the current billing cycle. No further charges will be made.
              </p>

              <h2 className="text-xl font-heading font-bold text-foreground">3. Notice Period</h2>
              <p>
                For dedicated resource plans, a 30-day written notice period is required to terminate or cancel contract extensions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PublicLayout>
  );
}
