"use client";

import { useState } from "react";
import AdminLayout from "@/app/admin/layout";
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
    <AdminLayout>
      <div className="space-y-8">
        <ScrollReveal>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold font-heading">Manage Careers</h1>
              <p className="text-sm text-muted-foreground">Configure job openings and review candidates applications.</p>
            </div>
            <Button variant="gradient" size="sm" onClick={() => toast.info("Create position functionality is currently in development.")}>
              <Plus className="h-4 w-4 mr-1" /> Open Position
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border rounded-2xl bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/40 border-b text-sm font-semibold text-muted-foreground">
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
                      <td className="p-4 text-right space-x-2">
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
    </AdminLayout>
  );
}
