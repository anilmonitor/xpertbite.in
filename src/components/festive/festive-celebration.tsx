"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export function FestiveCelebration({ durationMs = 10000 }: { durationMs?: number }) {
  useEffect(() => {
    // 10 Seconds Continuous Festive Celebration Confetti & Popper Blast
    const end = Date.now() + durationMs;
    const colors = [
      "#FFD700", // Golden
      "#FF4500", // OrangeRed
      "#FF8C00", // DarkOrange
      "#FF1493", // DeepPink
      "#00FF7F", // SpringGreen
      "#00BFFF", // DeepSkyBlue
      "#FF007F", // Rose
      "#FFEAA7", // Light Gold
      "#E17055", // Coral
    ];

    // 1. Initial Grand Celebration Blast
    confetti({
      particleCount: 80,
      spread: 120,
      origin: { y: 0.6 },
      colors,
      zIndex: 9999,
    });

    // 2. Periodic extra popper bursts every 2.5 seconds
    const intervalId = setInterval(() => {
      if (Date.now() >= end) {
        clearInterval(intervalId);
        return;
      }
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { x: Math.random() * 0.6 + 0.2, y: Math.random() * 0.4 + 0.4 },
        colors,
        zIndex: 9999,
      });
    }, 2500);

    // 3. Continuous frame loop: Side shooters + Top raining poppers
    let animationFrameId: number;

    const frame = () => {
      // Left and right side cannons
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.75 },
        colors,
        zIndex: 9999,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.75 },
        colors,
        zIndex: 9999,
        disableForReducedMotion: true,
      });

      // Top falling confetti rain across the screen
      confetti({
        particleCount: 2,
        angle: 90,
        spread: 45,
        startVelocity: 15,
        origin: { x: Math.random(), y: 0 },
        colors,
        zIndex: 9999,
        gravity: 0.8,
        scalar: 0.9,
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
