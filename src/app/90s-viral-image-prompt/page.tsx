import type { Metadata } from "next";
import PublicLayout from "@/components/layout/public-layout";
import { PromptClient } from "./prompt-client";

export const metadata: Metadata = {
  title:
    "90s Viral Image Prompt for ChatGPT & AI | 80s Indian Retro Photo Prompt (चैटजीपीटी से 90s फोटो कैसे बनाएं)",
  description:
    "Free 90s viral AI image prompt for ChatGPT (GPT-4o), Bing Image Creator, Google Gemini & Midjourney. Convert any selfie into a late 1980s / 1990s vintage Indian retro photo. 1-click copy prompt with step-by-step Hindi & English tutorial. ChatGPT se 90s photo kaise banaye guide.",
  keywords: [
    // English Keywords
    "90s viral image prompt",
    "90s viral image prompt chatgpt",
    "80s viral image prompt",
    "90s ai photo prompt",
    "retro ai photo prompt chatgpt",
    "vintage photo prompt",
    "how to make 90s photo in chatgpt",
    "viral instagram 90s ai prompt",
    "indian 90s retro ai photo prompt",
    "chatgpt prompt for 90s retro photo",
    "chatgpt vintage photo prompt copy paste",
    "use the uploaded photo and recreate the same person as if photographed in india in the late 1980s",
    "dall-e 3 90s prompt",
    "midjourney 90s retro prompt",
    "gemini 90s image prompt",
    "vintage 1988 photo prompt",
    "90s bollywood ai photo generator prompt",
    "instagram 90s vintage filter ai prompt",
    "bing image creator 90s prompt",

    // Hindi Keywords (हिंदी)
    "90s वायरल इमेज प्रॉमप्ट",
    "चैटजीपीटी से 90s फोटो कैसे बनाएं",
    "90s विंटेज फोटो प्रॉमप्ट",
    "80s 90s रेट्रो फोटो कैसे बनाएं",
    "chatgpt 90s फोटो प्रॉमप्ट कॉपी पेस्ट",
    "इंस्टाग्राम ट्रेंडिंग 90s फोटो प्रॉमप्ट",
    "पुराने जमाने की फोटो कैसे बनाएं एआई से",
    "90s रेट्रो इंडियन फोटो जनरेटर",
    "फोटो को 90s लुक कैसे दें",
    "chatgpt से पुरानी फोटो कैसे बनाएं",

    // Hinglish Keywords
    "chatgpt se 90s photo kaise banaye",
    "90s viral image prompt copy paste",
    "photo ko 90s look kaise de chatgpt me",
    "chatgpt me purani photo kaise banaye",
    "90s retro photo prompt hindi",
    "chatgpt viral prompt 90s photo",
    "instagram 90s trending prompt copy",
    "apni photo ko 90s jaisa kaise banaye",
    "chatgpt image prompt 90s style",
    "80s vintage photo kaise banaye",
    "chatgpt dalle 3 90s prompt in hindi",
    "recreate photo late 1980s prompt",
    "photo ko vintage retro kaise banaye ai se",
    "90s viral photo prompt free copy",
    "chatgpt 90s photo maker prompt",
  ],
  alternates: {
    canonical: "https://xpertbite.in/90s-viral-image-prompt",
  },
  openGraph: {
    type: "article",
    locale: "en_IN",
    url: "https://xpertbite.in/90s-viral-image-prompt",
    siteName: "XpertBite Technologies",
    title:
      "90s Viral Image Prompt for ChatGPT & AI | 80s Indian Retro Photo Generator (चैटजीपीटी प्रॉमप्ट)",
    description:
      "Transform any modern selfie into a 1980s / 1990s vintage Indian retro photograph in ChatGPT (GPT-4o). 1-click instant copy prompt with full step-by-step Hindi & English guide.",
    images: [
      {
        url: "https://xpertbite.in/image_90/90%20trending%20image%20make.png",
        width: 1024,
        height: 1024,
        alt: "90s Viral Image Prompt Result in ChatGPT",
      },
      {
        url: "https://xpertbite.in/image_90/Normal%20image.jpg.jpeg",
        width: 800,
        height: 1000,
        alt: "Original Photo Before 90s Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "90s Viral Image Prompt for ChatGPT & AI | 80s Indian Retro Look",
    description:
      "Copy the trending 90s viral AI image prompt for ChatGPT, Gemini & Bing. Instant retro 1988 Indian vintage transformation with step-by-step guide.",
    images: ["https://xpertbite.in/image_90/90%20trending%20image%20make.png"],
  },
};

export default function ViralPromptPage() {
  // Structured Data 1: HowTo Schema for Step-by-Step Rich Snippets in Google
  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Create 90s Vintage AI Photos in ChatGPT (चैटजीपीटी से 90s फोटो कैसे बनाएं)",
    description:
      "A complete step-by-step tutorial in Hindi and English on uploading your portrait and applying the viral 90s retro image prompt in ChatGPT GPT-4o.",
    totalTime: "PT1M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open ChatGPT or Bing Image Creator (Step 1: ChatGPT ओपन करें)",
        text: "Launch chatgpt.com on your mobile or computer with GPT-4o enabled, or open Microsoft Copilot / Bing Image Creator.",
        url: "https://xpertbite.in/90s-viral-image-prompt#step-1",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Upload Your Portrait Photo (Step 2: अपनी फोटो अपलोड करें)",
        text: "Click the attachment '+' button and upload a clear, front-facing selfie or portrait in natural daylight.",
        url: "https://xpertbite.in/90s-viral-image-prompt#step-2",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Copy and Paste the 90s Viral Prompt (Step 3: वायरल प्रॉमप्ट पेस्ट करें)",
        text: "Copy the prompt: 'Use the uploaded photo and recreate the same person as if photographed in India in the late 1980s. Preserve the face, skin tone, body shape, smile and overall identity very accurately. Style them in a fashionable 80s outfit like high-waisted jeans, printed shirt/denim jacket, retro accessories and voluminous hair. Use a realistic Indian college/home/street background with warm faded film colors, grain, soft focus and a vintage 1988 photo feel.' and paste it into ChatGPT.",
        url: "https://xpertbite.in/90s-viral-image-prompt#step-3",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Generate and Download Vintage Photo (Step 4: 90s फोटो डाउनलोड करें)",
        text: "Click Send to generate your 1980s / 1990s retro vintage photo and save the high-resolution output for Instagram/WhatsApp.",
        url: "https://xpertbite.in/90s-viral-image-prompt#step-4",
      },
    ],
  };

  // Structured Data 2: WebApplication / Software Schema
  const jsonLdApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "90s Viral Image Prompt Generator & Guide (चैटजीपीटी 90s फोटो प्रॉमप्ट)",
    url: "https://xpertbite.in/90s-viral-image-prompt",
    applicationCategory: "DesignApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    description:
      "Free viral 90s AI photo prompt generator with customizable retro aesthetics, decade selection, 35mm film grain, before/after examples, and instant 1-click copy tool.",
  };

  // Structured Data 3: FAQ Schema
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the viral 90s AI image prompt for ChatGPT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The viral 90s AI prompt is: 'Use the uploaded photo and recreate the same person as if photographed in India in the late 1980s. Preserve the face, skin tone, body shape, smile and overall identity very accurately. Style them in a fashionable 80s outfit like high-waisted jeans, printed shirt/denim jacket, retro accessories and voluminous hair. Use a realistic Indian college/home/street background with warm faded film colors, grain, soft focus and a vintage 1988 photo feel.'",
        },
      },
      {
        "@type": "Question",
        name: "ChatGPT se 90s photo kaise banaye (चैटजीपीटी से 90s फोटो कैसे बनाएं)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1. chatgpt.com या ChatGPT app open karein. 2. Chat box me '+' icon click karke apni photo upload karein. 3. Is page se 'Copy Viral 90s Prompt' copy karein aur paste karein. 4. Send dabayein aur 10 seconds me 90s vintage retro photo download karein.",
        },
      },
      {
        "@type": "Question",
        name: "How can I make my face look 100% exact in ChatGPT 90s photos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upload a clean, high-resolution solo photo with natural daylight. Make sure your prompt includes the identity lock instruction: 'Preserve the face, skin tone, body shape, smile and overall identity very accurately.' If needed, ask ChatGPT in follow-up to match the exact face geometry.",
        },
      },
      {
        "@type": "Question",
        name: "Is it free to generate 90s vintage AI photos in ChatGPT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, free ChatGPT accounts get daily access to GPT-4o image generation. Free alternatives like Microsoft Copilot / Bing Designer and Google Gemini also support retro image prompts.",
        },
      },
      {
        "@type": "Question",
        name: "Can I customize the 90s prompt for Bollywood styles or couples?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our interactive prompt customizer allows you to select Male, Female, Couple styles, 90s Bollywood glamour, college campus, traditional festive sarees, and vintage 35mm film grain.",
        },
      },
    ],
  };

  return (
    <PublicLayout>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <PromptClient />
    </PublicLayout>
  );
}
