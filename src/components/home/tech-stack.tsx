"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Marquee } from "@/components/ui/marquee";

const techList = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Java",
  "Spring Boot", "Django", "Laravel", "Flutter", "React Native", "Swift",
  "Kotlin", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB",
  "Redis", "Terraform", "Figma", "TensorFlow", "GraphQL", "Go",
];

export function TechStack() {
  const firstRow = techList.slice(0, techList.length / 2);
  const secondRow = techList.slice(techList.length / 2);

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            badge="Technologies"
            title="Technologies We Use"
            subtitle="We work with modern programming languages, frameworks, and cloud platforms to build reliable software for your business."
          />
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="space-y-4">
          <Marquee pauseOnHover duration="30s">
            {firstRow.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-3 px-6 py-3 rounded-xl border bg-card hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 cursor-default group"
              >
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-xs font-bold text-primary">
                    {tech.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
          </Marquee>

          <Marquee pauseOnHover reverse duration="35s">
            {secondRow.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-3 px-6 py-3 rounded-xl border bg-card hover:bg-accent/5 hover:border-accent/30 transition-all duration-300 cursor-default group"
              >
                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <span className="text-xs font-bold text-accent">
                    {tech.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </ScrollReveal>
    </section>
  );
}
