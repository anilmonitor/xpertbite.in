"use client";

import * as React from "react";
import { User, MapPin, Award, QrCode } from "lucide-react";

export function TirangaCardSimulator() {
  const [name, setName] = React.useState("Aarav Kumar");
  const [stateName, setStateName] = React.useState("Delhi, India");
  const [cardId] = React.useState("IND-2026-7849");
  const [frameColor, setFrameColor] = React.useState<"tricolor" | "saffron" | "emerald">("tricolor");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Interactive Controls */}
      <div className="lg:col-span-5 space-y-4 bg-card border border-border rounded-2xl p-6 shadow-sm">
        <div className="border-b pb-3">
          <h3 className="font-heading font-bold text-base text-foreground">
            Live Demo Card Customizer
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Type your name to preview what your ID card looks like
          </p>
        </div>

        <div>
          <label className="block text-xs font-semibold text-foreground mb-1">
            Your Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-3.5 py-2.5 text-sm rounded-xl border bg-background border-border focus:border-primary outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-foreground mb-1">
            State / City
          </label>
          <input
            type="text"
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
            placeholder="e.g. Maharashtra, India"
            className="w-full px-3.5 py-2.5 text-sm rounded-xl border bg-background border-border focus:border-primary outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5">
            Card Theme Border
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "tricolor", label: "Tricolor 🇮🇳" },
              { id: "saffron", label: "Saffron Gold" },
              { id: "emerald", label: "Emerald Green" },
            ].map((theme) => (
              <button
                key={theme.id}
                onClick={() => setFrameColor(theme.id as any)}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                  frameColor === theme.id
                    ? "border-primary bg-primary/10 text-primary font-bold shadow-sm"
                    : "border-border text-muted-foreground hover:bg-muted"
                }`}
              >
                {theme.label}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground pt-1">
          💡 You can create and download the real ultra-HD card with your photo using the generator button at the bottom of this page.
        </p>
      </div>

      {/* Visual Live ID Card Mockup */}
      <div className="lg:col-span-7 flex justify-center">
        <div className="relative w-full max-w-[360px] sm:max-w-[400px] rounded-3xl overflow-hidden shadow-xl border border-border bg-card p-1">
          {/* Outer Tricolor Strip */}
          <div className="h-2 w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808] rounded-t-2xl" />

          <div className="bg-card dark:bg-slate-900 rounded-2xl p-5 border border-border relative overflow-hidden">
            {/* Ashoka Chakra Watermark inside card */}
            <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 opacity-[0.06] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-blue-900 dark:text-blue-400">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" fill="none" />
                <circle cx="50" cy="50" r="10" fill="currentColor" />
                {Array.from({ length: 24 }).map((_, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={50 + 40 * Math.cos((i * 15 * Math.PI) / 180)}
                    y2={50 + 40 * Math.sin((i * 15 * Math.PI) / 180)}
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                ))}
              </svg>
            </div>

            {/* Card Header */}
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 via-white to-green-600 p-0.5 flex items-center justify-center shadow">
                  <div className="h-full w-full bg-blue-900 rounded-full flex items-center justify-center text-white text-xs font-black">
                    🇮🇳
                  </div>
                </div>
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-widest text-foreground leading-tight">
                    TIRANGA ID CARD
                  </div>
                  <div className="text-[10px] text-muted-foreground font-medium">
                    Har Ghar Tiranga • 2026
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-semibold text-muted-foreground">
                {cardId}
              </span>
            </div>

            {/* Card Body with Photo + Details */}
            <div className="flex items-center gap-4 mb-4">
              {/* Photo Frame */}
              <div className="relative shrink-0">
                <div className="h-20 w-20 sm:h-22 sm:w-22 rounded-2xl p-1 bg-gradient-to-br from-orange-500 via-white to-green-600 shadow-md">
                  <div className="h-full w-full bg-muted rounded-xl flex flex-col items-center justify-center text-muted-foreground overflow-hidden">
                    <User className="h-7 w-7 text-muted-foreground/60 mb-0.5" />
                    <span className="text-[9px] font-semibold text-center leading-tight">Your Photo</span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-blue-900 text-white rounded-full p-1 shadow">
                  <Award className="h-3 w-3" />
                </div>
              </div>

              {/* Personal Details */}
              <div className="flex-1 min-w-0 space-y-1.5">
                <div>
                  <div className="text-[10px] uppercase font-bold text-muted-foreground">Citizen Name</div>
                  <div className="text-base font-heading font-extrabold text-foreground truncate">
                    {name || "Your Name"}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-muted-foreground">Location</div>
                  <div className="text-xs font-semibold text-foreground flex items-center gap-1 truncate">
                    <MapPin className="h-3 w-3 text-orange-500 shrink-0" />
                    <span>{stateName || "Your State, India"}</span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-muted-foreground">Pledge</div>
                  <div className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                    Proud to be an Indian 🇮🇳
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-3 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <QrCode className="h-5 w-5 text-foreground/80" />
                <div>
                  <div className="font-bold text-foreground leading-tight">VERIFIED BADGE</div>
                  <div className="text-[9px]">tiranga-idcard2026.vercel.app</div>
                </div>
              </div>
              <div className="text-right font-mono font-bold text-orange-600 dark:text-orange-400">
                15 AUG / 26 JAN
              </div>
            </div>
          </div>

          {/* Bottom Tricolor Strip */}
          <div className="h-2 w-full bg-gradient-to-r from-[#138808] via-white to-[#FF9933] rounded-b-2xl" />
        </div>
      </div>
    </div>
  );
}
