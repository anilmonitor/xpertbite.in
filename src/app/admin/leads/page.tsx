"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Mail, Phone, Calendar, Clock, Building2, Wallet, CheckCircle, ExternalLink, RefreshCw, Eye } from "lucide-react";
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
        toast.success("Lead marked as resolved.");
        
        // Update status locally in state
        setLeads((prev) =>
          prev.map((lead) => {
            if (lead.id === id) {
              const newStatus = type === "Contact" ? "Read" : type === "Booking" ? "Confirmed" : "Reviewed";
              return { ...lead, status: newStatus };
            }
            return lead;
          })
        );

        // Update selected lead state if it's currently open
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
        <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20 font-medium">
          {status}
        </Badge>
      );
    }
    return (
      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 font-medium">
        {status}
      </Badge>
    );
  };

  const getTypeBadge = (type: "Contact" | "Booking" | "Quote") => {
    switch (type) {
      case "Quote":
        return <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/10 border-emerald-500/20">Estimate Request</Badge>;
      case "Booking":
        return <Badge className="bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/10 border-indigo-500/20">Consultation</Badge>;
      case "Contact":
      default:
        return <Badge className="bg-sky-500/10 text-sky-500 hover:bg-sky-500/10 border-sky-500/20">Contact Message</Badge>;
    }
  };

  const isLeadUnresolved = (lead: Lead) => {
    return ["Unread", "New", "Pending"].includes(lead.status);
  };

  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-heading">Manage Leads</h1>
            <p className="text-sm text-muted-foreground">Monitor and respond to customer consultations, quotes, and support inquiries.</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => fetchAllLeads()} className="h-9">
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} /> Refresh Leads
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="border rounded-2xl bg-card overflow-hidden shadow-sm">
          {loading ? (
            <div className="p-12 text-center text-muted-foreground">
              <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
              Loading leads from database...
            </div>
          ) : leads.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              <Mail className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
              No website leads found in the database.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/40 border-b text-sm font-semibold text-muted-foreground">
                    <th className="p-4">Sender & Contact</th>
                    <th className="p-4">Type</th>
                    <th className="p-4">Subject / Context</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Date</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  {leads.map((lead) => (
                    <tr
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className="hover:bg-muted/20 cursor-pointer transition-colors"
                    >
                      <td className="p-4">
                        <div className="font-semibold text-foreground">{lead.name}</div>
                        <div className="text-xs text-muted-foreground">{lead.email}</div>
                      </td>
                      <td className="p-4">{getTypeBadge(lead.type)}</td>
                      <td className="p-4 max-w-xs truncate text-muted-foreground">
                        {lead.type === "Quote"
                          ? `Budget: ${lead.quoteDetails?.budget} · ${lead.quoteDetails?.category}`
                          : lead.type === "Booking"
                          ? `${lead.bookingDetails?.callType} · ${lead.bookingDetails?.date} @ ${lead.bookingDetails?.time}`
                          : lead.subject}
                      </td>
                      <td className="p-4">{getStatusBadge(lead.status)}</td>
                      <td className="p-4 font-mono text-xs text-muted-foreground">{lead.date}</td>
                      <td className="p-4 text-right space-x-2" onClick={(e) => e.stopPropagation()}>
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
                            <CheckCircle className="h-4.5 w-4.5" />
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* Lead Details Popup Modal */}
      <Dialog open={selectedLead !== null} onOpenChange={(open) => !open && setSelectedLead(null)}>
        {selectedLead && (
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                {getTypeBadge(selectedLead.type)}
                {getStatusBadge(selectedLead.status)}
              </div>
              <DialogTitle className="text-2xl font-bold font-heading">{selectedLead.name}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Submitted on {selectedLead.date}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              {/* Contact Info Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <a
                    href={`mailto:${selectedLead.email}`}
                    className="text-foreground hover:text-primary hover:underline flex items-center gap-1"
                  >
                    {selectedLead.email}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                {selectedLead.phone && (
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    <a
                      href={`tel:${selectedLead.phone}`}
                      className="text-foreground hover:text-primary hover:underline flex items-center gap-1"
                    >
                      {selectedLead.phone}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </div>

              {/* Dynamic Metadata based on type */}
              {selectedLead.type === "Quote" && selectedLead.quoteDetails && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-xl bg-muted/50 border text-sm">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span>
                      <strong className="text-muted-foreground">Company:</strong> {selectedLead.quoteDetails.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wallet className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span>
                      <strong className="text-muted-foreground">Budget:</strong> {selectedLead.quoteDetails.budget}
                    </span>
                  </div>
                  <div className="col-span-1 sm:col-span-2 flex items-center gap-2 border-t pt-2 mt-1">
                    <span className="font-semibold text-muted-foreground">Category:</span>
                    <Badge variant="secondary">{selectedLead.quoteDetails.category}</Badge>
                  </div>
                </div>
              )}

              {selectedLead.type === "Booking" && selectedLead.bookingDetails && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-xl bg-muted/50 border text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span>
                      <strong className="text-muted-foreground">Date:</strong> {selectedLead.bookingDetails.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span>
                      <strong className="text-muted-foreground">Time:</strong> {selectedLead.bookingDetails.time}
                    </span>
                  </div>
                  <div className="col-span-1 sm:col-span-2 flex items-center gap-2 border-t pt-2 mt-1">
                    <span className="font-semibold text-muted-foreground">Call Type:</span>
                    <Badge variant="secondary">{selectedLead.bookingDetails.callType}</Badge>
                  </div>
                </div>
              )}

              {selectedLead.type === "Contact" && (
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject</span>
                  <div className="p-2.5 rounded-lg bg-muted/40 font-medium">{selectedLead.subject}</div>
                </div>
              )}

              {/* Message Well */}
              <div className="space-y-1">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {selectedLead.type === "Contact" ? "Message" : "Requirements / Description"}
                </span>
                <div className="p-4 rounded-xl border bg-muted/30 whitespace-pre-wrap max-h-[180px] overflow-y-auto leading-relaxed text-foreground/90">
                  {selectedLead.message}
                </div>
              </div>
            </div>

            <DialogFooter className="gap-2 sm:gap-0">
              <Button variant="outline" onClick={() => setSelectedLead(null)}>
                Close Window
              </Button>
              {isLeadUnresolved(selectedLead) && (
                <Button
                  variant="gradient"
                  onClick={() => handleResolve(selectedLead.id, selectedLead.type)}
                >
                  <CheckCircle className="h-4 w-4 mr-2" /> Mark Resolved
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
