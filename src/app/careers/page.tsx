import type { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { careers, internships } from "@/data/mock-data";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Careers", description: "Join XpertBite Technologies. Explore exciting career opportunities and internships." };

const perks = [
  { emoji: "🏠", title: "Remote-First", desc: "Work from anywhere in the world" },
  { emoji: "📈", title: "Growth", desc: "Annual learning budget & career paths" },
  { emoji: "🏥", title: "Health", desc: "Comprehensive health insurance" },
  { emoji: "⏰", title: "Flexibility", desc: "Flexible working hours" },
  { emoji: "🎯", title: "Impact", desc: "Work on meaningful projects" },
  { emoji: "👥", title: "Culture", desc: "Inclusive, diverse team environment" },
];

export default function CareersPage() {
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal><SectionHeader badge="Careers" title="Join Our Team" subtitle="Help us build the future of technology. We're always looking for talented people who are passionate about their craft." /></ScrollReveal>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal><h3 className="text-2xl font-heading font-bold mb-8 text-center">Why Join XpertBite?</h3></ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {perks.map((p) => (
              <StaggerItem key={p.title}>
                <div className="p-4 rounded-xl border bg-card text-center hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <h4 className="font-bold text-sm mb-1">{p.title}</h4>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Openings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal><h3 className="text-2xl font-heading font-bold mb-8">Open Positions</h3></ScrollReveal>
          <div className="space-y-4">
            {careers.map((job) => (
              <ScrollReveal key={job.slug} animation="fade-up">
                <Link href={`/careers/${job.slug}`} className="group block p-6 rounded-2xl border bg-card hover:shadow-lg hover:border-primary/30 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-heading font-bold group-hover:text-primary transition-colors">{job.title}</h4>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{job.department}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{job.type}</span>
                        <Badge variant="secondary">{job.experience}</Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="shrink-0">Apply Now <ArrowRight className="h-4 w-4 ml-1" /></Button>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal><h3 className="text-2xl font-heading font-bold mb-8">Internship Programs</h3></ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internships.map((int) => (
              <StaggerItem key={int.slug}>
                <div className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-shadow h-full">
                  <h4 className="text-lg font-heading font-bold mb-2">{int.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{int.description}</p>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between"><span className="text-muted-foreground">Duration</span><span className="font-medium">{int.duration}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Stipend</span><span className="font-medium">{int.stipend}</span></div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {int.skills.map((s) => (<Badge key={s} variant="secondary" className="text-xs">{s}</Badge>))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">Apply Now</Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PublicLayout>
  );
}
