import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { CTASection } from "@/components/home/cta-section";
import { Search, Palette, Code2, ShieldAlert, Rocket, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process",
  description: "Learn about the XpertBite Technologies development methodology. How we turn ideas into software.",
};

const detailedSteps = [
  {
    step: "01",
    title: "Discovery & Requirements gathering",
    description: "We initiate the process by getting to know your organization, targets, and users. Through detailed workshops, we gather technical specifications and structure a defined roadmap.",
    icon: Search,
    details: ["Stakeholder Interviews", "Competitor Research", "Technical Feasibility Study", "Project Roadmap Definition"],
  },
  {
    step: "02",
    title: "UX/UI Design & Prototyping",
    description: "Our design team crafts intuitive user journeys, wireframes, and high-fidelity mockups. We construct interactive prototypes to validate workflows before development begins.",
    icon: Palette,
    details: ["User Journey Mapping", "Wireframes Creation", "Interactive Prototypes", "Design Systems Development"],
  },
  {
    step: "03",
    title: "Agile Development",
    description: "We turn designs into pixel-perfect production code using modern frameworks. Our engineers work in bi-weekly sprints, delivering testable builds at the end of each sprint.",
    icon: Code2,
    details: ["Modern Tech Stack Selection", "API First Architecture", "Clean & Documented Code", "Incremental Sprint Releases"],
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    description: "We run comprehensive manual and automated tests across different environments. We perform performance optimizations to ensure your app loads under 100ms.",
    icon: ShieldAlert,
    details: ["Unit & Integration Testing", "Security Vulnerability Audits", "Performance & SEO Audits", "User Acceptance Testing"],
  },
  {
    step: "05",
    title: "Launch & Production Rollout",
    description: "We coordinate hosting, server config, SSL integration, and release configurations. Our engineers ensure a seamless rollout onto platforms like Vercel or cloud nodes.",
    icon: Rocket,
    details: ["Production Server Prep", "Database Setup & Migrations", "CDN & Domain Setup", "Release Deployment Monitoring"],
  },
  {
    step: "06",
    title: "Support, Maintenance & Scale",
    description: "After product launch, we continuously monitor performance, apply security updates, and implement feature extensions to help your business scale.",
    icon: HelpCircle,
    details: ["24/7 Monitoring & Alerting", "Security Patching & Backups", "Feature Enhancements", "Continuous Integration Updates"],
  },
];

export default function ProcessPage() {
  return (
    <PublicLayout>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <SectionHeader
              badge="Our Development Process"
              title="How We Build Outstanding Software"
              subtitle="We combine agile methodologies with clean architecture to deliver production-grade products efficiently."
            />
          </ScrollReveal>

          <div className="max-w-5xl mx-auto mt-16 relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-[50px] top-[40px] bottom-[40px] w-0.5 bg-border" />

            <div className="space-y-12">
              {detailedSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <ScrollReveal key={step.step} animation={index % 2 === 0 ? "fade-right" : "fade-left"}>
                    <div className="flex flex-col md:flex-row gap-6 relative">
                      {/* Step Circle indicator */}
                      <div className="flex-shrink-0 z-10">
                        <div className="h-24 w-24 rounded-2xl bg-card border shadow-sm flex items-center justify-center relative">
                          <Icon className="h-10 w-10 text-primary animate-pulse-glow" />
                          <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold shadow-md">
                            {step.step}
                          </div>
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 p-6 md:p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
                        <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">{step.description}</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                              <span className="text-sm font-medium text-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </PublicLayout>
  );
}
