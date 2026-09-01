"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export function FestiveCelebration({ durationMs = 10000 }: { durationMs?: number }) {
  useEffect(() => {
    // 10 Seconds Big & Grand Festive Celebration Confetti Popper
    const end = Date.now() + durationMs;
    const colors = [
      "#FFD700", // Gold
      "#FF4500", // OrangeRed
      "#FF1493", // DeepPink
      "#00FF7F", // Neon Green
      "#00E5FF", // Cyan
      "#FF007F", // Vivid Rose
      "#FFEAA7", // Bright Yellow
      "#9B59B6", // Purple
      "#FF7675", // Coral
    ];

    // 1. Initial Mega Blast with BIG pieces (scalar: 1.4)
    confetti({
      particleCount: 100,
      spread: 140,
      origin: { y: 0.55 },
      colors,
      scalar: 1.4,
      zIndex: 9999,
    });

    // 2. Periodic extra big bursts every 2 seconds
    const intervalId = setInterval(() => {
      if (Date.now() >= end) {
        clearInterval(intervalId);
        return;
      }
      confetti({
        particleCount: 70,
        spread: 110,
        origin: { x: Math.random() * 0.6 + 0.2, y: Math.random() * 0.4 + 0.35 },
        colors,
        scalar: 1.35,
        zIndex: 9999,
      });
    }, 2000);

    // 3. Continuous frame loop: Big Side Cannons + Big Top Raining Poppers
    let animationFrameId: number;

    const frame = () => {
      // Left and right side cannons with large scalar
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.7 },
        colors,
        scalar: 1.3,
        zIndex: 9999,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.7 },
        colors,
        scalar: 1.3,
        zIndex: 9999,
        disableForReducedMotion: true,
      });

      // Big top falling confetti rain across the screen
      confetti({
        particleCount: 3,
        angle: 90,
        spread: 55,
        startVelocity: 18,
        origin: { x: Math.random(), y: -0.05 },
        colors,
        scalar: 1.4,
        gravity: 0.75,
        zIndex: 9999,
        disableForReducedMotion: true,
      });

      if (Date.now() < end) {
        animationFrameId = requestAnimationFrame(frame);
      }
    };

    frame();

    return () => {
      clearInterval(intervalId);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [durationMs]);

  return null;
}
