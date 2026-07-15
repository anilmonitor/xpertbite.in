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
    <div className="space-y-8">
      <ScrollReveal>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-heading">Manage Testimonials</h1>
            <p className="text-sm text-muted-foreground">Approve and display feedback from clients.</p>
          </div>
          <Button variant="gradient" size="sm" onClick={() => toast.info("Add testimonial functionality is currently in development.")}>
            <Plus className="h-4 w-4 mr-1" /> Add Feedback
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="border rounded-2xl bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/40 border-b text-sm font-semibold text-muted-foreground">
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
                    <td className="p-4 max-w-sm truncate text-muted-foreground">{item.content}</td>
                    <td className="p-4">
                      <div className="flex text-amber-500 gap-0.5">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-right space-x-2">
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

