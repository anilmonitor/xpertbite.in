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
} from "lucide-react";
import { TirangaCardSimulator } from "./tiranga-simulator";
import { TirangaFaqAccordion } from "./tiranga-faq";
import { TirangaCountdownLauncher } from "./tiranga-countdown-button";
import { TirangaSiteLink } from "./tiranga-site-link";
import { TirangaSocialBanner } from "./tiranga-social-banner";
import { TirangaVideoGuide } from "./tiranga-video-guide";

export const metadata: Metadata = {
  title: "How to Make Tiranga ID Card Online 2026 (Free) | तिरंगा आईडी कार्ड कैसे बनाएं - Step by Step Guide",
  description:
    "Complete step-by-step guide on how to create and download your Har Ghar Tiranga ID Card 2026 online for free. Add your photo, name & download high-resolution patriotic ID badge instantly at tiranga-idcard2026.vercel.app.",
  keywords: [
    "tiranga id card 2026",
    "how to make tiranga id card",
    "tiranga id card kaise banaye",
    "har ghar tiranga id card download",
    "tiranga id card online maker",
    "tiranga-idcard2026.vercel.app",
    "15 august id card maker",
    "26 january tiranga card",
    "independence day photo id card maker",
    "republic day id badge online",
    "tiranga id card free download",
    "tiranga certificate generator",
    "indian flag id card maker",
    "tiranga id card photo maker",
  ],
  alternates: {
    canonical: "https://xpertbite.in/idcard",
  },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://xpertbite.in/idcard",
    siteName: "XpertBite Technologies",
    title: "How to Make Tiranga ID Card Online 2026 | तिरंगा आईडी कार्ड कैसे बनाएं (Free Maker Tool)",
    description:
      "Step-by-step Hindi & English guide to create, customize with photo and download your Har Ghar Tiranga ID Card 2026 online for free at tiranga-idcard2026.vercel.app.",
    images: [
      {
        url: "https://xpertbite.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "How to Make Tiranga ID Card Online 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Make Tiranga ID Card Online 2026 | तिरंगा आईडी कार्ड कैसे बनाएं",
    description:
      "Create and download your Har Ghar Tiranga ID Card 2026 for free. Step-by-step guide and direct generator link: tiranga-idcard2026.vercel.app.",
    images: ["https://xpertbite.in/og-image.png"],
  },
};

export default function TirangaIdCardPage() {
  const EXTERNAL_GENERATOR_URL = "https://tiranga-idcard2026.vercel.app";

  // Structured Data (JSON-LD) for SEO
  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Make Tiranga ID Card Online 2026 (Step by Step Guide)",
    description:
      "Complete guide on how to create, customize with photo & name, and download a high-resolution Har Ghar Tiranga ID Card online for free using the generator tool.",
    image: "https://xpertbite.in/og-image.png",
    totalTime: "PT1M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "0",
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: "Passport Size or Selfie Photo (JPG/PNG)",
      },
      {
        "@type": "HowToSupply",
        name: "Your Full Name & City/State",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Tiranga ID Card Maker Tool (tiranga-idcard2026.vercel.app)",
      },
      {
        "@type": "HowToTool",
        name: "Smartphone or Computer Web Browser",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Visit Tiranga ID Card Generator Tool",
        text: "Go to https://tiranga-idcard2026.vercel.app on any web browser.",
        url: "https://xpertbite.in/idcard#step-1",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Enter Name & Location Details",
        text: "Type your full name, select your state/city, and optionally choose a patriotic message or pledge.",
        url: "https://xpertbite.in/idcard#step-2",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Upload Photo & Select Tricolor Badge Style",
        text: "Upload your favorite passport photo or selfie. Choose from multiple patriotic frames and tricolor borders.",
        url: "https://xpertbite.in/idcard#step-3",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Generate, Preview & Download Ultra-HD ID Card",
        text: "Click the Generate ID Card button. Preview your card and download high-resolution JPG/PNG image instantly to share on WhatsApp or print.",
        url: "https://xpertbite.in/idcard#step-4",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Tiranga ID Card 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tiranga ID Card is a patriotic digital ID badge created to celebrate Indian national pride, Har Ghar Tiranga initiative, Independence Day (15 August), and Republic Day (26 January). It features your photo, name, Ashok Chakra, and the Indian Tricolor.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I make Tiranga ID Card online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can make your Tiranga ID Card directly on the free generator website at https://tiranga-idcard2026.vercel.app in less than 10 seconds.",
        },
      },
      {
        "@type": "Question",
        name: "Is making Tiranga ID Card free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, creating and downloading the Tiranga ID Card is 100% free of charge. No registration, payment, or OTP is required.",
        },
      },
      {
        "@type": "Question",
        name: "Can I print and laminate this Tiranga ID Card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! The generated card is exported in high-resolution (HD quality), making it perfect for printing on PVC cards, glossy paper, or standard A4 sheets for school, college, and office Independence Day celebrations.",
        },
      },
      {
        "@type": "Question",
        name: "Is my photo and personal information safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the Tiranga ID Card maker processes images securely directly inside your browser. Your photos are not stored on public servers or shared with third parties.",
        },
      },
    ],
  };

  const jsonLdApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Tiranga ID Card Maker 2026",
    url: "https://tiranga-idcard2026.vercel.app",
    applicationCategory: "DesignApplication",
    operatingSystem: "All (Android, iOS, Windows, Mac, Linux)",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    description:
      "Online Har Ghar Tiranga ID Card generator tool for creating custom patriotic ID cards with photo and Ashok Chakra emblem.",
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
        name: "Tiranga ID Card Guide",
        item: "https://xpertbite.in/idcard",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
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
        {/* ─── Hero Section (Clean & Minimal Header) ────────────────── */}
        <header className="pt-24 pb-12 lg:pt-32 lg:pb-16 border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Version Switcher Badge */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                  Version 1 Guide
                </span>
                <Link
                  href="/tiranga-idcard"
                  className="px-3 py-1 rounded-full text-xs font-medium bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground border border-border transition-all flex items-center gap-1"
                >
                  <span>✨ Version 2 Maker</span>
                </Link>
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
                How to Make <span className="gradient-text">Tiranga ID Card</span> Online (2026)
              </h1>

              {/* Hindi & English Subtitle */}
              <p className="text-base sm:text-xl text-muted-foreground font-medium max-w-3xl mx-auto mb-4 leading-relaxed">
                तिरंगा आईडी कार्ड कैसे बनाएं? Complete Step-by-Step Guide with Free Photo ID Generator Tool.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
                Create your personalized Indian patriotic ID card in just 10 seconds. Add your photo, enter your name, and download in ultra-HD resolution for WhatsApp DP, Instagram status, or physical print.
              </p>

              {/* Quick Feature Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
                {[
                  { icon: Zap, label: "Instant Generation", desc: "Ready in 10 Seconds" },
                  { icon: ShieldCheck, label: "100% Free & Safe", desc: "No OTP or Sign-up" },
                  { icon: Printer, label: "Ultra-HD Print Ready", desc: "High-Resolution Output" },
                  { icon: Share2, label: "Easy Social Sharing", desc: "WhatsApp & Instagram" },
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

        {/* ─── Interactive Card Preview Section ────────────────────── */}
        <section className="py-14 bg-muted/20 border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">
                  Preview Your Tiranga ID Card
                </h2>
                <p className="text-sm text-muted-foreground">
                  See how your custom Tiranga ID Card looks with name, photo frame, and Ashok Chakra emblem.
                </p>
              </div>

              {/* Simulator Component */}
              <TirangaCardSimulator />
            </div>
          </div>
        </section>

        {/* ─── What is Tiranga ID Card? ─────────────────────────────── */}
        <section className="py-14 lg:py-18 border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                    What is Tiranga ID Card? <br />
                    <span className="text-muted-foreground text-lg font-normal">तिरंगा आईडी कार्ड क्या है?</span>
                  </h2>
                  <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <p>
                      <strong>Tiranga ID Card</strong> is a personalized patriotic digital identity badge created to honor the Indian National Flag (Tricolor) and celebrate national festivals like <strong>Independence Day (15th August)</strong> and <strong>Republic Day (26th January)</strong>.
                    </p>
                    <p>
                      Under the nationwide <em>&ldquo;Har Ghar Tiranga&rdquo;</em> and <em>&ldquo;Azadi Ka Amrit Mahotsav&rdquo;</em> movements, millions of proud Indian citizens, students, and professionals create their digital Tiranga cards to display on WhatsApp DP, Instagram Stories, Facebook Profiles, and school ID badges.
                    </p>
                    <p>
                      The online tool available at <strong className="text-foreground">tiranga-idcard2026.vercel.app</strong> allows anyone to generate a customized card with their name, state, and photo in seconds without requiring any design skills.
                    </p>
                  </div>
                </div>

                {/* Benefits List Card */}
                <div className="p-6 sm:p-7 rounded-2xl border border-border bg-card shadow-sm space-y-3.5">
                  <h3 className="text-base sm:text-lg font-heading font-bold text-foreground flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Why Create a Tiranga ID Card?
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                    {[
                      "Express your love and pride for Mother India (Bharat Mata)",
                      "Set as patriotic WhatsApp Profile Picture (DP) and Status",
                      "Print and wear as an ID badge in school, college, or office events",
                      "Share with family and friends on Independence & Republic Day",
                      "100% Free tool with instant ultra-HD digital download",
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

        {/* ─── Step by Step Guide (Tiranga ID Card Kaise Banaye) ────── */}
        <section id="step-by-step-guide" className="py-14 lg:py-20 border-b border-border/40 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold mb-3">
                  How to Make Tiranga ID Card Online <br />
                  <span className="text-muted-foreground text-lg sm:text-xl font-medium">तिरंगा आईडी कार्ड कैसे बनाएं (Step-by-Step)</span>
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Follow these 4 simple steps to generate your personalized Har Ghar Tiranga ID card on your mobile phone or computer.
                </p>
              </div>

              {/* Steps Timeline */}
              <div className="space-y-5">
                {/* Step 1 */}
                <div
                  id="step-1"
                  className="p-5 sm:p-6 rounded-2xl border border-border bg-card shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                      1
                    </div>
                    <div>
                      <span className="text-[11px] uppercase font-bold tracking-wider text-primary">Step 1</span>
                      <h3 className="text-base sm:text-lg font-heading font-bold text-foreground">
                        Visit the Tiranga ID Card Maker Website
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-11">
                    Go to the official generator link at the bottom of this page or navigate to <strong className="text-foreground">tiranga-idcard2026.vercel.app</strong> on your mobile or computer browser.
                  </p>
                </div>

                {/* Step 2 */}
                <div
                  id="step-2"
                  className="p-5 sm:p-6 rounded-2xl border border-border bg-card shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                      2
                    </div>
                    <div>
                      <span className="text-[11px] uppercase font-bold tracking-wider text-primary">Step 2</span>
                      <h3 className="text-base sm:text-lg font-heading font-bold text-foreground">
                        Enter Your Name, State & City Details
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-11">
                    On the generator page, enter your <strong>Full Name</strong> (e.g. &ldquo;Aarav Kumar&rdquo;) and select your <strong>State / City</strong>. You can also choose a patriotic pledge like <em>&ldquo;Proud to be an Indian 🇮🇳&rdquo;</em>.
                  </p>
                </div>

                {/* Step 3 */}
                <div
                  id="step-3"
                  className="p-5 sm:p-6 rounded-2xl border border-border bg-card shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                      3
                    </div>
                    <div>
                      <span className="text-[11px] uppercase font-bold tracking-wider text-primary">Step 3</span>
                      <h3 className="text-base sm:text-lg font-heading font-bold text-foreground">
                        Upload Your Photo & Select Frame Style
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-11">
                    Click <strong>Upload Photo</strong> and pick a clean photo from your phone gallery. The tool lets you adjust and center your photo inside the circular or rectangular Tiranga frame.
                  </p>
                </div>

                {/* Step 4 */}
                <div
                  id="step-4"
                  className="p-5 sm:p-6 rounded-2xl border border-border bg-card shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center text-sm">
                      4
                    </div>
                    <div>
                      <span className="text-[11px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">Step 4</span>
                      <h3 className="text-base sm:text-lg font-heading font-bold text-foreground">
                        Generate & Download Ultra-HD ID Card
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-11">
                    Click <strong>&ldquo;Generate Tiranga ID Card&rdquo;</strong> to render your high-resolution card. Click <strong>Download</strong> to save the card as a high-quality JPG/PNG image and share on WhatsApp or print it out!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Specifications Table ─────────────────────────────────── */}
        <section className="py-14 border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center max-w-xl mx-auto mb-8">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold">
                  Card Specifications & Details
                </h2>
              </div>

              <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-border">
                    {[
                      { key: "Tool Name", value: "Tiranga ID Card Maker 2026" },
                      { key: "Website URL", value: "tiranga-idcard2026.vercel.app" },
                      { key: "Generation Cost", value: "100% Free (No hidden charges)" },
                      { key: "Output Formats", value: "Ultra-HD JPG / PNG Image" },
                      { key: "Resolution", value: "High Resolution (300 DPI - Print Ready)" },
                      { key: "Aspect Ratio", value: "Standard Portrait Card" },
                      { key: "Required Info", value: "Name, Photo (Optional), State / City" },
                      { key: "Registration / OTP", value: "Not Required (Direct Instant Creation)" },
                      { key: "Compatible Devices", value: "Android, iPhone, iPad, Windows PC, Mac, Linux" },
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

        {/* ─── Frequently Asked Questions (FAQ) ────────────────────── */}
        <section className="py-14 lg:py-18 border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold mb-2">
                  Frequently Asked Questions
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Common questions about creating and downloading your Tiranga ID Card.
                </p>
              </div>

              {/* FAQ Accordion Component */}
              <TirangaFaqAccordion generatorUrl={EXTERNAL_GENERATOR_URL} />
            </div>
          </div>
        </section>

        {/* ─── OFFICIAL WEBSITE LINK AT THE VERY BOTTOM ─────────────── */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-8 sm:p-12 text-center shadow-lg">
              <div className="text-3xl mb-3">🇮🇳</div>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold mb-3">
                Make Your Tiranga ID Card Online
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-6">
                Click the official website button below to create and download your personalized Tiranga ID Card in 10 seconds.
              </p>

              {/* The Interactive Countdown Launcher (10s timer with fast ms count) */}
              <TirangaCountdownLauncher generatorUrl={EXTERNAL_GENERATOR_URL} />

              <div className="mt-4">
                <TirangaSiteLink
                  url={EXTERNAL_GENERATOR_URL}
                  displayUrl="tiranga-idcard2026.vercel.app"
                />
              </div>

              {/* ─── Social Media Followers Banner (EasyLike) ─────────── */}
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
