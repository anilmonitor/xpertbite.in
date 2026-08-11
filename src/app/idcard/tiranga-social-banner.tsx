import * as React from "react";
import { ExternalLink, Zap, ShieldCheck } from "lucide-react";

interface TirangaSocialBannerProps {
  url?: string;
}

export function TirangaSocialBanner({
  url = "https://easylike.in/",
}: TirangaSocialBannerProps) {
  return (
    <div className="relative max-w-lg mx-auto w-full group">
      {/* Dynamic Animated Ambient Glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 opacity-40 blur-lg group-hover:opacity-75 group-hover:blur-xl transition-all duration-500" />

      {/* Gradient Border Frame */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block rounded-3xl p-[1.5px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
      >
        {/* Inner Card */}
        <div className="relative rounded-[22px] bg-gradient-to-b from-[#16161d] via-[#0f0f14] to-[#09090c] p-5 sm:p-6 overflow-hidden text-center">
          {/* Shimmer Light Reflection Sweep on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          {/* Social Logos Badges */}
          <div className="flex items-center justify-center gap-3 mb-3">
              {/* Instagram Icon Badge */}
              <div className="w-10 h-10 rounded-2xl p-0.5 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-lg shadow-pink-500/30 ring-2 ring-white/20 group-hover:rotate-3 transition-transform">
                <div className="w-full h-full rounded-[14px] flex items-center justify-center text-white">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </div>

              {/* Facebook Icon Badge */}
              <div className="w-10 h-10 rounded-2xl p-0.5 bg-[#1877F2] shadow-lg shadow-blue-500/30 ring-2 ring-white/20 group-hover:-rotate-3 transition-transform flex items-center justify-center text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Attractive Title */}
          <h3 className="text-lg sm:text-xl font-heading font-extrabold text-white tracking-tight mb-3 drop-shadow">
            Instagram &amp; Facebook Followers, Likes, Views
          </h3>

          {/* Golden Vibrant CTA Button */}
          <div className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black font-extrabold text-sm sm:text-base shadow-lg shadow-amber-500/30 group-hover:shadow-amber-400/50 group-hover:scale-105 active:scale-95 transition-all">
            <span>बढ़ाने के लिए यहाँ जाएं</span>
            <ExternalLink className="h-4 w-4 stroke-[2.5]" />
          </div>

          {/* Social Proof Mini Pills */}
          <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-center gap-4 text-[11px] text-zinc-300 font-medium">
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-yellow-400" /> Instant Speed
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Safe &amp; Secure
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
