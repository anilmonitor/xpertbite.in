import { Suspense } from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { DurgaPujaClient } from "./durga-puja-client";
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
      if ("durgaGreeting" in prisma) {
        const found = await (prisma as any).durgaGreeting.findFirst({
          where: { OR: [{ slug: userSlug }, { id: userSlug }] },
        });
        if (found?.name) senderName = found.name;
      }
    } catch {}
  }

  const title = senderName
    ? `${senderName} की तरफ से दुर्गा पूजा 2026 की हार्दिक शुभकामनाएं | Durga Puja Greeting Card`
    : "दुर्गा पूजा 2026 की हार्दिक शुभकामनाएं | Durga Puja 2026 Greeting Card Generator with Photo & Music - XpertBite";

  const description = senderName
    ? `${senderName} ने आपके और आपके परिवार के लिए माँ दुर्गा पूजा 2026 की पावन शुभकामनाएं भेजी हैं। लिंक खोलें और अपना ग्रीटिंग कार्ड बनाएं!`
    : "माँ दुर्गा पूजा 2026 की हार्दिक शुभकामनाएं! अपने नाम और फोटो के साथ खूबसूरत हैप्पी दुर्गा पूजा ग्रीटिंग कार्ड बनाएं, लाइव टाइमर और भक्ति संगीत के साथ WhatsApp पर शेयर करें।";

  return {
    title,
    description,
    keywords: [
      "durga puja 2026",
      "durga puja ki hardik shubhkamnaye",
      "दुर्गा पूजा की हार्दिक शुभकामनाएं",
      "durga puja card maker online",
      "happy durga puja 2026 greeting with photo",
      "durga puja photo editor online",
      "durga puja whatsapp status maker",
      "durga puja wishes with name and photo",
      "maa durga photo frame online free",
      "navratri 2026 wishes",
      "shubh durga puja 2026",
      "durga puja countdown 2026",
      "durga puja greeting card online generator",
    ],
    alternates: {
      canonical: "https://xpertbite.in/durgapuja2026",
    },
    openGraph: {
      type: "website",
      locale: "hi_IN",
      url: "https://xpertbite.in/durgapuja2026",
      siteName: "XpertBite Technologies",
      title,
      description,
      images: [
        {
          url: "https://xpertbite.in/durgapuja/durga_mata_portrait.jpg",
          width: 1080,
          height: 1080,
          alt: "Maa Durga Puja 2026 Greetings",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://xpertbite.in/durgapuja/durga_mata_portrait.jpg"],
    },
  };
}

export default async function DurgaPuja2026Page({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; u?: string; id?: string; slug?: string }>;
}) {
  const params = await searchParams;
  const userSlug = params.u || params.slug || params.id;

  let initialGreeting = null;
  if (userSlug) {
    try {
      if ("durgaGreeting" in prisma) {
        const found = await (prisma as any).durgaGreeting.findFirst({
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

          const isUnique = isUniqueView("durga", found.slug, clientIp);
          if (isUnique) {
            try {
              await (prisma as any).durgaGreeting.update({
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
        name: "Durga Puja 2026 Greeting Card Maker",
        alternateName: "दुर्गा पूजा की हार्दिक शुभकामनाएं कार्ड मेकर",
        url: "https://xpertbite.in/durgapuja2026",
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
        <DurgaPujaClient initialGreeting={initialGreeting} />
      </Suspense>
    </main>
  );
}
