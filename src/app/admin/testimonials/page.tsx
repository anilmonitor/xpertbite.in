"use client";

import { useState } from "react";
import { testimonials } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Plus, Edit2, Trash2, Star } from "lucide-react";
import { toast } from "sonner";

export default function AdminTestimonialsPage() {
  const [list, setList] = useState(testimonials);

  const handleDelete = (index: number) => {
    setList(list.filter((_, idx) => idx !== index));
    toast.success("Testimonial removed successfully.");
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card/60 p-5 sm:p-6 rounded-2xl border">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading">Manage Testimonials</h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Approve and display client reviews.</p>
          </div>
          <Button variant="gradient" size="sm" onClick={() => toast.info("Add testimonial functionality is currently in development.")} className="w-full sm:w-auto text-xs">
            <Plus className="h-4 w-4 mr-1" /> Add Feedback
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="border rounded-2xl bg-card overflow-hidden shadow-sm">
          {/* Mobile View */}
          <div className="block md:hidden divide-y">
            {list.map((item, idx) => (
              <div key={idx} className="p-4 space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-semibold text-sm block">{item.name}</span>
                    <span className="text-xs text-muted-foreground">{item.role}, {item.company}</span>
                  </div>
                  <div className="flex text-amber-500 gap-0.5 shrink-0">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground bg-muted/30 p-2.5 rounded-lg italic">
                  "{item.content}"
                </p>
                <div className="flex justify-end gap-1 pt-1 border-t">
                  <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => toast.info("Editing item...")}>
                    <Edit2 className="h-3 w-3 mr-1" /> Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 text-xs text-destructive hover:text-destructive" onClick={() => handleDelete(idx)}>
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
                  <th className="p-4">Author</th>
                  <th className="p-4">Feedback</th>
                  <th className="p-4">Rating</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {list.map((item, idx) => (
                  <tr key={idx} className="hover:bg-muted/20 transition-colors">
                    <td className="p-4">
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.role}, {item.company}</div>
                    </td>
                    <td className="p-4 max-w-sm truncate text-muted-foreground text-xs">{item.content}</td>
                    <td className="p-4">
                      <div className="flex text-amber-500 gap-0.5">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-right space-x-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info("Editing item...")}>
                        <Edit2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10" onClick={() => handleDelete(idx)}>
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
