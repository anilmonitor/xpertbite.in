"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/mock-data";

export function FAQSection() {
  const homeFaqs = faqs.slice(0, 6);

  return (
    <section className="py-16 md:py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Get quick answers to common questions about our services, process, and capabilities."
          />
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {homeFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border rounded-xl px-6 bg-card data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
