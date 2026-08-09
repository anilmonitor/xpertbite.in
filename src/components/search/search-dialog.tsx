"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  ExternalLink,
  ArrowRight,
  Code2,
  BookOpen,
  HelpCircle,
  FileText,
  Cpu,
  Boxes,
  Flag,
  Layers,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { SEARCH_ITEMS, SearchItem } from "@/lib/search-data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const categoryIcons: Record<string, any> = {
  "Tools & Guides": Flag,
  Services: Code2,
  Products: Boxes,
  Blog: BookOpen,
  Technologies: Cpu,
  Pages: FileText,
  FAQs: HelpCircle,
};

// Highlight matching search query characters
function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <span>{text}</span>;
  
  const escaped = query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === query.trim().toLowerCase() ? (
          <span key={i} className="text-primary font-bold bg-primary/10 rounded px-0.5">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Real-time live filtering on every keystroke
  const filteredItems = React.useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    const tokens = q.split(/\s+/).filter(Boolean);

    return SEARCH_ITEMS.map((item) => {
      const titleLower = item.title.toLowerCase();
      const descLower = item.description.toLowerCase();
      const catLower = item.category.toLowerCase();
      const keywordsLower = item.keywords.map((k) => k.toLowerCase());

      let score = 0;

      // 1. Starts with query in title (e.g. typing "t" -> "Tiranga...")
      if (titleLower.startsWith(q)) {
        score += 250;
      } else if (titleLower.includes(q)) {
        score += 150;
      }

      // 2. Keyword exact or prefix match
      if (keywordsLower.some((k) => k === q)) {
        score += 200;
      } else if (keywordsLower.some((k) => k.startsWith(q))) {
        score += 120;
      } else if (keywordsLower.some((k) => k.includes(q))) {
        score += 80;
      }

      // 3. Description match
      if (descLower.includes(q)) {
        score += 40;
      }

      // 4. Category match
      if (catLower.includes(q)) {
        score += 30;
      }

      // 5. Multi-token match (e.g. "tiranga id card")
      const matchedTokens = tokens.filter(
        (token) =>
          titleLower.includes(token) ||
          keywordsLower.some((k) => k.includes(token)) ||
          descLower.includes(token)
      );

      if (tokens.length > 1 && matchedTokens.length === tokens.length) {
        score += 100;
      } else {
        score += matchedTokens.length * 20;
      }

      return { item, score };
    })
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((entry) => entry.item);
  }, [query]);

  // Reset selected index when items change
  React.useEffect(() => {
    setSelectedIndex(0);
  }, [filteredItems]);

  // Focus input when dialog opens
  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery("");
    }
  }, [open]);

  const handleSelect = (item: SearchItem) => {
    onOpenChange(false);
    if (item.isExternal) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.href);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1 < filteredItems.length ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filteredItems.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl p-0 gap-0 overflow-hidden border-border bg-background shadow-2xl rounded-2xl sm:rounded-2xl">
        <DialogTitle className="sr-only">Search</DialogTitle>
        <DialogDescription className="sr-only">
          Live instant search across website
        </DialogDescription>

        {/* Clean Simple Search Input */}
        <div className="flex items-center px-4 py-1.5 border-b border-border bg-muted/20">
          <Search className="h-5 w-5 text-primary shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type to search anything (e.g. Tiranga, Web, Pricing)..."
            className="w-full py-3.5 text-sm sm:text-base bg-transparent border-none outline-none focus:outline-none focus:ring-0 placeholder:text-muted-foreground/60 text-foreground"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors mr-1"
              aria-label="Clear query"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Real-time Live Results Area */}
        <div className="max-h-[380px] overflow-y-auto p-2">
          {!query.trim() ? (
            /* Simple Clean Initial State */
            <div className="py-10 px-4 text-center">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2.5 text-primary">
                <Search className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-foreground mb-1">
                Live Instant Search
              </p>
              <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                Type letters like &ldquo;t&rdquo;, &ldquo;ti&rdquo;, &ldquo;tiranga&rdquo;, &ldquo;web&rdquo; to see matching results instantly.
              </p>
            </div>
          ) : filteredItems.length > 0 ? (
            /* Live Instant Results */
            <div className="space-y-1">
              {filteredItems.map((item, index) => {
                const Icon = categoryIcons[item.category] || Layers;
                const isSelected = index === selectedIndex;
                const isTiranga = item.id.includes("tiranga");

                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={cn(
                      "flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors group",
                      isSelected
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted/60 text-foreground"
                    )}
                  >
                    <div
                      className={cn(
                        "h-8 w-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold",
                        isTiranga
                          ? "bg-gradient-to-br from-orange-500 to-green-600 text-white shadow-sm"
                          : isSelected
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground group-hover:text-foreground"
                      )}
                    >
                      {isTiranga ? "🇮🇳" : <Icon className="h-4 w-4" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className={cn(
                            "text-sm font-semibold truncate transition-colors",
                            isSelected ? "text-primary" : "text-foreground group-hover:text-primary"
                          )}
                        >
                          <HighlightText text={item.title} query={query} />
                        </span>
                        <Badge
                          variant="secondary"
                          className="text-[10px] px-1.5 py-0 rounded font-normal shrink-0 ml-auto"
                        >
                          {item.category}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        <HighlightText text={item.description} query={query} />
                      </p>
                    </div>

                    <div className="shrink-0 self-center">
                      {item.isExternal ? (
                        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-60 group-hover:opacity-100 group-hover:text-primary" />
                      ) : (
                        <ArrowRight
                          className={cn(
                            "h-4 w-4 text-muted-foreground transition-all",
                            isSelected
                              ? "opacity-100 text-primary translate-x-0"
                              : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                          )}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* No Results */
            <div className="py-10 px-4 text-center">
              <p className="text-sm font-medium text-foreground mb-1">
                No results found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-muted-foreground">
                Try searching for &ldquo;Tiranga&rdquo;, &ldquo;Web&rdquo;, &ldquo;Quote&rdquo;, or &ldquo;Pricing&rdquo;.
              </p>
            </div>
          )}
        </div>

        {/* Clean Footer Counter */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-muted/30 text-[11px] text-muted-foreground">
          <span>
            {query.trim()
              ? `${filteredItems.length} result${filteredItems.length !== 1 ? "s" : ""} found`
              : "Live Real-Time Search"}
          </span>
          <span className="text-[10px]">
            Press <kbd className="px-1 py-0.5 rounded border border-border bg-background font-mono text-[9px]">Enter ↵</kbd> to open
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
