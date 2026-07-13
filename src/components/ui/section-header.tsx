"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16 space-y-4", centered && "text-center", className)}>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed mx-auto text-pretty">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "h-1 w-20 rounded-full gradient-primary mt-4",
          centered && "mx-auto"
        )}
      />
    </div>
  );
}
