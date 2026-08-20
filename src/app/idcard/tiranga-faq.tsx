"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";

interface TirangaFaqAccordionProps {
  generatorUrl: string;
}

export function TirangaFaqAccordion({ generatorUrl }: TirangaFaqAccordionProps) {
  const faqs = [
    {
      q: "What is a Tiranga ID Card and why is it used?",
      a: "Tiranga ID Card is a digital patriotic badge honoring the Indian Tricolor flag. It is popularly created for national holidays (Independence Day on 15 August and Republic Day on 26 January) as well as the Har Ghar Tiranga campaign. Citizens use it as their WhatsApp profile photo (DP), social media badge, or print it for school and office events.",
    },
    {
      q: "How to make a Tiranga ID Card with my photo?",
      a: (
        <span>
          Making your card is simple: 1. Visit{" "}
          <a
            href={generatorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold underline inline-flex items-center gap-0.5"
          >
            tiranga-indol.vercel.app <ExternalLink className="h-3 w-3 inline" />
          </a>
          . 2. Type your name and location. 3. Upload your photo from mobile gallery or computer. 4. Choose your preferred patriotic frame and click &ldquo;Generate ID Card&rdquo; to download in ultra-HD.
        </span>
      ),
    },
    {
      q: "Is creating a Tiranga ID Card free of cost?",
      a: "Yes, 100% free! There are no hidden fees, subscriptions, or watermarks. You can generate and download multiple cards for yourself, family members, and friends without paying anything.",
    },
    {
      q: "Do I need to sign up, provide mobile number, or enter OTP?",
      a: "No! No login, email registration, or phone OTP is required. The tool gives you instant one-click access directly in your browser.",
    },
    {
      q: "Is it safe to upload my photo on tiranga-indol.vercel.app?",
      a: "Yes. The card rendering is performed securely directly in your browser using modern client-side HTML5 canvas technology. Your personal photos and details are not stored on any public database.",
    },
    {
      q: "Can I print this card and use it as a physical badge?",
      a: "Absolutely! The downloaded image is high-resolution (300 DPI), making it crystal-clear for printing on standard PVC plastic ID cards, glossy photo paper, or regular cardstock with a standard lanyard or clip.",
    },
    {
      q: "Is the Tiranga ID card an official government identity proof?",
      a: "No. The Tiranga ID card is a celebratory patriotic badge designed for festivities, social sharing, and community events. It is not an official government ID proof (such as Aadhaar Card, Passport, Voter ID, or Driving License).",
    },
  ];

  return (
    <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-3">
      {faqs.map((faq, idx) => (
        <AccordionItem
          key={idx}
          value={`item-${idx}`}
          className="rounded-2xl border border-border/80 bg-card px-5 data-[state=open]:border-orange-500/40 shadow-sm"
        >
          <AccordionTrigger className="text-left font-heading font-semibold text-sm sm:text-base py-4 hover:text-primary transition-colors">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-1 pb-4">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
