"use client";

import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Mail, Phone, MessageSquare, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
  const supportFaqs = [
    { q: "How do I report system errors or bugs?", a: "Please send system logs, screenshots, and exact replication steps to xpertbite@gmail.com. Our support team will create a ticket and respond within 2 hours for SLA clients." },
    { q: "What is your ticket resolution SLA?", a: "For critical production issues, we guarantee a response within 2 hours. High-severity issues are resolved within 8 hours, and normal updates are scheduled during sprint cycles." },
    { q: "Do you offer developer training for custom applications?", a: "Yes, we schedule comprehensive walkthroughs, code walkthrough recordings, and hand over deployment guides upon shipping any client project." },
  ];

  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <SectionHeader
              title="We're Here to Help"
              subtitle="Access configuration documents, open support tickets, or reach out to our engineering helpdesk."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
            <ScrollReveal animation="fade-up" delay={0.05}>
              <div className="p-6 rounded-2xl border bg-card text-center space-y-4 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold">Email Support</h3>
                <p className="text-sm text-muted-foreground">Open tickets with our helpdesk agents directly.</p>
                <a href="mailto:xpertbite@gmail.com" className="text-sm font-semibold text-primary block hover:underline">
                  xpertbite@gmail.com
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
              <div className="p-6 rounded-2xl border bg-card text-center space-y-4 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold">Hotline</h3>
                <p className="text-sm text-muted-foreground">Emergency hotline support for system outages.</p>
                <a href="tel:+919876543210" className="text-sm font-semibold text-accent block hover:underline">
                  +91 9876 543 210
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.15}>
              <div className="p-6 rounded-2xl border bg-card text-center space-y-4 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center mx-auto">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold">Live Chat</h3>
                <p className="text-sm text-muted-foreground">Chat directly with a developer on WhatsApp.</p>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-green-600 flex items-center justify-center gap-1 hover:underline">
                  Chat Now <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <ScrollReveal>
              <h3 className="text-xl font-heading font-bold mb-6 text-center">Frequently Raised Support Issues</h3>
            </ScrollReveal>
            <Accordion type="single" collapsible className="space-y-3">
              {supportFaqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`support-faq-${idx}`} className="border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold py-4 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
