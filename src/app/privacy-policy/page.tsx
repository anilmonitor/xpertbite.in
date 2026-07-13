import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how XpertBite Technologies handles, stores, and protects customer information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative max-w-4xl">
          <ScrollReveal>
            <SectionHeader title="Privacy Policy" subtitle="Last Updated: February 18, 2026" />
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up">
            <div className="prose prose-slate dark:prose-invert mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At XpertBite Technologies, accessible from https://xpertbite.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by XpertBite Technologies and how we use it.
              </p>
              
              <h2 className="text-xl font-heading font-bold text-foreground">1. Information We Collect</h2>
              <p>
                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
              </p>
              <p>
                If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
              </p>

              <h2 className="text-xl font-heading font-bold text-foreground">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our website and solutions</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our website and platforms</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you regarding client project support, updates, and marketing promotions</li>
              </ul>

              <h2 className="text-xl font-heading font-bold text-foreground">3. Security of Your Data</h2>
              <p>
                The security of your personal data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>

              <h2 className="text-xl font-heading font-bold text-foreground">4. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please reach out to us at legal@xpertbite.in.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PublicLayout>
  );
}
