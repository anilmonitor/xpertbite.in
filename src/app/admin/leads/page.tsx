"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Mail, Phone, CheckCircle, ExternalLink, RefreshCw, Eye } from "lucide-react";
import { toast } from "sonner";
import { getLeads, resolveLead } from "@/actions/contacts";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  date: string;
  rawDate: any;
  type: "Contact" | "Booking" | "Quote";
  status: string;
  bookingDetails?: {
    callType: string;
    date: string;
    time: string;
  };
  quoteDetails?: {
    company: string;
    category: string;
    budget: string;
  };
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [filterType, setFilterType] = useState<string>("all");

  const fetchAllLeads = async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const res = await getLeads();
      if (res.success && res.leads) {
        setLeads(res.leads as Lead[]);
      } else {
        toast.error(res.error || "Failed to load leads");
      }
    } catch (error) {
      toast.error("Internal error occurred while loading leads");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllLeads();
  }, []);

  const handleResolve = async (id: string, type: "Contact" | "Booking" | "Quote", e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    try {
      const res = await resolveLead(id, type);
      if (res.success) {
        toast.success("Lead marked as resolved");
        
        setLeads((prev) =>
          prev.map((lead) => {
            if (lead.id === id) {
              const newStatus = type === "Contact" ? "Read" : type === "Booking" ? "Confirmed" : "Reviewed";
              return { ...lead, status: newStatus };
            }
            return lead;
          })
        );

        if (selectedLead && selectedLead.id === id) {
          const newStatus = type === "Contact" ? "Read" : type === "Booking" ? "Confirmed" : "Reviewed";
          setSelectedLead({ ...selectedLead, status: newStatus });
        }
      } else {
        toast.error(res.error || "Failed to update lead status");
      }
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const getStatusBadge = (status: string) => {
    const isUnresolved = ["Unread", "New", "Pending"].includes(status);
    if (isUnresolved) {
      return (
        <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20 font-medium text-xs">
          {status}
        </Badge>
      );
    }
    return (
      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 font-medium text-xs">
        {status}
      </Badge>
    );
  };

  const getTypeBadge = (type: "Contact" | "Booking" | "Quote") => {
    switch (type) {
      case "Quote":
        return <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/10 border-emerald-500/20 text-xs">Estimate</Badge>;
      case "Booking":
        return <Badge className="bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/10 border-indigo-500/20 text-xs">Booking</Badge>;
      case "Contact":
      default:
        return <Badge className="bg-sky-500/10 text-sky-500 hover:bg-sky-500/10 border-sky-500/20 text-xs">Contact</Badge>;
    }
  };

  const isLeadUnresolved = (lead: Lead) => {
    return ["Unread", "New", "Pending"].includes(lead.status);
  };

  const filteredLeads = filterType === "all" ? leads : leads.filter(l => l.type.toLowerCase() === filterType.toLowerCase());

  return (
    <div className="space-y-4 max-w-7xl mx-auto pb-10">
      {/* Clean Compact Header */}
      <div className="flex justify-between items-center bg-card/60 p-4 sm:p-5 rounded-xl border">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold font-heading">Inquiries & Leads</h1>
          <p className="text-xs text-muted-foreground">
            Contact forms, quotes, and booking submissions.
          </p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => fetchAllLeads()} 
          className="h-8 gap-1.5 text-xs bg-background shrink-0"
        >
          <RefreshCw className={`h-3 w-3 ${loading ? "animate-spin" : ""}`} /> Refresh
        </Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {[
          { key: "all", label: `All (${leads.length})` },
          { key: "contact", label: `Contacts (${leads.filter(l => l.type === "Contact").length})` },
          { key: "quote", label: `Quotes (${leads.filter(l => l.type === "Quote").length})` },
          { key: "booking", label: `Bookings (${leads.filter(l => l.type === "Booking").length})` },
        ].map((tab) => (
          <Button
            key={tab.key}
            variant={filterType === tab.key ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterType(tab.key)}
            className="text-xs rounded-lg h-7 px-2.5 whitespace-nowrap"
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Content Container */}
      <div className="border rounded-xl bg-card overflow-hidden shadow-sm">
        {loading ? (
          <div className="p-10 text-center text-muted-foreground text-xs">
            <RefreshCw className="h-6 w-6 animate-spin mx-auto mb-2 text-primary" />
            Loading leads...
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="p-10 text-center text-muted-foreground">
            <Mail className="h-10 w-10 mx-auto mb-2 text-muted-foreground/30" />
            <h3 className="font-semibold text-foreground text-sm">No leads found</h3>
            <p className="text-xs mt-0.5">Submissions will appear here in real-time.</p>
          </div>
        ) : (
          <>
            {/* CLEAN MOBILE CARDS VIEW (md:hidden) */}
            <div className="block md:hidden divide-y">
              {filteredLeads.map((lead) => (
                <div 
                  key={lead.id} 
                  onClick={() => setSelectedLead(lead)}
                  className="p-3.5 space-y-2 hover:bg-muted/30 active:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-bold text-sm text-foreground">{lead.name}</div>
                      <div className="text-xs text-muted-foreground">{lead.email}</div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {getStatusBadge(lead.status)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-0.5">
                    <div className="flex items-center gap-2">
                      {getTypeBadge(lead.type)}
                      <span className="text-[11px] text-muted-foreground font-mono">
                        {lead.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs h-7 px-2 gap-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedLead(lead);
                        }}
                      >
                        <Eye className="h-3 w-3" /> View
                      </Button>

                      {isLeadUnresolved(lead) && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs h-7 px-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10"
                          onClick={(e) => handleResolve(lead.id, lead.type, e)}
                        >
                          <CheckCircle className="h-3.5 w-3.5" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP TABLE VIEW (hidden md:block) */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/40 border-b text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    <th className="p-3.5">Sender</th>
                    <th className="p-3.5">Type</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5">Date</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  {filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className="hover:bg-muted/20 cursor-pointer transition-colors"
                    >
                      <td className="p-3.5">
                        <div className="font-semibold text-foreground">{lead.name}</div>
                        <div className="text-xs text-muted-foreground">{lead.email}</div>
                      </td>
                      <td className="p-3.5">{getTypeBadge(lead.type)}</td>
                      <td className="p-3.5">{getStatusBadge(lead.status)}</td>
                      <td className="p-3.5 font-mono text-xs text-muted-foreground">{lead.date}</td>
                      <td className="p-3.5 text-right space-x-1" onClick={(e) => e.stopPropagation()}>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-primary/10 hover:text-primary"
                          onClick={() => setSelectedLead(lead)}
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        {isLeadUnresolved(lead) && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-600"
                            onClick={(e) => handleResolve(lead.id, lead.type, e)}
                            title="Mark as Resolved"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* Lead Details Popup Modal */}
      <Dialog open={selectedLead !== null} onOpenChange={(open) => !open && setSelectedLead(null)}>
        {selectedLead && (
          <DialogContent className="max-w-lg w-[95vw] p-5 sm:p-6 rounded-2xl">
            {/* Header with Badges & Name */}
            <div className="space-y-3 pb-3 border-b text-left">
              <div className="flex items-center justify-between gap-2 pr-6">
                <div className="flex items-center gap-1.5">
                  {getTypeBadge(selectedLead.type)}
                  {getStatusBadge(selectedLead.status)}
                </div>
                <span className="text-[11px] text-muted-foreground font-mono">
                  {selectedLead.date}
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground font-heading leading-tight">
                  {selectedLead.name}
                </h2>
                <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                  <a
                    href={`mailto:${selectedLead.email}`}
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>{selectedLead.email}</span>
                  </a>

                  {selectedLead.phone && (
                    <a
                      href={`tel:${selectedLead.phone}`}
                      className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-mono"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>{selectedLead.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-3.5 py-1 text-left">
              {/* Quote specific info */}
              {selectedLead.type === "Quote" && selectedLead.quoteDetails && (
                <div className="grid grid-cols-3 gap-2 bg-muted/40 p-3 rounded-xl border text-xs">
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase font-semibold">Company</span>
                    <span className="font-semibold text-foreground truncate block mt-0.5">
                      {selectedLead.quoteDetails.company || "Individual"}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase font-semibold">Category</span>
                    <span className="font-semibold text-foreground truncate block mt-0.5">
                      {selectedLead.quoteDetails.category}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase font-semibold">Budget</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 block mt-0.5">
                      {selectedLead.quoteDetails.budget}
                    </span>
                  </div>
                </div>
              )}

              {/* Booking specific info */}
              {selectedLead.type === "Booking" && selectedLead.bookingDetails && (
                <div className="grid grid-cols-3 gap-2 bg-muted/40 p-3 rounded-xl border text-xs">
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase font-semibold">Mode</span>
                    <span className="font-semibold text-foreground block mt-0.5">
                      {selectedLead.bookingDetails.callType}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase font-semibold">Date</span>
                    <span className="font-semibold text-foreground block mt-0.5">
                      {selectedLead.bookingDetails.date}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase font-semibold">Time</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 block mt-0.5">
                      {selectedLead.bookingDetails.time}
                    </span>
                  </div>
                </div>
              )}

              {/* Full Message content */}
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                  Requirement / Message
                </span>
                <div className="p-3.5 rounded-xl bg-muted/40 border text-xs sm:text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                  {selectedLead.message}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-end gap-2 pt-3 border-t mt-1">
              <Button 
                variant="outline" 
                onClick={() => setSelectedLead(null)}
                className="text-xs h-9 px-4 flex-1 sm:flex-none"
              >
                Close
              </Button>

              {isLeadUnresolved(selectedLead) && (
                <Button
                  onClick={(e) => handleResolve(selectedLead.id, selectedLead.type, e)}
                  variant="default"
                  className="text-xs h-9 px-4 gap-1.5 flex-1 sm:flex-none"
                >
                  <CheckCircle className="h-4 w-4" /> Mark as Resolved
                </Button>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
