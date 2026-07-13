"use client";

import { useState } from "react";
import AdminLayout from "@/app/admin/layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Save, Shield, Settings, Info } from "lucide-react";

export default function AdminSettingsPage() {
  const [siteName, setSiteName] = useState("XpertBite Technologies");
  const [supportEmail, setSupportEmail] = useState("support@xpertbite.in");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Site configuration settings saved successfully.");
  };

  return (
    <AdminLayout>
      <div className="space-y-8 max-w-2xl">
        <ScrollReveal>
          <div>
            <h1 className="text-3xl font-bold font-heading">Global Settings</h1>
            <p className="text-sm text-muted-foreground">Configure metadata titles, corporate channels, and default mailboxes.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <form onSubmit={handleSave} className="p-6 rounded-2xl border bg-card space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b text-primary">
              <Settings className="h-5 w-5" />
              <h2 className="font-heading font-semibold text-lg">General Configurations</h2>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Company Site Name</label>
                <Input value={siteName} onChange={(e) => setSiteName(e.target.value)} required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Support Mailbox</label>
                <Input type="email" value={supportEmail} onChange={(e) => setSupportEmail(e.target.value)} required />
              </div>
            </div>

            <Button type="submit" variant="gradient" className="w-full">
              <Save className="h-4 w-4 mr-2" /> Save Global Configuration
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </AdminLayout>
  );
}
