import React, { Suspense } from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { ChhathPujaClient } from "./chhath-puja-client";
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
      if ("chhathGreeting" in prisma) {
        const found = await (prisma as any).chhathGreeting.findFirst({
          where: { OR: [{ slug: userSlug }, { id: userSlug }] },
        });
        if (found?.name) senderName = found.name;
      }
    } catch {}
  }

  const title = senderName
    ? `${senderName} की तरफ से छठ पूजा 2026 की हार्दिक शुभकामनाएं | Happy Chhath Puja Greeting Card`
    : "छठ पूजा 2026 की हार्दिक शुभकामनाएं | Chhath Puja 2026 Greeting Card Generator with Photo & Music - XpertBite";

  const description = senderName
    ? `${senderName} ने आपके और आपके पूरे परिवार के लिए छठ महापर्व 2026 की पावन शुभकामनाएं भेजी हैं। भगवान सूर्य व छठी मईया का आशीर्वाद प्राप्त करें।`
    : "छठ पूजा 2026 की हार्दिक शुभकामनाएं! अपने नाम और फोटो के साथ खूबसूरत छठ महापर्व ग्रीटिंग कार्ड बनाएं, लाइव टाइमर और भक्ति संगीत के साथ WhatsApp पर शेयर करें।";

  return {
    title,
    description,
    keywords: [
      "chhath puja 2026",
      "chhath mahaparv 2026",
      "छठ पूजा की हार्दिक शुभकामनाएं",
      "छठी मईया विशेस 2026",
      "chhath puja greeting card maker online",
      "happy chhath puja greeting with photo",
      "chhath photo editor online",
      "chhath puja whatsapp status maker 2026",
      "chhath puja wishes with name and photo",
      "surya dev arghya wishes 2026",
      "shubh chhath puja wishes",
      "chhath countdown 2026",
      "free chhath greeting card generator",
    ],
    alternates: {
      canonical: "https://xpertbite.in/chhathPuja2026",
    },
    openGraph: {
      type: "website",
      locale: "hi_IN",
      url: "https://xpertbite.in/chhathPuja2026",
      siteName: "XpertBite Technologies",
      title,
      description,
      images: [
        {
          url: "https://xpertbite.in/chhath/chhath_portrait.jpg",
          width: 1080,
          height: 1080,
          alt: "Chhath Puja 2026 Greetings",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://xpertbite.in/chhath/chhath_portrait.jpg"],
    },
  };
}

export default async function ChhathPujaPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; u?: string; id?: string; slug?: string }>;
}) {
  const params = await searchParams;
  const userSlug = params.u || params.slug || params.id;

  let initialGreeting = null;
  if (userSlug) {
    try {
      if ("chhathGreeting" in prisma) {
        const found = await (prisma as any).chhathGreeting.findFirst({
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

          const isUnique = isUniqueView("chhath", found.slug, clientIp);
          if (isUnique) {
            try {
              await (prisma as any).chhathGreeting.update({
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
        name: "Chhath Puja 2026 Greeting Card Maker",
        alternateName: "छठ पूजा की हार्दिक शुभकामनाएं कार्ड मेकर",
        url: "https://xpertbite.in/chhathPuja2026",
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
        <ChhathPujaClient initialGreeting={initialGreeting} />
      </Suspense>
    </main>
  );
}
