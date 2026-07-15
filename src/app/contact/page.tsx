"use client";

import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY } from "@/lib/constants";
import { MapPin, Mail, Phone, Clock, MessageCircle, PhoneCall, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { submitContactForm } from "@/actions/contacts";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string || undefined,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await submitContactForm(data);
      if (res.success) {
        toast.success("Message sent successfully! We'll get back to you within 24 hours.");
        (e.target as HTMLFormElement).reset();
      } else {
        let errorMsg = "Failed to send message. Please check the inputs.";
        if (res.error && typeof res.error === "object") {
          const errors = Object.entries(res.error)
            .filter(([key]) => key !== "_errors")
            .map(([key, val]: [string, any]) => {
              const fieldName = key.charAt(0).toUpperCase() + key.slice(1);
              return `${fieldName}: ${val._errors?.join(", ")}`;
            });
          if (errors.length > 0) {
            errorMsg = errors.join(" | ");
          }
        }
        toast.error(errorMsg);
      }
    } catch (err) {
      toast.error("An error occurred while sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-background via-muted/5 to-background">
        <div className="absolute inset-0 gradient-mesh opacity-60" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <SectionHeader
              title="Let's Start a Conversation"
              subtitle="Have a project in mind? We'd love to hear about it. Reach out and let's discuss how we can help."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-10">
            {[
              { 
                icon: MapPin, 
                title: "Visit Us", 
                info: (
                  <span className="block text-xs leading-relaxed space-y-1.5 mt-2 w-full">
                    <span className="block"><strong className="text-foreground">Garhwa Office:</strong> Garhwa, JH - 822114</span>
                    <span className="block border-t border-border/50 my-1" />
                    <span className="block"><strong className="text-foreground">Bangalore Office:</strong> Bangalore, KA</span>
                  </span>
                ), 
                action: "#" 
              },
              { 
                icon: Mail, 
                title: "Email Us", 
                info: (
                  <span className="block text-xs leading-relaxed space-y-1.5 mt-2 w-full">
                    <span className="block"><strong className="text-foreground">General Info:</strong> xpertbite@gmail.com</span>
                    <span className="block border-t border-border/50 my-1" />
                    <span className="block"><strong className="text-foreground">Client Support:</strong> xpertbite@gmail.com</span>
                  </span>
                ), 
                action: `mailto:${COMPANY.email}` 
              },
              { 
                icon: Phone, 
                title: "Call Us", 
                info: (
                  <span className="block text-xs leading-relaxed space-y-1.5 mt-2 w-full">
                    <span className="block"><strong className="text-foreground">Primary Hotline:</strong> {COMPANY.phone}</span>
                    <span className="block border-t border-border/50 my-1" />
                    <span className="block"><strong className="text-foreground">WhatsApp Call:</strong> +91 74881 68228</span>
                  </span>
                ), 
                action: `tel:${COMPANY.phone}` 
              },
              { 
                icon: Clock, 
                title: "Working Hours", 
                info: (
                  <span className="block text-xs leading-relaxed space-y-1.5 mt-2 w-full">
                    <span className="block"><strong className="text-foreground">Mon - Fri:</strong> 9:00 AM - 6:00 PM IST</span>
                    <span className="block border-t border-border/50 my-1" />
                    <span className="block"><strong className="text-foreground">Saturday:</strong> 10:00 AM - 2:00 PM IST</span>
                  </span>
                ), 
                action: "#" 
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} animation="fade-up" className="h-full">
                  <a 
                    href={item.action} 
                    className="flex flex-col h-full p-6 rounded-2xl border border-border/60 bg-card/65 backdrop-blur-md hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 text-center group"
                  >
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all shadow-sm group-hover:shadow-md">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                    <div className="text-xs text-muted-foreground flex-grow flex items-center justify-center w-full">{item.info}</div>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-12 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal animation="fade-right">
              <div className="p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm">
                <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block text-foreground">Full Name <span className="text-red-500 ml-0.5">*</span></label>
                      <Input name="name" placeholder="Anil Kumar" required className="bg-background/50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block text-foreground">Email Address <span className="text-red-500 ml-0.5">*</span></label>
                      <Input name="email" type="email" placeholder="amit@example.com" required className="bg-background/50" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block text-foreground">Phone Number</label>
                      <Input 
                        name="phone" 
                        type="tel" 
                        placeholder="10 digit mobile number" 
                        maxLength={10}
                        minLength={10}
                        className="bg-background/50" 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block text-foreground">Subject <span className="text-red-500 ml-0.5">*</span></label>
                      <Input name="subject" placeholder="Project Inquiry" required className="bg-background/50" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-foreground">Message <span className="text-red-500 ml-0.5">*</span></label>
                    <Textarea name="message" placeholder="Tell us about your project..." rows={5} required className="bg-background/50" />
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
                <div className="h-72 rounded-2xl bg-muted/30 border border-border/60 overflow-hidden flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                  <div className="text-center text-muted-foreground relative z-10 p-6">
                    <MapPin className="h-10 w-10 mx-auto mb-3 text-primary animate-pulse" />
                    <h3 className="text-sm font-semibold text-foreground mb-1">Google Maps Integration</h3>
                    <p className="text-xs text-muted-foreground max-w-xs mx-auto">Garhwa, Jharkhand & Bangalore, Karnataka Office Hubs</p>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://wa.me/917488168228"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl border border-border/55 bg-card/40 hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all duration-300 group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      <MessageCircle className="h-5 w-5 text-emerald-600 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">WhatsApp</div>
                      <div className="text-xs text-muted-foreground">Chat with us instantly</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border/55 bg-card/40 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <PhoneCall className="h-5 w-5 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">Call Now</div>
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
