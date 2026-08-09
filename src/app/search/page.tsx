"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEARCH_ITEMS, SearchItem } from "@/lib/search-data";
import {
  Search,
  X,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Code2,
  Boxes,
  BookOpen,
  Cpu,
  FileText,
  HelpCircle,
  Flag,
  Layers,
  ArrowUpRight,
  Clock,
  Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All",
  "Tools & Guides",
  "Services",
  "Products",
  "Blog",
  "Technologies",
  "Pages",
  "FAQs",
] as const;

const categoryIcons: Record<string, any> = {
  "Tools & Guides": Flag,
  Services: Code2,
  Products: Boxes,
  Blog: BookOpen,
  Technologies: Cpu,
  Pages: FileText,
  FAQs: HelpCircle,
};

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = React.useState(initialQuery);
  const [activeCategory, setActiveCategory] = React.useState<string>("All");

  React.useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleQueryChange = (val: string) => {
    setQuery(val);
    const params = new URLSearchParams();
    if (val.trim()) {
      params.set("q", val.trim());
    }
    const newUrl = params.toString() ? `/search?${params.toString()}` : "/search";
    window.history.replaceState(null, "", newUrl);
  };

  const filteredResults = React.useMemo(() => {
    const q = query.toLowerCase().trim();
    return SEARCH_ITEMS.filter((item) => {
      if (activeCategory !== "All" && item.category !== activeCategory) {
        return false;
      }
      if (!q) return true;

      const inTitle = item.title.toLowerCase().includes(q);
      const inDesc = item.description.toLowerCase().includes(q);
      const inKeywords = item.keywords.some((k) => k.toLowerCase().includes(q));
      const inCategory = item.category.toLowerCase().includes(q);

      return inTitle || inDesc || inKeywords || inCategory;
    });
  }, [query, activeCategory]);

  return (
    <PublicLayout>
      <section className="py-20 lg:py-24 relative overflow-hidden min-h-[85vh]">
        <div className="absolute inset-0 gradient-mesh opacity-80" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge variant="outline" className="mb-3 px-3 py-1 text-xs border-primary/40 bg-primary/5 text-primary">
              <Search className="h-3 w-3 mr-1.5 inline" />
              Global Search Engine
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
              Explore Everything on <span className="gradient-text">XpertBite</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Search services, products, tech stack, tutorials, tools, Tiranga ID Card generator, and company resources.
            </p>
          </div>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative flex items-center bg-card border border-border/80 shadow-xl rounded-2xl p-1.5 sm:p-2 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-300">
              <Search className="h-5 w-5 text-muted-foreground ml-3 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                placeholder="Search anything (e.g. Tiranga ID Card, Next.js 15, Web Development, Quote)..."
                className="w-full px-3 py-3 text-sm sm:text-base bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-foreground placeholder:text-muted-foreground/60"
              />
              {query && (
                <button
                  onClick={() => handleQueryChange("")}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors mr-1"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Quick suggested searches */}
            <div className="flex items-center gap-2 mt-3 overflow-x-auto no-scrollbar py-1 text-xs text-muted-foreground">
              <span className="shrink-0 font-medium text-foreground flex items-center gap-1">
                <Flame className="h-3 w-3 text-amber-500" />
                Suggested:
              </span>
              {[
                { label: "Tiranga ID Card 🇮🇳", query: "tiranga" },
                { label: "Web Development", query: "web development" },
                { label: "Next.js 15", query: "next.js" },
                { label: "Mobile Apps", query: "mobile" },
                { label: "Quote & Estimate", query: "quote" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleQueryChange(item.query)}
                  className="px-2.5 py-1 rounded-full border bg-card/60 hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all shrink-0"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-10 overflow-x-auto no-scrollbar py-2">
            {CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? SEARCH_ITEMS.length
                  : SEARCH_ITEMS.filter((i) => i.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl shrink-0 transition-all duration-200 flex items-center gap-1.5",
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 font-semibold scale-105"
                      : "bg-card/70 border border-border/80 text-muted-foreground hover:text-foreground hover:bg-muted/70"
                  )}
                >
                  <span>{cat}</span>
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.2 rounded-full",
                      activeCategory === cat
                        ? "bg-white/20 text-white"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results Summary */}
          <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between text-xs sm:text-sm text-muted-foreground px-1">
            <span>
              Showing <strong className="text-foreground font-semibold">{filteredResults.length}</strong> result{filteredResults.length !== 1 ? "s" : ""}
              {query && (
                <> for &ldquo;<span className="text-primary font-medium">{query}</span>&rdquo;</>
              )}
            </span>
            {activeCategory !== "All" && (
              <button
                onClick={() => setActiveCategory("All")}
                className="text-xs text-primary hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>

          {/* Results Grid */}
          <div className="max-w-4xl mx-auto">
            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredResults.map((item) => {
                  const Icon = categoryIcons[item.category] || Layers;
                  const isTiranga = item.id.includes("tiranga");

                  return item.isExternal ? (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "group block rounded-2xl border p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden",
                        isTiranga
                          ? "bg-gradient-to-br from-orange-500/10 via-card to-emerald-500/10 border-orange-500/30 hover:border-orange-500/60"
                          : "bg-card border-border hover:border-primary/50"
                      )}
                    >
                      {isTiranga && (
                        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600" />
                      )}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={cn(
                              "h-9 w-9 rounded-xl flex items-center justify-center text-sm font-bold shadow-sm",
                              isTiranga
                                ? "bg-gradient-to-br from-orange-500 to-green-600 text-white"
                                : "bg-primary/10 text-primary"
                            )}
                          >
                            {isTiranga ? "🇮🇳" : <Icon className="h-4 w-4" />}
                          </div>
                          <div>
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block">
                              {item.category}
                            </span>
                            {item.badge && (
                              <Badge
                                variant="secondary"
                                className="text-[10px] px-1.5 py-0 mt-0.5 bg-primary/10 text-primary font-medium"
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>

                      <h3 className="font-heading font-bold text-base text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex items-center text-xs font-semibold text-primary pt-3 border-t border-border/40">
                        <span>Open Generator Tool</span>
                        <ArrowUpRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </a>
                  ) : (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={cn(
                        "group block rounded-2xl border p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden",
                        isTiranga
                          ? "bg-gradient-to-br from-orange-500/10 via-card to-emerald-500/10 border-orange-500/30 hover:border-orange-500/60"
                          : "bg-card border-border hover:border-primary/50"
                      )}
                    >
                      {isTiranga && (
                        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600" />
                      )}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={cn(
                              "h-9 w-9 rounded-xl flex items-center justify-center text-sm font-bold shadow-sm",
                              isTiranga
                                ? "bg-gradient-to-br from-orange-500 to-green-600 text-white"
                                : "bg-primary/10 text-primary"
                            )}
                          >
                            {isTiranga ? "🇮🇳" : <Icon className="h-4 w-4" />}
                          </div>
                          <div>
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block">
                              {item.category}
                            </span>
                            {item.badge && (
                              <Badge
                                variant="secondary"
                                className="text-[10px] px-1.5 py-0 mt-0.5 bg-primary/10 text-primary font-medium"
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>

                      <h3 className="font-heading font-bold text-base text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex items-center text-xs font-semibold text-primary pt-3 border-t border-border/40">
                        <span>Explore Resource</span>
                        <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16 px-4 rounded-3xl border border-dashed border-border bg-card/40">
                <div className="h-16 w-16 rounded-2xl bg-muted/80 flex items-center justify-center mx-auto mb-4 text-muted-foreground">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">No matching results found</h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
                  We could not find any pages or services matching &ldquo;{query}&rdquo;. Check your spelling or explore the suggested topics below.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQueryChange("tiranga")}
                    className="border-orange-500/40 text-orange-600 dark:text-orange-400"
                  >
                    🇮🇳 Tiranga ID Card Maker
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQueryChange("web development")}
                  >
                    Web Development
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQueryChange("quote")}
                  >
                    Start a Project
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export default function SearchPage() {
  return (
    <React.Suspense
      fallback={
        <PublicLayout>
          <div className="py-32 text-center">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto" />
            <p className="mt-4 text-sm text-muted-foreground">Loading search engine...</p>
          </div>
        </PublicLayout>
      }
    >
      <SearchContent />
    </React.Suspense>
  );
}
