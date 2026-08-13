import * as React from "react";
import { Youtube, ExternalLink, Play, Sparkles } from "lucide-react";

interface TirangaVideoGuideProps {
  videoId?: string;
  title?: string;
}

export function TirangaVideoGuide({
  videoId = "zUFkhp1J0QI",
  title = "How to Make Tiranga ID Card Online (Step-by-Step Video Guide)",
}: TirangaVideoGuideProps) {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
  const watchUrl = `https://youtu.be/${videoId}`;

  return (
    <section className="py-14 border-b border-border/40 bg-card/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold mb-3">
              <Youtube className="h-4 w-4" />
              <span>Official Video Tutorial • यूट्यूब वीडियो गाइड</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground mb-2">
              How to Make Tiranga ID Card (Video Guide)
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Watch this complete tutorial on how to create, add your photo, and download your personalized Tiranga ID Card in 10 seconds.
            </p>
          </div>

          {/* Video Container Frame */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xl">
            {/* Top Bar Decoration */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-muted/30 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <Play className="h-3.5 w-3.5 text-red-500 fill-red-500" />
                <span className="truncate max-w-[240px] sm:max-w-md">{title}</span>
              </div>
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline font-medium text-[11px] shrink-0"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* 16:9 Aspect Ratio Iframe */}
            <div className="relative w-full aspect-video bg-black/90">
              <iframe
                src={embedUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            {/* Video Quick Guide Footer */}
            <div className="p-4 sm:p-5 bg-muted/10 border-t border-border/40 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="h-5 w-5 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-[11px]">
                  1
                </span>
                <span>Enter your name & select your state/city in the generator tool.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-5 w-5 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-[11px]">
                  2
                </span>
                <span>Upload a clean photo from your phone or PC gallery.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                  3
                </span>
                <span>Click Generate & Download your card in HD JPG/PNG format.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
