"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export function FestiveCelebration({ durationMs = 4000 }: { durationMs?: number }) {
  useEffect(() => {
    // 3.5-4 Seconds Continuous Fireworks & Confetti Celebration
    const end = Date.now() + durationMs;
    const colors = ["#FFD700", "#FF4500", "#FF8C00", "#FF1493", "#00FF7F", "#00BFFF", "#FFF8DC"];

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
        zIndex: 9999,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
        zIndex: 9999,
        disableForReducedMotion: true,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    // Initial big blast
    confetti({
      particleCount: 60,
      spread: 100,
      origin: { y: 0.6 },
      colors,
      zIndex: 9999,
    });

    frame();
  }, [durationMs]);

  return null;
}
