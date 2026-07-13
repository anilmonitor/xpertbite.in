import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/data/mock-data";
import { ArrowLeft, Quote } from "lucide-react";
import { CTASection } from "@/components/home/cta-section";

interface Props { params: Promise<{ slug: string }> }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const cs = caseStudies.find((c) => c.slug === slug); return cs ? { title: cs.title, description: cs.challenge } : { title: "Not Found" }; }
export function generateStaticParams() { return caseStudies.map((c) => ({ slug: c.slug })); }

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <PublicLayout>
      <div className="py-16"><div className="container mx-auto px-4">
        <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"><ArrowLeft className="h-4 w-4" /> All Case Studies</Link>
        <ScrollReveal>
          <Badge variant="accent" className="mb-3">{cs.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">{cs.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">Client: {cs.client}</p>
        </ScrollReveal>

        {/* Results Grid */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
            {cs.results.map((r) => (
              <div key={r.metric} className="text-center p-6 rounded-2xl border bg-card">
                <div className="text-3xl font-bold gradient-text mb-1">{r.value}</div>
                <div className="text-sm font-medium">{r.metric}</div>
                <div className="text-xs text-muted-foreground mt-1">{r.description}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="max-w-3xl space-y-12">
          <ScrollReveal><h2 className="text-2xl font-heading font-bold mb-4">The Challenge</h2><p className="text-muted-foreground leading-relaxed">{cs.challenge}</p></ScrollReveal>
          <ScrollReveal><h2 className="text-2xl font-heading font-bold mb-4">Our Solution</h2><p className="text-muted-foreground leading-relaxed">{cs.solution}</p></ScrollReveal>
          <ScrollReveal><h2 className="text-2xl font-heading font-bold mb-4">Technologies Used</h2><div className="flex flex-wrap gap-2">{cs.technologies.map((t) => (<Badge key={t} variant="secondary">{t}</Badge>))}</div></ScrollReveal>

          {/* Testimonial */}
          <ScrollReveal>
            <div className="p-8 rounded-2xl bg-muted/50 border relative">
              <Quote className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
              <p className="text-lg italic text-foreground mb-4">&ldquo;{cs.testimonial.quote}&rdquo;</p>
              <div className="font-medium">{cs.testimonial.author}</div>
              <div className="text-sm text-muted-foreground">{cs.testimonial.role}</div>
            </div>
          </ScrollReveal>
        </div>
      </div></div>
      <CTASection />
    </PublicLayout>
  );
}
