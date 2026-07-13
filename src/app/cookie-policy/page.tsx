import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn how and why XpertBite Technologies uses cookies to improve user experience.",
};

export default function CookiePolicyPage() {
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative max-w-4xl">
          <ScrollReveal>
            <SectionHeader title="Cookie Policy" subtitle="Last Updated: July 13, 2026" />
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <div className="prose prose-slate dark:prose-invert mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                We use cookies to improve your browsing experience on our site, show personalized content, and analyze our traffic.
              </p>
              
              <h2 className="text-xl font-heading font-bold text-foreground">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your device to store data that can be recalled by a web server in the domain that placed the cookie. We use cookies to store your preferences and settings, help with sign-in, and analyze site performance.
              </p>

              <h2 className="text-xl font-heading font-bold text-foreground">2. How We Use Cookies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required to authenticate users and prevent fraudulent use of user accounts.</li>
                <li><strong>Performance Cookies:</strong> Allow us to count visits and traffic sources so we can measure and improve performance.</li>
                <li><strong>Functional Cookies:</strong> Used to remember choices you make (such as theme preferences) to provide a more personalized experience.</li>
              </ul>

              <h2 className="text-xl font-heading font-bold text-foreground">3. Managing Cookie Preferences</h2>
              <p>
                You can configure your browser to decline or block cookies entirely, or alert you when cookies are being sent. Note that blocking some categories of cookies may degrade your user experience on the site.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PublicLayout>
  );
}
