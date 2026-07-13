import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/home/cta-section";
import { portfolioItems } from "@/data/mock-data";
import { ArrowLeft, ExternalLink, CheckCircle2, Calendar, User, Clock } from "lucide-react";

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = portfolioItems.find((i) => i.slug === slug);
  if (!p) return { title: "Project Not Found" };
  return { title: p.title, description: p.description };
}

export function generateStaticParams() {
  return portfolioItems.map((p) => ({ slug: p.slug }));
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioItems.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <PublicLayout>
      <section className="pt-8"><div className="container mx-auto px-4 max-w-5xl">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Portfolio
        </Link>
      </div></section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <Badge variant="accent" className="mb-4">{project.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">{project.description}</p>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2"><User className="h-4 w-4 text-primary" /> {project.client}</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {project.duration}</span>
            </div>
            {project.liveUrl && (
              <Button variant="gradient" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  View Live Site <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Project Image */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative h-96 rounded-2xl overflow-hidden border">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/5" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <ScrollReveal>
              <h2 className="text-2xl font-heading font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-2xl font-heading font-bold mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-2xl font-heading font-bold mb-4">Key Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.results.map((result) => (
                  <div key={result} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm font-medium">{result}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal animation="fade-left">
              <div className="sticky top-24 p-6 rounded-2xl border bg-card">
                <h3 className="font-heading font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <CTASection />
    </PublicLayout>
  );
}
