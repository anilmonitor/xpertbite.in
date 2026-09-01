import React, { Suspense } from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { DiwaliPujaClient } from "./diwali-puja-client";
import { prisma } from "@/lib/prisma";
import { isUniqueView } from "@/lib/view-limiter";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; u?: string; id?: string; slug?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const userSlug = params.u || params.slug || params.id;
  let senderName = params.name ? decodeURIComponent(params.name) : "";

  if (!senderName && userSlug) {
    try {
      if ("diwaliGreeting" in prisma) {
        const found = await (prisma as any).diwaliGreeting.findFirst({
          where: { OR: [{ slug: userSlug }, { id: userSlug }] },
        });
        if (found?.name) senderName = found.name;
      }
    } catch {}
  }

  const title = senderName
    ? `${senderName} की तरफ से दीपावली 2026 की हार्दिक शुभकामनाएं | Happy Diwali Greeting Card`
    : "दीपावली 2026 की हार्दिक शुभकामनाएं | Diwali 2026 Greeting Card Generator with Photo & Music - XpertBite";

  const description = senderName
    ? `${senderName} ने आपके और आपके परिवार के लिए दीपावली 2026 की पावन शुभकामनाएं भेजी हैं। माँ लक्ष्मी व भगवान गणेश का आशीर्वाद प्राप्त करें।`
    : "दीपावली 2026 की हार्दिक शुभकामनाएं! अपने नाम और फोटो के साथ खूबसूरत हैप्पी दिवाली ग्रीटिंग कार्ड बनाएं, लाइव टाइमर और भक्ति संगीत के साथ WhatsApp पर शेयर करें।";

  return {
    title,
    description,
    keywords: [
      "diwali 2026",
      "deepawali 2026",
      "happy diwali 2026 wishes",
      "दीपावली की हार्दिक शुभकामनाएं",
      "दिवाली विशेस 2026",
      "diwali greeting card maker online",
      "happy diwali greeting with photo",
      "diwali photo editor online",
      "diwali whatsapp status maker 2026",
      "diwali wishes with name and photo",
      "lakshmi ganesh puja 2026",
      "shubh deepawali 2026 wishes",
      "diwali countdown 2026",
      "free diwali greeting card generator",
    ],
    alternates: {
      canonical: "https://xpertbite.in/diwaliPuja2026",
    },
    openGraph: {
      type: "website",
      locale: "hi_IN",
      url: "https://xpertbite.in/diwaliPuja2026",
      siteName: "XpertBite Technologies",
      title,
      description,
      images: [
        {
          url: "https://xpertbite.in/diwali/diwali_portrait.jpg",
          width: 1080,
          height: 1080,
          alt: "Shubh Deepawali 2026 Greetings",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://xpertbite.in/diwali/diwali_portrait.jpg"],
    },
  };
}

export default async function DiwaliPujaPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; u?: string; id?: string; slug?: string }>;
}) {
  const params = await searchParams;
  const userSlug = params.u || params.slug || params.id;

  let initialGreeting = null;
  if (userSlug) {
    try {
      if ("diwaliGreeting" in prisma) {
        const found = await (prisma as any).diwaliGreeting.findFirst({
          where: {
            OR: [{ slug: userSlug }, { id: userSlug }],
          },
        });
        if (found) {
          // Check unique IP before incrementing view
          const headerList = await headers();
          const clientIp =
            headerList.get("x-forwarded-for") ||
            headerList.get("x-real-ip") ||
            "127.0.0.1";

          const isUnique = isUniqueView("diwali", found.slug, clientIp);
          if (isUnique) {
            try {
              await (prisma as any).diwaliGreeting.update({
                where: { id: found.id },
                data: { views: { increment: 1 } },
              });
            } catch {}
          }

          initialGreeting = {
            name: found.name,
            imageUrl: found.imageUrl,
            slug: found.slug,
            views: found.views + (isUnique ? 1 : 0),
            blessings: found.blessings,
          };
        }
      }
    } catch {}
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Diwali 2026 Greeting Card Maker",
        alternateName: "दीपावली की हार्दिक शुभकामनाएं कार्ड मेकर",
        url: "https://xpertbite.in/diwaliPuja2026",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "All (Android, iOS, Windows, macOS)",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#FCF8F3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Suspense
        fallback={
          <div className="min-h-screen bg-[#FCF8F3] flex items-center justify-center text-amber-900">
            <div className="flex flex-col items-center gap-3">
              <p className="font-bold text-sm">लोड हो रहा है...</p>
            </div>
          </div>
        }
      >
        <DiwaliPujaClient initialGreeting={initialGreeting} />
      </Suspense>
    </main>
  );
}
