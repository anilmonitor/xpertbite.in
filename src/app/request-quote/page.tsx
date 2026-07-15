"use client";

import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Send, FileText, CheckCircle2 } from "lucide-react";
import { submitQuoteForm } from "@/actions/contacts";

export default function RequestQuotePage() {
  const [loading, setLoading] = useState(false);
  const [budget, setBudget] = useState<string>("₹1 Lakh - ₹5 Lakh");
  const [category, setCategory] = useState<string>("Web Application");

  const budgets = ["< ₹1 Lakh", "₹1 Lakh - ₹5 Lakh", "₹5 Lakh - ₹10 Lakh", "₹10 Lakh - ₹25 Lakh", "₹25 Lakh+"];

  const handleQuoteRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const selectedCategory = category === "Other" ? (formData.get("customCategory") as string) : category;

    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      category: selectedCategory || "Other",
      budget: budget,
      description: formData.get("description") as string,
    };

    try {
      const res = await submitQuoteForm(data);
      if (res.success) {
        toast.success("Quote request submitted! Our solutions team will review and contact you with an estimate.");
        (e.target as HTMLFormElement).reset();
        setBudget("₹1 Lakh - ₹5 Lakh");
        setCategory("Web Application");
      } else {
        let errorMsg = "Failed to submit quote request. Please check inputs.";
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
      toast.error("An error occurred during submission.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background">
        {/* Decorative background blobs */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <SectionHeader
              title="Start a Project"
              subtitle="Tell us about your project requirements to get a detailed proposal and estimate from our development team."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto mt-12">
            {/* Sidebar Guidelines */}
            <div className="lg:col-span-4 space-y-6">
              <ScrollReveal animation="fade-right">
                <div className="p-6 rounded-2xl border border-primary/10 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent backdrop-blur-sm shadow-lg shadow-primary/5 space-y-6">
                  <h3 className="text-lg font-heading font-bold text-foreground flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Why XpertBite:
                  </h3>
                  <ul className="space-y-5">
                    <li className="flex gap-3 text-sm leading-relaxed">
                      <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <span>
                        <strong className="text-foreground block font-semibold">No Hidden Charges</strong>
                        <span className="text-muted-foreground text-xs block mt-0.5">Transparent pricing. You will get complete details of project cost, timeline, and resources with zero hidden costs.</span>
                      </span>
                    </li>
                    <li className="flex gap-3 text-sm leading-relaxed">
                      <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <span>
                        <strong className="text-foreground block font-semibold">Dedicated Team</strong>
                        <span className="text-muted-foreground text-xs block mt-0.5">Experienced developers and UI/UX designers will work directly on your project from start to finish.</span>
                      </span>
                    </li>
                    <li className="flex gap-3 text-sm leading-relaxed">
                      <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <span>
                        <strong className="text-foreground block font-semibold">Start Small (MVP)</strong>
                        <span className="text-muted-foreground text-xs block mt-0.5">We help you launch a basic version of your product first to save budget, and then scale it as your business grows.</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Form card */}
            <div className="lg:col-span-8">
              <ScrollReveal animation="fade-left">
                <div className="p-6 md:p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md shadow-xl shadow-muted-foreground/5">
                  <h3 className="text-xl font-heading font-bold mb-1 text-foreground">Project Specifications</h3>
                  <p className="text-xs text-muted-foreground mb-6">Please fill in the fields below to start your engagement.</p>
                  
                  <form onSubmit={handleQuoteRequest} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block text-foreground/90">Full Name <span className="text-red-500 ml-0.5">*</span></label>
                        <Input 
                          name="name"
                          placeholder="Anil Kumar" 
                          required 
                          className="bg-background/50 border-border/60 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl h-10" 
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block text-foreground/90">Company Name <span className="text-red-500 ml-0.5">*</span></label>
                        <Input 
                          name="company"
                          placeholder="Company Inc." 
                          required 
                          className="bg-background/50 border-border/60 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl h-10" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block text-foreground/90">Business Email <span className="text-red-500 ml-0.5">*</span></label>
                        <Input 
                          name="email"
                          type="email" 
                          placeholder="amit@company.com" 
                          required 
                          className="bg-background/50 border-border/60 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl h-10" 
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block text-foreground/90">Phone Number <span className="text-red-500 ml-0.5">*</span></label>
                        <Input 
                          name="phone"
                          type="tel" 
                          placeholder="10 digit mobile number" 
                          required 
                          maxLength={10}
                          minLength={10}
                          className="bg-background/50 border-border/60 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl h-10" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block text-foreground/90">Project Category <span className="text-red-500 ml-0.5">*</span></label>
                        <select 
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="flex h-10 w-full rounded-xl border border-border/60 bg-background/50 backdrop-blur-sm px-3 py-2 text-sm focus-visible:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer text-foreground"
                        >
                          <option className="bg-card text-foreground">Web Application</option>
                          <option className="bg-card text-foreground">Mobile App (iOS/Android)</option>
                          <option className="bg-card text-foreground">E-Commerce Website & Store</option>
                          <option className="bg-card text-foreground">Delivery & Logistics App</option>
                          <option className="bg-card text-foreground">SaaS Platform</option>
                          <option className="bg-card text-foreground">Enterprise ERP/CRM</option>
                          <option className="bg-card text-foreground">AI/ML & Automation Solution</option>
                          <option className="bg-card text-foreground">Corporate & Business Website</option>
                          <option className="bg-card text-foreground">Custom Software Development</option>
                          <option className="bg-card text-foreground">Other</option>
                        </select>
                        {category === "Other" && (
                          <Input 
                            name="customCategory"
                            placeholder="Enter your custom project category (e.g., IoT, Blockchain, etc.)" 
                            required 
                            className="bg-background/50 border-border/60 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl h-10 mt-3 animate-fade-in" 
                          />
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block text-foreground/90">Estimated Budget Range (INR) <span className="text-red-500 ml-0.5">*</span></label>
                        <select 
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="flex h-10 w-full rounded-xl border border-border/60 bg-background/50 backdrop-blur-sm px-3 py-2 text-sm focus-visible:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer text-foreground"
                        >
                          {budgets.map((b) => (
                            <option key={b} value={b} className="bg-card text-foreground">
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1.5 block text-foreground/90">Project Description & Requirements <span className="text-red-500 ml-0.5">*</span></label>
                      <Textarea
                        name="description"
                        placeholder="Detail key feature requests, integration requirements (like Stripe, OAuth), design guidelines, or target timeline..."
                        rows={5}
                        required
                        className="bg-background/50 border-border/60 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl resize-none"
                      />
                    </div>

                    <Button type="submit" variant="gradient" size="lg" className="w-full h-11 rounded-xl shadow-lg shadow-primary/10 group" disabled={loading}>
                      {loading ? "Submitting details..." : "Start Project with Us"}
                      <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
