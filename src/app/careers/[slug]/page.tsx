import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { careers } from "@/data/mock-data";
import { ArrowLeft, MapPin, Briefcase, Clock, CheckCircle2 } from "lucide-react";

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = careers.find((j) => j.slug === slug);
  if (!job) return { title: "Job Not Found" };
  return { title: `${job.title} - Careers`, description: job.description };
}

export function generateStaticParams() { return careers.map((j) => ({ slug: j.slug })); }

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = careers.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <PublicLayout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <Link href="/careers" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"><ArrowLeft className="h-4 w-4" /> All Positions</Link>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <Badge className="mb-3">{job.department}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">{job.title}</h1>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
                  <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" />{job.type}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{job.experience}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">{job.description}</p>
              </ScrollReveal>

              <ScrollReveal><h2 className="text-xl font-heading font-bold mb-4">Responsibilities</h2></ScrollReveal>
              <ul className="space-y-3 mb-8">
                {job.responsibilities.map((r) => (<li key={r} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">{r}</span></li>))}
              </ul>

              <ScrollReveal><h2 className="text-xl font-heading font-bold mb-4">Requirements</h2></ScrollReveal>
              <ul className="space-y-3 mb-8">
                {job.requirements.map((r) => (<li key={r} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /><span className="text-muted-foreground">{r}</span></li>))}
              </ul>

              <ScrollReveal><h2 className="text-xl font-heading font-bold mb-4">Benefits</h2></ScrollReveal>
              <ul className="space-y-3">
                {job.benefits.map((b) => (<li key={b} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" /><span className="text-muted-foreground">{b}</span></li>))}
              </ul>
            </div>

            <div>
              <ScrollReveal animation="fade-left">
                <div className="sticky top-24 p-6 rounded-2xl border bg-card">
                  <h3 className="text-lg font-heading font-bold mb-4">Apply for this Position</h3>
                  <form className="space-y-4">
                    <div><label className="text-sm font-medium mb-1 block">Full Name</label><Input placeholder="Anil Kumar" required /></div>
                    <div><label className="text-sm font-medium mb-1 block">Email</label><Input type="email" placeholder="amit@example.com" required /></div>
                    <div><label className="text-sm font-medium mb-1 block">Phone</label><Input type="tel" placeholder="+91 9876543210" /></div>
                    <div><label className="text-sm font-medium mb-1 block">LinkedIn Profile</label><Input placeholder="https://linkedin.com/in/..." /></div>
                    <div><label className="text-sm font-medium mb-1 block">Resume (PDF)</label><Input type="file" accept=".pdf,.doc,.docx" /></div>
                    <div><label className="text-sm font-medium mb-1 block">Cover Letter</label><Textarea placeholder="Tell us why you're a great fit..." rows={4} /></div>
                    <Button variant="gradient" className="w-full">Submit Application</Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
