"use client";

import * as React from "react";
import { ExternalLink, RotateCcw } from "lucide-react";

interface RakhiCountdownLauncherProps {
  generatorUrl: string;
}

export function RakhiCountdownLauncher({ generatorUrl }: RakhiCountdownLauncherProps) {
  const TOTAL_MS = 12000; // 12 seconds
  const [status, setStatus] = React.useState<"idle" | "counting" | "completed">("idle");
  const [remainingMs, setRemainingMs] = React.useState<number>(TOTAL_MS);
  const startTimeRef = React.useRef<number | null>(null);
  const reqIdRef = React.useRef<number | null>(null);

  const startCountdown = () => {
    setStatus("counting");
    setRemainingMs(TOTAL_MS);
    startTimeRef.current = performance.now();

    const tick = (now: number) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const remaining = Math.max(0, TOTAL_MS - elapsed);
      setRemainingMs(remaining);

      if (remaining > 0) {
        reqIdRef.current = requestAnimationFrame(tick);
      } else {
        setStatus("completed");
        try {
          window.open(generatorUrl, "_blank", "noopener,noreferrer");
        } catch {
          // If popup is blocked by browser
        }
      }
    };

    reqIdRef.current = requestAnimationFrame(tick);
  };

  const resetCountdown = () => {
    if (reqIdRef.current) {
      cancelAnimationFrame(reqIdRef.current);
      reqIdRef.current = null;
    }
    setStatus("idle");
    setRemainingMs(TOTAL_MS);
    startTimeRef.current = null;
  };

  React.useEffect(() => {
    return () => {
      if (reqIdRef.current) {
        cancelAnimationFrame(reqIdRef.current);
      }
    };
  }, []);

  const seconds = Math.floor(remainingMs / 1000);
  const centiseconds = Math.floor((remainingMs % 1000) / 10);

  if (status === "counting") {
    return (
      <div className="flex flex-col items-center gap-2">
        <button
          disabled
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold text-base sm:text-lg opacity-90 cursor-wait shadow"
        >
          <span>Please wait...</span>
          <span className="font-mono tabular-nums font-black text-lg sm:text-xl tracking-wider">
            {String(seconds).padStart(2, "0")}:{String(centiseconds).padStart(2, "0")}s
          </span>
        </button>
        <span className="text-xs text-muted-foreground font-mono">
          Redirecting in {String(seconds).padStart(2, "0")}.{String(centiseconds).padStart(2, "0")}s
        </span>
      </div>
    );
  }

  if (status === "completed") {
    return (
      <div className="flex flex-col items-center gap-2">
        <a
          href={generatorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold text-base sm:text-lg shadow hover:opacity-90 hover:scale-105 active:scale-95 transition-all"
        >
          <span>Open Raksha Bandhan Maker</span>
          <ExternalLink className="h-5 w-5" />
        </a>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Link opened! Click above if not redirected.</span>
          <span>•</span>
          <button
            onClick={resetCountdown}
            className="text-pink-600 dark:text-pink-400 hover:underline inline-flex items-center gap-1 cursor-pointer font-medium"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={startCountdown}
      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold text-base sm:text-lg shadow-lg hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
    >
      <span>Open Raksha Bandhan Maker</span>
      <ExternalLink className="h-5 w-5" />
    </button>
  );
}
