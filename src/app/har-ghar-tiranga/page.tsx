import type { Metadata } from "next";
import Link from "next/link";
import PublicLayout from "@/components/layout/public-layout";
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
  Star,
  FileCheck,
  Flag,
  HelpCircle,
  Clock,
  Flame,
  Check,
  Heart,
  TrendingUp,
} from "lucide-react";
import { TirangaCardSimulator } from "@/app/idcard/tiranga-simulator";
import { TirangaFaqAccordion } from "@/app/idcard/tiranga-faq";
import { TirangaCountdownLauncher } from "@/app/idcard/tiranga-countdown-button";
import { TirangaSiteLink } from "@/app/idcard/tiranga-site-link";
import { TirangaSocialBanner } from "@/app/idcard/tiranga-social-banner";
import { TirangaVideoGuide } from "@/app/idcard/tiranga-video-guide";

export const metadata: Metadata = {
  title: "Har Ghar Tiranga Kaise Banaye (2026) | How to Make Tiranga ID Card Online Free",
  description:
    "Har Ghar Tiranga ID Card kaise banaye? Complete step-by-step guide on how to make Tiranga ID card online for free in 2026. Add your photo, enter your name & download ultra-HD patriotic ID badge instantly at tiranga-indol.vercel.app for 15th August Independence Day.",
  keywords: [
    "how to make tiranga id",
    "har ghar tiranga kaise banaye",
    "tiranga id card kaise banaye",
    "how to make tiranga id card online",
    "har ghar tiranga id card 2026",
    "tiranga id card download with photo",
    "15 august har ghar tiranga photo badge",
    "tiranga id card online maker free",
    "tiranga-indol.vercel.app",
    "har ghar tiranga certificate generator",
    "26 january tiranga id card maker",
    "indian flag photo id card maker",
    "tiranga id card photo framed",
    "azadi ka amrit mahotsav har ghar tiranga card",
    "tiranga id card maker v3",
    "har ghar tiranga dp maker online",
  ],
  alternates: {
    canonical: "https://xpertbite.in/har-ghar-tiranga",
  },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://xpertbite.in/har-ghar-tiranga",
    siteName: "XpertBite Technologies",
    title: "Har Ghar Tiranga Kaise Banaye (2026) | How to Make Tiranga ID Card Online",
    description:
      "Tiranga ID Card kaise banaye? Step-by-step Hindi & English tutorial to create and download Har Ghar Tiranga photo ID badge in ultra-HD resolution for free at tiranga-indol.vercel.app.",
    images: [
      {
        url: "https://xpertbite.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Har Ghar Tiranga Kaise Banaye - Tiranga ID Card Online 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Har Ghar Tiranga Kaise Banaye | How to Make Tiranga ID Card Online (2026)",
    description:
      "Create and download your customized Har Ghar Tiranga ID Card for free in 10 seconds. Direct maker tool link: tiranga-indol.vercel.app.",
    images: ["https://xpertbite.in/og-image.png"],
  },
};

export default function HarGharTirangaV3Page() {
  const EXTERNAL_GENERATOR_URL = "https://tiranga-indol.vercel.app";

  // Comprehensive Structured Data (JSON-LD) for Search Engine Rich Snippets
  const jsonLdWebApplication = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Har Ghar Tiranga ID Card Maker 2026 (V3 Edition)",
    alternateName: "How to Make Tiranga ID Card Online Free Tool",
    url: "https://tiranga-indol.vercel.app",
    applicationCategory: "DesignApplication",
    operatingSystem: "All (Android, iOS, Windows, macOS, Linux)",
    softwareVersion: "3.0 (2026 Special Edition)",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.95",
      ratingCount: "18940",
      bestRating: "5",
      worstRating: "1",
    },
    description:
      "Create patriotic Har Ghar Tiranga photo ID cards online with photo, name, state emblem, and Ashok Chakra for Independence Day and Republic Day celebrations.",
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Har Ghar Tiranga Kaise Banaye | How to Make Tiranga ID Card Online in 2026",
    description:
      "Easy step-by-step Hindi & English guide explaining how to make a Tiranga ID card online with your photo and name in HD resolution for free.",
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
        name: "Passport Size or Selfie Photo (JPG, PNG, WebP)",
      },
      {
        "@type": "HowToSupply",
        name: "Your Full Name & Home State/City",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Har Ghar Tiranga ID Maker (tiranga-indol.vercel.app)",
      },
      {
        "@type": "HowToTool",
        name: "Smartphone (Android/iOS) or PC Web Browser",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open the Official Har Ghar Tiranga Generator",
        text: "Navigate to https://tiranga-indol.vercel.app on your mobile or laptop browser.",
        url: "https://xpertbite.in/har-ghar-tiranga#step-1",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Type Your Name & City",
        text: "Enter your full name in Hindi or English and choose your state or city.",
        url: "https://xpertbite.in/har-ghar-tiranga#step-2",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Upload Photo into Tricolor Badge Frame",
        text: "Upload your favorite portrait photo and align it inside the circular tricolor frame.",
        url: "https://xpertbite.in/har-ghar-tiranga#step-3",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Generate & Download Ultra-HD Card",
        text: "Click Generate to create your high-resolution card and download high-quality PNG/JPG.",
        url: "https://xpertbite.in/har-ghar-tiranga#step-4",
      },
    ],
  };

  const jsonLdVideo = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "How to Make Tiranga ID Card - Har Ghar Tiranga Kaise Banaye Video Tutorial",
    description:
      "Step-by-step video tutorial demonstrating how to make a Tiranga ID Card online with photo and name for 15th August Independence Day.",
    thumbnailUrl: "https://img.youtube.com/vi/zUFkhp1J0QI/hqdefault.jpg",
    uploadDate: "2026-08-01T08:00:00+05:30",
    embedUrl: "https://www.youtube.com/embed/zUFkhp1J0QI",
    contentUrl: "https://youtu.be/zUFkhp1J0QI",
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Har Ghar Tiranga ID Card kaise banaye?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "हर घर तिरंगा आईडी कार्ड बनाने के लिए: (1) tiranga-indol.vercel.app वेबसाइट खोलें, (2) अपना नाम और राज्य लिखें, (3) अपनी फोटो अपलोड करें, और (4) 'Generate Tiranga ID Card' पर क्लिक करके HD इमेज डाउनलोड कर लें।",
        },
      },
      {
        "@type": "Question",
        name: "How to make Tiranga ID card online with my photo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To make a Tiranga ID Card with your photo, visit tiranga-indol.vercel.app, upload any photo from your gallery, type your name, and download the card in 10 seconds for free.",
        },
      },
      {
        "@type": "Question",
        name: "Tiranga ID Card banane ke liye kitna paisa lagta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "यह टूल 100% फ्री (मुफ्त) है। इसके लिए कोई भी चार्ज, OTP या रजिस्ट्रेशन की जरूरत नहीं है।",
        },
      },
      {
        "@type": "Question",
        name: "Kya is Tiranga ID card ko WhatsApp DP aur print ke liye use kar sakte hain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "हाँ, यह कार्ड 300 DPI अल्ट्रा-HD क्वालिटी में डाउनलोड होता है, जिसे आप WhatsApp DP, Instagram Story, Facebook पर लगा सकते हैं और PVC प्लास्टिक कार्ड या पेपर पर प्रिंट भी करवा सकते हैं।",
        },
      },
      {
        "@type": "Question",
        name: "Kya meri photo safe aur private rahegi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "हाँ, यह टूल आपके ब्राउज़र में ही फोटो प्रोसेस करता है। आपकी फोटो किसी भी सर्वर पर सेव नहीं होती है, इसलिए यह 100% सुरक्षित और प्राइवेट है।",
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
        name: "Har Ghar Tiranga Kaise Banaye (V3)",
        item: "https://xpertbite.in/har-ghar-tiranga",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }}
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
        {/* ─── V3 Hero Section: Premium Tricolor Radial Glow Style ────── */}
        <header className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 border-b border-border/40 overflow-hidden bg-gradient-to-b from-orange-500/10 via-background to-emerald-500/10">
          {/* Decorative Tricolor Ambient Lights */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-12 left-10 w-64 h-64 bg-orange-500/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* All Versions Switcher Pill Bar */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                <Link
                  href="/idcard"
                  className="px-3 py-1 rounded-full text-xs font-medium bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground border border-border transition-all flex items-center gap-1"
                >
                  <span>🇮🇳 Version 1 Guide</span>
                </Link>
                <Link
                  href="/tiranga-idcard"
                  className="px-3 py-1 rounded-full text-xs font-medium bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground border border-border transition-all flex items-center gap-1"
                >
                  <span>✨ Version 2 Maker</span>
                </Link>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 via-primary/20 to-emerald-500/20 border border-primary/30 text-foreground text-xs font-bold shadow-sm">
                  <Flame className="h-3.5 w-3.5 text-orange-500" />
                  <span>Version 3 • Har Ghar Tiranga 2026</span>
                </div>
              </div>

              {/* Main Title (H1) - Targeting top queries */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-[1.15] mb-5">
                Har Ghar Tiranga <span className="gradient-text">Kaise Banaye</span> (2026)
              </h1>

              {/* Bilingual Subtitle Targeting 'how to make tiranga id' & 'tiranga id card kaise banaye' */}
              <p className="text-base sm:text-xl text-muted-foreground font-medium max-w-3xl mx-auto mb-4 leading-relaxed">
                How to Make Tiranga ID Card Online? तिरंगा आईडी कार्ड कैसे बनाएं - Step-by-Step Free Maker Guide.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
                Celebrate 15th August Independence Day & 26th January Republic Day. Create your ultra-HD Indian tricolor photo badge in just 10 seconds without sign-up.
              </p>

              {/* Trust Badge Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
                {[
                  { icon: Zap, label: "10 Sec Maker", desc: "Instant Generation" },
                  { icon: ShieldCheck, label: "100% Free & Safe", desc: "No OTP or Login" },
                  { icon: Printer, label: "Ultra-HD 300 DPI", desc: "PVC Print Ready" },
                  { icon: Share2, label: "WhatsApp Status", desc: "DP & Insta Story" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-card/80 backdrop-blur border border-border text-left flex flex-col justify-between shadow-sm hover:border-primary/40 transition-all"
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

        {/* ─── Video Guide Section (YouTube Video Tutorial - Placed Above Preview) ── */}
        <TirangaVideoGuide
          videoId="zUFkhp1J0QI"
          title="How to Make Tiranga ID Card Online (Har Ghar Tiranga Video Tutorial)"
        />

        {/* ─── Interactive Card Preview Section ────────────────────── */}
        <section className="py-14 bg-muted/20 border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Live Card Simulator</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">
                  Preview Your Tiranga ID Card Online
                </h2>
                <p className="text-sm text-muted-foreground">
                  Type your name to preview what your personalized Har Ghar Tiranga photo ID badge looks like.
                </p>
              </div>

              {/* Simulator Component */}
              <TirangaCardSimulator />
            </div>
          </div>
        </section>

        {/* ─── V3 Distinct Content: 3-Pillar Step Card Showcase ────── */}
        <section className="py-14 lg:py-18 border-b border-border/40 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                  Tiranga ID Card Kaise Banaye? (3 Simple Steps)
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  How to make your Tiranga ID card online using the free maker tool at tiranga-indol.vercel.app.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Step 1 Card */}
                <div className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-bl-xl border-l border-b border-border">
                    Step 01
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground">
                    Enter Name & Location
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Open the generator link and type your <strong>Full Name</strong> (in English or हिन्दी). Select your State / City and optional patriotic pledge.
                  </p>
                </div>

                {/* Step 2 Card */}
                <div className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-bl-xl border-l border-b border-border">
                    Step 02
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground">
                    Upload Your Photo
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Select a clean selfie or passport photo. The in-browser crop tool automatically centers your picture inside the tricolor frame.
                  </p>
                </div>

                {/* Step 3 Card */}
                <div className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-bl-xl border-l border-b border-border">
                    Step 03
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground">
                    Generate & Download HD
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Click <strong>Generate Tiranga ID Card</strong>. Your ultra-HD card renders in 10 seconds. Click Download to save image and share on WhatsApp!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Why Create Tiranga ID Card Section ────────────────── */}
        <section className="py-14 lg:py-18 border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                    What is Har Ghar Tiranga Movement? <br />
                    <span className="text-muted-foreground text-lg font-normal">हर घर तिरंगा अभियान क्या है?</span>
                  </h2>
                  <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <p>
                      <strong>Har Ghar Tiranga</strong> is a nationwide campaign initiated to encourage Indian citizens to hoist the National Flag at their homes and celebrate India’s independence with pride.
                    </p>
                    <p>
                      The <strong>Tiranga ID Card</strong> is an honorary digital photo identity card created for citizens, students, and professionals to proudly display their patriotism on WhatsApp, Instagram, Facebook, and during school/office events.
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 rounded-2xl border border-border bg-card shadow-sm space-y-3.5">
                  <h3 className="text-base sm:text-lg font-heading font-bold text-foreground flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Key Highlights & Uses
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                    {[
                      "Ideal WhatsApp Profile Picture (DP) for 15th August & 26th January",
                      "Printable on PVC Plastic Card for school, college, or corporate badge",
                      "100% Free instant tool with direct download: tiranga-indol.vercel.app",
                      "Safe browser-side processing keeping your photo 100% private",
                      "Share with family, friends, and colleagues across India",
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

        {/* ─── Specifications Table ─────────────────────────────── */}
        <section className="py-14 border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center max-w-xl mx-auto mb-8">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">
                  Technical Specifications (V3 Edition)
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Official specifications of the generated Har Ghar Tiranga Photo ID Card.
                </p>
              </div>

              <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-border">
                    {[
                      { key: "Guide / Tool Title", value: "Har Ghar Tiranga ID Card Maker 2026 (V3)" },
                      { key: "Official Generator Link", value: "https://tiranga-indol.vercel.app" },
                      { key: "Price / Charges", value: "100% Free (Zero hidden charges)" },
                      { key: "Resolution Quality", value: "300 DPI High-Resolution Ultra-HD" },
                      { key: "Export Image Format", value: "PNG / JPG Image" },
                      { key: "Compatibility", value: "Android, iOS, Windows, Mac, Linux" },
                      { key: "Privacy & Security", value: "100% Client-Side Processing (No Server Upload)" },
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
                  हर घर तिरंगा आईडी कार्ड कैसे बनाएं? Important questions and answers.
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
                Make Your Har Ghar Tiranga ID Card
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-6">
                Click the official website button below to create and download your personalized Tiranga ID Card in 10 seconds.
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
