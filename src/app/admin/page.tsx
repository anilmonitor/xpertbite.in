"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, FileText, Calendar, MessageSquare, TrendingUp, Sparkles, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminDashboardPage() {
  const statCards = [
    { title: "Active Visitors", value: "24,560", desc: "+12.5% vs last month", icon: Users, color: "text-blue-500" },
    { title: "New Leads", value: "148", desc: "+8.2% vs last month", icon: FileText, color: "text-purple-500" },
    { title: "Consultation Sessions", value: "42", desc: "+15% vs last month", icon: Calendar, color: "text-cyan-500" },
    { title: "Pending Estimates", value: "18", desc: "-4% vs last month", icon: MessageSquare, color: "text-amber-500" },
  ];

  const recentMessages = [
    { name: "David Miller", email: "david@innovatelabs.co", subject: "SaaS Platform estimate", date: "July 12" },
    { name: "Elena Rostova", email: "elena@meditech.org", subject: "Telemedicine application", date: "July 11" },
    { name: "Marcus Thompson", email: "marcus@logix.com", subject: "Custom warehouse CRM", date: "July 10" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome header banner */}
      <ScrollReveal>
        <div className="p-6 md:p-8 rounded-2xl border bg-gradient-to-br from-primary/10 via-accent/5 to-transparent flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="space-y-1 relative z-10">
            <h1 className="text-2xl md:text-3xl font-bold font-heading flex items-center gap-2">
              Website Command Center <Sparkles className="h-5 w-5 text-primary animate-pulse-glow" />
            </h1>
            <p className="text-sm text-muted-foreground">Manage service catalogues, check user requests, write blogs, and configure settings.</p>
          </div>
          <div className="flex gap-2 relative z-10 shrink-0">
            <Button variant="default" size="sm" asChild>
              <Link href="/admin/blogs/new" className="inline-flex items-center gap-1">
                <Plus className="h-4 w-4" /> New Blog Post
              </Link>
            </Button>
          </div>
        </div>
      </ScrollReveal>

      {/* Grid of stats */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <StaggerItem key={stat.title}>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-semibold text-muted-foreground">{stat.title}</CardTitle>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-500" /> {stat.desc}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* Split details panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent project requests */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Project Leads</CardTitle>
            <CardDescription>Form submissions from contact and request-quote pages.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentMessages.map((msg, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-xl border bg-card hover:bg-muted/30 transition-colors">
                <div className="space-y-1">
                  <div className="font-semibold text-sm">{msg.name}</div>
                  <div className="text-xs text-muted-foreground">{msg.email} · {msg.subject}</div>
                </div>
                <div className="text-xs text-muted-foreground font-medium shrink-0">{msg.date}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Database overview card */}
        <Card>
          <CardHeader>
            <CardTitle>Resource Statistics</CardTitle>
            <CardDescription>Total active catalogue metrics.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Services Catalogues", count: "12 active" },
              { label: "Showcased Products", count: "4 items" },
              { label: "Portfolio Items", count: "6 items" },
              { label: "Blog Posts Published", count: "6 posts" },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center text-sm py-2 border-b last:border-0">
                <span className="font-medium text-muted-foreground">{item.label}</span>
                <span className="font-semibold">{item.count}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
