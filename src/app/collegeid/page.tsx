import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { CollegeIdGenerator } from "./college-id-generator";
import {
  ShieldCheck,
  Printer,
  Sparkles,
  Download,
  Award,
  CheckCircle2,
  FileCheck,
  Zap,
  HelpCircle,
  Gift,
  Bot,
  Laptop,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Student ID Card Maker Free | Gemini AI Student ID Maker & College Card Generator (300 DPI)",
  description:
    "Make free student ID cards online in 300 DPI ultra-HD format. Gemini AI student ID maker free, student claim Gemini ID card free, how to take Claude premium free guide, Chhatrapati Shivaji Maharaj University (CSMU) & all college student ID generator.",
  keywords: [
    "gemini ai student id maker free",
    "make free id card",
    "student id card maker gemini",
    "student claim gemini id card free",
    "how to take cloude premiu free",
    "how to take claude premium free",
    "gemini advanced student free",
    "free college student id card generator",
    "student id card maker online free",
    "CSMU ID card generator",
    "Chhatrapati Shivaji Maharaj University student id maker",
    "pvc student id card maker 300 dpi",
    "student discount id card generator",
    "free student id card download",
  ],
  alternates: {
    canonical: "https://xpertbite.in/collegeid",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://xpertbite.in/collegeid",
    siteName: "XpertBite Technologies",
    title:
      "Student ID Card Maker Free | Gemini AI Student ID Maker & College Card Generator",
    description:
      "Free online student ID card maker. Generate 300 DPI ID cards with photo, name, enrollment ID, and dates. Perfect for college IDs and claiming student discounts for Gemini AI & Claude Premium.",
    images: [
      {
        url: "/logos/CSMU-Logo.jpg",
        width: 800,
        height: 800,
        alt: "Free Student ID Card Maker Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student ID Card Maker Free | Gemini AI & College ID Generator",
    description:
      "Make free college ID card in 300 DPI HD. Learn how to claim Gemini AI student benefits and Claude premium student discount.",
    images: ["/logos/CSMU-Logo.jpg"],
  },
};

export default function CollegeIdPage() {
  // Rich Structured Data for SEO
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Gemini AI Student ID Maker Free - College ID Card Generator",
    url: "https://xpertbite.in/collegeid",
    applicationCategory: "DesignApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    description:
      "Free online tool to make student ID cards. High resolution 300 DPI printable student identity badges for colleges, universities, and student discounts like Gemini AI & Claude Pro.",
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How to use Gemini AI Student ID Maker free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply enter your full student name, college enrollment ID, course name, issue and expiry dates, and upload your passport photo. Click 'Download' to get an instant 300 DPI high-resolution PNG ID card for free.",
        },
      },
      {
        "@type": "Question",
        name: "How can students claim Gemini AI and Claude Premium offers for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Students can claim AI benefits by submitting valid university enrollment credentials or college ID cards with their college .edu / .ac.in email address on platforms offering student discounts like Google for Education, GitHub Student Developer Pack, and educational AI initiatives.",
        },
      },
      {
        "@type": "Question",
        name: "What details are included on the generated student ID card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ID card includes Student Full Name, Enrollment ID, Course/Department, Validity Dates (Issue & Expiry), Blood Group, Passport Size Photo, Barcode, Hologram Security Badge, and University Address (Chhatrapati Shivaji Maharaj University, Navi Mumbai, Maharashtra).",
        },
      },
      {
        "@type": "Question",
        name: "Can I print this student ID card on a PVC card printer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! The output is sized to standard CR80 ID dimensions (85.6mm x 54mm) at 300 DPI resolution, which is compatible with all thermal PVC card printers like Zebra, Evolis, and Fargo.",
        },
      },
    ],
  };

  return (
    <PublicLayout>
      {/* Print Specific CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media print {
            body * {
              visibility: hidden;
            }
            header, footer, nav, button, .no-print {
              display: none !important;
            }
            .printable-card-area, .printable-card-area * {
              visibility: visible;
            }
            .printable-card-area {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: 85.6mm !important;
              height: 54mm !important;
            }
          }
        `,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <div className="py-6 sm:py-10 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Main Generator Tool Component */}
          <CollegeIdGenerator />

          {/* Student Perks & AI Offers Guide Section (SEO Booster) */}
          <div className="mt-14 border-t border-border pt-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Student Perks & AI Discounts
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground mt-3">
                How to Claim Gemini AI & Claude Premium Student Offers Free
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1.5">
                Use your official student credentials and ID card to access top AI tools, developer packages, and student discounts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-card border border-border rounded-2xl p-5 shadow-sm space-y-2.5">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                  <Bot className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold font-heading text-foreground">
                  Gemini AI Student ID Benefits
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Google frequently provides educational workspace credits and student perks. Having an active student ID and college email lets you claim Gemini AI student benefits and Google Workspace tools free.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-5 shadow-sm space-y-2.5">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Gift className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold font-heading text-foreground">
                  Claude Premium & AI Subsidies
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Many universities partner with Anthropic & AI research initiatives offering Claude Pro educational grants and research credits for verified bonafide students.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-5 shadow-sm space-y-2.5">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <Laptop className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold font-heading text-foreground">
                  GitHub Student Developer Pack
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Upload your valid college student ID card on GitHub Education to unlock free GitHub Copilot, free domain names, cloud server credits, and premium development tools.
                </p>
              </div>
            </div>
          </div>

          {/* Simple Steps Guide */}
          <div className="mt-10 bg-muted/40 border border-border rounded-2xl p-5 sm:p-7">
            <h3 className="text-base font-bold font-heading text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-500" />
              Make Free ID Card in 3 Quick Steps:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="text-xl font-extrabold text-primary/40 font-mono">01</div>
                <h4 className="text-xs font-bold text-foreground">Enter Student Data</h4>
                <p className="text-xs text-muted-foreground">
                  Fill Name, Enrollment ID, Branch, Issue Date & Expiry Date.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-xl font-extrabold text-primary/40 font-mono">02</div>
                <h4 className="text-xs font-bold text-foreground">Upload Photo</h4>
                <p className="text-xs text-muted-foreground">
                  Select passport size picture and adjust zoom framing.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-xl font-extrabold text-primary/40 font-mono">03</div>
                <h4 className="text-xs font-bold text-foreground">Download or Print</h4>
                <p className="text-xs text-muted-foreground">
                  Download 300 DPI ultra-HD PNG (Front, Back or Dual-side) or print directly.
                </p>
              </div>
            </div>
          </div>

          {/* SEO FAQ Section */}
          <div className="mt-10 max-w-3xl mx-auto space-y-3">
            <h3 className="text-lg font-bold font-heading text-foreground text-center mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="h-4 w-4 text-primary" /> Frequently Asked Questions
            </h3>

            <div className="space-y-2.5">
              <div className="bg-card border border-border rounded-xl p-4">
                <h4 className="text-xs font-bold text-foreground mb-1">
                  How does the free Student ID Card Maker work?
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our tool renders student identity cards directly in your browser on a high-density 300 DPI canvas without sending your personal photos to any server. You get immediate private PNG downloads.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-4">
                <h4 className="text-xs font-bold text-foreground mb-1">
                  Which university format is pre-configured?
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The ID card layout is designed with authentic crest styling for <strong>Chhatrapati Shivaji Maharaj University (CSMU)</strong>, Navi Mumbai, Maharashtra, along with options for portrait badges and landscape formats.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-4">
                <h4 className="text-xs font-bold text-foreground mb-1">
                  How to claim Gemini AI student discount with student ID?
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Visit the student education portal, verify your active student status by uploading your college student ID card showing current validity dates, and activate student tier AI benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
