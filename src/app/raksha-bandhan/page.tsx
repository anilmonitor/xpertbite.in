import type { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import {
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Share2,
  Award,
  ArrowRight,
  Heart,
  Gift,
  Sparkles,
  Clock,
  Smartphone,
  Star,
} from "lucide-react";
import { RakhiCountdownLauncher } from "./rakhi-countdown-button";
import { RakhiSiteLink } from "./rakhi-site-link";
import { TirangaSocialBanner } from "@/app/idcard/tiranga-social-banner";

export const metadata: Metadata = {
  title: "Raksha Bandhan Card Maker Online 2026 (Free HD) | रक्षा बंधन कार्ड ऑनलाइन बनाएं - Happy Rakhi Card Generator",
  description:
    "Free Raksha Bandhan Card Maker 2026 online tool. Upload your photo, add your name & download beautiful HD Rakhi greeting cards instantly at rakchhabandhan.vercel.app for Raksha Bandhan celebration.",
  keywords: [
    "raksha bandhan card maker online",
    "raksha bandhan card online 2026",
    "raksha bandhan card kaise banaye",
    "happy rakhi card generator",
    "raksha bandhan card 2026 free download",
    "rakhi card maker online",
    "raksha bandhan greeting card maker",
    "rakchhabandhan.vercel.app",
    "rakhi photo card maker online",
    "raksha bandhan wishes card maker",
    "happy raksha bandhan card with photo",
    "rakhi card maker app online",
    "raksha bandhan dp maker with name and photo",
    "free rakhi card generator",
    "raksha bandhan photo editor online",
    "brother sister rakhi card maker",
  ],
  alternates: {
    canonical: "https://xpertbite.in/raksha-bandhan",
  },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://xpertbite.in/raksha-bandhan",
    siteName: "XpertBite Technologies",
    title: "Raksha Bandhan Card Maker Online 2026 | रक्षा बंधन कार्ड ऑनलाइन बनाएं (Free HD Tool)",
    description:
      "Create and download your customized Happy Raksha Bandhan Card 2026 in HD resolution for free at rakchhabandhan.vercel.app. Add your photo, enter name and share on WhatsApp!",
    images: [
      {
        url: "https://xpertbite.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raksha Bandhan Card Maker Online 2026 - Happy Rakhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raksha Bandhan Card Maker Online 2026 (Free HD) | रक्षा बंधन कार्ड",
    description:
      "Generate your Happy Raksha Bandhan greeting card online in seconds. Free download link: rakchhabandhan.vercel.app.",
    images: ["https://xpertbite.in/og-image.png"],
  },
};

export default function RakshaBandhanPage() {
  const EXTERNAL_GENERATOR_URL = "https://rakchhabandhan.vercel.app";

  // Structured Data (JSON-LD) for Rich Google Search Results
  const jsonLdWebApplication = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Raksha Bandhan Card Maker Online 2026",
    alternateName: "Happy Rakhi Card Generator",
    url: "https://rakchhabandhan.vercel.app",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "All (Android, iOS, Windows, macOS, Linux)",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "1.0 (2026 Edition)",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "8520",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "HD Print-Ready Export",
      "Instant Generation",
      "In-Browser Safe Photo Processing",
      "Beautiful Rakhi Frames & Borders",
      "WhatsApp & Social Media Ready",
      "100% Free with No OTP or Sign-up",
    ],
    description:
      "Free online tool to generate personalized Happy Raksha Bandhan greeting cards with customizable name, photo frame, and beautiful Rakhi designs.",
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Make Raksha Bandhan Card Online in 2026 (Step by Step Guide)",
    description:
      "A complete guide on how to create, personalize with photo & name, and download a HD Raksha Bandhan greeting card online for free using the generator tool.",
    image: "https://xpertbite.in/og-image.png",
    totalTime: "PT15S",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "0",
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: "Your Photo (JPG, PNG, WebP)",
      },
      {
        "@type": "HowToSupply",
        name: "Full Name & Wishes Message",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Raksha Bandhan Card Online Generator (rakchhabandhan.vercel.app)",
      },
      {
        "@type": "HowToTool",
        name: "Smartphone (Android/iPhone) or Computer Web Browser",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Visit Raksha Bandhan Card Generator Portal",
        text: "Open https://rakchhabandhan.vercel.app on your mobile or PC browser.",
        url: "https://xpertbite.in/raksha-bandhan#step-1",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Enter Name and Wishes Message",
        text: "Type your name (in English or Hindi) and add a heartfelt Rakhi message.",
        url: "https://xpertbite.in/raksha-bandhan#step-2",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Upload Photo & Choose Design",
        text: "Select a photo from your gallery and choose from beautiful Rakhi card designs.",
        url: "https://xpertbite.in/raksha-bandhan#step-3",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Generate & Download HD Rakhi Card",
        text: "Click Generate to render your HD greeting card and download the image!",
        url: "https://xpertbite.in/raksha-bandhan#step-4",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Raksha Bandhan Card Maker Online 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Raksha Bandhan Card Maker 2026 is a free online tool that allows you to create personalized Rakhi greeting cards with your photo, name, and heartfelt wishes to celebrate the bond between brothers and sisters.",
        },
      },
      {
        "@type": "Question",
        name: "How can I make my Raksha Bandhan card online with photo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can make your Raksha Bandhan card in 4 easy steps: (1) Go to rakchhabandhan.vercel.app, (2) Enter your Name and wishes, (3) Upload your photo, and (4) Click Generate & Download to save your card in HD.",
        },
      },
      {
        "@type": "Question",
        name: "Is this Raksha Bandhan Card Generator tool completely free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, it is 100% free of cost. There are no hidden fees, subscriptions, or OTP registrations required to generate and download your Rakhi greeting card.",
        },
      },
      {
        "@type": "Question",
        name: "Can I share my Raksha Bandhan card on WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! The card is generated in HD quality, perfectly sized for WhatsApp sharing, Instagram Stories, Facebook posts, and direct messaging to your brother or sister.",
        },
      },
      {
        "@type": "Question",
        name: "Is my uploaded photo safe and private?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100% safe. The image processing is executed entirely within your web browser. Your photos are not uploaded or stored on any remote server.",
        },
      },
      {
        "@type": "Question",
        name: "When is Raksha Bandhan 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Raksha Bandhan 2026 falls on Tuesday, 19th August 2026. You can create your personalized Rakhi cards ahead of time using this free online tool.",
        },
      },
      {
        "@type": "Question",
        name: "Can I write my name in Hindi on the Rakhi Card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the Raksha Bandhan Card generator fully supports Hindi (Devanagari) Unicode text. You can type or paste your name in Hindi, Marathi, Gujarati, Bengali, Tamil, Telugu, and other Indian languages.",
        },
      },
    ],
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
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
        name: "Tools & Guides",
        item: "https://xpertbite.in/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Raksha Bandhan Card Maker Online 2026",
        item: "https://xpertbite.in/raksha-bandhan",
      },
    ],
  };

  return (
    <PublicLayout>
      {/* Inject Structured Data for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApplication) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <article className="min-h-screen">
        {/* ─── Hero Section ───────────────────────────────────── */}
        <header className="pt-24 pb-12 lg:pt-32 lg:pb-16 border-b border-border/40 bg-gradient-to-b from-pink-500/5 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Navigation Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                <Link
                  href="/idcard"
                  className="px-3 py-1 rounded-full text-xs font-medium bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground border border-border transition-all flex items-center gap-1"
                >
                  <span>🇮🇳 Tiranga ID Card</span>
                </Link>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-600 dark:text-pink-400 text-xs font-semibold">
                  <Heart className="h-3.5 w-3.5 fill-current" />
                  <span>Raksha Bandhan Card Maker</span>
                </div>
              </div>

              {/* Main Title (H1) */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-[1.15] mb-5">
                Raksha Bandhan Card Maker{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-rose-500">
                  Online 2026
                </span>
              </h1>

              {/* Subtitles (Bilingual Hindi + English for SEO) */}
              <p className="text-base sm:text-xl text-muted-foreground font-medium max-w-3xl mx-auto mb-4 leading-relaxed">
                रक्षा बंधन कार्ड कैसे बनाएं? Create your personalized Rakhi greeting card for free.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
                Celebrate the beautiful bond of brother and sister this Raksha Bandhan 2026. Create stunning Rakhi greeting cards with your photo, name, and heartfelt wishes. Download and share on WhatsApp instantly!
              </p>

              {/* Rating & Trust Metrics */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground mb-8">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500" />
                  ))}
                  <span className="font-bold text-foreground ml-1">4.8 / 5.0</span>
                </div>
                <span>•</span>
                <span>🎀 Over 8,500+ Cards Generated</span>
                <span>•</span>
                <span>⚡ 100% Free & No OTP Required</span>
              </div>

              {/* Quick Feature Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
                {[
                  { icon: Zap, label: "Instant Creation", desc: "Quick Generation" },
                  { icon: ShieldCheck, label: "100% Private", desc: "Browser-side Safe" },
                  { icon: Gift, label: "Beautiful Designs", desc: "Rakhi Card Frames" },
                  { icon: Share2, label: "WhatsApp Ready", desc: "Direct Share & DP" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-card border border-border text-left flex flex-col justify-between shadow-sm"
                  >
                    <item.icon className="h-5 w-5 text-pink-500 mb-2" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-foreground">{item.label}</div>
                      <div className="text-[11px] text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* ─── What is Raksha Bandhan Card & Why Create One? ────────── */}
        <section className="py-14 lg:py-18 border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                    What is Raksha Bandhan? <br />
                    <span className="text-muted-foreground text-lg font-normal">रक्षा बंधन क्या है?</span>
                  </h2>
                  <div className="space-y-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <p>
                      <strong>Raksha Bandhan</strong> (रक्षा बंधन) is one of the most cherished Indian festivals that celebrates the eternal bond of love, protection, and care between brothers and sisters.
                    </p>
                    <p>
                      Sisters tie a sacred thread called <strong>Rakhi</strong> on their brother&apos;s wrist, symbolizing their love and prayers for their well-being, while brothers pledge to protect and support their sisters.
                    </p>
                    <p>
                      Using the free tool at <strong className="text-foreground">rakchhabandhan.vercel.app</strong>, you can create beautiful personalized Rakhi greeting cards to share with your siblings.
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 rounded-2xl border border-border bg-card shadow-sm space-y-3.5">
                  <h3 className="text-base sm:text-lg font-heading font-bold text-foreground flex items-center gap-2">
                    <Award className="h-5 w-5 text-pink-500" />
                    Why Create a Raksha Bandhan Card?
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                    {[
                      "Express your love for your brother or sister with a personalized card",
                      "Share beautiful Rakhi wishes on WhatsApp, Instagram & Facebook",
                      "Create cards with your photo and heartfelt messages in Hindi or English",
                      "Send digital Rakhi to siblings living far away in different cities or countries",
                      "100% Free tool with instant HD download — no sign-up required",
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-pink-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Key Features of Rakhi Card Maker Tool ───────────────────── */}
        <section className="py-14 border-b border-border/40 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">
                  Features of Raksha Bandhan Card Maker 2026
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Why thousands of people choose our Raksha Bandhan greeting card generator tool.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: Heart,
                    title: "Beautiful Rakhi Designs",
                    desc: "Choose from stunning Rakhi-themed frames, borders, and decorative elements.",
                  },
                  {
                    icon: Sparkles,
                    title: "HD Quality Export",
                    desc: "Download crystal-clear HD cards perfect for printing and digital sharing.",
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile & Desktop Optimized",
                    desc: "Works smoothly on Android, iPhone, iPad, Windows PC, Mac, and Linux browsers.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "100% Client-Side Privacy",
                    desc: "Your photos stay on your device and are never uploaded to any remote server.",
                  },
                  {
                    icon: Clock,
                    title: "Instant Card Generation",
                    desc: "No waiting, no ads interruptions, and no OTP verification required.",
                  },
                  {
                    icon: Gift,
                    title: "Hindi & English Support",
                    desc: "Write your wishes in English, Hindi (हिन्दी), or any regional Indian language.",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-border bg-card shadow-sm space-y-2 hover:border-pink-500/40 transition-colors"
                  >
                    <div className="h-9 w-9 rounded-lg bg-pink-500/10 text-pink-500 flex items-center justify-center mb-2">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Step by Step Guide ── */}
        <section id="step-by-step-guide" className="py-14 lg:py-20 border-b border-border/40 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold mb-3">
                  How to Make Raksha Bandhan Card Online <br />
                  <span className="text-muted-foreground text-lg sm:text-xl font-medium">
                    रक्षा बंधन कार्ड कैसे बनाएं (सरल तरीका)
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Follow these 4 simple steps to create your personalized Raksha Bandhan greeting card.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    num: 1,
                    title: "Open the Raksha Bandhan Card Maker",
                    desc: "Click the generator button at the bottom of this page or navigate to rakchhabandhan.vercel.app on any web browser.",
                  },
                  {
                    num: 2,
                    title: "Enter Your Name & Wishes Message",
                    desc: "Type your full name in English or Hindi (e.g., 'आपकी बहन' / 'Your Sister') and add a beautiful Rakhi wish.",
                  },
                  {
                    num: 3,
                    title: "Upload Your Photo & Select Card Design",
                    desc: "Click Upload Photo, select a clear photo from your gallery, and choose from beautiful Rakhi card templates.",
                  },
                  {
                    num: 4,
                    title: "Generate & Download HD Rakhi Card",
                    desc: "Click the 'Generate Rakhi Card' button. Your HD greeting card is ready in seconds. Download and share on WhatsApp!",
                  },
                ].map((stepItem) => (
                  <div
                    key={stepItem.num}
                    id={`step-${stepItem.num}`}
                    className="p-5 sm:p-6 rounded-2xl border border-border bg-card shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className={`h-8 w-8 rounded-lg ${stepItem.num === 4 ? 'bg-pink-500/10 text-pink-600 dark:text-pink-400' : 'bg-pink-500/10 text-pink-500'} font-bold flex items-center justify-center text-sm`}>
                        {stepItem.num}
                      </div>
                      <div>
                        <span className="text-[11px] uppercase font-bold tracking-wider text-pink-500">
                          Step {stepItem.num}
                        </span>
                        <h3 className="text-base sm:text-lg font-heading font-bold text-foreground">
                          {stepItem.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-11">
                      {stepItem.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Specifications Table ─────────────────────────────── */}
        <section className="py-14 border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center max-w-xl mx-auto mb-8">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">
                  Card Specifications & Details
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Details of the generated Raksha Bandhan greeting card.
                </p>
              </div>

              <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-border">
                    {[
                      { key: "Tool Name", value: "Raksha Bandhan Card Maker Online 2026" },
                      { key: "Official Generator Link", value: "https://rakchhabandhan.vercel.app" },
                      { key: "Generation Cost", value: "100% Free (No payment / subscription)" },
                      { key: "Output Resolution", value: "HD Quality (Print Ready)" },
                      { key: "File Format", value: "High Quality PNG / JPG Image" },
                      { key: "Supported Languages", value: "English, Hindi, Marathi, Bengali, Tamil, Telugu, etc." },
                      { key: "Data Privacy", value: "Client-side browser processing (Zero server storage)" },
                      { key: "Device Compatibility", value: "Android Mobile, iPhone, iPad, Windows PC, Mac, Linux" },
                      { key: "Raksha Bandhan 2026 Date", value: "Tuesday, 19th August 2026" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-muted/10" : "bg-card"}>
                        <td className="px-4 py-3 font-semibold text-foreground w-1/3 sm:w-1/4">
                          {row.key}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Frequently Asked Questions (FAQ) ────────────────── */}
        <section className="py-14 lg:py-18 border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold mb-2">
                  Frequently Asked Questions (FAQ)
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Everything you need to know about creating your Raksha Bandhan greeting card.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    q: "What is Raksha Bandhan Card Maker Online 2026?",
                    a: "Raksha Bandhan Card Maker 2026 is a free online digital tool that allows you to design, customize, and download personalized Rakhi greeting cards featuring your photo, name, and heartfelt wishes for your brother or sister.",
                  },
                  {
                    q: "How can I make my Raksha Bandhan card online with photo?",
                    a: "You can make your Raksha Bandhan card in 4 easy steps: (1) Go to rakchhabandhan.vercel.app, (2) Enter your Name and wishes, (3) Upload your photo, and (4) Click Generate & Download to save your card in HD quality.",
                  },
                  {
                    q: "Is this Raksha Bandhan Card Generator free?",
                    a: "Yes, it is 100% free of cost. There are no hidden fees, subscriptions, or OTP registrations required to generate and download your Rakhi greeting card.",
                  },
                  {
                    q: "Can I share my Raksha Bandhan card on WhatsApp?",
                    a: "Yes! The card is generated in HD quality, perfectly sized for WhatsApp sharing, Instagram Stories, Facebook posts, and direct messaging to your siblings.",
                  },
                  {
                    q: "Is my uploaded photo safe and private?",
                    a: "Yes, 100% safe. The image processing is done entirely within your web browser using secure technology. Your photos are never uploaded or stored on any remote server.",
                  },
                  {
                    q: "When is Raksha Bandhan 2026?",
                    a: "Raksha Bandhan 2026 is on Tuesday, 19th August 2026. Make sure to create your personalized Rakhi cards before the festival and surprise your siblings!",
                  },
                  {
                    q: "Can I write wishes in Hindi?",
                    a: "Yes! The Raksha Bandhan Card generator fully supports Hindi (Devanagari) Unicode text. You can type your name and wishes in Hindi, Marathi, Gujarati, Bengali, Tamil, Telugu, and other Indian languages.",
                  },
                ].map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-xl border border-border bg-card shadow-sm overflow-hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm sm:text-base font-semibold text-foreground hover:bg-muted/30 transition-colors list-none [&::-webkit-details-marker]:hidden">
                      <span>{faq.q}</span>
                      <span className="ml-2 text-muted-foreground group-open:rotate-45 transition-transform text-xl font-light">+</span>
                    </summary>
                    <div className="px-5 pb-4 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── OFFICIAL WEBSITE LINK AT THE VERY BOTTOM ─────────── */}
        <section className="py-16 bg-gradient-to-b from-background to-pink-500/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto rounded-2xl border border-pink-500/20 bg-card p-8 sm:p-12 text-center shadow-lg">
              <div className="text-3xl mb-3">🎀</div>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold mb-3">
                Make Your Raksha Bandhan Card Online
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-6">
                Click the button below to create and download your personalized Happy Raksha Bandhan greeting card for free.
              </p>

              {/* The Interactive Countdown Launcher (12s timer) */}
              <RakhiCountdownLauncher generatorUrl={EXTERNAL_GENERATOR_URL} />

              <div className="mt-4">
                <RakhiSiteLink
                  url={EXTERNAL_GENERATOR_URL}
                  displayUrl="rakchhabandhan.vercel.app"
                />
              </div>

              {/* Social Media Followers Banner */}
              <div className="mt-8 pt-6 border-t border-border/60">
                <TirangaSocialBanner url="https://easylike.in/" />
              </div>
            </div>
          </div>
        </section>
      </article>
    </PublicLayout>
  );
}
