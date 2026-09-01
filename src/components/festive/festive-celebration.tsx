"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export function FestiveCelebration({ durationMs = 3000 }: { durationMs?: number }) {
  useEffect(() => {
    // Subtle, elegant 3-second gentle celebration (Clean & minimal for mobile)
    const colors = [
      "#FFD700", // Gold
      "#FF4500", // Soft Orange
      "#FF1493", // Soft Pink
      "#00E5FF", // Cyan
      "#FFEAA7", // Warm Light Gold
    ];

    // 1. One single gentle celebratory burst on open
    confetti({
      particleCount: 35,
      spread: 70,
      origin: { y: 0.65 },
      colors,
      scalar: 0.85,
      zIndex: 9999,
      disableForReducedMotion: true,
    });

    // 2. Gentle side popper blast
    setTimeout(() => {
      confetti({
        particleCount: 15,
        angle: 60,
        spread: 45,
        origin: { x: 0, y: 0.7 },
        colors,
        scalar: 0.8,
        zIndex: 9999,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 15,
        angle: 120,
        spread: 45,
        origin: { x: 1, y: 0.7 },
        colors,
        scalar: 0.8,
        zIndex: 9999,
        disableForReducedMotion: true,
      });
    }, 400);
  }, [durationMs]);

  return null;
}
