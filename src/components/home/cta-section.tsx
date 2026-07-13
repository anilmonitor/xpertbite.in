"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Ready to Build Something{" "}
              <span className="gradient-text">Amazing?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Let&apos;s discuss your project and explore how we can help transform your 
              ideas into a powerful digital solution. No obligations, just a conversation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gradient" size="xl" asChild>
                <Link href="/book-consultation" className="group">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book a Free Consultation
                  <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/request-quote">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Request a Quote
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              ✓ Free consultation &nbsp;·&nbsp; ✓ No obligations &nbsp;·&nbsp; ✓ Response within 24 hours
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
