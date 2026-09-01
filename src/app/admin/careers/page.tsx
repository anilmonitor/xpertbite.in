"use client";

import { useState } from "react";
import { careers } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function AdminCareersPage() {
  const [list, setList] = useState(careers);

  const handleDelete = (slug: string) => {
    setList(list.filter((item) => item.slug !== slug));
    toast.success("Job posting removed successfully.");
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card/60 p-5 sm:p-6 rounded-2xl border">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading">Manage Careers</h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Configure job openings and review candidates applications.</p>
          </div>
          <Button variant="gradient" size="sm" onClick={() => toast.info("Create position functionality is currently in development.")} className="w-full sm:w-auto text-xs">
            <Plus className="h-4 w-4 mr-1" /> Open Position
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="border rounded-2xl bg-card overflow-hidden shadow-sm">
          {/* Mobile View */}
          <div className="block md:hidden divide-y">
            {list.map((job) => (
              <div key={job.slug} className="p-4 space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-semibold text-sm block">{job.title}</span>
                    <span className="text-xs text-muted-foreground">{job.experience}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs shrink-0">{job.type}</Badge>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{job.department}</span>
                  <span>{job.location}</span>
                </div>
                <div className="flex justify-end gap-1 pt-1 border-t">
                  <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => toast.info("Editing career posting...")}>
                    <Edit2 className="h-3 w-3 mr-1" /> Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 text-xs text-destructive hover:text-destructive" onClick={() => handleDelete(job.slug)}>
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
                  <th className="p-4">Position Title</th>
                  <th className="p-4">Department</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Type</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {list.map((job) => (
                  <tr key={job.slug} className="hover:bg-muted/20 transition-colors">
                    <td className="p-4">
                      <div className="font-semibold text-foreground">{job.title}</div>
                      <div className="text-xs text-muted-foreground">{job.experience}</div>
                    </td>
                    <td className="p-4">{job.department}</td>
                    <td className="p-4 text-muted-foreground">{job.location}</td>
                    <td className="p-4">
                      <Badge variant="secondary">{job.type}</Badge>
                    </td>
                    <td className="p-4 text-right space-x-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info("Editing item...")}>
                        <Edit2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10" onClick={() => handleDelete(job.slug)}>
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
