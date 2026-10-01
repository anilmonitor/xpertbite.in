"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import {
  Calendar,
  MapPin,
  Users,
  Video,
  Camera,
  Sparkles,
  Share2,
  Award,
  Clock,
  ArrowRight,
  MessageCircle,
  Mic,
  Heart,
  TrendingUp,
} from "lucide-react";
import {
  GOOGLE_FORM_URL,
  SEARCH_KEYWORDS,
} from "./constants";

// Gallery Images
const GALLERY_ITEMS = [
  {
    src: "/garhwa-meet/hero.jpg",
    title: "Grand Stage & Summit Arena",
    tag: "Main Stage",
    description: "The main auditorium with mega LED visuals, spotlight sessions, and keynote addresses.",
  },
  {
    src: "/garhwa-meet/networking.jpg",
    title: "Creator Collaboration Lounge",
    tag: "Networking",
    description: "Young creators, vloggers, and podcasters sharing camera setups, growth strategies, and collab ideas.",
  },
  {
    src: "/garhwa-meet/awards.jpg",
    title: "Garhwa Creator Honors & Awards",
    tag: "Recognition",
    description: "Celebrating top regional video stars, trending vloggers, and digital changemakers.",
  },
  {
    src: "/garhwa-meet/vlogging.jpg",
    title: "Outdoor Vlogging & Scenic Walk",
    tag: "Field Shoot",
    description: "Capturing scenic landscapes and cultural heritage around Garhwa and Palamu with cameras and gimbals.",
  },
];

// Agenda Schedule
const SCHEDULE = [
  {
    time: "09:30 AM - 10:30 AM",
    title: "Registration & Creator Welcome Kit",
    desc: "Check-in at reception, collect custom Creator ID Badges, welcome breakfast, and casual hello.",
    icon: Users,
  },
  {
    time: "10:30 AM - 11:30 AM",
    title: "Grand Inauguration & Opening Keynotes",
    desc: "Opening address on the rise and future of digital content creators in Jharkhand.",
    icon: Mic,
  },
  {
    time: "11:30 AM - 01:00 PM",
    title: "Masterclass: Viral Videos, SEO & Algorithm Secrets",
    desc: "Hands-on session on YouTube thumbnail psychology, Shorts/Reels virality, video editing, and smart gear hacks.",
    icon: Video,
  },
  {
    time: "01:00 PM - 02:15 PM",
    title: "Networking Lunch & Refreshments",
    desc: "Enjoy delicious refreshments and snacks while networking with fellow content creators and vloggers.",
    icon: Heart,
  },
  {
    time: "02:15 PM - 03:45 PM",
    title: "Outdoor Vlogging & Live Reel Production",
    desc: "Practical shooting round with gimbals, microphones, dynamic lighting, and instant on-stage review.",
    icon: Camera,
  },
  {
    time: "03:45 PM - 05:00 PM",
    title: "Garhwa Creator Awards & Mega Group Photo",
    desc: "Trophy ceremony honoring outstanding creators, milestone mementos, group celebration, and closing remarks.",
    icon: Award,
  },
];

