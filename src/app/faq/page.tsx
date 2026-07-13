import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/mock-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about working with XpertBite Technologies, our process, billing, and technical capabilities.",
};

export default function FAQPage() {
  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <SectionHeader
              badge="FAQ"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about our services, software development process, and partnership models."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="max-w-4xl mx-auto mt-12">
              <Tabs defaultValue={categories[0]} className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 h-auto p-1.5 gap-1.5 bg-muted rounded-xl">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="rounded-lg py-2.5 text-sm font-medium transition-all data-[state=active]:bg-background data-[state=active]:shadow-sm"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {categories.map((category) => (
                  <TabsContent key={category} value={category} className="space-y-4 outline-none">
                    <Accordion type="single" collapsible className="w-full space-y-3">
                      {faqs
                        .filter((faq) => faq.category === category)
                        .map((faq, index) => (
                          <AccordionItem
                            key={index}
                            value={`faq-${category}-${index}`}
                            className="border rounded-xl px-6 bg-card data-[state=open]:shadow-md transition-shadow"
                          >
                            <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline py-5 text-base md:text-lg">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm md:text-base">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PublicLayout>
  );
}
