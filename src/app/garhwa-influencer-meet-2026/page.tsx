import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { GarhwaMeetClient } from "./garhwa-client";
import { SEARCH_KEYWORDS } from "./constants";

export const metadata: Metadata = {
  title: "Garhwa Influencer Meet 2026 | Garhwa Creator & YouTuber Meet Jharkhand",
  description:
    "Join the biggest Garhwa Influencer Meet 2026 in Jharkhand! Free Google Form RSVP for YouTubers, Vloggers & Digital Creators.",
  keywords: [
    ...SEARCH_KEYWORDS,
    "garhwa influencer meet 2026 date",
    "garhwa youtuber meetup",
    "garhwa vloggers event",
    "jharkhand creator summit",
    "anil monitor vlogs meet",
    "priyanshu creator meet garhwa",
    "garhwa meet 2026 google form registration",
    "palamu creators",
    "meral influencers",
    "meral creators",
    "miral influencers",
    "ramuna creators",
    "garhwa food delivery app",
    "distdel garhwa",
    "distdel.com",
    "local food delivery app",
    "local food delivery appp",
    "गढ़वा इन्फ्लुएंसर मीट",
    "अनिल मॉनिटर व्लॉग",
    "मेराल इन्फ्लुएंसर",
  ],
  alternates: {
    canonical: "https://xpertbite.in/garhwa-influencer-meet-2026",
  },
  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: "https://xpertbite.in/garhwa-influencer-meet-2026",
    siteName: "XpertBite Technologies",
    title: "Garhwa Influencer Meet 2026 | Jharkhand Mega Creator Summit",
    description:
      "Join creators for the grandest creator meet of 2026 in Garhwa, Jharkhand. Free Google Form registration is open!",
    images: [
      {
        url: "https://xpertbite.in/garhwa-meet/Garhwa%20Influencer%20Meet%20Stage%20Celebration.jpg",
        width: 1280,
        height: 720,
        alt: "Garhwa Influencer Meet 2026 Stage Celebration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garhwa Influencer Meet 2026 | Creator Summit Jharkhand",
    description:
      "Official Garhwa Influencer Meet 2026 portal. Free Google Form registration open!",
    images: ["https://xpertbite.in/garhwa-meet/Garhwa%20Influencer%20Meet%20Stage%20Celebration.jpg"],
  },
};

export default function GarhwaInfluencerMeetPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Event",
        name: "Garhwa Influencer Meet 2026",
        alternateName: "गढ़वा इन्फ्लुएंसर मीट 2026",
        description:
          "Garhwa Influencer Meet 2026 is the largest gathering of digital creators, YouTubers, vloggers, and social media influencers in Garhwa, Jharkhand.",
        startDate: "2026-11-15T09:30:00+05:30",
        endDate: "2026-11-15T18:00:00+05:30",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: "Garhwa Town Hall / Convention Arena",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Town Hall Arena",
            addressLocality: "Garhwa",
            addressRegion: "Jharkhand",
            postalCode: "822114",
            addressCountry: "IN",
          },
        },
        image: ["https://xpertbite.in/garhwa-meet/Garhwa%20Influencer%20Meet%20Stage%20Celebration.jpg"],
        organizer: {
          "@type": "Organization",
          name: "Garhwa Creator Community",
          url: "https://xpertbite.in/garhwa-influencer-meet-2026",
        },
        offers: {
          "@type": "Offer",
          name: "Creator Pass / Free Google Form Entry RSVP",
          price: "0",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: "https://xpertbite.in/garhwa-influencer-meet-2026",
          validFrom: "2026-01-01T00:00:00+05:30",
        },
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
            name: "Garhwa Influencer Meet 2026",
            item: "https://xpertbite.in/garhwa-influencer-meet-2026",
          },
        ],
      },
    ],
  };

  return (
    <PublicLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GarhwaMeetClient />
    </PublicLayout>
  );
}
