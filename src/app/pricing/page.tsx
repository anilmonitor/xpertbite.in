import type { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/data/mock-data";
import { CheckCircle2, X, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for software development services. Choose a plan that fits your budget and requirements.",
};

export default function PricingPage() {
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <SectionHeader
              badge="Pricing"
              title="Simple, Transparent Pricing"
              subtitle="Choose the plan that best fits your project. All plans include our commitment to quality, security, and on-time delivery."
            />
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div className={cn(
                  "relative h-full p-8 rounded-2xl border bg-card transition-all duration-300 hover:shadow-xl",
                  plan.popular && "border-primary shadow-lg shadow-primary/10 scale-105 z-10"
                )}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="gradient-primary text-white border-0 px-4 py-1">
                        <Sparkles className="h-3 w-3 mr-1" /> Most Popular
                      </Badge>
                    </div>
                  )}

                  <h3 className="text-xl font-heading font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold font-heading">{plan.price}</span>
                    <span className="text-sm text-muted-foreground ml-2">{plan.period}</span>
                  </div>

                  <Button
                    variant={plan.popular ? "gradient" : "outline"}
                    className="w-full mb-8"
                    asChild
                  >
                    <Link href={plan.name === "Enterprise" ? "/contact" : "/request-quote"}>
                      {plan.cta} <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal animation="fade-up" delay={0.3}>
            <p className="text-center text-sm text-muted-foreground mt-12 max-w-lg mx-auto">
              Need something custom? <Link href="/contact" className="text-primary font-medium hover:underline">Contact us</Link> for 
              a tailored quote that perfectly fits your requirements.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </PublicLayout>
  );
}
