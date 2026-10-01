import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/Garhwa%20influencer%20meet%202026",
        destination: "/garhwa-influencer-meet-2026",
      },
      {
        source: "/Garhwa-influencer-meet-2026",
        destination: "/garhwa-influencer-meet-2026",
      },
      {
        source: "/garhwa-influencer-meet",
        destination: "/garhwa-influencer-meet-2026",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
