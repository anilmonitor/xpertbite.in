import { Suspense } from "react";
import type { Metadata } from "next";
import { DurgaPujaClient } from "./durga-puja-client";

export const metadata: Metadata = {
  title: "Durga Puja 2026 Greeting Card Maker Online | दुर्गा पूजा की हार्दिक शुभकामनाएं - Photo & Name Greeting Maker",
  description:
    "माँ दुर्गा पूजा 2026 की हार्दिक शुभकामनाएं! Create your personalized Happy Durga Puja greeting card with your photo and name online for free. Download HD card & share directly on WhatsApp.",
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
    "durga puja festival 2026",
    "durga aarti bhajan online",
    "durga puja greeting download hd",
  ],
  alternates: {
    canonical: "https://xpertbite.in/durgapuja2026",
  },
  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: "https://xpertbite.in/durgapuja2026",
    siteName: "XpertBite Technologies",
    title: "दुर्गा पूजा की हार्दिक शुभकामनाएं 2026 | Create Personalized Card with Photo & Name",
    description:
      "माँ दुर्गा का पावन आशीर्वाद पाएं! अपने नाम और फोटो के साथ खूबसूरत दुर्गा पूजा ग्रीटिंग कार्ड बनाएं और WhatsApp पर अपनों को भेजें।",
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
    title: "दुर्गा पूजा की हार्दिक शुभकामनाएं 2026 (Free HD Card Maker)",
    description:
      "Create and download your customized Happy Durga Puja 2026 card in HD. Add your photo, enter your name and share with your loved ones on WhatsApp!",
    images: ["https://xpertbite.in/durgapuja/durga_mata_portrait.jpg"],
  },
};

export default function DurgaPuja2026Page() {
  const jsonLd = {
    "@context": "https://schema.org",
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
      "Photo Upload with Golden Devotional Frame",
      "Custom Name & Hindi Blessing Wishes",
      "Instant WhatsApp 1-Tap Sharing",
      "Devotional MP3 Bhajan Audio Player",
      "HD Greeting Card Canvas Download",
      "100% Mobile Responsive & Free",
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
        <DurgaPujaClient />
      </Suspense>
    </main>
  );
}