export function GarhwaMeetClient() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 14,
    minutes: 32,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {}
  };

  const handleShare = async () => {
    const shareData = {
      title: "Garhwa Influencer Meet 2026",
      text: "Join Garhwa Influencer Meet 2026! The biggest Creator, YouTuber & Vlogger Summit in Jharkhand. Register via Google Form now!",
      url: typeof window !== "undefined" ? window.location.href : "https://xpertbite.in/garhwa-influencer-meet-2026",
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        triggerConfetti();
      } catch {}
    } else {
      copyPageLink();
    }
  };

  const copyPageLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      triggerConfetti();
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const scrollToRegister = () => {
    const element = document.getElementById("register-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappShareUrl =
    "https://api.whatsapp.com/send?text=" +
    encodeURIComponent(
      "🔥 Join Garhwa Influencer Meet 2026! Jharkhand's biggest Creator, YouTuber & Vlogger Summit. Free Google Form Registration is Live here: https://xpertbite.in/garhwa-influencer-meet-2026"
    );

  return (
    <div className="relative w-full bg-slate-50 text-slate-900 overflow-hidden font-sans selection:bg-rose-500 selection:text-white">
      {/* Background Soft Glow Accents (Light Mode) */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-rose-200/50 via-purple-100/40 to-transparent blur-3xl rounded-full" />
      <div className="pointer-events-none absolute top-[25%] -right-40 w-[600px] h-[600px] bg-indigo-100/60 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute top-[60%] -left-40 w-[600px] h-[600px] bg-amber-100/60 blur-[140px] rounded-full" />

      {/* ======================================================== */}
      {/* 1. HERO SECTION (LIGHT MODE)                             */}
      {/* ======================================================== */}
      <section className="relative pt-8 sm:pt-14 pb-12 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Main H1 Title (SEO Optimized & Clean) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 max-w-5xl leading-[1.18] sm:leading-[1.1] px-1">
            Garhwa <span className="bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent">Influencer Meet</span> 2026
          </h1>

          {/* Subtitle with balanced text */}
          <p className="mt-3.5 sm:mt-5 text-base sm:text-xl md:text-2xl font-semibold text-slate-700 max-w-2xl sm:max-w-3xl leading-snug sm:leading-relaxed px-2">
            गढ़वा, पलामू, मेराल (Meral) और रमुना के सभी यूट्यूबर्स, व्लॉगर्स और कंटेंट क्रिएटर्स का महामिलन!
          </p>

          {/* Meta Info Badges (2x2 on mobile, flex on desktop) */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm w-full max-w-lg sm:max-w-none px-2">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-700 font-medium">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-600 shrink-0" />
              <span>Year 2026</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-700 font-medium">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 shrink-0" />
              <span>Garhwa Town Arena</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-700 font-medium">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-600 shrink-0" />
              <span>500+ Creators</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-700 font-medium">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
              <span>100% Free Entry</span>
            </div>
          </div>

          {/* CTA Buttons (Full width on phones, inline on desktop) */}
          <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-sm sm:max-w-none px-2 sm:px-0">
            <button
              type="button"
              onClick={scrollToRegister}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-rose-500/25 hover:shadow-rose-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-200 shrink-0" />
              <span>Fill Google Form (Free Pass)</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>

            {/* Share on WhatsApp Button */}
            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerConfetti}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>Share on WhatsApp</span>
            </a>

            {/* Share With Creators / Copy Link Button */}
            <button
              type="button"
              onClick={handleShare}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-semibold text-sm sm:text-base shadow-sm hover:bg-slate-100 active:scale-[0.98] transition-all duration-200"
            >
              <Share2 className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{copiedLink ? "Link Copied!" : "Share Link"}</span>
            </button>
          </div>

          {/* Countdown Display Card */}
          <div className="mt-8 sm:mt-12 w-full max-w-lg sm:max-w-2xl p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-md sm:shadow-lg">
            <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-100">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5 sm:gap-2">
                <Clock className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>Countdown to Meetup</span>
              </span>
              <span className="text-[10px] sm:text-xs text-amber-700 font-semibold px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200">
                Live Timer
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
              <div className="p-2 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">{timeLeft.days}</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase mt-0.5">Days</div>
              </div>
              <div className="p-2 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">{timeLeft.hours}</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase mt-0.5">Hours</div>
              </div>
              <div className="p-2 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">{timeLeft.minutes}</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase mt-0.5">Minutes</div>
              </div>
              <div className="p-2 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-rose-600">{timeLeft.seconds}</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase mt-0.5">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual Banner (Responsive Aspect Ratio) */}
        <div className="mt-8 sm:mt-14 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full">
            <Image
              src="/garhwa-meet/hero.jpg"
              alt="Garhwa Influencer Meet 2026 Auditorium Stage and Creators"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-4">
            <div className="max-w-xl">
              <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-rose-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2 shadow-sm">
                Main Stage • Garhwa Arena
              </span>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white leading-snug">
                The Epicenter of Jharkhand Digital Creators
              </h2>
              <p className="text-slate-200 text-xs sm:text-sm mt-1">
                Connecting video creators, vloggers, and digital artists across Jharkhand.
              </p>
            </div>
            <button
              onClick={() => setSelectedPhoto("/garhwa-meet/hero.jpg")}
              className="self-end sm:self-auto px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold border border-white/30 transition-all flex items-center gap-1.5 shrink-0"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>View Photo</span>
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. PHOTO GALLERY (LIGHT MODE)                            */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-2 sm:gap-4 text-center sm:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
              Glimpses of Garhwa Influencer Meet 2026
            </h2>
            <p className="mt-1.5 sm:mt-2 text-slate-600 text-xs sm:text-sm max-w-xl">
              From grand stage sessions to creator lounges and scenic outdoor vlogging in Jharkhand.
            </p>
          </div>
          <div className="text-xs text-slate-500 font-medium hidden sm:block">
            Click on any photo to view full screen
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(item.src)}
              className="cursor-pointer group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:border-rose-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[10px] sm:text-[11px] font-bold text-rose-700 border border-slate-200 shadow-sm">
                  {item.tag}
                </span>
              </div>
              <div className="p-3.5 sm:p-4">
                <h3 className="font-bold text-sm text-slate-900 group-hover:text-rose-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. KEY HIGHLIGHTS / WHY ATTEND (LIGHT MODE)              */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            Supercharge Your Content Creation in 2026
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-sm md:text-base">
            Everything you need to grow your YouTube channel, Instagram page, brand deals, and creator network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-4 sm:mb-5">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2">Algorithm &amp; Virality Secrets</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Discover proven strategies for YouTube CTR, high retention vlogs, Reels virality, and sound monetization tactics from top full-time creators.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center text-violet-600 mb-4 sm:mb-5">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2">Creator Collaboration</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Connect with fellow creators, YouTubers, and video artists. Exchange collab videos, podcast interviews, and community shoutouts.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4 sm:mb-5">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2">Garhwa Creator Honors 2026</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Get recognized with official certificates, custom trophies, and media spotlights celebrating outstanding local creators who put Garhwa on the digital map.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. EVENT AGENDA SCHEDULE (LIGHT MODE)                    */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            Schedule of Activities
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-sm">
            A full-day action-packed itinerary crafted specifically for digital content creators.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {SCHEDULE.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-rose-300 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-6"
              >
                <div className="flex items-center gap-3 sm:block">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-rose-50 flex-shrink-0 flex items-center justify-center text-rose-600 border border-rose-200">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="sm:hidden flex items-center gap-2">
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                      {item.time}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      Step {idx + 1}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="hidden sm:block text-xs font-bold text-amber-700 uppercase tracking-wider">
                    {item.time}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="hidden sm:block">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    Step {idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. EMBEDDED GOOGLE FORM REGISTRATION (LIGHT MODE)        */}
      {/* ======================================================== */}
      <section id="register-form" className="py-10 sm:py-16 md:py-20 pb-16 sm:pb-24 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 px-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Reserve Your Creator Seat (Google Form)
          </h2>

          <p className="mt-2 sm:mt-3 text-slate-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Fill the official Google Form below to claim your free creator pass for the event.
          </p>
        </div>

        {/* Embedded Google Form Iframe Container (Light Mode) */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-300 bg-white shadow-xl sm:shadow-2xl">
          <div className="px-3.5 py-3 bg-slate-100 border-b border-slate-200 text-xs sm:text-sm text-slate-700 font-semibold flex items-center justify-between">
            <span>Garhwa Influencer Meet 2026 - Registration Form</span>
            <span className="text-[11px] text-slate-500 font-normal hidden sm:inline">100% Free Entry</span>
          </div>

          <div className="w-full flex justify-center bg-white overflow-x-auto">
            <iframe
              src={GOOGLE_FORM_URL}
              width="100%"
              height="2124"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full max-w-[640px] min-h-[1700px] border-none"
              title="Garhwa Influencer Meet 2026 Official Registration Form"
            >
              Loading Google Form…
            </iframe>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. SEO DISCOVERY & REGIONAL KEYWORDS (HIDDEN ON PAGE)    */}
      {/* ======================================================== */}
      <section className="sr-only" aria-label="Regional Search Terms and Creator Directory">
        <h2>Explore Regional Search Terms &amp; Creator Directory</h2>
        <p>
          Topics and search queries index for Garhwa, Meral, Palamu, Distdel &amp; Jharkhand Creator Community:
        </p>
        <div>
          {SEARCH_KEYWORDS.map((kw, i) => (
            <span key={i}>#{kw} </span>
          ))}
        </div>

        {/* Accessible Semantic Content for Google Search Engine indexing */}
        <div>
          <p>
            Welcome to the official portal of Garhwa Influencer Meet 2026. 
            Connecting creators searching for Garhwa, Garhwa Influencer Meet, 
            Palamu Influencer Meet, Garhwa Meral Influencer Meet, 
            Garhwa Miral Influencer Meet, Garhwa Ramuna Influencer Meet, 
            Priyanshu Influencer Meet, Rajaram Ji Garhwa, and Anil Monitor Vlog Garhwa. 
            Whether you produce Garhwa Vlog, Garhwa Trending Vlog, 
            Garhwa Lifestyle Vlog, or Garhwa City Vlog, this summit brings together 
            Garhwa Influencers, Garhwa ke Influencers, Garhwa Creator Meet, 
            Jharkhand Influencer Meet, Garhwa YouTuber Meet, Garhwa Blogger Meet, 
            and the entire Garhwa Creator Community across Garhwa Jharkhand and Palamu Jharkhand. 
            Including discovery terms for distdel, garhwa food delivery app, 
            local food delivery app, local food delivery appp, Distdel.com. 
            Join Anil Monitor, Anil Monitor Vlogs, and hundreds of passionate digital storytellers for 
            the landmark Garhwa Mein Influencer Meet.
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. LIGHTBOX PHOTO MODAL                                  */}
      {/* ======================================================== */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-sm animate-in fade-in"
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="self-end mb-2 text-white hover:text-rose-400 font-bold text-xs sm:text-sm flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/20 active:bg-white/30"
            >
              Close (ESC) ✕
            </button>
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <Image
                src={selectedPhoto}
                alt="Garhwa Meet Full Preview"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
