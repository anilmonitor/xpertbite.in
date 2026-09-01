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

    // Subtle, gentle floating glowing ambient sparks (lightweight & clean)
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
      "#FFD700", // Soft Gold
      "#FFA500", // Warm Amber
      "#FF7675", // Coral
      "#00E5FF", // Soft Cyan
    ];

    // Only 15 gentle sparks across screen
    for (let i = 0; i < 15; i++) {
      sparks.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 4 + 2.5,
        speedY: -(Math.random() * 0.6 + 0.3),
        speedX: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.4 + 0.15,
        fadeSpeed: (Math.random() * 0.008 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Touch / Cursor subtle sparks
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

    const addTouchSparks = (x: number, y: number, count = 4) => {
      if (x <= 0 || y <= 0 || x > width || y > height) return;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        touchSparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4,
          life: 0,
          maxLife: Math.random() * 20 + 15,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 3 + 2,
        });
      }
    };

    const handlePointer = (e: PointerEvent) => {
      const count = e.type === "pointerdown" ? 8 : 2;
      addTouchSparks(e.clientX, e.clientY, count);
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        for (let i = 0; i < e.touches.length; i++) {
          const t = e.touches[i];
          const count = e.type === "touchstart" ? 6 : 3;
          addTouchSparks(t.clientX, t.clientY, count);
        }
      }
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("pointerdown", handlePointer, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle floating sparks with soft glow
      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];
        s.y += s.speedY;
        s.x += s.speedX;
        s.opacity += s.fadeSpeed;

        if (s.opacity <= 0.1 || s.opacity >= 0.6) {
          s.fadeSpeed = -s.fadeSpeed;
        }

        if (s.y < -15) {
          s.y = height + 15;
          s.x = Math.random() * width;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, s.opacity));
        
        ctx.shadowBlur = 12;
        ctx.shadowColor = s.color;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 2. Draw subtle Touch Sparks
      for (let i = touchSparks.length - 1; i >= 0; i--) {
        const p = touchSparks[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.1;
        p.life++;

        const progress = p.life / p.maxLife;
        const currentAlpha = 1 - progress;

        if (progress >= 1) {
          touchSparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, currentAlpha * 0.8);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
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

export const DiwaliMagicalEffects = FestiveMagicalEffects;
