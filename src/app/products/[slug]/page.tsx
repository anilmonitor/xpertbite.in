import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/data/mock-data";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((i) => i.slug === slug);
  if (!p) return { title: "Product Not Found" };
  return { title: p.name, description: p.description };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <PublicLayout>
      <section className="pt-8"><div className="container mx-auto px-4 max-w-5xl">
        <Link href="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" /> Back to Products</Link>
      </div></section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <Badge className="mb-3">{product.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-2">{product.name}</h1>
              <p className="text-lg text-primary font-medium mb-4">{product.tagline}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold">{product.price}</span>
                <Badge className={product.status === "Live" ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-amber-500/10 text-amber-600 border-amber-500/20"}>{product.status}</Badge>
              </div>
              <div className="flex gap-3">
                {product.demoUrl && <Button variant="gradient" size="lg" asChild><a href={product.demoUrl} target="_blank" rel="noopener noreferrer">Try Live Demo <ExternalLink className="h-4 w-4 ml-2" /></a></Button>}
                <Button variant="outline" size="lg" asChild><Link href="/contact">Contact Sales</Link></Button>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left">
              <div className="h-80 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border bg-grid flex items-center justify-center">
                <span className="text-4xl font-heading font-bold gradient-text opacity-30">{product.name}</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal><h2 className="text-3xl font-heading font-bold mb-10 text-center">Features</h2></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {product.features.map((f) => (
              <ScrollReveal key={f} animation="fade-up">
                <div className="p-5 rounded-xl border bg-card hover:shadow-md transition-shadow text-center">
                  <CheckCircle2 className="h-6 w-6 text-primary mx-auto mb-3" />
                  <span className="text-sm font-medium">{f}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
