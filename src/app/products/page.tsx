import type { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/data/mock-data";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our suite of SaaS products designed to solve real-world business challenges.",
};

const statusColors: Record<string, string> = {
  Live: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  Beta: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  "Coming Soon": "bg-blue-500/10 text-blue-600 border-blue-500/20",
};

export default function ProductsPage() {
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <SectionHeader title="Our Product Suite" subtitle="Powerful SaaS products built with the same quality and care we bring to every client project." />
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {products.map((product) => (
              <StaggerItem key={product.slug}>
                <div className="h-full p-8 rounded-2xl border bg-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge className={statusColors[product.status]}>{product.status}</Badge>
                        <h3 className="text-2xl font-heading font-bold mt-3">{product.name}</h3>
                        <p className="text-sm text-primary font-medium mt-1">{product.tagline}</p>
                      </div>
                      <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">{product.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{product.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {product.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" /><span className="text-muted-foreground">{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="default" size="sm" asChild><Link href={`/products/${product.slug}`}>Details <ArrowRight className="h-4 w-4 ml-1" /></Link></Button>
                      {product.demoUrl && (<Button variant="outline" size="sm" asChild><a href={product.demoUrl} target="_blank" rel="noopener noreferrer">Demo <ExternalLink className="h-3.5 w-3.5 ml-1" /></a></Button>)}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PublicLayout>
  );
}
