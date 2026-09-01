"use client";

import { useEffect, useState } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, FileText, Calendar, MessageSquare, Plus, ArrowRight, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<any>({
    totalFestivalGreetings: 0,
    durgaCount: 0,
    diwaliCount: 0,
    chhathCount: 0,
    leadsCount: 0,
    quotesCount: 0,
    bookingsCount: 0,
    blogsCount: 0,
    servicesCount: 0,
    productsCount: 0,
    portfolioCount: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStats(data.stats);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const statCards = [
    { 
      title: "Festival Greetings", 
      value: stats.totalFestivalGreetings.toString(), 
      desc: "Durga, Diwali & Chhath cards", 
      icon: ImageIcon, 
      color: "text-amber-500",
      href: "/admin/festivals"
    },
    { 
      title: "Client Inquiries", 
      value: stats.leadsCount.toString(), 
      desc: "Contact form messages", 
      icon: MessageSquare, 
      color: "text-blue-500",
      href: "/admin/leads"
    },
    { 
      title: "Project Estimates", 
      value: stats.quotesCount.toString(), 
      desc: "Quote requests", 
      icon: FileText, 
      color: "text-purple-500",
      href: "/admin/leads"
    },
    { 
      title: "Consultations", 
      value: stats.bookingsCount.toString(), 
      desc: "Booked sessions", 
      icon: Calendar, 
      color: "text-emerald-500",
      href: "/admin/leads"
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      {/* Clean Header */}
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card/60 p-5 sm:p-6 rounded-2xl border">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading">Dashboard Overview</h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Live statistics from Hostinger MySQL database.
            </p>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="default" size="sm" asChild className="w-full sm:w-auto text-xs h-9">
              <Link href="/admin/festivals">
                View Festival Cards
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild className="w-full sm:w-auto text-xs h-9">
              <Link href="/admin/blogs/new">
                <Plus className="h-3.5 w-3.5 mr-1" /> New Blog
              </Link>
            </Button>
          </div>
        </div>
      </ScrollReveal>

      {/* Grid of stats */}
      <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <StaggerItem key={stat.title}>
              <Link href={stat.href}>
                <Card className="hover:shadow-md hover:border-primary/40 transition-all cursor-pointer shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 p-4 sm:p-5 space-y-0">
                    <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                    <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${stat.color}`} />
                  </CardHeader>
                  <CardContent className="p-4 sm:p-5 pt-0">
                    <div className="text-2xl sm:text-3xl font-bold">{loading ? "..." : stat.value}</div>
                    <p className="text-[11px] text-muted-foreground mt-1 truncate">
                      {stat.desc}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* Split details panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Festival Quick Breakdown */}
        <Card className="lg:col-span-2 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between p-5 pb-3">
            <div>
              <CardTitle className="text-base sm:text-lg font-bold">
                Festival Cards Breakdown
              </CardTitle>
              <CardDescription className="text-xs">
                Greetings and photos stored in Cloudinary and MySQL.
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild className="text-xs h-8">
              <Link href="/admin/festivals" className="gap-1">
                View All <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-3 p-5 pt-2">
            <div className="p-3.5 rounded-xl border bg-muted/20 text-center">
              <span className="text-xs font-medium text-muted-foreground block">Durga Puja</span>
              <div className="text-2xl font-bold mt-1.5">{stats.durgaCount}</div>
              <p className="text-[10px] text-muted-foreground mt-0.5">Cards</p>
            </div>

            <div className="p-3.5 rounded-xl border bg-muted/20 text-center">
              <span className="text-xs font-medium text-muted-foreground block">Diwali</span>
              <div className="text-2xl font-bold mt-1.5">{stats.diwaliCount}</div>
              <p className="text-[10px] text-muted-foreground mt-0.5">Cards</p>
            </div>

            <div className="p-3.5 rounded-xl border bg-muted/20 text-center">
              <span className="text-xs font-medium text-muted-foreground block">Chhath</span>
              <div className="text-2xl font-bold mt-1.5">{stats.chhathCount}</div>
              <p className="text-[10px] text-muted-foreground mt-0.5">Cards</p>
            </div>
          </CardContent>
        </Card>

        {/* Database overview card */}
        <Card className="shadow-sm">
          <CardHeader className="p-5 pb-3">
            <CardTitle className="text-base sm:text-lg font-bold">Content Catalog</CardTitle>
            <CardDescription className="text-xs">Active website resources.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 p-5 pt-1">
            {[
              { label: "Active Services", count: `${stats.servicesCount} items` },
              { label: "Products", count: `${stats.productsCount} items` },
              { label: "Portfolio Items", count: `${stats.portfolioCount} items` },
              { label: "Blog Posts", count: `${stats.blogsCount} posts` },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center text-xs py-2 border-b last:border-0">
                <span className="font-medium text-muted-foreground">{item.label}</span>
                <span className="font-semibold text-foreground">{loading ? "..." : item.count}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
