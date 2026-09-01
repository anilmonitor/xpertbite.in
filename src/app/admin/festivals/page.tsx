"use client";

import { useState, useEffect } from "react";
import { 
  Search, 
  Trash2, 
  ExternalLink, 
  Eye, 
  Heart, 
  Calendar, 
  Image as ImageIcon,
  RefreshCw,
  ArrowUpDown,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface GreetingItem {
  id: string;
  slug: string;
  name: string;
  message?: string | null;
  imageUrl?: string | null;
  cloudinaryPublicId?: string | null;
  views: number;
  blessings: number;
  createdAt: string;
}

export default function AdminFestivalsPage() {
  const [activeTab, setActiveTab] = useState("durga");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [photoFilter, setPhotoFilter] = useState<"all" | "with_photo" | "without_photo">("all");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{
    durga: GreetingItem[];
    diwali: GreetingItem[];
    chhath: GreetingItem[];
    counts: { durga: number; diwali: number; chhath: number; total: number };
  }>({
    durga: [],
    diwali: [],
    chhath: [],
    counts: { durga: 0, diwali: 0, chhath: 0, total: 0 },
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const fetchGreetings = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/admin/festivals?q=${encodeURIComponent(searchQuery)}&sort=${sortOrder}`
      );
      const json = await res.json();
      if (json.success) {
        setData(json.data);
      } else {
        toast.error("Failed to load greetings: " + json.error);
      }
    } catch (err: any) {
      toast.error("Network error while loading greetings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGreetings();
  }, [searchQuery, sortOrder]);

  const handleDelete = async (id: string, type: "durga" | "diwali" | "chhath", name: string) => {
    if (!confirm(`Are you sure you want to delete greeting for "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/festivals?id=${id}&type=${type}`, {
        method: "DELETE",
      });
      const json = await res.json();
      if (json.success) {
        toast.success(`Greeting for "${name}" deleted`);
        fetchGreetings();
      } else {
        toast.error(json.error || "Failed to delete");
      }
    } catch (err) {
      toast.error("Error deleting greeting");
    }
  };

  const rawList = activeTab === "durga" 
    ? data.durga 
    : activeTab === "diwali" 
    ? data.diwali 
    : data.chhath;

  const currentList = rawList.filter((item) => {
    if (photoFilter === "with_photo") return !!item.imageUrl;
    if (photoFilter === "without_photo") return !item.imageUrl;
    return true;
  });

  const getShareUrl = (slug: string, tab: string) => {
    if (tab === "durga") return `/durgapuja2026?u=${slug}`;
    if (tab === "diwali") return `/diwaliPuja2026?u=${slug}`;
    return `/chhathPuja2026?u=${slug}`;
  };

  const getCardNumber = (slug: string) => {
    const parts = slug.split("-");
    const lastPart = parts[parts.length - 1];
    if (/^\d+$/.test(lastPart)) {
      return `#${lastPart}`;
    }
    return `#${slug}`;
  };

  return (
    <div className="space-y-4 max-w-7xl mx-auto pb-10">
      {/* Clean Compact Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-card/60 p-4 sm:p-5 rounded-xl border">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold font-heading">Festivals & Cards List</h1>
          <p className="text-xs text-muted-foreground">
            Complete list of all cards created by users across Durga Puja, Diwali, and Chhath Puja.
          </p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={fetchGreetings} 
          disabled={loading}
          className="gap-1.5 text-xs bg-background h-8"
        >
          <RefreshCw className={`h-3 w-3 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {/* Metrics Row - Total Cards Created */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
        <Card className="shadow-sm">
          <CardContent className="p-3 sm:p-4">
            <p className="text-[11px] font-medium text-muted-foreground">Durga Puja Cards</p>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-0.5">{data.counts.durga}</h3>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-3 sm:p-4">
            <p className="text-[11px] font-medium text-muted-foreground">Diwali Cards</p>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-0.5">{data.counts.diwali}</h3>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-3 sm:p-4">
            <p className="text-[11px] font-medium text-muted-foreground">Chhath Puja Cards</p>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-0.5">{data.counts.chhath}</h3>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-3 sm:p-4">
            <p className="text-[11px] font-medium text-muted-foreground">Total Created</p>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mt-0.5">{data.counts.total}</h3>
          </CardContent>
        </Card>
      </div>

      {/* Tabs, Search & Filters */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-3">
        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-2.5">
          <TabsList className="grid grid-cols-3 w-full lg:w-[380px] p-1 bg-muted/60 h-9">
            <TabsTrigger value="durga" className="text-xs">
              Durga ({data.counts.durga})
            </TabsTrigger>
            <TabsTrigger value="diwali" className="text-xs">
              Diwali ({data.counts.diwali})
            </TabsTrigger>
            <TabsTrigger value="chhath" className="text-xs">
              Chhath ({data.counts.chhath})
            </TabsTrigger>
          </TabsList>

          <div className="flex flex-wrap items-center gap-2">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[180px]">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                placeholder="Search name or slug..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 h-8 text-xs bg-background"
              />
            </div>

            {/* Photo Filter */}
            <div className="flex items-center gap-0.5 bg-muted/40 p-0.5 rounded-lg border">
              <Button
                variant={photoFilter === "all" ? "default" : "ghost"}
                size="sm"
                className="h-7 text-xs px-2 rounded"
                onClick={() => setPhotoFilter("all")}
              >
                All
              </Button>
              <Button
                variant={photoFilter === "with_photo" ? "default" : "ghost"}
                size="sm"
                className="h-7 text-xs px-2 rounded"
                onClick={() => setPhotoFilter("with_photo")}
              >
                With Photo
              </Button>
              <Button
                variant={photoFilter === "without_photo" ? "default" : "ghost"}
                size="sm"
                className="h-7 text-xs px-2 rounded"
                onClick={() => setPhotoFilter("without_photo")}
              >
                No Photo
              </Button>
            </div>

            {/* Sort Order Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
              className="h-8 text-xs gap-1.5 bg-background shrink-0"
              title="Toggle Sort Order"
            >
              <ArrowUpDown className="h-3 w-3" />
              <span>{sortOrder === "newest" ? "Newest First" : "Oldest First"}</span>
            </Button>
          </div>
        </div>

        {/* Content list in CLEAN TABLE / LIST FORM */}
        {["durga", "diwali", "chhath"].map((tabKey) => (
          <TabsContent key={tabKey} value={tabKey} className="mt-1">
            <div className="border rounded-xl bg-card overflow-hidden shadow-sm">
              {loading ? (
                <div className="text-center py-12 text-muted-foreground text-xs">
                  <RefreshCw className="h-5 w-5 animate-spin mx-auto mb-2 text-primary" />
                  Loading greetings...
                </div>
              ) : currentList.length === 0 ? (
                <div className="p-10 text-center text-muted-foreground">
                  <ImageIcon className="h-8 w-8 mx-auto mb-1 text-muted-foreground/30" />
                  <h3 className="font-semibold text-foreground text-sm">No Greetings Found</h3>
                  <p className="text-xs mt-0.5">
                    {searchQuery 
                      ? "No greetings match your search or filter." 
                      : `When users create ${tabKey} cards, they will appear in this list.`}
                  </p>
                </div>
              ) : (
                <>
                  {/* MOBILE COMPACT LIST (md:hidden) */}
                  <div className="block md:hidden divide-y">
                    {currentList.map((item) => (
                      <div 
                        key={item.id}
                        className="p-3 flex items-center justify-between gap-3 hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          {/* Thumbnail */}
                          <div 
                            className="relative h-11 w-11 rounded-lg bg-muted/60 border overflow-hidden shrink-0 flex items-center justify-center cursor-pointer"
                            onClick={() => item.imageUrl && setPreviewImage(item.imageUrl)}
                          >
                            {item.imageUrl ? (
                              <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover" />
                            ) : (
                              <span className="text-[10px] font-bold text-muted-foreground">No pic</span>
                            )}
                          </div>

                          {/* Info */}
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-sm text-foreground truncate max-w-[130px]">
                                {item.name}
                              </span>
                              <Badge variant="outline" className="text-[10px] h-4 px-1 font-mono font-bold bg-primary/10 text-primary border-primary/20">
                                {getCardNumber(item.slug)}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-[11px] text-muted-foreground mt-0.5">
                              <span className="font-mono">/{item.slug}</span>
                              <span>•</span>
                              <span className="text-blue-500 font-medium flex items-center gap-0.5">
                                <Eye className="h-2.5 w-2.5" /> {item.views}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-1 shrink-0">
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="h-7 px-2 text-xs gap-1"
                          >
                            <a href={getShareUrl(item.slug, tabKey)} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3" /> View
                            </a>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(item.id, tabKey as any, item.name)}
                            className="h-7 px-1.5 text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* DESKTOP STREAMLINED TABLE (hidden md:block) */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-muted/40 border-b text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          <th className="p-3 w-14 text-center">#</th>
                          <th className="p-3 w-16">Photo</th>
                          <th className="p-3">User & URL</th>
                          <th className="p-3">Message</th>
                          <th className="p-3 text-center">Stats</th>
                          <th className="p-3">Date</th>
                          <th className="p-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y text-sm">
                        {currentList.map((item) => (
                          <tr key={item.id} className="hover:bg-muted/20 transition-colors">
                            {/* Sequence Number */}
                            <td className="p-3 text-center font-mono font-bold text-xs text-primary">
                              {getCardNumber(item.slug)}
                            </td>

                            {/* Photo Thumbnail */}
                            <td className="p-3">
                              <div 
                                className="relative h-10 w-10 rounded-lg bg-muted/60 border overflow-hidden flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-primary/40 transition-all"
                                onClick={() => item.imageUrl && setPreviewImage(item.imageUrl)}
                                title={item.imageUrl ? "Click to enlarge" : "No photo uploaded"}
                              >
                                {item.imageUrl ? (
                                  <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover" />
                                ) : (
                                  <ImageIcon className="h-4 w-4 text-muted-foreground/40" />
                                )}
                              </div>
                            </td>

                            {/* Name & Slug */}
                            <td className="p-3">
                              <div className="font-semibold text-foreground">{item.name}</div>
                              <div className="text-xs text-muted-foreground font-mono">/{item.slug}</div>
                            </td>

                            {/* Message Preview */}
                            <td className="p-3 max-w-[240px]">
                              <p className="text-xs text-muted-foreground truncate">
                                {item.message || "—"}
                              </p>
                            </td>

                            {/* Views / Blessings */}
                            <td className="p-3 text-center">
                              <div className="inline-flex items-center gap-2 text-xs font-medium">
                                <span className="text-blue-500 flex items-center gap-1" title="Views">
                                  <Eye className="h-3 w-3" /> {item.views}
                                </span>
                                <span className="text-pink-500 flex items-center gap-1" title="Blessings">
                                  <Heart className="h-3 w-3" /> {item.blessings}
                                </span>
                              </div>
                            </td>

                            {/* Date */}
                            <td className="p-3 text-xs text-muted-foreground font-mono">
                              {new Date(item.createdAt).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </td>

                            {/* Actions */}
                            <td className="p-3 text-right space-x-1">
                              <Button
                                variant="outline"
                                size="sm"
                                asChild
                                className="h-7 text-xs gap-1"
                              >
                                <a href={getShareUrl(item.slug, tabKey)} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-3 w-3" /> View
                                </a>
                              </Button>

                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDelete(item.id, tabKey as any, item.name)}
                                className="h-7 w-7 text-destructive hover:bg-destructive/10"
                                title="Delete"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Image Preview Modal */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-lg max-h-[85vh] bg-card rounded-2xl overflow-hidden shadow-2xl p-2 border">
            <img 
              src={previewImage} 
              alt="Uploaded Photo" 
              className="max-h-[75vh] w-auto object-contain rounded-xl mx-auto"
            />
            <Button
              variant="outline"
              size="sm"
              className="absolute top-4 right-4 bg-black/70 text-white hover:bg-black/90 text-xs"
              onClick={() => setPreviewImage(null)}
            >
              Close ✕
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
