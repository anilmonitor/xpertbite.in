"use client";

import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Calendar as CalendarIcon, Clock, Video, Laptop, Users, CheckCircle2 } from "lucide-react";

export default function BookConsultationPage() {
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("Video Call");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

  const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a convenient date and time.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    toast.success("Consultation session booked! Check your inbox for the calendar invite.");
    setLoading(false);
    (e.target as HTMLFormElement).reset();
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <SectionHeader
              title="Book a Free Tech Strategy Call"
              subtitle="Get expert advice on architecture, cost planning, design standards, and timeline estimates for your product idea."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto mt-8">
            {/* Context Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <ScrollReveal animation="fade-right">
                <div className="p-6 rounded-2xl border bg-card space-y-6">
                  <h3 className="text-lg font-heading font-bold">What to expect:</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span><strong>30-Minute Architecture Review:</strong> Quick sanity check of your proposed stack or requirements.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span><strong>Budget & Estimate Guidelines:</strong> Clear ballpark details to align your investment plans.</span>
                    </li>
                    <li className="flex gap-3 text-sm leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span><strong>Confidential Conversation:</strong> Strict NDAs applied. Your business secrets are safe with us.</span>
                    </li>
                  </ul>

                  <div className="pt-4 border-t space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Meeting options:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Video className="h-4 w-4 text-primary" />
                        <span>Google Meet / Zoom Video Call</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Laptop className="h-4 w-4 text-primary" />
                        <span>Interactive screen-sharing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Booking Form Card */}
            <div className="lg:col-span-8">
              <ScrollReveal animation="fade-left">
                <div className="p-6 md:p-8 rounded-2xl border bg-card shadow-sm">
                  <h3 className="text-xl font-heading font-bold mb-6">Select Date & Meeting Details</h3>
                  <form onSubmit={handleBooking} className="space-y-6">
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
                        <label className="text-sm font-medium mb-1.5 block">Choose Meeting Type</label>
                        <div className="flex gap-2">
                          {["Video Call", "Voice Call"].map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setSelectedType(type)}
                              className={`flex-1 py-2 text-sm font-medium rounded-lg border transition-all ${
                                selectedType === type
                                  ? "bg-primary text-white border-primary"
                                  : "bg-background text-foreground hover:bg-muted"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Preferred Date</label>
                        <Input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Time Slots selector */}
                    <div>
                      <label className="text-sm font-medium mb-2.5 block">Preferred Time Slot (IST)</label>
                      <div className="flex flex-wrap gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                              selectedTime === time
                                ? "bg-accent text-white border-accent"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Brief Project Description</label>
                      <Textarea
                        placeholder="Tell us about your business goals, targets, features list, or stack queries..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={loading}>
                      {loading ? "Scheduling meeting..." : "Schedule Strategy Session"}
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
