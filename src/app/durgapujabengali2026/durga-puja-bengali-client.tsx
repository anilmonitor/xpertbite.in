"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Upload, X, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { DurgaAudioBengaliPlayer } from "./durga-audio-bengali-player";
import { FestiveCelebration } from "@/components/festive/festive-celebration";
import { FestiveMagicalEffects } from "@/components/festive/diwali-effects";

export function DurgaPujaBengaliClient({ initialGreeting }: { initialGreeting?: any }) {
  const searchParams = useSearchParams();
  const nameParam = searchParams.get("name") || "";
  const userSlugParam = searchParams.get("u") || searchParams.get("id") || "";

  // User input states (empty on shared links so user types their own name)
  const [userName, setUserName] = useState<string>(!userSlugParam && !initialGreeting ? nameParam : "");
  const [userHasEditedPhoto, setUserHasEditedPhoto] = useState<boolean>(false);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isSavingDb, setIsSavingDb] = useState<boolean>(false);

  // Saved / Dynamic URL greeting state
  const [recipientGreeting, setRecipientGreeting] = useState<{
    name: string;
    imageUrl?: string | null;
    slug?: string;
    views?: number;
    blessings?: number;
  } | null>(initialGreeting || null);

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

  // Fetch greeting from DB if not already supplied via SSR
  useEffect(() => {
    if (userSlugParam && !initialGreeting) {
      fetch(`/api/durgapujabengali?u=${encodeURIComponent(userSlugParam)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.success && data?.greeting) {
            setRecipientGreeting({
              name: data.greeting.name,
              imageUrl: data.greeting.imageUrl,
              views: data.greeting.views,
              blessings: data.greeting.blessings,
            });
            if (data.greeting.name && !nameParam) setUserName(data.greeting.name);
          }
        })
        .catch(() => {});
    }
  }, [userSlugParam, nameParam, initialGreeting]);

  // Load saved local user info
  useEffect(() => {
    try {
      const savedName = localStorage.getItem("durga_bengali_user_name");
      if (savedName && !userName && !initialGreeting) setUserName(savedName);

      const savedPhoto = localStorage.getItem("durga_bengali_user_photo");
      if (savedPhoto && !photoPreview && !userSlugParam) setPhotoPreview(savedPhoto);
    } catch {}
  }, [userName, photoPreview, userSlugParam, initialGreeting]);

  // Handle Direct Photo Selection without crop (Full aspect ratio preserved)
  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 20 * 1024 * 1024) {
      toast.error("ছবির সাইজ ২০MB-এর কম হওয়া প্রয়োজন");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      const img = new window.Image();
      img.src = result;
      img.onload = () => {
        const maxDimension = 1200;
        let w = img.width;
        let h = img.height;
        if (w > maxDimension || h > maxDimension) {
          if (w > h) {
            h = Math.round((h * maxDimension) / w);
            w = maxDimension;
          } else {
            w = Math.round((w * maxDimension) / h);
            h = maxDimension;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, w, h);
          const compressed = canvas.toDataURL("image/jpeg", 0.9);
          setPhotoPreview(compressed);
          setUserHasEditedPhoto(true);
          try {
            localStorage.setItem("durga_bengali_user_photo", compressed);
          } catch {}
          toast.success("ছবি সফলভাবে সেট করা হয়েছে!");
        } else {
          setPhotoPreview(result);
          setUserHasEditedPhoto(true);
          toast.success("ছবি সফলভাবে সেট করা হয়েছে!");
        }
      };
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handleRemovePhoto = () => {
    setPhotoPreview(null);
    setUserHasEditedPhoto(true);
    try {
      localStorage.removeItem("durga_bengali_user_photo");
    } catch {}
  };

  // Save greeting uniquely to DB
  const saveGreetingToServer = async (): Promise<{ slug?: string; shareUrl?: string } | null> => {
    const nameToSave = userName.trim() || (recipientGreeting?.name ? recipientGreeting.name : "Anil");
    try {
      setIsSavingDb(true);
      const res = await fetch("/api/durgapujabengali", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameToSave,
          message: "শুভ শারদীয়া ও দুর্গাপূজার আন্তরিক প্রীতি ও শুভেচ্ছা",
          imageBase64: photoPreview,
          referredBy: userSlugParam || null,
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

  const generateClientSlug = (name: string) => {
    const clean = name.trim().toLowerCase().replace(/[^a-z0-9]/g, "") || "sharad";
    return `bn-${clean}-${Math.floor(100 + Math.random() * 900)}`;
  };

  const getShortShareUrl = (customSlug?: string) => {
    const origin = typeof window !== "undefined" ? window.location.origin : "https://xpertbite.in";
    const nameToUse = userName.trim() || (recipientGreeting?.name ? recipientGreeting.name : "Anil");
    const slug = customSlug || activeSlug || generateClientSlug(nameToUse);
    return `${origin}/durgapujabengali2026?u=${slug}`;
  };

  // Bengali WhatsApp message text
  const getWhatsAppMessage = (shareUrl: string) => {
    const nameToShare = userName.trim() || (recipientGreeting?.name ? recipientGreeting.name : "Anil");
    return `${nameToShare} আপনার জন্য দুর্গাপূজার শুভেচ্ছা পাঠিয়েছে ✨\n\nদেখার জন্য লিংকটি খুলুন:\n${shareUrl}`;
  };

  // Robust universal WhatsApp opener
  const triggerWhatsApp = (messageText: string) => {
    const encoded = encodeURIComponent(messageText);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      // Direct intent (opens WhatsApp app instantly)
      window.location.href = `whatsapp://send?text=${encoded}`;
      setTimeout(() => {
        window.location.href = `https://api.whatsapp.com/send?text=${encoded}`;
      }, 1200);
    } else {
      const win = window.open(`https://api.whatsapp.com/send?text=${encoded}`, "_blank");
      if (!win) {
        window.location.href = `https://api.whatsapp.com/send?text=${encoded}`;
      }
    }
  };

  const handleWhatsAppShare = async () => {
    if (isSavingDb) return;

    try {
      setIsSavingDb(true);
      toast.info("WhatsApp ওপেন হচ্ছে...");

      const serverResult = await saveGreetingToServer();
      let finalShareUrl = getShortShareUrl();
      if (serverResult?.shareUrl) {
        finalShareUrl = serverResult.shareUrl;
      } else if (serverResult?.slug) {
        finalShareUrl = getShortShareUrl(serverResult.slug);
      }

      const messageText = getWhatsAppMessage(finalShareUrl);
      triggerWhatsApp(messageText);
    } catch (err) {
      console.error("WhatsApp share error:", err);
      triggerWhatsApp(getWhatsAppMessage(getShortShareUrl()));
    } finally {
      setIsSavingDb(false);
    }
  };

  // Fast 100% Reliable Facebook Share
  const handleFacebookShare = async () => {
    if (isSavingDb) return;

    try {
      setIsSavingDb(true);
      toast.info("Facebook ওপেন হচ্ছে...");

      const serverResult = await saveGreetingToServer();
      let finalShareUrl = getShortShareUrl();
      if (serverResult?.shareUrl) {
        finalShareUrl = serverResult.shareUrl;
      } else if (serverResult?.slug) {
        finalShareUrl = getShortShareUrl(serverResult.slug);
      }

      const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(finalShareUrl)}`;
      const win = window.open(fbUrl, "_blank", "width=620,height=580");
      if (!win) {
        window.location.href = fbUrl;
      }
    } catch (err) {
      console.error("Facebook share error:", err);
      const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShortShareUrl())}`;
      window.open(fbUrl, "_blank");
    } finally {
      setIsSavingDb(false);
    }
  };

  // Fast 100% Reliable Copy Link
  const [copied, setCopied] = useState<boolean>(false);
  const handleCopyLink = async () => {
    if (isSavingDb) return;

    try {
      setIsSavingDb(true);
      toast.info("লিঙ্ক তৈরি হচ্ছে...");

      const serverResult = await saveGreetingToServer();
      let finalShareUrl = getShortShareUrl();
      if (serverResult?.shareUrl) {
        finalShareUrl = serverResult.shareUrl;
      } else if (serverResult?.slug) {
        finalShareUrl = getShortShareUrl(serverResult.slug);
      }

      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(finalShareUrl);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = finalShareUrl;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopied(true);
      toast.success("✅ আপনার পার্সোনাল লিঙ্ক কপি হয়েছে!");
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Copy link error:", err);
      try {
        await navigator.clipboard.writeText(getShortShareUrl());
        setCopied(true);
        toast.success("✅ লিঙ্ক কপি হয়েছে!");
        setTimeout(() => setCopied(false), 3000);
      } catch {
        toast.error("লিঙ্ক কপি করা সম্ভব হয়নি");
      }
    } finally {
      setIsSavingDb(false);
    }
  };

  // When user is typing, display the typed name immediately. Otherwise fallback to recipientGreeting or Anil.
  const displaySender = userName.trim()
    ? userName.trim()
    : (recipientGreeting?.name || (nameParam ? nameParam : "Anil"));

  // If user uploaded a photo, show it. If user removed photo, show default. If user hasn't touched photo, show recipient's photo (if any).
  const displayPhoto = photoPreview
    ? photoPreview
    : (userHasEditedPhoto ? null : (recipientGreeting?.imageUrl || null));

  return (
    <div className="relative min-h-screen bg-[#FFFDF9] text-gray-900 overflow-x-hidden font-serif flex flex-col items-center justify-start pt-16 sm:pt-20 pb-12 px-4 sm:px-6">
      {/* Interactive Festive Touch Phuljhadi & Big Floating Glowing Sparkles */}
      <FestiveMagicalEffects />

      {/* 10 Seconds Live Celebration Fireworks & Confetti Popper on Page Open */}
      <FestiveCelebration durationMs={10000} />

      {/* Background Devotional Bengali Audio Player */}
      <DurgaAudioBengaliPlayer />

      {/* Main Clean Bengali Page Layout */}
      <div className="relative z-10 w-full max-w-lg sm:max-w-xl text-center text-gray-900 my-auto space-y-6">
        
        {/* Large Flowing Countdown & Sender Header */}
        <div className="text-center space-y-2 pt-2">
          {/* Festive Animated GIF only on Top of the Timer */}
          <div className="flex justify-center items-center mb-1">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md">
              <Image src="/durgapuja/durgapuja.gif" alt="Durga Puja" fill className="object-contain" unoptimized />
            </div>
          </div>

          <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#990012] font-mono tracking-tight leading-tight">
            <div>
              {timeLeft.days} দিন {timeLeft.hours} ঘণ্টা {timeLeft.minutes} মিনিট
            </div>
            <div className="mt-0.5">
              {timeLeft.seconds} সেকেন্ড বাকি
            </div>
          </div>

          {/* Sender Name with Black Border + Smooth Colorful Slim Border */}
          <div className="w-full max-w-[300px] sm:max-w-md mx-auto my-2 rounded-2xl border-2 border-black p-[2px] festive-name-slim-border shadow-xl shadow-black/20">
            <div className="relative w-full px-6 sm:px-10 py-2.5 sm:py-3.5 rounded-[13px] bg-gradient-to-r from-red-800 via-amber-700 to-red-800 border border-black/30 text-white flex items-center justify-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide font-serif text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] break-words">
                {displaySender}
              </h2>
            </div>
          </div>

          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-900 pt-1 tracking-wide leading-relaxed">
            এর পক্ষ থেকে দুর্গাপূজার আন্তরিক শুভেচ্ছা
          </p>
        </div>

        {/* Main Divine / User Portrait (With Sleek Slim Colorful Blinking Background Frame) */}
        <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto rounded-3xl p-1 festive-photo-color-blink transition-all">
          <div className="relative w-full min-h-[220px] max-h-[380px] rounded-[22px] overflow-hidden border-2 border-white/95 shadow-inner bg-white flex items-center justify-center p-1">
            {displayPhoto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={displayPhoto}
                alt={displaySender}
                className="w-auto h-auto max-h-[360px] max-w-full object-contain rounded-xl shadow-xs"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/durgapuja/durga_mata_portrait.jpg"
                alt="Maa Durga"
                className="w-auto h-auto max-h-[360px] max-w-full object-contain rounded-xl"
              />
            )}
          </div>

          {/* Edit/Remove controls on top right */}
          {photoPreview && (
            <div className="absolute top-3 right-3 flex gap-1.5 z-20">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-amber-600 text-white rounded-full p-2 shadow-lg hover:bg-amber-700 transition-all hover:scale-110 active:scale-95"
                title="ছবি পরিবর্তন"
              >
                <Upload className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleRemovePhoto}
                className="bg-red-600 text-white rounded-full p-2 shadow-lg hover:bg-red-700 transition-all hover:scale-110 active:scale-95"
                title="ছবি সরান"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Grand Bengali Festive Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#990012] leading-tight tracking-tight">
          শুভ শারদীয়া ও দুর্গাপূজা ২০২৬
        </h1>

        {/* User Input & Action Buttons */}
        <div className="space-y-3 pt-2">
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              try {
                localStorage.setItem("durga_bengali_user_name", e.target.value);
              } catch {}
            }}
            placeholder="আপনার নাম লিখুন..."
            maxLength={40}
            className="w-full py-4 px-5 bg-rose-50/70 border-2 border-rose-300 rounded-2xl text-gray-900 placeholder-gray-400 text-lg sm:text-xl font-bold text-center focus:outline-none focus:border-rose-500 focus:bg-white transition-all shadow-sm"
          />

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoSelect}
            className="hidden"
          />

          {!photoPreview && (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full py-3.5 px-4 bg-rose-50/90 hover:bg-rose-100 border-2 border-dashed border-rose-300 rounded-2xl text-rose-900 text-base font-bold flex items-center justify-center gap-2 transition-all active:scale-98"
            >
              <Upload className="w-4 h-4 text-rose-700" />
              <span>নিজের ছবি যোগ করুন</span>
            </button>
          )}
        </div>

        {/* Share Action Buttons (Copy Link, WhatsApp & Facebook) */}
        <div className="pt-2 space-y-2.5">
          {/* Clean & Simple Copy Link Button */}
          <button
            type="button"
            disabled={isSavingDb}
            onClick={handleCopyLink}
            className="w-full py-2.5 px-4 bg-rose-50/80 hover:bg-rose-100 border border-rose-300 rounded-xl text-rose-950 text-sm sm:text-base font-bold flex items-center justify-center gap-2 transition-all active:scale-98 disabled:opacity-70 shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600 shrink-0" />
                <span className="text-green-700 font-bold">লিঙ্ক কপি হয়েছে!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-rose-700 shrink-0" />
                <span>নিজের লিঙ্ক কপি করুন (Copy Link)</span>
              </>
            )}
          </button>

          {/* 1-Tap WhatsApp Share Button */}
          <button
            type="button"
            disabled={isSavingDb}
            onClick={handleWhatsAppShare}
            className="relative overflow-hidden w-full py-4 sm:py-4.5 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black rounded-2xl text-xl sm:text-2xl flex items-center justify-center gap-3 shadow-lg shadow-green-600/25 active:scale-95 transition-all disabled:opacity-80"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current shrink-0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            <span className="font-bold tracking-tight">
              {isSavingDb ? "WhatsApp ওপেন হচ্ছে..." : "WhatsApp-এ শেয়ার করুন"}
            </span>
          </button>

          {/* Facebook Share Button */}
          <button
            type="button"
            disabled={isSavingDb}
            onClick={handleFacebookShare}
            className="relative overflow-hidden w-full py-3.5 sm:py-4 px-6 bg-[#1877F2] hover:bg-[#166fe5] text-white font-black rounded-2xl text-lg sm:text-xl flex items-center justify-center gap-3 shadow-lg shadow-blue-600/25 active:scale-95 transition-all disabled:opacity-80"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="font-bold tracking-tight">
              Facebook-এ শেয়ার করুন
            </span>
          </button>
        </div>

        {/* Other Festive Greetings Quick Links */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
          <Link
            href="/durgapuja2026"
            className="inline-flex items-center gap-1.5 py-1.5 px-3.5 bg-amber-50/80 hover:bg-amber-100/90 border border-amber-300 rounded-full text-xs font-bold text-amber-950 transition-all shadow-xs"
          >
            <span>दुर्गा पूजा 2026</span>
          </Link>
          <Link
            href="/diwaliPuja2026"
            className="inline-flex items-center gap-1.5 py-1.5 px-3.5 bg-amber-50/80 hover:bg-amber-100/90 border border-amber-300 rounded-full text-xs font-bold text-amber-950 transition-all shadow-xs"
          >
            <span>दीपावली 2026</span>
          </Link>
          <Link
            href="/chhathPuja2026"
            className="inline-flex items-center gap-1.5 py-1.5 px-3.5 bg-orange-50/80 hover:bg-orange-100/90 border border-orange-300 rounded-full text-xs font-bold text-orange-950 transition-all shadow-xs"
          >
            <span>छठ पूजा 2026</span>
          </Link>
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
