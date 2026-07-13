import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/home/cta-section";
import { services } from "@/data/mock-data";
import { CheckCircle2, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  return (
    <PublicLayout>
      {/* Breadcrumb */}
      <section className="pt-8 pb-0">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{service.title}</span>
          </nav>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="container mx-auto px-4 max-w-5xl relative">
          <ScrollReveal>
            <div className="max-w-4xl">
              <Badge className="mb-4">{service.category}</Badge>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-heading">{service.title}</h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {service.description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold mb-10">What&apos;s Included</h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature) => (
              <StaggerItem key={feature}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border hover:shadow-md transition-shadow">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold mb-10">Technologies We Use</h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech) => (
              <ScrollReveal key={tech} animation="zoom-in">
                <div className="px-5 py-3 rounded-xl border bg-card hover:bg-primary/5 hover:border-primary/30 transition-all duration-300">
                  <span className="font-medium">{tech}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      <CTASection />
    </PublicLayout>
  );
}
