"use client";

import { useState } from "react";
import AdminLayout from "@/app/admin/layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { MailOpen, Mail, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function AdminLeadsPage() {
  const [list, setList] = useState([
    { id: "1", name: "David Miller", email: "david@innovatelabs.co", subject: "SaaS Platform estimate", date: "July 12", type: "Quote" },
    { id: "2", name: "Elena Rostova", email: "elena@meditech.org", subject: "Telemedicine application", date: "July 11", type: "Contact" },
    { id: "3", name: "Marcus Thompson", email: "marcus@logix.com", subject: "Custom warehouse CRM", date: "July 10", type: "Booking" },
  ]);

  const handleResolve = (id: string) => {
    toast.success("Lead query marked as resolved.");
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <ScrollReveal>
          <div>
            <h1 className="text-3xl font-bold font-heading">Manage Leads</h1>
            <p className="text-sm text-muted-foreground">Monitor and respond to customer consultations, quotes, and support inquiries.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border rounded-2xl bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/40 border-b text-sm font-semibold text-muted-foreground">
                    <th className="p-4">Sender</th>
                    <th className="p-4">Query Details</th>
                    <th className="p-4">Channel / Type</th>
                    <th className="p-4">Date</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  {list.map((lead) => (
                    <tr key={lead.id} className="hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-medium">
                        {lead.name}
                        <div className="text-xs text-muted-foreground">{lead.email}</div>
                      </td>
                      <td className="p-4 text-muted-foreground">{lead.subject}</td>
                      <td className="p-4">
                        <Badge variant={lead.type === "Quote" ? "default" : "secondary"}>
                          {lead.type}
                        </Badge>
                      </td>
                      <td className="p-4 font-mono">{lead.date}</td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-primary" onClick={() => handleResolve(lead.id)}>
                          <CheckCircle className="h-4.5 w-4.5" />
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
