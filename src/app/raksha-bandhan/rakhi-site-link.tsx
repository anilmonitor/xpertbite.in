"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";

interface RakhiSiteLinkProps {
  url?: string;
  displayUrl?: string;
}

export function RakhiSiteLink({
  url = "https://rakchhabandhan.vercel.app",
  displayUrl = "rakchhabandhan.vercel.app",
}: RakhiSiteLinkProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
      <span>Official Site:</span>
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted border border-border">
        <code className="font-mono text-pink-600 dark:text-pink-400 font-bold text-xs">{displayUrl}</code>
        <button
          type="button"
          onClick={handleCopy}
          title="Copy link to paste in new tab"
          aria-label="Copy official website link"
          className="p-1 rounded-md hover:bg-background/80 text-muted-foreground hover:text-foreground transition-all flex items-center gap-1 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                Copied!
              </span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span className="text-[11px] font-medium">Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
