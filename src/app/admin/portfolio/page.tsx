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
    <div className="space-y-8">
      <ScrollReveal>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-heading">Manage Portfolio</h1>
            <p className="text-sm text-muted-foreground">Configure the active case studies and completed project collections.</p>
          </div>
          <Button variant="gradient" size="sm" onClick={() => toast.info("Add new portfolio item functionality is currently in development.")}>
            <Plus className="h-4 w-4 mr-1" /> Add Portfolio
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="border rounded-2xl bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/40 border-b text-sm font-semibold text-muted-foreground">
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
                      <Badge variant="accent">{item.category}</Badge>
                    </td>
                    <td className="p-4">{item.duration}</td>
                    <td className="p-4 text-right space-x-2">
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

