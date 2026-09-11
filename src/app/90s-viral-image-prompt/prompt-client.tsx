"use client";

import * as React from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import {
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  Camera,
  Image as ImageIcon,
  MessageSquare,
  Wand2,
  Share2,
  Sliders,
  Film,
  HelpCircle,
  ArrowRight,
  Flame,
  CheckCircle2,
  Zap,
  ChevronDown,
  RefreshCw,
  UploadCloud,
  Palette,
  Eye,
  Layers,
  ArrowLeftRight,
  Smartphone,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Exact Viral Prompt requested
export const VIRAL_EXACT_PROMPT = `Use the uploaded photo and recreate the same person as if photographed in India in the late 1980s. Preserve the face, skin tone, body shape, smile and overall identity very accurately. Style them in a fashionable 80s outfit like high-waisted jeans, printed shirt/denim jacket, retro accessories and voluminous hair. Use a realistic Indian college/home/street background with warm faded film colors, grain, soft focus and a vintage 1988 photo feel.`;

// Before & After Image Paths
const BEFORE_IMAGE_URL = "/image_90/Normal%20image.jpg.jpeg";
const AFTER_IMAGE_URL = "/image_90/90%20trending%20image%20make.png";

// Curated Preset Prompts
const PRESET_PROMPTS = [
  {
    id: "preset-1988-classic",
    title: "1. The 1988 Indian Retro Classic (Viral Master Prompt)",
    hindiTitle: "क्लासिक 1988 इंडियन रेट्रो लुक (मोस्ट वायरल प्रॉमप्ट)",
    subtitle: "Most Popular on Instagram Reels & TikTok",
    category: "Late 1980s / Classic",
    prompt: `Use the uploaded photo and recreate the same person as if photographed in India in the late 1980s. Preserve the face, skin tone, body shape, smile and overall identity very accurately. Style them in a fashionable 80s outfit like high-waisted jeans, printed shirt/denim jacket, retro accessories and voluminous hair. Use a realistic Indian college/home/street background with warm faded film colors, grain, soft focus and a vintage 1988 photo feel.`,
    tags: ["Viral", "Instagram Trend", "80s India", "High-Waisted Denim", "90sPrompt"],
    badge: "🔥 Most Viral",
    filmLook: "Kodak Gold 200 · 1988 Warm Film",
  },
  {
    id: "preset-bollywood-90s",
    title: "2. 90s Bollywood Romance Hero & Heroine Look",
    hindiTitle: "90s बॉलीवुड रोमांस हीरो / हीरोइन विंटेज लुक",
    subtitle: "Inspired by iconic 90s Indian cinema aesthetics",
    category: "Mid 1990s / Bollywood Glam",
    prompt: `Use the uploaded portrait photo and reimagine the person as a 1990s Bollywood cinema lead. Keep the exact facial features, skin tone, eyes, and expressions 100% true to identity. Style them in iconic 90s Bollywood fashion: oversized leather jacket with retro sunglasses for men OR flowing chiffon outfit with retro jhumkas and blowout hair for women. Background should look like a scenic 1994 film set location in Ooty/Kashmir with cinematic soft light, rich film grain, analog color grading, and vintage 35mm motion picture texture.`,
    tags: ["Bollywood 90s", "Cinematic Film", "Retro Glamour", "Ooty/Kashmir"],
    badge: "✨ Bollywood Special",
    filmLook: "35mm Motion Picture Film · 1994",
  },
  {
    id: "preset-college-nostalgia",
    title: "3. 90s Indian College Campus Nostalgia",
    hindiTitle: "90s इंडियन कॉलेज कैंपस नॉस्टैल्जिया लुक",
    subtitle: "Red brick universities, Bajaj Chetak, and cassette tapes",
    category: "Early 1990s / Campus Life",
    prompt: `Recreate the person from the uploaded photo as an Indian university student in 1992. Retain their face, smile, and natural skin tone with extreme precision. Dress them in vintage college attire: graphic retro polo t-shirt tucked into acid-wash jeans, canvas sneakers, retro wristwatch, and holding notebook folders. Background of a historic Indian college campus with red brick corridors, vintage Bajaj Chetak scooter parked nearby, warm golden afternoon sunlight, authentic film dust, and nostalgic faded print quality.`,
    tags: ["College Campus", "Acid Wash Jeans", "Bajaj Chetak", "1992 Vibe"],
    badge: "🎓 Campus Life",
    filmLook: "Fujifilm Superia 400 · 1992 Print",
  },
  {
    id: "preset-polaroid-flash",
    title: "4. Vintage 1993 Flash Polaroid / Disposable Camera",
    hindiTitle: "विंटेज 1993 फ़्लैश पोलरॉइड / डिस्पोजेबल कैमरा लुक",
    subtitle: "Candid house party & festive night flash photography",
    category: "1990s / Flash Polaroid",
    prompt: `Transform the uploaded photo into an authentic 1993 vintage flash Polaroid photograph taken in an Indian home living room. Maintain facial identity, authentic smile, and real proportions faithfully. Casual 90s retro casuals with vintage gold chain and classic 90s hairstyle. Harsh direct on-camera flash with realistic vignette, high-contrast shadows, warm amber indoor glow, subtle motion softness, disposable camera date stamp '04 11 '93' in bottom right corner, and aged matte Polaroid border.`,
    tags: ["Polaroid Flash", "Date Stamp 1993", "Direct Flash", "Disposable Cam"],
    badge: "📸 Candid Flash",
    filmLook: "Polaroid 600 · 1993 Direct Flash",
  },
  {
    id: "preset-wedding-retro",
    title: "5. 90s Traditional Indian Wedding & Festive Vintage",
    hindiTitle: "90s ट्रेडिशनल इंडियन वेडिंग और फेस्टिव रेट्रो लुक",
    subtitle: "Classic Kodak color studio portrait from Indian family album",
    category: "1990s / Traditional Indian",
    prompt: `Recreate the uploaded person in a traditional 1990s Indian wedding reception / festive family photograph. Strictly preserve exact facial symmetry, skin tone, and authentic expression. Style in rich vintage 90s ethnic wear: classic Banarasi silk saree with gold zari border and traditional bindi OR classic silk Kurta-Pyjama with Nehru waistcoat. Studio backdrop with velvet curtain and classic warm studio tungsten lamps, subtle film grain, soft halation, and nostalgic warm Kodak color science from an 1990s Indian family photo album.`,
    tags: ["Traditional Ethnic", "Banarasi Silk", "Vintage Album", "Tungsten Light"],
    badge: "🥻 Festive Nostalgia",
    filmLook: "Kodacolor VR 100 · Vintage Album",
  },
  {
    id: "preset-street-rebel",
    title: "6. 90s Indian Street Cool & Vintage Motorcycle",
    hindiTitle: "90s बॉम्बे स्ट्रीट कूल और विंटेज कार/बाइक लुक",
    subtitle: "Old Ambassador cars, cassette walkman, and Bombay street vibes",
    category: "1980s-90s / Urban Retro",
    prompt: `Recreate the person in the uploaded photo standing on a lively vintage 1989 Bombay / Delhi street. Preserve facial structure, skin tone, and authentic smile. Style them in a cool late-80s street style: oversized flannel shirt layered over white tee, vintage round Ray-Ban sunglasses, leather belt, and cassette walkman clipped to pocket. Background featuring vintage yellow-and-black Premier Padmini / Ambassador cars, old hand-painted cinema billboards, soft evening streetlights, vintage 35mm grain, faded contrast, and warm sepia undertones.`,
    tags: ["Street Cool", "Premier Padmini", "Walkman", "Handmade Billboards"],
    badge: "🏍️ Urban Street",
    filmLook: "Agfa Vista 400 · 1989 Vintage Street",
  },
];

// Step by step guide steps (English & Hinglish)
const GUIDE_STEPS = [
  {
    step: "01",
    title: "Open ChatGPT (GPT-4o) or Gemini / Bing",
    hindiTitle: "Step 1: ChatGPT या Bing Image Creator ओपन करें",
    desc: "Open chatgpt.com (or ChatGPT mobile app on iOS/Android with GPT-4o enabled), or use Microsoft Copilot / Bing Image Creator.",
    hinglishDesc: "Apne mobile ya PC par chatgpt.com open karein. Free aur Plus dono users ke liye GPT-4o image feature work karta hai.",
    icon: MessageSquare,
    badge: "Step 1",
  },
  {
    step: "02",
    title: "Attach Your Clear Portrait / Selfie",
    hindiTitle: "Step 2: अपनी साफ फोटो (Normal Selfie) अपलोड करें",
    desc: "Click the '+' (paperclip / image upload) icon in the chat input. Select a clear, well-lit portrait photo of your face.",
    hinglishDesc: "Chat box me '+' icon par click karke apni clear solo photo ya selfie select karein. Natural light wali photo best result deti hai.",
    icon: UploadCloud,
    badge: "Step 2",
  },
  {
    step: "03",
    title: "Paste the Viral 90s Prompt",
    hindiTitle: "Step 3: वायरल 90s प्रॉमप्ट को कॉपी करके पेस्ट करें",
    desc: "Click the 'Copy Viral Prompt' button on this page, then paste the exact text into your ChatGPT prompt box right below your attached photo.",
    hinglishDesc: "Is page par 'Copy Viral 90s Prompt' button dabayein aur ChatGPT me uploaded photo ke sath prompt paste karein.",
    icon: Copy,
    badge: "Step 3",
  },
  {
    step: "04",
    title: "Send & Download Your 90s Masterpiece",
    hindiTitle: "Step 4: Send दबाएं और 90s विंटेज फोटो डाउनलोड करें",
    desc: "Hit Enter/Send! Within 10-15 seconds, ChatGPT will generate your photo converted into a stunning, authentic 1980s/1990s retro Indian vintage photograph.",
    hinglishDesc: "Send button dabate hi 10-15 seconds me aapki 1980s/1990s Indian retro vintage photo generate ho jayegi. Download karein aur Instagram/WhatsApp par share karein!",
    icon: Wand2,
    badge: "Step 4",
  },
];

export function PromptClient() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const [activeView, setActiveView] = React.useState<"side-by-side" | "after-only" | "before-only">("side-by-side");

  // Customizer state
  const [customSubject, setCustomSubject] = React.useState("person");
  const [customDecade, setCustomDecade] = React.useState("the late 1980s (around 1988)");
  const [customOutfit, setCustomOutfit] = React.useState("high-waisted denim jeans, printed vintage shirt, retro accessories and voluminous layered hair");
  const [customSetting, setCustomSetting] = React.useState("a realistic Indian college campus with red brick walls, vintage bicycles, and lush green trees");
  const [customFilm, setCustomFilm] = React.useState("warm faded 35mm film colors, soft halation, subtle grain, and a genuine vintage 1988 photo feel");
  const [customCustomPrompt, setCustomCustomPrompt] = React.useState("");

  // Update customized prompt
  React.useEffect(() => {
    const generated = `Use the uploaded photo and recreate the same ${customSubject} as if photographed in India in ${customDecade}. Preserve the face, skin tone, body shape, smile, and overall identity very accurately. Style them in a fashionable retro outfit like ${customOutfit}. Set the background in ${customSetting} with ${customFilm}. Maintain realistic human proportions and authentic retro aesthetic.`;
    setCustomCustomPrompt(generated);
  }, [customSubject, customDecade, customOutfit, customSetting, customFilm]);

  // Copy handler with confetti & feedback
  const handleCopy = (text: string, id: string = "main") => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success("Viral Prompt copied to clipboard! Paste it into ChatGPT now.");

    // Burst confetti
    try {
      confetti({
        particleCount: 55,
        spread: 65,
        origin: { y: 0.7 },
        colors: ["#f59e0b", "#ec4899", "#8b5cf6", "#10b981", "#3b82f6"],
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setCopiedId((curr) => (curr === id ? null : curr));
    }, 3000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "90s Viral Image Prompt for ChatGPT & AI",
          text: "Convert any photo into 90s vintage Indian retro style in ChatGPT! Copy the viral prompt here:",
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Page link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 selection:bg-amber-500/20 selection:text-amber-600 dark:selection:text-amber-400">
      {/* ─── Hero Glow & Ambient Background ─────────────────── */}
      <div className="relative overflow-hidden pt-24 pb-14 lg:pt-28 lg:pb-16 border-b border-border/60 bg-gradient-to-b from-amber-500/5 via-primary/5 to-background">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/15 via-rose-500/10 to-indigo-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shadow-sm animate-pulse">
              <Flame className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
              #1 Trending Instagram &amp; TikTok AI Filter
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Sparkles className="h-3.5 w-3.5" />
              100% Free · Real ChatGPT AI Output
            </span>
          </div>

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-foreground leading-[1.15]">
              90&apos;s Viral AI Image Prompt for{" "}
              <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-500 bg-clip-text text-transparent">
                ChatGPT &amp; DALL-E
              </span>
            </h1>
            <p className="mt-3 text-sm sm:text-base font-semibold text-primary/90">
              चैटजीपीटी से 90s विंटेज फोटो कैसे बनाएं (1-Click Prompt Copy &amp; Hindi/Hinglish Guide)
            </p>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your modern selfie into an authentic <strong>1980s / 1990s Indian retro vintage photograph</strong>. Upload your photo in ChatGPT, paste this prompt, and download your 90s vintage film masterpiece!
            </p>

            {/* Quick action bar */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                onClick={() => handleCopy(VIRAL_EXACT_PROMPT, "hero-btn")}
                className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-6 rounded-2xl shadow-xl shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
              >
                {copiedId === "hero-btn" ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    Prompt Copied! Paste in ChatGPT
                  </>
                ) : (
                  <>
                    <Copy className="h-5 w-5 mr-2" />
                    Copy Viral 90s Prompt (कॉपी करें)
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-2xl py-6 px-5 border-border hover:border-primary text-foreground font-semibold"
              >
                <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">
                  Open ChatGPT <ExternalLink className="h-4 w-4 ml-2 opacity-70" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={handleShare}
                className="rounded-2xl py-6 px-4 text-muted-foreground hover:text-foreground"
                aria-label="Share"
              >
                <Share2 className="h-4 w-4 mr-2" /> Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Main Content Container ─────────────────────────── */}
      <div className="container mx-auto px-4 max-w-6xl mt-8 sm:mt-12 space-y-16">

        {/* ─── SHOWCASE SECTION: Live Before & After Real Transformation ─── */}
        <section className="relative overflow-hidden rounded-3xl border-2 border-amber-500/30 bg-gradient-to-b from-card via-card/90 to-muted/30 p-5 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/80">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center font-bold shadow-md">
                <ArrowLeftRight className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-bold font-heading text-foreground">
                    Live Before &amp; After Real Transformation Result
                  </h2>
                  <Badge className="bg-emerald-600 text-white text-[10px] px-2 py-0.5">
                    100% Real AI Output
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  See how the normal selfie is transformed into an authentic 1980s Indian retro photograph using this exact prompt.
                </p>
              </div>
            </div>

            {/* View Switcher buttons */}
            <div className="flex items-center gap-1.5 bg-muted/60 p-1 rounded-xl border border-border/80 text-xs">
              <button
                onClick={() => setActiveView("side-by-side")}
                className={cn(
                  "px-3 py-1.5 rounded-lg font-medium transition-colors",
                  activeView === "side-by-side"
                    ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Side-by-Side View
              </button>
              <button
                onClick={() => setActiveView("after-only")}
                className={cn(
                  "px-3 py-1.5 rounded-lg font-medium transition-colors",
                  activeView === "after-only"
                    ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                ✨ 90s Result
              </button>
              <button
                onClick={() => setActiveView("before-only")}
                className={cn(
                  "px-3 py-1.5 rounded-lg font-medium transition-colors",
                  activeView === "before-only"
                    ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Original Photo
              </button>
            </div>
          </div>

          {/* Image Display Area */}
          <div className="mt-6">
            {activeView === "side-by-side" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* 1. Before Card */}
                <div className="relative group/before rounded-2xl border border-border bg-card p-4 flex flex-col justify-between shadow-lg hover:border-primary/40 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-muted text-muted-foreground border border-border">
                      <Camera className="h-3.5 w-3.5" />
                      BEFORE: Normal / Original Photo
                    </span>
                    <span className="text-[11px] text-muted-foreground font-mono">Modern Smartphone Selfie</span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden bg-slate-950/40 aspect-[4/5] max-h-[460px] flex items-center justify-center border border-border/60">
                    <img
                      src={BEFORE_IMAGE_URL}
                      alt="Normal original photo before 90s AI transformation"
                      className="w-full h-full object-cover object-center group-hover/before:scale-102 transition-transform duration-500"
                      loading="eager"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/20">
                      Original Input Image
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    Original clear selfie uploaded into ChatGPT with normal lighting.
                  </p>
                </div>

                {/* 2. After Card */}
                <div className="relative group/after rounded-2xl border-2 border-amber-500/40 bg-gradient-to-b from-amber-500/5 to-rose-500/5 p-4 flex flex-col justify-between shadow-xl hover:border-amber-500/70 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white shadow-sm">
                      <Sparkles className="h-3.5 w-3.5 fill-white" />
                      AFTER: 90s Vintage AI Transformation
                    </span>
                    <span className="text-[11px] text-amber-600 dark:text-amber-400 font-bold font-mono">
                      🎞️ Late 1980s Retro Film
                    </span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden bg-slate-950/40 aspect-[4/5] max-h-[460px] flex items-center justify-center border border-amber-500/40 shadow-inner">
                    <img
                      src={AFTER_IMAGE_URL}
                      alt="90s trending viral AI retro vintage photo output in ChatGPT"
                      className="w-full h-full object-cover object-center group-hover/after:scale-102 transition-transform duration-500"
                      loading="eager"
                    />
                    <div className="absolute top-3 right-3 bg-amber-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                      1988 KODAK GOLD
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md text-amber-300 text-[11px] font-bold px-3 py-1 rounded-lg border border-amber-500/40">
                      ✨ Exact Prompt Output
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      Face, smile &amp; identity preserved + 80s denim &amp; warm film grain!
                    </p>
                    <Button
                      size="sm"
                      onClick={() => handleCopy(VIRAL_EXACT_PROMPT, "compare-copy")}
                      className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl h-8 shrink-0"
                    >
                      {copiedId === "compare-copy" ? <Check className="h-3.5 w-3.5 mr-1" /> : <Copy className="h-3.5 w-3.5 mr-1" />}
                      Copy This Prompt
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeView === "after-only" && (
              <div className="max-w-xl mx-auto text-center space-y-4">
                <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl aspect-[4/5] max-h-[540px] mx-auto">
                  <img
                    src={AFTER_IMAGE_URL}
                    alt="90s vintage AI transformation generated in ChatGPT"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-lg">
                    🔥 90s Vintage AI Output
                  </div>
                </div>
                <p className="text-sm font-semibold text-foreground">
                  Preserves exact face, smile &amp; skin tone while giving authentic 1988 Indian vintage vibes.
                </p>
              </div>
            )}

            {activeView === "before-only" && (
              <div className="max-w-xl mx-auto text-center space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl aspect-[4/5] max-h-[540px] mx-auto">
                  <img
                    src={BEFORE_IMAGE_URL}
                    alt="Original photo before transformation"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-lg">
                    Original Normal Photo
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Standard portrait selfie taken on a modern smartphone camera.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ─── SECTION 1: Featured Viral Prompt Card (Hero Box) ─── */}
        <section className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 rounded-3xl blur-md opacity-30 group-hover:opacity-100 transition duration-1000" />

          <div className="relative bg-card border-2 border-amber-500/30 dark:border-amber-500/20 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl">
            {/* Header row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-border/80">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold shadow-inner">
                  <Camera className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg sm:text-xl font-bold font-heading text-foreground">
                      The Exact 90s Viral AI Image Prompt
                    </h2>
                    <Badge className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-[10px] uppercase tracking-wider px-2 py-0.5">
                      Copy Ready
                    </Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    100% Tested on ChatGPT (GPT-4o), Bing Image Creator, Midjourney &amp; Gemini
                  </p>
                </div>
              </div>

              {/* Copy action top button */}
              <Button
                size="sm"
                onClick={() => handleCopy(VIRAL_EXACT_PROMPT, "main-top")}
                className={cn(
                  "font-bold text-xs sm:text-sm rounded-xl px-4 py-2 transition-all shadow-md",
                  copiedId === "main-top"
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                )}
              >
                {copiedId === "main-top" ? (
                  <>
                    <Check className="h-4 w-4 mr-1.5" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-1.5" /> Copy Prompt
                  </>
                )}
              </Button>
            </div>

            {/* Prompt Box */}
            <div className="mt-6 relative">
              <div className="relative rounded-2xl bg-muted/40 dark:bg-slate-950/70 border border-border p-5 sm:p-7 font-sans text-sm sm:text-base leading-relaxed text-foreground select-all group/box shadow-inner">
                <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[11px] text-muted-foreground/70 uppercase tracking-wider font-mono">
                  <Film className="h-3.5 w-3.5 text-amber-500" />
                  Kodak 1988 Grain
                </div>
                <p className="font-medium text-foreground pr-8">
                  &ldquo;{VIRAL_EXACT_PROMPT}&rdquo;
                </p>
              </div>
            </div>

            {/* Bottom Controls inside Card */}
            <div className="mt-6 pt-5 border-t border-border/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Preserves Face &amp; Smile
                </span>
                <span>•</span>
                <span>Late 1980s Vintage Outfit</span>
                <span>•</span>
                <span>Warm Faded Film Colors</span>
              </div>

              {/* Direct tool launch buttons */}
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <Button
                  onClick={() => handleCopy(VIRAL_EXACT_PROMPT, "main-big")}
                  className={cn(
                    "flex-1 sm:flex-initial font-bold text-sm rounded-xl px-5 py-2.5 transition-all shadow-lg",
                    copiedId === "main-big"
                      ? "bg-emerald-600 text-white"
                      : "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 shadow-amber-500/20"
                  )}
                >
                  {copiedId === "main-big" ? (
                    <>
                      <Check className="h-4 w-4 mr-1.5" /> Copied to Clipboard!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-1.5" /> Copy Prompt (कॉपी करें)
                    </>
                  )}
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-xl border-border hover:bg-muted font-medium text-xs sm:text-sm"
                >
                  <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">
                    Open ChatGPT <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-xl border-border hover:bg-muted font-medium text-xs sm:text-sm"
                >
                  <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">
                    Gemini AI <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2: Step-by-Step ChatGPT Tutorial Guide (English + Hindi/Hinglish) ─── */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              Easy 4-Step Tutorial · हिंदी &amp; English
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground">
              How to Create Your 90s Photo in ChatGPT (चैटजीपीटी में कैसे बनाएं)
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Follow these simple steps on your mobile phone or PC to turn any selfie into an authentic 80s/90s retro look.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {GUIDE_STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="relative bg-card border border-border/80 hover:border-primary/50 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Step number badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-primary/30 group-hover:text-primary transition-colors">
                      {s.step}
                    </span>
                    <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold font-heading text-foreground mb-1 group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-primary/90 mb-2">
                      {s.hindiTitle}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                    <div className="mt-2.5 p-2 rounded-lg bg-muted/50 border border-border/40 text-[11px] text-muted-foreground/90 font-sans">
                      💬 <em>{s.hinglishDesc}</em>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/40 text-[11px] font-semibold text-primary flex items-center gap-1">
                    <span>{idx === 2 ? "👉 Tap Copy button above" : idx === 3 ? "⚡ Instant AI result" : "Step " + (idx + 1)}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct ChatGPT Shortcut Banner */}
          <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-primary/10 border border-emerald-500/30 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-foreground">
                  Ready to transform your photo? Launch ChatGPT now:
                </h4>
                <p className="text-xs text-muted-foreground">
                  Works on ChatGPT Plus / GPT-4o, Microsoft Copilot Designer, Google Gemini &amp; Midjourney.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm" asChild className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
                <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">
                  Launch ChatGPT <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild className="rounded-xl">
                <a href="https://www.bing.com/images/create" target="_blank" rel="noopener noreferrer">
                  Bing Image Creator <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: Interactive Prompt Customizer Studio ─── */}
        <section className="bg-muted/30 border border-border rounded-3xl p-5 sm:p-8 md:p-10 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-2">
                <Sliders className="h-3.5 w-3.5" />
                Interactive AI Prompt Customizer Studio
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-foreground">
                Customize Your Retro 80s / 90s Aesthetic
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Tweak decade, outfits, Indian backgrounds, and film grain in real time to generate your personalized prompt.
              </p>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setCustomSubject("person");
                setCustomDecade("the late 1980s (around 1988)");
                setCustomOutfit("high-waisted denim jeans, printed vintage shirt, retro accessories and voluminous layered hair");
                setCustomSetting("a realistic Indian college campus with red brick walls, vintage bicycles, and lush green trees");
                setCustomFilm("warm faded 35mm film colors, soft halation, subtle grain, and a genuine vintage 1988 photo feel");
                toast.success("Reset customizer to default!");
              }}
              className="rounded-xl text-xs"
            >
              <RefreshCw className="h-3.5 w-3.5 mr-1.5" /> Reset Options
            </Button>
          </div>

          {/* Controls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* 1. Subject */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Camera className="h-3.5 w-3.5 text-primary" /> 1. Subject / Gender
              </label>
              <select
                value={customSubject}
                onChange={(e) => setCustomSubject(e.target.value)}
                className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="person">Unisex / Solo Portrait</option>
                <option value="handsome Indian man with retro styling">Male (Retro Hero Look)</option>
                <option value="beautiful Indian woman with 90s vintage glam">Female (90s Bollywood / Retro Diva)</option>
                <option value="romantic Indian couple in 90s vintage romance style">Couple (90s Romantic Portrait)</option>
              </select>
            </div>

            {/* 2. Era / Decade */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Film className="h-3.5 w-3.5 text-amber-500" /> 2. Vintage Era / Year
              </label>
              <select
                value={customDecade}
                onChange={(e) => setCustomDecade(e.target.value)}
                className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="the late 1980s (around 1988)">Late 1980s (1988 Classic)</option>
                <option value="the early 1990s (around 1992)">Early 1990s (1992 Cassette Era)</option>
                <option value="the mid 1990s (around 1995)">Mid 1990s (1995 Bollywood Golden Age)</option>
                <option value="the late 1990s (around 1998)">Late 1990s (1998 Y2K Retro)</option>
              </select>
            </div>

            {/* 3. Outfits */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Palette className="h-3.5 w-3.5 text-rose-500" /> 3. Outfit &amp; Style
              </label>
              <select
                value={customOutfit}
                onChange={(e) => setCustomOutfit(e.target.value)}
                className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="high-waisted denim jeans, printed vintage shirt, retro accessories and voluminous layered hair">
                  High-Waisted Jeans &amp; Printed Shirt
                </option>
                <option value="oversized vintage leather jacket, aviator sunglasses, and retro denim">
                  Oversized Leather Jacket &amp; Aviators
                </option>
                <option value="flowing vintage chiffon saree with retro gold jhumkas and blowout hairstyle">
                  Vintage Chiffon Saree &amp; Jhumkas
                </option>
                <option value="tucked-in retro polo t-shirt, acid wash denim, white sneakers, and cassette player">
                  Retro College Polo &amp; Acid Wash Denim
                </option>
                <option value="traditional 90s festive silk Kurta / Banarasi attire with elegant vintage jewelry">
                  Festive Silk Ethnic &amp; Vintage Jewelry
                </option>
              </select>
            </div>

            {/* 4. Background Setting */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                <ImageIcon className="h-3.5 w-3.5 text-indigo-500" /> 4. Background &amp; Location
              </label>
              <select
                value={customSetting}
                onChange={(e) => setCustomSetting(e.target.value)}
                className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="a realistic Indian college campus with red brick walls, vintage bicycles, and lush green trees">
                  Indian College Campus (Red Bricks)
                </option>
                <option value="a bustling 1990s Mumbai street with vintage black-and-yellow Ambassador taxis and cinema posters">
                  90s Mumbai Street &amp; Ambassador Taxi
                </option>
                <option value="a cozy 1980s Indian home living room with wooden furniture, curtains, and tape recorder">
                  Vintage Indian Home Living Room
                </option>
                <option value="a nostalgic roadside tea stall (Chai tapri) with vintage Bajaj Chetak scooter parked">
                  Chai Tapri &amp; Bajaj Chetak Scooter
                </option>
                <option value="a scenic hill station terrace in Ooty / Shimla with misty mountains and golden hour sunset">
                  Ooty / Shimla Hill Station Golden Hour
                </option>
              </select>
            </div>

            {/* 5. Film Stock / Filter */}
            <div className="space-y-2 md:col-span-2 lg:col-span-2">
              <label className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" /> 5. Film Grain &amp; Aesthetic
              </label>
              <select
                value={customFilm}
                onChange={(e) => setCustomFilm(e.target.value)}
                className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="warm faded 35mm film colors, soft halation, subtle grain, and a genuine vintage 1988 photo feel">
                  Warm Faded 35mm Film &amp; Soft Halation (1988 Vibe)
                </option>
                <option value="authentic Kodak Gold 200 film tone, warm amber highlights, and soft focus print texture">
                  Kodak Gold 200 Warm Amber Glare
                </option>
                <option value="Fujifilm Superia 400 tones with nostalgic greens, matte shadows, and analog film noise">
                  Fujifilm Superia 400 Cool Matte Shadows
                </option>
                <option value="vintage on-camera flash Polaroid with high contrast, direct flash shadows, and orange timestamp">
                  1993 Flash Polaroid with Date Stamp
                </option>
              </select>
            </div>
          </div>

          {/* Generated Live Output Box */}
          <div className="space-y-3 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Wand2 className="h-3.5 w-3.5 text-primary" /> Your Live Customized Prompt:
              </span>
              <Badge variant="outline" className="text-[10px] text-primary border-primary/30">
                Ready to Copy
              </Badge>
            </div>

            <div className="relative rounded-2xl bg-card border border-border p-4 sm:p-5 text-xs sm:text-sm font-sans leading-relaxed text-foreground select-all">
              {customCustomPrompt}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <p className="text-xs text-muted-foreground">
                💡 Tip: You can further tweak details like hair style, glasses, or color in ChatGPT chat directly.
              </p>
              <Button
                onClick={() => handleCopy(customCustomPrompt, "custom-prompt")}
                className={cn(
                  "font-bold text-xs sm:text-sm rounded-xl px-5 py-2 shadow-md transition-all",
                  copiedId === "custom-prompt"
                    ? "bg-emerald-600 text-white"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                {copiedId === "custom-prompt" ? (
                  <>
                    <Check className="h-4 w-4 mr-1.5" /> Custom Prompt Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-1.5" /> Copy Custom Prompt
                  </>
                )}
              </Button>
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: Curated Preset Prompts Gallery ──────── */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              6 Viral Presets
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground">
              Explore More 80s &amp; 90s Vintage AI Prompts
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Choose from Bollywood glamour, college nostalgia, Polaroid flash, or street culture prompts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {PRESET_PROMPTS.map((preset) => {
              const isCopied = copiedId === preset.id;

              return (
                <div
                  key={preset.id}
                  className="bg-card border border-border/80 hover:border-primary/50 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <Badge
                          variant="secondary"
                          className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 mb-1.5 bg-muted text-foreground"
                        >
                          {preset.category}
                        </Badge>
                        <h3 className="text-base sm:text-lg font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                          {preset.title}
                        </h3>
                        <p className="text-xs font-semibold text-primary/80 mt-0.5">{preset.hindiTitle}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{preset.subtitle}</p>
                      </div>
                      <Badge className="bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-[10px] shrink-0">
                        {preset.badge}
                      </Badge>
                    </div>

                    {/* Prompt Box */}
                    <div className="my-4 rounded-xl bg-muted/40 border border-border/80 p-3.5 text-xs sm:text-sm text-foreground/90 leading-relaxed font-sans line-clamp-4 select-all">
                      &ldquo;{preset.prompt}&rdquo;
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {preset.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action row */}
                  <div className="pt-3 border-t border-border/60 flex items-center justify-between gap-3">
                    <span className="text-[11px] text-muted-foreground font-mono truncate">
                      🎞️ {preset.filmLook}
                    </span>

                    <Button
                      size="sm"
                      onClick={() => handleCopy(preset.prompt, preset.id)}
                      className={cn(
                        "text-xs font-bold rounded-xl px-3.5 py-1.5 transition-all shrink-0",
                        isCopied
                          ? "bg-emerald-600 text-white"
                          : "bg-primary hover:bg-primary/90 text-primary-foreground"
                      )}
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-3.5 w-3.5 mr-1" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 mr-1" /> Copy Preset
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── SECTION 5: Pro-Tips for 100% Face Likeness ──────── */}
        <section className="bg-card border border-border rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Pro Photography Tips
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-foreground mt-2">
              Secret Tips to Get 100% Exact Face Likeness (चेहरा बिल्कुल वैसा ही कैसे रखें)
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Follow these expert AI prompting tips to prevent ChatGPT from changing your face or adding distortions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-muted/30 border border-border rounded-2xl p-5 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                📸
              </div>
              <h3 className="text-sm font-bold text-foreground">1. Upload a Clean, Solo Portrait</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Use a sharp, well-lit photo with natural daylight. Avoid photos with sunglasses, heavy Snapchat beauty filters, or blurry group shots. Clear eye contact makes the AI preserve facial geometry perfectly.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-2xl p-5 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                🎯
              </div>
              <h3 className="text-sm font-bold text-foreground">2. Use the Identity Lock Phrase</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Notice how the viral prompt explicitly includes: <em>&ldquo;Preserve the face, skin tone, body shape, smile and overall identity very accurately.&rdquo;</em> This prevents the model from generating a generic model face.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-2xl p-5 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold">
                🔄
              </div>
              <h3 className="text-sm font-bold text-foreground">3. How to Refine in Chat</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                If the generated face looks slightly off, reply in the same chat: <em>&ldquo;Keep the exact same face as the uploaded reference photo, just adjust the clothing and background.&rdquo;</em> ChatGPT will refine it immediately!
              </p>
            </div>
          </div>
        </section>

        {/* ─── SECTION 6: AI Platform Comparison Table ───────── */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              Tool Breakdown
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground">
              Best AI Image Generators for 90s Vintage Photos
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Compare where this viral prompt performs best and which tools are 100% free.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/50 border-b border-border text-foreground font-semibold">
                <tr>
                  <th className="p-4">AI Generator</th>
                  <th className="p-4">Image Input Support</th>
                  <th className="p-4">Vintage 90s Quality</th>
                  <th className="p-4">Pricing</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-semibold text-foreground flex items-center gap-2">
                    <span className="h-6 w-6 rounded-md bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">
                      GPT
                    </span>
                    ChatGPT (GPT-4o / Plus)
                  </td>
                  <td className="p-4 text-emerald-600 dark:text-emerald-400 font-medium">✅ Direct Upload</td>
                  <td className="p-4">⭐⭐⭐⭐⭐ (Super Realistic)</td>
                  <td className="p-4">Free / Plus ($20/mo)</td>
                  <td className="p-4 text-right">
                    <Button size="sm" variant="outline" asChild className="text-xs rounded-xl h-8">
                      <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">
                        Open <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </td>
                </tr>

                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-semibold text-foreground flex items-center gap-2">
                    <span className="h-6 w-6 rounded-md bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">
                      Bing
                    </span>
                    Microsoft Copilot / Bing Designer
                  </td>
                  <td className="p-4 text-amber-600 dark:text-amber-400 font-medium">⚠️ Text Prompt Only</td>
                  <td className="p-4">⭐⭐⭐⭐ (High Quality)</td>
                  <td className="p-4 text-emerald-600 font-semibold">100% Free</td>
                  <td className="p-4 text-right">
                    <Button size="sm" variant="outline" asChild className="text-xs rounded-xl h-8">
                      <a href="https://www.bing.com/images/create" target="_blank" rel="noopener noreferrer">
                        Open <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </td>
                </tr>

                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-semibold text-foreground flex items-center gap-2">
                    <span className="h-6 w-6 rounded-md bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xs font-bold">
                      Gem
                    </span>
                    Google Gemini (Advanced)
                  </td>
                  <td className="p-4 text-emerald-600 dark:text-emerald-400 font-medium">✅ Direct Upload</td>
                  <td className="p-4">⭐⭐⭐⭐ (Good Film Colors)</td>
                  <td className="p-4">Free / Advanced</td>
                  <td className="p-4 text-right">
                    <Button size="sm" variant="outline" asChild className="text-xs rounded-xl h-8">
                      <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">
                        Open <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </td>
                </tr>

                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-semibold text-foreground flex items-center gap-2">
                    <span className="h-6 w-6 rounded-md bg-pink-500/20 text-pink-600 dark:text-pink-400 flex items-center justify-center text-xs font-bold">
                      MJ
                    </span>
                    Midjourney (v6 / Inpaint)
                  </td>
                  <td className="p-4 text-emerald-600 dark:text-emerald-400 font-medium">✅ Image URL / Blend</td>
                  <td className="p-4">⭐⭐⭐⭐⭐ (Cinematic Masterpiece)</td>
                  <td className="p-4">Paid Subscription</td>
                  <td className="p-4 text-right">
                    <Button size="sm" variant="outline" asChild className="text-xs rounded-xl h-8">
                      <a href="https://midjourney.com" target="_blank" rel="noopener noreferrer">
                        Open <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── SECTION 7: SEO FAQ Accordion (English, Hindi & Hinglish) ─── */}
        <section className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              Got Questions? · अक्सर पूछे जाने वाले सवाल
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-foreground">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Everything you need to know about creating 80s &amp; 90s viral AI portraits in ChatGPT.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "What is the viral 90s AI image prompt for ChatGPT?",
                qHindi: "चैटजीपीटी के लिए 90s वायरल इमेज प्रॉमप्ट क्या है?",
                a: "The viral 90s AI prompt is a specially crafted command for ChatGPT (GPT-4o / DALL-E) that takes your uploaded selfie and recreates you as if photographed in India in the late 1980s / early 1990s with high-waisted denim, retro hairstyles, warm 35mm film grain, and vintage Indian backgrounds.",
                aHindi: "यह प्रॉमप्ट आपकी अपलोड की गई फोटो से ठीक वैसा ही चेहरा और मुस्कान रखते हुए आपको 1980s/90s के विंटेज लुक (डेनिम जैकेट, रेट्रो बाल, गर्म 35mm फिल्म कलर्स) में बदल देता है।",
              },
              {
                q: "ChatGPT se 90s photo kaise banaye (Step-by-Step Hindi)?",
                qHindi: "चैटजीपीटी से 90s फोटो कैसे बनाएं (हिंदी में)?",
                a: "1. chatgpt.com या ChatGPT ऐप खोलें। 2. चैट बॉक्स में '+' आइकॉन पर क्लिक करके अपनी साफ फोटो अपलोड करें। 3. इस पेज से 'Copy Viral 90s Prompt' बटन दबाकर प्रॉमप्ट कॉपी करें और पेस्ट करें। 4. सेंड बटन दबाएं, 10 सेकंड में आपकी 90s विंटेज फोटो तैयार हो जाएगी!",
                aHindi: "1. Open ChatGPT app. 2. Tap '+' to upload your selfie. 3. Copy & paste this viral prompt. 4. Hit Send and download your 90s retro photo.",
              },
              {
                q: "Is it free to make 90s vintage AI photos in ChatGPT?",
                qHindi: "क्या चैटजीपीटी में 90s विंटेज फोटो बनाना फ्री है?",
                a: "Yes! Free ChatGPT users get access to GPT-4o image generation limits every day. You can also use free tools like Google Gemini and Microsoft Copilot Designer.",
                aHindi: "जी हां, ChatGPT के फ्री अकाउंट में भी डेली GPT-4o की इमेज जनरेशन लिमिट मिलती है। इसके अलावा Bing Image Creator और Gemini भी फ्री हैं।",
              },
              {
                q: "How do I ensure my face looks 100% exact in ChatGPT 90s photos?",
                qHindi: "फोटो में चेहरा बिल्कुल 100% अपना कैसे रखें?",
                a: "Upload a high-resolution, forward-facing selfie in natural lighting. Keep the exact identity lock phrase in your prompt: 'Preserve the face, skin tone, body shape, smile and overall identity very accurately.' If needed, reply in chat: 'Keep the exact face from uploaded reference photo.'",
                aHindi: "हमेशा सीधी और अच्छी रोशनी वाली फोटो अपलोड करें और प्रॉमप्ट में Identity Lock लाइन जरूर रखें। अगर चेहरा थोड़ा बदले, तो चैट में दोबारा कहें कि 'Keep exact facial geometry from uploaded photo'.",
              },
              {
                q: "Which hashtag is trending for these 90s AI photos on Instagram?",
                qHindi: "इंस्टाग्राम पर 90s AI फोटो के लिए कौन से हैशटैग ट्रेंड कर रहे हैं?",
                a: "Top trending hashtags include #90sAIFilter, #90sPrompt, #RetroAIPortrait, #VintageAI, #ChatGPTArt, #80sIndianAesthetic, #AIVintageFilter, and #90sNostalgia.",
                aHindi: "इंस्टाग्राम रील्स और पोस्ट्स के लिए ट्रेंडिंग हैशटैग: #90sAIFilter, #90sPrompt, #RetroAI, #ChatGPTVintage, #Indian90sAesthetic.",
              },
              {
                q: "Are my uploaded personal photos safe?",
                qHindi: "क्या मेरी अपलोड की गई पर्सनल फोटो सेफ है?",
                a: "When using official apps like OpenAI ChatGPT or Google Gemini, your photos are processed according to enterprise privacy policies. We do not store or transmit any of your photos on our website; everything runs directly inside your chosen AI app.",
                aHindi: "हमारी वेबसाइट पर आपकी कोई भी फोटो सेव या स्टोर नहीं होती है; आप डायरेक्ट चैटजीपीटी या जेमिनी के ऑफिशियल ऐप में इमेज अपलोड करते हैं जो पूरी तरह सुरक्षित है।",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-card border border-border/80 rounded-2xl p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden transition-all duration-200 open:border-primary/40 open:bg-muted/20"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>
                      {faq.q} <span className="text-xs font-normal text-muted-foreground block sm:inline sm:ml-2">({faq.qHindi})</span>
                    </span>
                  </span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground group-open:rotate-180 transition-transform duration-200 shrink-0 ml-2" />
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6.5 pt-2 border-t border-border/40 space-y-2">
                  <p>{faq.a}</p>
                  <p className="text-primary/90 font-medium">👉 {faq.aHindi}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ─── SECTION 8: Bottom Social & CTA Box ──────────────── */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/10 via-rose-500/10 to-indigo-500/15 border border-amber-500/30 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-foreground">
              Loved this Viral Prompt? Share with Friends!
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              अपने दोस्तों और परिवार के साथ शेयर करें ताकि वे भी अपनी 90s रेट्रो विंटेज फोटो बना सकें!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              size="lg"
              onClick={() => handleCopy(VIRAL_EXACT_PROMPT, "footer-copy")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl px-6"
            >
              {copiedId === "footer-copy" ? (
                <>
                  <Check className="h-4 w-4 mr-2" /> Prompt Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" /> Copy Viral Prompt Again
                </>
              )}
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleShare}
              className="rounded-2xl px-6 border-border hover:bg-card font-semibold"
            >
              <Share2 className="h-4 w-4 mr-2" /> Share on Social Media (शेयर करें)
            </Button>

            <Button
              size="lg"
              variant="ghost"
              asChild
              className="rounded-2xl px-5 text-muted-foreground hover:text-foreground"
            >
              <Link href="/collegeid">
                Check Student ID Card Maker <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
