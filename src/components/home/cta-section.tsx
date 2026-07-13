"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CTASection() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Ready to Order Your{" "}
              <span className="gradient-text">Custom Project?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Submit your requirements and place your project order today. From bespoke designing 
              to tailored coding, our expert developers will build and deliver exactly what you need.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gradient" size="xl" asChild>
                <Link href="/request-quote" className="group">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Place Custom Order
                  <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/book-consultation">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Consultation Call
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              ✓ Free requirement analysis &nbsp;·&nbsp; ✓ 100% transparent tracking &nbsp;·&nbsp; ✓ First demo within 5 days
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
