"use client";

import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { COMPANY } from "@/lib/constants";
import { MapPin, Mail, Phone, Clock, MessageCircle, PhoneCall, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <SectionHeader
              title="Let's Start a Conversation"
              subtitle="Have a project in mind? We'd love to hear about it. Reach out and let's discuss how we can help."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-8">
            {[
              { icon: MapPin, title: "Visit Us", info: `${COMPANY.address.street}, ${COMPANY.address.city}`, action: "#" },
              { icon: Mail, title: "Email Us", info: COMPANY.email, action: `mailto:${COMPANY.email}` },
              { icon: Phone, title: "Call Us", info: COMPANY.phone, action: `tel:${COMPANY.phone}` },
              { icon: Clock, title: "Working Hours", info: COMPANY.workingHours, action: "#" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} animation="fade-up">
                  <a href={item.action} className="block p-6 rounded-2xl border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.info}</p>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal animation="fade-right">
              <div className="p-8 rounded-2xl border bg-card">
                <h2 className="text-2xl font-heading font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                      <Input placeholder="Anil Kumar" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email Address</label>
                      <Input type="email" placeholder="amit@example.com" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Phone Number</label>
                      <Input type="tel" placeholder="+91 9876 543 210" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Subject</label>
                      <Input placeholder="Project Inquiry" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message</label>
                    <Textarea placeholder="Tell us about your project..." rows={5} required />
                  </div>
                  <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4 ml-2" />
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div className="space-y-6">
                {/* Map Placeholder */}
                <div className="h-72 rounded-2xl bg-muted border overflow-hidden flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-10 w-10 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">Google Maps Integration</p>
                    <p className="text-xs">{COMPANY.address.city}, {COMPANY.address.state}</p>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={`https://wa.me/919876543210`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl border bg-card hover:bg-emerald-50 dark:hover:bg-emerald-950/20 hover:border-emerald-500/30 transition-all group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20">
                      <MessageCircle className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">WhatsApp</div>
                      <div className="text-xs text-muted-foreground">Chat with us</div>
                    </div>
                  </a>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="flex items-center gap-3 p-4 rounded-xl border bg-card hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:border-blue-500/30 transition-all group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20">
                      <PhoneCall className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Call Now</div>
                      <div className="text-xs text-muted-foreground">{COMPANY.phone}</div>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
