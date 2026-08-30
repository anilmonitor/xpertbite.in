import { Suspense } from "react";
import type { Metadata } from "next";
import { DurgaPujaClient } from "./durga-puja-client";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; u?: string; id?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const senderName = params.name ? decodeURIComponent(params.name) : "";

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
      "दुर्गा पूजा विशेस 2026",
      "माँ दुर्गा की हार्दिक बधाई",
      "durga puja festival 2026 date",
      "durga puja photo greeting card whatsapp link",
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

export default function DurgaPuja2026Page() {
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
            name: "Durga Puja 2026 Greeting",
            item: "https://xpertbite.in/durgapuja2026",
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
      <section className="sr-only" aria-label="Durga Puja 2026 Information and Greetings">
        <h1>दुर्गा पूजा 2026 की हार्दिक शुभकामनाएं - Happy Durga Puja Greeting Card Generator</h1>
        <p>
          Celebrate Durga Puja 2026 with joyful festive greetings. Create and share personalized 
          Durga Puja wishes, Navratri greetings, and Maa Durga blessings with your custom name and photo.
          Features include live countdown timers, 1:1 image cropping, devotional music, and direct 1-tap WhatsApp sharing.
        </p>
        <h2>Most Searched Durga Puja Keywords</h2>
        <ul>
          <li>Durga Puja 2026 Date and Shubh Muhurat</li>
          <li>दुर्गा पूजा की हार्दिक शुभकामनाएं संदेश एवं फोटो कार्ड</li>
          <li>Happy Durga Puja WhatsApp Greeting Link Generator</li>
          <li>Maa Durga Divine Blessings Photo Frame 2026</li>
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
        <DurgaPujaClient />
      </Suspense>
    </main>
  );
}

