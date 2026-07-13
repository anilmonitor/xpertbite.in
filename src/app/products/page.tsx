import type { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/data/mock-data";
import { ArrowRight, ExternalLink, Play } from "lucide-react";

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
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/5 to-background">
        {/* Decorative background blobs */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <SectionHeader 
              title="Our Product Suite" 
              subtitle="We build powerful, ready-to-deploy software products to accelerate your business growth." 
            />
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {products.map((product) => (
              <StaggerItem key={product.slug}>
                <div className="h-full p-5 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`text-[10px] px-2 py-0.5 ${statusColors[product.status]}`}>{product.status}</Badge>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">{product.category}</p>
                    
                    <p className="text-xs text-muted-foreground leading-relaxed mt-3 line-clamp-3 min-h-[48px]">{product.description}</p>
                    
                    <div className="space-y-1.5 my-4 pt-3 border-t border-border/40">
                      {product.features.slice(0, 4).map((f) => (
                        <div key={f} className="flex items-center gap-2 text-[11px]">
                          <div className="h-1 w-1 rounded-full bg-primary/70 shrink-0" />
                          <span className="text-muted-foreground line-clamp-1">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 flex gap-2 mt-2 pt-3 border-t border-border/40">
                    <Button variant="default" size="sm" className="flex-1 text-xs h-8 rounded-lg" asChild>
                      <Link href={`/products/${product.slug}`}>
                        Details <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                    {product.demoUrl && (
                      <Button variant="outline" size="sm" className="flex-1 text-xs h-8 rounded-lg" asChild>
                        <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                          <Play className="h-2.5 w-2.5 text-primary fill-current" /> Demo
                        </a>
                      </Button>
                    )}
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
