"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  MessageCircle,
  Upload,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { DurgaAudioPlayer } from "./durga-audio-player";

function generateClientSlug(name: string): string {
  const clean = name.trim().toLowerCase().replace(/[^a-z0-9]/g, "") || "anil";
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `${clean}-${randomNum}`;
}

export function DurgaPujaClient() {
  const searchParams = useSearchParams();

  const userSlugParam = searchParams.get("u") || searchParams.get("id") || searchParams.get("slug") || "";
  const nameParam = searchParams.get("name") || "";

  const [userName, setUserName] = useState<string>(nameParam || "");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [activeSlug, setActiveSlug] = useState<string | null>(userSlugParam || null);
  const [isSavingDb, setIsSavingDb] = useState<boolean>(false);

  // Recipient greeting data fetched from server
  const [recipientGreeting, setRecipientGreeting] = useState<{
    name: string;
    imageUrl?: string | null;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Countdown Timer to Durga Puja 2026 (Target: 16 October 2026)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-10-16T00:00:00+05:30").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  // Fetch greeting from DB if ?u=... is in URL
  useEffect(() => {
    if (userSlugParam) {
      fetch(`/api/durgapuja?u=${encodeURIComponent(userSlugParam)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.success && data?.greeting) {
            setRecipientGreeting({
              name: data.greeting.name,
              imageUrl: data.greeting.imageUrl,
            });
            if (data.greeting.name && !nameParam) {
              setUserName(data.greeting.name);
            }
          }
        })
        .catch(() => {});
    }
  }, [userSlugParam, nameParam]);

  // Check localStorage for saved photo or name
  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem("durga_puja_user_photo");
      if (savedPhoto && !photoPreview && !userSlugParam) {
        setPhotoPreview(savedPhoto);
      }
      const savedName = localStorage.getItem("durga_puja_user_name");
      if (savedName && !userName && !nameParam) {
        setUserName(savedName);
      }
    } catch {}
  }, [userSlugParam, photoPreview, nameParam, userName]);

  // Handle Photo Upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error("कृपया 10MB से छोटी फोटो चुनें");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setPhotoPreview(result);
      try {
        localStorage.setItem("durga_puja_user_photo", result);
      } catch {}
      toast.success("आपकी फोटो लग गई है");
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setPhotoPreview(null);
    try {
      localStorage.removeItem("durga_puja_user_photo");
    } catch {}
  };

  // Save greeting uniquely to DB and return clean short English URL
  const saveGreetingToServer = async (): Promise<{ slug?: string; shareUrl?: string } | null> => {
    const nameToSave = userName.trim() || (recipientGreeting?.name ? recipientGreeting.name : "Anil");
    try {
      setIsSavingDb(true);
      const res = await fetch("/api/durgapuja", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameToSave,
          message: "दुर्गा पूजा की हार्दिक शुभकामनाएं",
          imageBase64: photoPreview,
        }),
      });

      const data = await res.json();
      if (data?.success && data?.greeting) {
        const slug = data.greeting.slug || data.greeting.id;
        setActiveSlug(slug);
        return {
          slug,
          shareUrl: data.greeting.shareUrl,
        };
      }
    } catch (e) {
      console.error("Save greeting error:", e);
    } finally {
      setIsSavingDb(false);
    }
    return null;
  };

  // Generate fallback or active short English URL
  const getShortShareUrl = (customSlug?: string) => {
    if (typeof window === "undefined") return "https://xpertbite.in/durgapuja2026";
    const origin = window.location.origin;
    const nameToUse = userName.trim() || (recipientGreeting?.name ? recipientGreeting.name : "anil");
    const slug = customSlug || activeSlug || generateClientSlug(nameToUse);
    return `${origin}/durgapuja2026?u=${slug}`;
  };

  // Short WhatsApp message text (with 1 emoji)
  const getWhatsAppMessage = (shareUrl: string) => {
    const nameToShare = userName.trim() || (recipientGreeting?.name ? recipientGreeting.name : "Anil");
    return `${nameToShare} ने दुर्गा पूजा को लेकर आपके लिए कुछ भेजा है ✨\n\nदेखने के लिए लिंक खोलें:\n${shareUrl}`;
  };

  // WhatsApp Share Intent
  const handleWhatsAppShare = async () => {
    toast.loading("WhatsApp लिंक तैयार हो रहा है...");
    let shareUrl = getShortShareUrl();

    const serverResult = await saveGreetingToServer();
    if (serverResult?.shareUrl) {
      shareUrl = serverResult.shareUrl;
    } else if (serverResult?.slug) {
      shareUrl = getShortShareUrl(serverResult.slug);
    }

    toast.dismiss();
    const text = encodeURIComponent(getWhatsAppMessage(shareUrl));
    const whatsappUrl = `https://api.whatsapp.com/send?text=${text}`;
    window.open(whatsappUrl, "_blank");
    toast.success("WhatsApp खुल रहा है...");
  };

  const displaySender = recipientGreeting?.name || (userName.trim() ? userName.trim() : (nameParam ? nameParam : "Anil"));
  const displayPhoto = photoPreview || recipientGreeting?.imageUrl;

  return (
    <div className="relative min-h-screen bg-[#FFFDF9] text-gray-900 overflow-x-hidden font-hindi-heading flex flex-col items-center justify-start py-8 px-4 sm:px-6">
      {/* Background Devotional Audio Player */}
      <DurgaAudioPlayer />

      {/* Main Clean Page Layout (No Box Shadows) */}
      <div className="relative z-10 w-full max-w-lg sm:max-w-xl text-center text-gray-900 my-auto space-y-6">
        
        {/* Large Flowing Countdown & Sender Header */}
        <div className="text-center space-y-2 pt-2">
          <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#991B1B] font-mono tracking-tight">
            {timeLeft.days} दिन {timeLeft.hours} घंटा {timeLeft.minutes} मिनट {timeLeft.seconds} सेकंड पहले
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-hindi-royal text-amber-950 tracking-wide underline decoration-amber-400 decoration-4 underline-offset-8">
            {displaySender}
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-900 font-hindi-heading pt-1">
            की तरफ से दुर्गा पूजा की हार्दिक शुभकामनाएं
          </p>
        </div>

        {/* Sacred Sanskrit Shloka */}
        <div className="py-3 border-y-2 border-amber-200/80">
          <p className="text-sm sm:text-base md:text-lg text-amber-900 font-hindi-shloka font-bold italic leading-relaxed">
            ॥ सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके । शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥
          </p>
        </div>

        {/* Grand Maa Durga Divine Portrait (Large & High Definition) */}
        <div className="relative w-56 h-56 sm:w-68 sm:h-68 md:w-76 md:h-76 mx-auto rounded-full p-2 bg-gradient-to-tr from-amber-400 via-amber-300 to-amber-500">
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src="/durgapuja/durga_mata_portrait.jpg"
              alt="Maa Durga"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Grand Title (Royal & Ultra-Bold Typography) */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-hindi-royal font-black text-[#991B1B] leading-tight tracking-tight">
          दुर्गा पूजा की हार्दिक शुभकामनाएं
        </h1>

        {/* Sender Framed Photo (if attached) */}
        {displayPhoto && (
          <div className="relative inline-block mx-auto pt-2">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-amber-400 shadow-md">
              <Image src={displayPhoto} alt="User" fill className="object-cover" />
            </div>
            {photoPreview && (
              <button
                onClick={handleRemovePhoto}
                className="absolute top-1 right-0 bg-red-600 text-white rounded-full p-1 shadow hover:bg-red-700 transition-colors"
                title="हटाएं"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* Large Clean Input Controls */}
        <div className="space-y-3 pt-2">
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              try {
                localStorage.setItem("durga_puja_user_name", e.target.value);
              } catch {}
            }}
            placeholder="अपना नाम यहाँ लिखें..."
            maxLength={40}
            className="w-full py-4 px-5 bg-amber-50/70 border-2 border-amber-300 rounded-2xl text-gray-900 placeholder-gray-400 text-lg sm:text-xl font-black text-center focus:outline-none focus:border-amber-500 focus:bg-white transition-all shadow-sm"
          />

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />

          {!photoPreview && (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full py-3.5 px-4 bg-amber-50/90 hover:bg-amber-100 border-2 border-dashed border-amber-300 rounded-2xl text-amber-900 text-base font-extrabold flex items-center justify-center gap-2 transition-all active:scale-98"
            >
              <Upload className="w-4 h-4 text-amber-700" />
              <span>अपनी फोटो लगाएं</span>
            </button>
          )}
        </div>

        {/* Big Grand 1-Tap WhatsApp Share Button */}
        <div className="pt-2">
          <button
            type="button"
            disabled={isSavingDb}
            onClick={handleWhatsAppShare}
            className="w-full py-4 sm:py-4.5 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black rounded-2xl text-xl sm:text-2xl flex items-center justify-center gap-3 shadow-lg shadow-green-600/25 active:scale-95 transition-all disabled:opacity-75"
          >
            <MessageCircle className="w-7 h-7 fill-current" />
            <span>WhatsApp पर शेयर करें</span>
          </button>
        </div>

      </div>

      {/* Mini Simple Footer */}
      <footer className="relative z-10 mt-12 pb-4 text-center text-gray-600">
        <Link
          href="https://xpertbite.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="relative w-6 h-6 rounded overflow-hidden bg-white border border-gray-200 p-0.5 shadow-xs">
            <Image
              src="/logos/xpertbite_logo_light.png"
              alt="XpertBite"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-sm font-bold text-gray-800">
            XpertBite Technologies
          </span>
        </Link>
      </footer>

    </div>
  );
}
