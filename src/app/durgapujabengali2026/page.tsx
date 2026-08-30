import { Suspense } from "react";
import type { Metadata } from "next";
import { DurgaPujaBengaliClient } from "./durga-puja-bengali-client";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; u?: string; id?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const senderName = params.name ? decodeURIComponent(params.name) : "";

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
      "maa durga bengali status maker",
      "শারদীয়া শুভেচ্ছা বার্তা",
      "durga puja bengali card generator online",
      "kolkata durga puja 2026 date",
      "subho durga puja greeting link with name and photo",
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

export default function DurgaPujaBengali2026Page() {
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
        featureList: [
          "Interactive Square 1:1 Image Cropper",
          "Fast Milliseconds WhatsApp Share Timer",
          "Custom Bengali Share Link",
          "Devotional Background Audio Player",
          "100% Free & Mobile Friendly",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://xpertbite.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Bengali Durga Puja 2026",
            item: "https://xpertbite.in/durgapujabengali2026",
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#FCF8F3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Semantic SEO & Keyword Indexing for Bengali Durga Puja */}
      <section className="sr-only" aria-label="Bengali Durga Puja 2026 Information and Greetings">
        <h1>শুভ শারদীয়া ও দুর্গাপূজা ২০২৬ - Bengali Happy Durga Puja Greeting Card Generator</h1>
        <p>
          Celebrate Bengali Durga Puja 2026 with joy. Create and share personalized Subho Sharadiya greetings, 
          Durga Puja wishes, and Maa Durga blessings with your custom Bengali name and photo.
          Features include live countdown timers, 1:1 image cropping, devotional Agomoni music, and direct 1-tap WhatsApp sharing.
        </p>
        <h2>Most Searched Bengali Durga Puja Keywords</h2>
        <ul>
          <li>Bengali Durga Puja 2026 Date and Shobho Muhurat</li>
          <li>শুভ শারদীয়া ও দুর্গাপূজার শুভেচ্ছা বার্তা ও ফটো কার্ড</li>
          <li>Subho Durga Puja WhatsApp Greeting Link Generator</li>
          <li>Maa Durga Divine Blessings Bengali Photo Frame 2026</li>
        </ul>
      </section>

      <Suspense
        fallback={
          <div className="min-h-screen bg-[#FCF8F3] flex items-center justify-center text-red-900">
            <div className="flex flex-col items-center gap-3">
              <p className="font-bold text-sm">লোড হচ্ছে...</p>
            </div>
          </div>
        }
      >
        <DurgaPujaBengaliClient />
      </Suspense>
    </main>
  );
}
