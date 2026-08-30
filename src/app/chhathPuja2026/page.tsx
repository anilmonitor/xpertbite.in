import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ChhathPujaClient } from "./chhath-puja-client";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; u?: string; id?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const senderName = params.name ? decodeURIComponent(params.name) : "";

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
      "छठ पूजा कार्ड ऑनलाइन बनाएं",
      "भगवान सूर्य अर्घ्य ग्रीटिंग कार्ड",
      "bihar chhath puja greeting online",
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

export default function ChhathPujaPage() {
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
        featureList: [
          "Interactive Square 1:1 Image Cropper",
          "Fast Milliseconds WhatsApp Share Timer",
          "Sequential Custom Share Link",
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
            name: "Chhath Puja 2026 Greeting",
            item: "https://xpertbite.in/chhathPuja2026",
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

      {/* Semantic SEO & Keyword Indexing (Hidden for accessibility bots & search crawlers) */}
      <section className="sr-only" aria-label="Chhath Puja 2026 Information and Greetings">
        <h1>छठ पूजा 2026 की हार्दिक शुभकामनाएं - Happy Chhath Puja Greeting Card Generator</h1>
        <p>
          Celebrate Chhath Puja Mahaparv 2026 with pious devotion to Lord Surya and Chhathi Maiya. Create and share personalized 
          Chhath wishes, Sandhya and Usha Arghya blessings, and festive cards with your custom name and photo.
          Features include live countdown timers, 1:1 image cropping, devotional music, and direct 1-tap WhatsApp sharing.
        </p>
        <h2>Most Searched Chhath Puja Keywords</h2>
        <ul>
          <li>Chhath Puja 2026 Date and Sandhya/Usha Arghya Timings</li>
          <li>छठ पूजा की हार्दिक शुभकामनाएं संदेश एवं फोटो कार्ड</li>
          <li>Happy Chhath Puja WhatsApp Greeting Link Generator</li>
          <li>Lord Surya Deva & Chhathi Maiya Divine Blessings Photo Frame 2026</li>
        </ul>
      </section>

      <Suspense
        fallback={
          <div className="min-h-screen bg-[#FCF8F3] flex items-center justify-center text-amber-900">
            <div className="flex flex-col items-center gap-3">
              <p className="font-bold text-sm">लोड हो रहा है...</p>
            </div>
          </div>
        }
      >
        <ChhathPujaClient />
      </Suspense>
    </main>
  );
}
