import { Suspense } from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { DurgaPujaBengaliClient } from "./durga-puja-bengali-client";
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
    ? `${senderName} এর পক্ষ থেকে শুভ শারদীয়া ও দুর্গাপূজা ২০২৬ এর আন্তরিক শুভেচ্ছা | Subho Durga Puja Greeting Card`
    : "শুভ শারদীয়া ও দুর্গাপূজা ২০২৬ এর শুভেচ্ছা | Bengali Durga Puja 2026 Greeting Card Generator with Photo & Music - XpertBite";

  const description = senderName
    ? `${senderName} আপনার ও আপনার পরিবারের জন্য মা দুর্গার আগমনী শুভেচ্ছা ও আশীর্বাদ পাঠিয়েছেন। লিংকটি খুলুন এবং নিজের সুন্দর দুর্গাপূজা কার্ড তৈরি করুন!`
    : "শুভ শারদীয়া ও দুর্গাপূজা ২০২৬ এর আন্তরিক শুভেচ্ছা! আপনার নিজের নাম ও ছবি দিয়ে আকর্ষণীয় বাংলা দুর্গাপূজা গ্রিটিংস কার্ড তৈরি করুন এবং ১-ক্লিকে WhatsApp-এ শেয়ার করুন।";

  return {
    title,
    description,
    keywords: [
      "durga puja bengali 2026",
      "subho durga puja 2026",
      "subho sharadiya 2026 wishes",
      "শুভ দুর্গাপূজা ২০২৬",
      "শুভ শারদীয়া শুভেচ্ছা",
      "durga puja bengali greeting card maker",
      "durga puja photo frame bengali",
      "bengali durga puja whatsapp status",
      "durga puja 2026 bengali wishes with photo",
    ],
    alternates: {
      canonical: "https://xpertbite.in/durgapujabengali2026",
    },
    openGraph: {
      type: "website",
      locale: "bn_IN",
      url: "https://xpertbite.in/durgapujabengali2026",
      siteName: "XpertBite Technologies",
      title,
      description,
      images: [
        {
          url: "https://xpertbite.in/durgapuja/durga_mata_portrait.jpg",
          width: 1080,
          height: 1080,
          alt: "Maa Durga Bengali Puja 2026 Greetings",
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

export default async function DurgaPujaBengali2026Page({
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

          const isUnique = isUniqueView("durgabengali", found.slug, clientIp);
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
        name: "Bengali Durga Puja 2026 Greeting Card Maker",
        alternateName: "শুভ দুর্গাপূজা ২০২৬ গ্রিটিংস কার্ড মেকার",
        url: "https://xpertbite.in/durgapujabengali2026",
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
          <div className="min-h-screen bg-[#FCF8F3] flex items-center justify-center text-red-900">
            <div className="flex flex-col items-center gap-3">
              <p className="font-bold text-sm">লোড হচ্ছে...</p>
            </div>
          </div>
        }
      >
        <DurgaPujaBengaliClient initialGreeting={initialGreeting} />
      </Suspense>
    </main>
  );
}
