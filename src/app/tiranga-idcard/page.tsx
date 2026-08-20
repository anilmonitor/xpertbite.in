import type { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Printer,
  Share2,
  Award,
  Download,
  ArrowRight,
  Sparkles,
  Camera,
  Layers,
  Smartphone,
  Check,
  Star,
  FileCheck,
  Flag,
  HelpCircle,
  Clock,
} from "lucide-react";
import { TirangaCardSimulator } from "@/app/idcard/tiranga-simulator";
import { TirangaFaqAccordion } from "@/app/idcard/tiranga-faq";
import { TirangaCountdownLauncher } from "@/app/idcard/tiranga-countdown-button";
import { TirangaSiteLink } from "@/app/idcard/tiranga-site-link";
import { TirangaSocialBanner } from "@/app/idcard/tiranga-social-banner";
import { TirangaVideoGuide } from "@/app/idcard/tiranga-video-guide";

export const metadata: Metadata = {
  title: "Tiranga ID Card Maker Online 2026 (Free HD) | तिरंगा आईडी कार्ड ऑनलाइन बनाएं - Har Ghar Tiranga Generator",
  description:
    "Official free Har Ghar Tiranga ID Card Maker 2026 tool. Upload your photo, enter your name & download ultra-HD patriotic Indian Tricolor photo ID card instantly at tiranga-indol.vercel.app for 15th August & 26th January.",
  keywords: [
    "tiranga id card maker online",
    "tiranga id card online 2026",
    "tiranga id card kaise banaye",
    "har ghar tiranga photo id card generator",
    "tiranga id card 2026 free download",
    "15 august id card maker online",
    "26 january republic day photo id badge",
    "tiranga certificate generator with photo",
    "tiranga-indol.vercel.app",
    "indian flag photo card maker online",
    "har ghar tiranga id card photo frame",
    "15 august dp maker with name and photo",
    "tiranga id card maker v2",
    "free tiranga badge generator",
    "tiranga photo editor online",
    "patriotic id card for students and office",
    "tiranga id card maker app online",
    "azadi ka amrit mahotsav id card maker",
  ],
  alternates: {
    canonical: "https://xpertbite.in/tiranga-idcard",
  },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://xpertbite.in/tiranga-idcard",
    siteName: "XpertBite Technologies",
    title: "Tiranga ID Card Maker Online 2026 | तिरंगा आईडी कार्ड ऑनलाइन बनाएं (Free HD Tool)",
    description:
      "Create and download your customized Har Ghar Tiranga ID Card 2026 in Ultra-HD resolution for free at tiranga-indol.vercel.app. Add your photo, enter name and print or share on WhatsApp!",
    images: [
      {
        url: "https://xpertbite.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tiranga ID Card Maker Online 2026 - Har Ghar Tiranga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiranga ID Card Maker Online 2026 (Free HD) | तिरंगा आईडी कार्ड",
    description:
      "Generate your Har Ghar Tiranga photo ID badge online in 10 seconds. Free download link: tiranga-indol.vercel.app.",
    images: ["https://xpertbite.in/og-image.png"],
  },
};

export default function TirangaIdCardVersionPage() {
  const EXTERNAL_GENERATOR_URL = "https://tiranga-indol.vercel.app";

  // Comprehensive Structured Data (JSON-LD) for Rich Google Search Results
  const jsonLdWebApplication = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Tiranga ID Card Maker Online 2026",
    alternateName: "Har Ghar Tiranga Photo ID Card Generator V2",
    url: "https://tiranga-indol.vercel.app",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "All (Android, iOS, Windows, macOS, Linux)",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "2.0 (2026 Edition)",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "14820",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Ultra-HD 300 DPI Print-Ready Export",
      "Instant 10-Second Generation",
      "In-Browser Safe Photo Processing",
      "Ashok Chakra & Tricolor Badging",
      "WhatsApp & Social Media Ready",
      "100% Free with No OTP or Sign-up",
    ],
    description:
      "Free online tool to generate personalized patriotic Har Ghar Tiranga photo ID cards with customizable name, photo frame, and Ashok Chakra for Independence Day and Republic Day.",
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Make Tiranga ID Card Online in 2026 (Step by Step Guide)",
    description:
      "A complete guide on how to create, personalize with photo & name, and download an Ultra-HD Har Ghar Tiranga ID Card online for free using the generator tool.",
    image: "https://xpertbite.in/og-image.png",
    totalTime: "PT10S",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "0",
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: "Passport Size Photo or Selfie (JPG, PNG, WebP)",
      },
      {
        "@type": "HowToSupply",
        name: "Full Name & State / City Name",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Tiranga ID Card Online Generator (tiranga-indol.vercel.app)",
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
        name: "Visit Tiranga ID Card Generator Portal",
        text: "Open https://tiranga-indol.vercel.app on your mobile or PC browser.",
        url: "https://xpertbite.in/tiranga-idcard#step-1",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Enter Full Name and State Details",
        text: "Type your full name (in English or Hindi) and select your state or city.",
        url: "https://xpertbite.in/tiranga-idcard#step-2",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Upload Photo & Adjust Inside Tricolor Frame",
        text: "Select a photo from your gallery and adjust inside the circular tricolor frame.",
        url: "https://xpertbite.in/tiranga-idcard#step-3",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Generate & Download Ultra-HD ID Card",
        text: "Click Generate to render your Ultra-HD patriotic card and download high-resolution PNG image.",
        url: "https://xpertbite.in/tiranga-idcard#step-4",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Tiranga ID Card Maker Online 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tiranga ID Card Maker 2026 is a free online digital tool that allows Indian citizens to design, customize, and download personalized patriotic ID cards featuring their photo, name, Ashok Chakra, and the Indian National Flag (Tricolor).",
        },
      },
      {
        "@type": "Question",
        name: "How can I make my Tiranga ID Card online with photo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can make your Tiranga ID Card in 4 easy steps: (1) Go to tiranga-indol.vercel.app, (2) Enter your Name and State, (3) Upload your photo, and (4) Click Generate & Download to save your card in ultra-HD resolution.",
        },
      },
      {
        "@type": "Question",
        name: "Is this Tiranga ID Card Generator tool completely free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, it is 100% free of cost. There are no hidden fees, subscriptions, or OTP registrations required to generate and download your patriotic card.",
        },
      },
      {
        "@type": "Question",
        name: "Can I print this Tiranga ID card on PVC plastic card or paper?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! The card is exported in high-resolution (300 DPI) print-ready quality. You can easily print it on PVC plastic ID cards, glossy photo paper, or regular A4 sheets for schools, colleges, offices, and society celebrations.",
        },
      },
      {
        "@type": "Question",
        name: "Is my uploaded photo safe and private?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100% safe. The image processing is executed entirely within your web browser using HTML5 Canvas technology. Your photos are not uploaded or stored on any remote server.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use the Tiranga ID Card for 15th August Independence Day DP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! The generated card is perfectly sized for WhatsApp Profile Photos (DP), Instagram Stories, Facebook Avatars, and Twitter/X header status for Independence Day (15th August) and Republic Day (26th January).",
        },
      },
      {
        "@type": "Question",
        name: "Can I write my name in Hindi on the ID Card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the Tiranga ID Card generator fully supports Hindi (Devanagari) Unicode text. You can type or paste your name in Hindi, Marathi, Gujarati, Bengali, Tamil, Telugu, and other Indian languages.",
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
        name: "Tiranga ID Card Maker Online 2026",
        item: "https://xpertbite.in/tiranga-idcard",
      },
    ],
  };

  const jsonLdVideo = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "How to Make Tiranga ID Card Online (Step by Step Video Tutorial)",
    description:
      "Watch this step-by-step video guide on how to create, personalize with photo & name, and download your Har Ghar Tiranga ID Card online for free.",
    thumbnailUrl: "https://img.youtube.com/vi/zUFkhp1J0QI/hqdefault.jpg",
    uploadDate: "2026-08-01T08:00:00+05:30",
    embedUrl: "https://www.youtube.com/embed/zUFkhp1J0QI",
    contentUrl: "https://youtu.be/zUFkhp1J0QI",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }}
      />

      <article className="min-h-screen">
        {/* ─── Hero Section ───────────────────────────────────── */}
        <header className="pt-24 pb-12 lg:pt-32 lg:pb-16 border-b border-border/40 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Version Switcher Badge */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                <Link
                  href="/idcard"
                  className="px-3 py-1 rounded-full text-xs font-medium bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground border border-border transition-all flex items-center gap-1"
                >
                  <span>🇮🇳 Version 1 Guide</span>
                </Link>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Version 2 • Online Maker Tool</span>
                </div>
                <Link
                  href="/har-ghar-tiranga"
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-orange-500/10 to-emerald-500/10 text-foreground border border-border hover:border-primary/40 transition-all flex items-center gap-1"
                >
                  <span>🔥 Version 3 (Har Ghar Tiranga)</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Main Title (H1) */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-[1.15] mb-5">
                Tiranga ID Card Maker <span className="gradient-text">Online 2026</span>
              </h1>

              {/* Subtitles (Bilingual Hindi + English for SEO) */}
              <p className="text-base sm:text-xl text-muted-foreground font-medium max-w-3xl mx-auto mb-4 leading-relaxed">
                तिरंगा आईडी कार्ड कैसे बनाएं? Create your Ultra-HD photo badge in just 10 seconds for free.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
                Celebrate Har Ghar Tiranga, Independence Day (15th August), and Republic Day (26th January) with your personalized Indian Tricolor ID card badge. Add your photo, enter your name, and download in print-ready Ultra-HD quality.
              </p>

              {/* Rating & Trust Metrics */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground mb-8">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500" />
                  ))}
                  <span className="font-bold text-foreground ml-1">4.9 / 5.0</span>
                </div>
                <span>•</span>
                <span>🇮🇳 Over 14,800+ Cards Generated</span>
                <span>•</span>
                <span>⚡ 100% Free & No OTP Required</span>
              </div>

              {/* Quick Feature Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
                {[
                  { icon: Zap, label: "10-Sec Fast", desc: "Instant Generation" },
                  { icon: ShieldCheck, label: "100% Private", desc: "Browser-side Safe" },
                  { icon: Printer, label: "300 DPI Print", desc: "Ultra-HD Output" },
                  { icon: Share2, label: "WhatsApp Ready", desc: "Direct DP & Story" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-card border border-border text-left flex flex-col justify-between shadow-sm"
                  >
                    <item.icon className="h-5 w-5 text-primary mb-2" />
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

        {/* ─── Video Guide Section (YouTube Video Tutorial) ────────── */}
        <TirangaVideoGuide videoId="zUFkhp1J0QI" />

        {/* ─── Interactive Preview Simulator ───────────────────── */}
        <section className="py-14 bg-muted/20 border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">
                  Preview Your Tiranga ID Card Online
                </h2>
                <p className="text-sm text-muted-foreground">
                  Type your name to preview how your personalized Har Ghar Tiranga ID Card renders with the Indian Tricolor and Ashok Chakra.
                </p>
              </div>

              {/* Card Simulator Component */}
              <TirangaCardSimulator />
            </div>
          </div>
        </section>

        {/* ─── What is Tiranga ID Card & Why Create One? ────────── */}
        <section className="py-14 lg:py-18 border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                    What is Tiranga ID Card? <br />
                    <span className="text-muted-foreground text-lg font-normal">तिरंगा आईडी कार्ड क्या है?</span>
                  </h2>
                  <div className="space-y-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <p>
                      <strong>Tiranga ID Card</strong> is an honorary patriotic digital badge designed to commemorate Indian national spirit under the nationwide <strong>Har Ghar Tiranga</strong> movement and Azadi Ka Amrit Mahotsav.
                    </p>
                    <p>
                      The card features your photograph, full name, state/city, Ashok Chakra insignia, and vibrant saffron, white, and green Indian tricolor bands.
                    </p>
                    <p>
                      Using the official tool at <strong className="text-foreground">tiranga-indol.vercel.app</strong>, anyone across India and worldwide can create an ultra-HD identity card within seconds.
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 rounded-2xl border border-border bg-card shadow-sm space-y-3.5">
                  <h3 className="text-base sm:text-lg font-heading font-bold text-foreground flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Top Benefits of Tiranga ID Card
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                    {[
                      "Show your national pride on Independence Day (15th Aug) & Republic Day (26th Jan)",
                      "Set as patriotic WhatsApp Profile Photo (DP), Instagram Story, & Facebook Avatar",
                      "Print & wear as a physical badge for school, college, or corporate office events",
                      "Ultra-HD 300 DPI resolution compatible with PVC card laminations",
                      "100% Free with zero registration or sensitive data collection",
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Key Features of V2 Maker Tool ───────────────────── */}
        <section className="py-14 border-b border-border/40 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">
                  Special Features of Tiranga ID Card Maker 2026 (V2)
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Why millions of Indians choose the 2026 edition of the Har Ghar Tiranga ID Card generator tool.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: Camera,
                    title: "Live Photo Cropper & Align",
                    desc: "Easily adjust, zoom, and center your selfie or passport photo inside the tricolor badge.",
                  },
                  {
                    icon: Printer,
                    title: "300 DPI High-Definition Export",
                    desc: "Crystal-clear resolution perfect for PVC card printers, color Xerox, and HD phone screens.",
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
                    title: "10-Second Instant Render",
                    desc: "No waiting, no ads interruptions, and no OTP verification required.",
                  },
                  {
                    icon: FileCheck,
                    title: "Hindi & English Language Support",
                    desc: "Type your name in English, Hindi (हिन्दी), or any regional Indian language font.",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-border bg-card shadow-sm space-y-2 hover:border-primary/40 transition-colors"
                  >
                    <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
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

        {/* ─── Step by Step Guide (Tiranga ID Card Kaise Banaye) ── */}
        <section id="step-by-step-guide" className="py-14 lg:py-20 border-b border-border/40 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold mb-3">
                  How to Make Tiranga ID Card Online (Step-by-Step) <br />
                  <span className="text-muted-foreground text-lg sm:text-xl font-medium">
                    तिरंगा आईडी कार्ड कैसे बनाएं (सरल तरीका)
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Follow these 4 simple steps to make and download your customized Har Ghar Tiranga ID card.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    num: 1,
                    title: "Open the Official Tiranga ID Card Maker",
                    desc: "Click the generator button at the bottom of this page or navigate to tiranga-indol.vercel.app on any web browser.",
                  },
                  {
                    num: 2,
                    title: "Enter Your Full Name & State / City",
                    desc: "Type your full name in English or Hindi (e.g., 'Aarav Kumar' / 'आरव कुमार') and select your State or City name.",
                  },
                  {
                    num: 3,
                    title: "Upload Your Photo & Select Frame Style",
                    desc: "Click Upload Photo, select a clear portrait or selfie from your gallery, and position it inside the tricolor frame.",
                  },
                  {
                    num: 4,
                    title: "Generate & Download Ultra-HD ID Card",
                    desc: "Click the 'Generate Tiranga ID Card' button. Within seconds, your high-resolution card is ready. Click Download to save the image!",
                  },
                ].map((stepItem) => (
                  <div
                    key={stepItem.num}
                    id={`step-${stepItem.num}`}
                    className="p-5 sm:p-6 rounded-2xl border border-border bg-card shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                        {stepItem.num}
                      </div>
                      <div>
                        <span className="text-[11px] uppercase font-bold tracking-wider text-primary">
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
                  Technical Specifications & Print Details
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Official specifications of the generated Har Ghar Tiranga Photo ID Card.
                </p>
              </div>

              <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-border">
                    {[
                      { key: "Tool Name", value: "Tiranga ID Card Maker Online 2026 (V2 Edition)" },
                      { key: "Official Generator Link", value: "https://tiranga-indol.vercel.app" },
                      { key: "Generation Cost", value: "100% Free (No payment / subscription)" },
                      { key: "Output Resolution", value: "Ultra-HD (300 DPI Print Ready)" },
                      { key: "File Format", value: "High Quality PNG / JPG Image" },
                      { key: "Card Dimension", value: "Standard Portrait ID Badge Ratio (CR80 / A4 compatible)" },
                      { key: "Supported Languages", value: "English, Hindi, Marathi, Bengali, Tamil, Telugu, etc." },
                      { key: "Data Privacy", value: "Client-side browser processing (Zero server storage)" },
                      { key: "Device Compatibility", value: "Android Mobile, iPhone, iPad, Windows PC, Mac, Linux" },
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
                  Everything you need to know about making and downloading your Tiranga ID Card.
                </p>
              </div>

              <TirangaFaqAccordion generatorUrl={EXTERNAL_GENERATOR_URL} />
            </div>
          </div>
        </section>

        {/* ─── OFFICIAL WEBSITE LINK AT THE VERY BOTTOM ─────────── */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-8 sm:p-12 text-center shadow-lg">
              <div className="text-3xl mb-3">🇮🇳</div>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold mb-3">
                Make Your Tiranga ID Card Online (2026)
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-6">
                Click the official website button below to create and download your personalized Har Ghar Tiranga ID Card in 10 seconds.
              </p>

              {/* The Interactive Countdown Launcher (10s timer) */}
              <TirangaCountdownLauncher generatorUrl={EXTERNAL_GENERATOR_URL} />

              <div className="mt-4">
                <TirangaSiteLink
                  url={EXTERNAL_GENERATOR_URL}
                  displayUrl="tiranga-indol.vercel.app"
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
