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

export default function RequestQuotePage() {
  const [loading, setLoading] = useState(false);
  const [budget, setBudget] = useState<string>("$5,000 - $10,000");

  const budgets = ["<$5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000+"];

  const handleQuoteRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    toast.success("Quote request submitted! Our solutions team will review and contact you with an estimate.");
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <SectionHeader
              title="Request a Custom Project Quote"
              subtitle="Fill in your project requirements and expected metrics to get a detailed breakdown from our development estimators."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto mt-8">
            {/* Sidebar Guidelines */}
            <div className="lg:col-span-4 space-y-6">
              <ScrollReveal animation="fade-right">
                <div className="p-6 rounded-2xl border bg-card space-y-6">
                  <h3 className="text-lg font-heading font-bold">Why XpertBite:</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span><strong>No Hidden Expenses:</strong> Detailed itemized breakdown of hours, licenses, and resource rates.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span><strong>Dedicated Team:</strong> Senior solution architects assigned to design and test your prototype.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span><strong>Scalable Approach:</strong> We suggest MVP structures to build incrementally without high upfront costs.</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Form card */}
            <div className="lg:col-span-8">
              <ScrollReveal animation="fade-left">
                <div className="p-6 md:p-8 rounded-2xl border bg-card shadow-sm">
                  <h3 className="text-xl font-heading font-bold mb-6">Project Specifications</h3>
                  <form onSubmit={handleQuoteRequest} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                        <Input placeholder="Anil Kumar" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Company Name</label>
                        <Input placeholder="Company Inc." required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Business Email</label>
                        <Input type="email" placeholder="amit@company.com" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Project Category</label>
                        <select className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                          <option>Web Application</option>
                          <option>Mobile App (iOS/Android)</option>
                          <option>SaaS Platform</option>
                          <option>Enterprise ERP/CRM</option>
                          <option>AI/ML Solution</option>
                          <option>Custom Software</option>
                        </select>
                      </div>
                    </div>

                    {/* Budget selector */}
                    <div>
                      <label className="text-sm font-medium mb-2.5 block">Estimated Budget Range (USD)</label>
                      <div className="flex flex-wrap gap-2">
                        {budgets.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setBudget(b)}
                            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                              budget === b
                                ? "bg-primary text-white border-primary"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Project Description & Requirements</label>
                      <Textarea
                        placeholder="Detail key feature requests, integration requirements (like Stripe, OAuth), design guidelines, or target timeline..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={loading}>
                      {loading ? "Submitting details..." : "Request Proposal & Estimate"}
                      <Send className="h-4 w-4 ml-2" />
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
