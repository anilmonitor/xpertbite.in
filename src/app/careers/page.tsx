import type { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { careers, internships } from "@/data/mock-data";
import { MapPin, Briefcase, Clock, ArrowRight, Home, TrendingUp, Shield, Target, Users } from "lucide-react";

export const metadata: Metadata = { 
  title: "Careers", 
  description: "Join XpertBite Technologies. Explore exciting career opportunities and internships." 
};

const perks = [
  { icon: Home, title: "Remote-First", desc: "Work from anywhere in the world" },
  { icon: TrendingUp, title: "Growth", desc: "Annual learning budget & career paths" },
  { icon: Shield, title: "Health", desc: "Comprehensive health insurance" },
  { icon: Clock, title: "Flexibility", desc: "Flexible working hours" },
  { icon: Target, title: "Impact", desc: "Work on meaningful projects" },
  { icon: Users, title: "Culture", desc: "Inclusive, diverse team environment" },
];

export default function CareersPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-background via-muted/5 to-background">
        <div className="absolute inset-0 gradient-mesh opacity-60" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <SectionHeader 
              badge="Careers" 
              title="Join Our Team" 
              subtitle="Help us build the future of technology. We're always looking for talented people who are passionate about their craft." 
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-muted/20 relative z-10 border-y border-border/40">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h3 className="text-2xl font-heading font-bold mb-8 text-center text-foreground">Why Join XpertBite?</h3>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.title}>
                  <div className="p-5 rounded-xl border border-border/60 bg-card/65 backdrop-blur-md text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full flex flex-col justify-start">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-bold text-sm text-foreground mb-1.5">{p.title}</h4>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">{p.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Openings */}
      <section className="py-16 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h3 className="text-2xl font-heading font-bold mb-8 text-foreground">Open Positions</h3>
          </ScrollReveal>
          
          <div className="space-y-4">
            {careers.map((job) => (
              <ScrollReveal key={job.slug} animation="fade-up">
                <Link 
                  href={`/careers/${job.slug}`} 
                  className="group block p-6 rounded-2xl border border-border/60 bg-card/45 backdrop-blur-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors">{job.title}</h4>
                      <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted-foreground font-medium">
                        <span className="flex items-center gap-1.5 text-foreground/80">
                          <Briefcase className="h-3.5 w-3.5 text-primary/70" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1.5 text-foreground/80">
                          <MapPin className="h-3.5 w-3.5 text-primary/70" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-foreground/80">
                          <Clock className="h-3.5 w-3.5 text-primary/70" />
                          {job.type}
                        </span>
                        <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-muted/60 text-foreground border-border/50">
                          {job.experience}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="shrink-0 h-8 rounded-lg text-xs group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      Apply Now <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </Button>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-16 bg-muted/20 border-t border-border/40 relative z-10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h3 className="text-2xl font-heading font-bold mb-8 text-foreground">Internship Programs</h3>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internships.map((int) => (
              <StaggerItem key={int.slug}>
                <div className="p-6 rounded-2xl border border-border/60 bg-card/45 backdrop-blur-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-heading font-bold mb-2 text-foreground">{int.title}</h4>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed mb-4">{int.description}</p>
                    
                    <div className="space-y-2 text-xs mb-5 pt-3 border-t border-border/40">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground font-medium">Duration</span>
                        <span className="font-semibold text-foreground">{int.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground font-medium">Stipend</span>
                        <span className="font-semibold text-foreground">{int.stipend}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {int.skills.map((s) => (
                        <Badge key={s} variant="secondary" className="text-[10px] px-2 py-0.5 bg-muted/60 text-foreground border-border/50">
                          {s}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full h-8 rounded-lg text-xs hover:bg-primary hover:text-white transition-all duration-300">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PublicLayout>
  );
}
