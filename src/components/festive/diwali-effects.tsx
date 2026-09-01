"use client";

import React, { useEffect, useRef } from "react";

export function FestiveMagicalEffects() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Big Floating Glowing Magic Orbs & Embers (Rising from bottom to top)
    interface FloatingSpark {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      opacity: number;
      fadeSpeed: number;
      color: string;
    }

    const sparks: FloatingSpark[] = [];
    const colors = [
      "#FFD700", // Bright Gold
      "#FFA500", // Orange
      "#FF4500", // Red Orange
      "#FFEAA7", // Pale Gold
      "#FF7675", // Pink Coral
      "#FF1493", // Neon Pink
      "#00FF7F", // Spring Green
      "#00E5FF", // Electric Cyan
    ];

    for (let i = 0; i < 45; i++) {
      sparks.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 8 + 5, // 5px to 13px radius
        speedY: -(Math.random() * 1.2 + 0.6),
        speedX: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.6 + 0.35,
        fadeSpeed: (Math.random() * 0.015 + 0.008) * (Math.random() > 0.5 ? 1 : -1),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Touch / Scroll / Cursor Sparkler (Phuljhadi) Particles
    interface TouchSpark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      color: string;
      size: number;
    }

    const touchSparks: TouchSpark[] = [];

    const addTouchSparks = (x: number, y: number, count = 8) => {
      if (x <= 0 || y <= 0 || x > width || y > height) return;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;
        touchSparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.8,
          life: 0,
          maxLife: Math.random() * 32 + 25,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 6 + 3.5,
        });
      }
    };

    // Last known touch positions for scroll emitting
    let lastTouchX = width / 2;
    let lastTouchY = height / 2;

    const handlePointer = (e: PointerEvent) => {
      lastTouchX = e.clientX;
      lastTouchY = e.clientY;
      const count = e.type === "pointerdown" ? 25 : 6;
      addTouchSparks(e.clientX, e.clientY, count);
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        for (let i = 0; i < e.touches.length; i++) {
          const t = e.touches[i];
          lastTouchX = t.clientX;
          lastTouchY = t.clientY;
          const count = e.type === "touchstart" ? 20 : 8;
          addTouchSparks(t.clientX, t.clientY, count);
        }
      }
    };

    // Also emit sparks when scrolling on mobile
    const handleScroll = () => {
      addTouchSparks(lastTouchX, lastTouchY, 6);
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("pointerdown", handlePointer, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw BIG Floating Glowing Magic Orbs with radial aura
      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];
        s.y += s.speedY;
        s.x += s.speedX;
        s.opacity += s.fadeSpeed;

        if (s.opacity <= 0.2 || s.opacity >= 0.95) {
          s.fadeSpeed = -s.fadeSpeed;
        }

        if (s.y < -30) {
          s.y = height + 30;
          s.x = Math.random() * width;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, s.opacity));
        
        const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius);
        gradient.addColorStop(0, "#FFFFFF");
        gradient.addColorStop(0.35, s.color);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.shadowBlur = 22;
        ctx.shadowColor = s.color;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius * 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 2. Draw Touch / Scroll Sparkler Sparks
      for (let i = touchSparks.length - 1; i >= 0; i--) {
        const p = touchSparks[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.12; // gravity
        p.life++;

        const progress = p.life / p.maxLife;
        const currentAlpha = 1 - progress;

        if (progress >= 1) {
          touchSparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, currentAlpha);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 18;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 - progress * 0.4), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("pointerdown", handlePointer);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20 w-full h-full"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

// Alias for backwards compatibility
export const DiwaliMagicalEffects = FestiveMagicalEffects;
