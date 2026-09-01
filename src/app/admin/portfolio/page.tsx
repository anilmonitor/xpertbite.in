"use client";

import { useState } from "react";
import { portfolioItems } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function AdminPortfolioPage() {
  const [list, setList] = useState(portfolioItems);

  const handleDelete = (slug: string) => {
    setList(list.filter((item) => item.slug !== slug));
    toast.success("Portfolio item removed successfully.");
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card/60 p-5 sm:p-6 rounded-2xl border">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading">Manage Portfolio</h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Configure active case studies and client projects.</p>
          </div>
          <Button variant="gradient" size="sm" onClick={() => toast.info("Add new portfolio item functionality is currently in development.")} className="w-full sm:w-auto text-xs">
            <Plus className="h-4 w-4 mr-1" /> Add Portfolio
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="border rounded-2xl bg-card overflow-hidden shadow-sm">
          {/* Mobile View */}
          <div className="block md:hidden divide-y">
            {list.map((item) => (
              <div key={item.slug} className="p-4 space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-semibold text-sm block">{item.title.split("—")[0]}</span>
                  <Badge variant="secondary" className="text-xs shrink-0">{item.category}</Badge>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Client: <strong className="text-foreground">{item.client}</strong></span>
                  <span>{item.duration}</span>
                </div>
                <div className="flex justify-end gap-1 pt-1 border-t">
                  <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => toast.info("Editing portfolio item...")}>
                    <Edit2 className="h-3 w-3 mr-1" /> Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 text-xs text-destructive hover:text-destructive" onClick={() => handleDelete(item.slug)}>
                    <Trash2 className="h-3 w-3 mr-1" /> Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/40 border-b text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <th className="p-4">Project Title</th>
                  <th className="p-4">Client</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {list.map((item) => (
                  <tr key={item.slug} className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-semibold">{item.title.split("—")[0]}</td>
                    <td className="p-4 text-muted-foreground">{item.client}</td>
                    <td className="p-4">
                      <Badge variant="secondary">{item.category}</Badge>
                    </td>
                    <td className="p-4">{item.duration}</td>
                    <td className="p-4 text-right space-x-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info("Editing item...")}>
                        <Edit2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10" onClick={() => handleDelete(item.slug)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
