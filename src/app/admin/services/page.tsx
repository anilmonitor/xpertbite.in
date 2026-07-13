"use client";

import { useState } from "react";
import AdminLayout from "@/app/admin/layout";
import { services } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit2, Trash2, Globe } from "lucide-react";
import { toast } from "sonner";

export default function AdminServicesPage() {
  const [list, setList] = useState(services);

  const handleDelete = (slug: string) => {
    setList(list.filter((item) => item.slug !== slug));
    toast.success("Service catalog item removed successfully.");
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <ScrollReveal>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold font-heading">Manage Services</h1>
              <p className="text-sm text-muted-foreground">Add, edit, or remove XpertBite capability listings.</p>
            </div>
            <Button variant="gradient" size="sm" onClick={() => toast.info("Add new service functionality is currently in development.")}>
              <Plus className="h-4 w-4 mr-1" /> Add Service
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border rounded-2xl bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/40 border-b text-sm font-semibold text-muted-foreground">
                    <th className="p-4">Icon & Service</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Technologies</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  {list.map((service) => {
                    const Icon = service.icon || Globe;
                    return (
                      <tr key={service.slug} className="hover:bg-muted/20 transition-colors">
                        <td className="p-4 font-medium flex items-center gap-3">
                          <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                            <Icon className="h-4.5 w-4.5" />
                          </div>
                          {service.title}
                        </td>
                        <td className="p-4">
                          <Badge variant="secondary">{service.category}</Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex flex-wrap gap-1">
                            {service.technologies.slice(0, 3).map((t) => (
                              <span key={t} className="text-xs px-2 py-0.5 rounded bg-muted font-medium text-muted-foreground">
                                {t}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info("Editing item...")}>
                            <Edit2 className="h-4 w-4 text-muted-foreground" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10" onClick={() => handleDelete(service.slug)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </AdminLayout>
  );
}
