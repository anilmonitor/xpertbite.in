import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for utilizing services offered by XpertBite Technologies.",
};

export default function TermsAndConditionsPage() {
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative max-w-4xl">
          <ScrollReveal>
            <SectionHeader title="Terms & Conditions" subtitle="Last Updated: July 13, 2026" />
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <div className="prose prose-slate dark:prose-invert mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Welcome to XpertBite Technologies! These terms and conditions outline the rules and regulations for the use of XpertBite Technologies&apos; Website, located at https://xpertbite.in.
              </p>
              <p>
                By accessing this website we assume you accept these terms and conditions. Do not continue to use XpertBite Technologies if you do not agree to take all of the terms and conditions stated on this page.
              </p>

              <h2 className="text-xl font-heading font-bold text-foreground">1. Intellectual Property Rights</h2>
              <p>
                Other than the content you own, under these Terms, XpertBite Technologies and/or its licensors own all the intellectual property rights and materials contained in this Website. All intellectual property rights are reserved.
              </p>

              <h2 className="text-xl font-heading font-bold text-foreground">2. Restrictions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Publishing any Website material in any other media without prior consent</li>
                <li>Selling, sublicensing, and/or otherwise commercializing any Website material</li>
                <li>Publicly performing and/or showing any Website material</li>
                <li>Using this Website in any way that is or may be damaging to this Website</li>
              </ul>

              <h2 className="text-xl font-heading font-bold text-foreground">3. Governing Law & Jurisdiction</h2>
              <p>
                These Terms will be governed by and interpreted in accordance with the laws of the State of Telangana, India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Hyderabad for the resolution of any disputes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PublicLayout>
  );
}
