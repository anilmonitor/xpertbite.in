import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "General disclaimer regarding solutions and documentation shared on XpertBite Technologies.",
};

export default function DisclaimerPage() {
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative max-w-4xl">
          <ScrollReveal>
            <SectionHeader title="Disclaimer" subtitle="Last Updated: July 13, 2026" />
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <div className="prose prose-slate dark:prose-invert mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The information provided by XpertBite Technologies on https://xpertbite.in is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
              </p>
              
              <h2 className="text-xl font-heading font-bold text-foreground">1. External Links Disclaimer</h2>
              <p>
                The Site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.
              </p>

              <h2 className="text-xl font-heading font-bold text-foreground">2. Professional Disclaimer</h2>
              <p>
                The Site cannot and does not contain professional software engineering architecture guarantees. The software engineering information is provided for general informational and educational purposes only and is not a substitute for professional consultation. Accordingly, before taking any actions based upon such information, we encourage you to consult with our sales team directly.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PublicLayout>
  );
}
