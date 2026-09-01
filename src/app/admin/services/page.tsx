"use client";

import { useState } from "react";
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
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card/60 p-5 sm:p-6 rounded-2xl border">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading">Manage Services</h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Add, edit, or remove XpertBite capability listings.</p>
          </div>
          <Button variant="gradient" size="sm" onClick={() => toast.info("Add new service functionality is currently in development.")} className="w-full sm:w-auto text-xs">
            <Plus className="h-4 w-4 mr-1" /> Add Service
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="border rounded-2xl bg-card overflow-hidden shadow-sm">
          {/* Mobile View */}
          <div className="block md:hidden divide-y">
            {list.map((service) => {
              const Icon = service.icon || Globe;
              return (
                <div key={service.slug} className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-semibold text-sm">{service.title}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">{service.category}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] bg-muted/60 px-2 py-0.5 rounded text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end gap-1 pt-1 border-t">
                    <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => toast.info("Editing service...")}>
                      <Edit2 className="h-3 w-3 mr-1" /> Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 text-xs text-destructive hover:text-destructive" onClick={() => handleDelete(service.slug)}>
                      <Trash2 className="h-3 w-3 mr-1" /> Delete
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/40 border-b text-xs font-semibold text-muted-foreground uppercase tracking-wider">
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
                          {service.technologies.map((tech) => (
                            <span key={tech} className="text-[11px] bg-muted px-2 py-0.5 rounded text-muted-foreground">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 text-right space-x-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info("Editing service...")}>
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
  );
}
