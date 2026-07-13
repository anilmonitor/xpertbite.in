import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { CTASection } from "@/components/home/cta-section";
import { Heart, Target, Eye, Award, Users, Lightbulb, CheckCircle2 } from "lucide-react";
import { COMPANY, STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about XpertBite Technologies — our mission, vision, values, and the team behind world-class software solutions.",
};

const values = [
  { icon: Lightbulb, title: "Innovation First", description: "We stay at the cutting edge of technology, constantly exploring new ways to solve complex problems." },
  { icon: Heart, title: "Client-Centric", description: "Your success is our success. We go above and beyond to ensure every project exceeds expectations." },
  { icon: Award, title: "Excellence", description: "We don't settle for good enough. Every line of code, every pixel, every interaction is crafted to perfection." },
  { icon: Users, title: "Collaboration", description: "We believe the best solutions come from diverse perspectives working together toward a common goal." },
  { icon: Target, title: "Results-Driven", description: "We measure our success by the measurable impact we create for our clients' businesses." },
  { icon: Eye, title: "Transparency", description: "Open communication, honest feedback, and clear expectations form the foundation of every engagement." },
];

const milestones = [
  { year: "2017", title: "Founded", description: "XpertBite Technologies was born with a vision to democratize enterprise-grade software." },
  { year: "2018", title: "First Major Client", description: "Signed our first enterprise client and delivered a complex ERP system." },
  { year: "2019", title: "Team of 20", description: "Grew to a team of 20 engineers, designers, and strategists." },
  { year: "2020", title: "Remote-First", description: "Embraced remote work and expanded our talent pool across India." },
  { year: "2021", title: "100th Project", description: "Delivered our 100th project and launched our first SaaS product." },
  { year: "2022", title: "International Expansion", description: "Started serving clients in the US, UK, UAE, and Australia." },
  { year: "2023", title: "AI Integration", description: "Launched our AI/ML practice and built intelligent solutions for healthcare and fintech." },
  { year: "2024", title: "500+ Projects", description: "Crossed 500 successful projects with a 98% client satisfaction rate." },
];

export default function AboutPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeader
                title="We Build Software That Matters"
                subtitle={`Since ${COMPANY.foundedYear}, we've been transforming businesses through technology. We're not just developers — we're your strategic technology partners.`}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal animation="fade-right">
              <div className="p-8 rounded-2xl border bg-card">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes with innovative, scalable, and reliable software solutions that drive growth, 
                  improve efficiency, and create lasting competitive advantages. We believe technology should be an enabler, 
                  not a barrier.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left">
              <div className="p-8 rounded-2xl border bg-card">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted software development company globally, known for delivering transformative 
                  digital solutions that set new standards in quality, innovation, and client satisfaction. We aspire to 
                  shape the future of technology.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeader
              badge="Our Values"
              title="What Drives Us"
              subtitle="Our core values guide every decision we make and every line of code we write."
            />
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="p-6 rounded-2xl border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeader
              badge="Our Journey"
              title="Milestones That Define Us"
              subtitle="A timeline of growth, innovation, and relentless pursuit of excellence."
            />
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} animation="fade-up" delay={index * 0.05}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {milestone.year.slice(2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-px h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-sm font-medium text-primary">{milestone.year}</span>
                    <h3 className="text-lg font-heading font-bold mt-1">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.slice(0, 4).map((stat) => (
              <ScrollReveal key={stat.label} animation="zoom-in">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold font-heading gradient-text mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PublicLayout>
  );
}
