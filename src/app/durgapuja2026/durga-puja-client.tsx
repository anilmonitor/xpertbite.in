"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Upload,
  X,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Check,
  Crop,
} from "lucide-react";
import { toast } from "sonner";
import { DurgaAudioPlayer } from "./durga-audio-player";

function generateClientSlug(name: string): string {
  const clean = name.trim().toLowerCase().replace(/[^a-z0-9]/g, "") || "anil";
  return `${clean}-1`;
}

export function DurgaPujaClient() {
  const searchParams = useSearchParams();

  const userSlugParam = searchParams.get("u") || searchParams.get("id") || searchParams.get("slug") || "";
  const nameParam = searchParams.get("name") || "";

  const [userName, setUserName] = useState<string>(nameParam || "");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [activeSlug, setActiveSlug] = useState<string | null>(userSlugParam || null);
  const [isSavingDb, setIsSavingDb] = useState<boolean>(false);

  // Image Cropper States
  const [isCropModalOpen, setIsCropModalOpen] = useState<boolean>(false);
  const [rawImageSrc, setRawImageSrc] = useState<string | null>(null);
  const [cropScale, setCropScale] = useState<number>(1);
  const [cropRotation, setCropRotation] = useState<number>(0);
  const [cropPosition, setCropPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Recipient greeting data fetched from server
  const [recipientGreeting, setRecipientGreeting] = useState<{
    name: string;
    imageUrl?: string | null;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const cropImageRef = useRef<HTMLImageElement | null>(null);

  const [shareMsLeft, setShareMsLeft] = useState<number | null>(null);
  const targetWhatsappUrlRef = useRef<string | null>(null);
  const shareEndTimestampRef = useRef<number | null>(null);

  // Countdown Timer to Durga Puja 2026 (Target: 16 October 2026)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Fast 30-Second + Milliseconds WhatsApp Share Countdown Effect
  useEffect(() => {
    if (shareMsLeft === null || !shareEndTimestampRef.current) return;

    const interval = setInterval(() => {
      const remaining = shareEndTimestampRef.current! - Date.now();
      if (remaining <= 0) {
        setShareMsLeft(null);
        shareEndTimestampRef.current = null;
        clearInterval(interval);
        if (targetWhatsappUrlRef.current) {
          window.open(targetWhatsappUrlRef.current, "_blank");
          toast.success("WhatsApp खुल गया!");
        }
      } else {
        setShareMsLeft(remaining);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [shareMsLeft]);

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

  // Handle Photo Selection (Opens Crop Modal)
  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 15 * 1024 * 1024) {
      toast.error("कृपया 15MB से छोटी फोटो चुनें");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setRawImageSrc(result);
      setCropScale(1);
      setCropRotation(0);
      setCropPosition({ x: 0, y: 0 });
      setIsCropModalOpen(true);
    };
    reader.readAsDataURL(file);
    // Reset file input value so same file can be re-selected if needed
    e.target.value = "";
  };

  // Perform Canvas Square Crop
  const handleApplyCrop = () => {
    if (!rawImageSrc) return;

    const img = new window.Image();
    img.src = rawImageSrc;
    img.onload = () => {
      const cropBoxSize = 600; // High resolution 1:1 square
      const canvas = document.createElement("canvas");
      canvas.width = cropBoxSize;
      canvas.height = cropBoxSize;
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      // Fill white background
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, cropBoxSize, cropBoxSize);

      ctx.save();
      ctx.translate(cropBoxSize / 2, cropBoxSize / 2);
      ctx.rotate((cropRotation * Math.PI) / 180);

      // Render image centered with scale and offset
      const drawWidth = img.width * cropScale;
      const drawHeight = img.height * cropScale;
      
      // Calculate normalized scaling to cover the square preview
      const baseScale = Math.max(cropBoxSize / img.width, cropBoxSize / img.height);
      const finalW = img.width * baseScale * cropScale;
      const finalH = img.height * baseScale * cropScale;

      ctx.drawImage(
        img,
        -finalW / 2 + cropPosition.x * 2,
        -finalH / 2 + cropPosition.y * 2,
        finalW,
        finalH
      );
      ctx.restore();

      const croppedDataUrl = canvas.toDataURL("image/jpeg", 0.92);
      setPhotoPreview(croppedDataUrl);
      try {
        localStorage.setItem("durga_puja_user_photo", croppedDataUrl);
      } catch {}

      setIsCropModalOpen(false);
      setRawImageSrc(null);
      toast.success("फोटो स्क्वायर में क्रॉप हो गई है");
    };
  };

  // Pan / Drag Handlers for Cropper
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - cropPosition.x, y: e.clientY - cropPosition.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCropPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - cropPosition.x,
        y: e.touches[0].clientY - cropPosition.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    setCropPosition({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y,
    });
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

  // WhatsApp Share Intent with 30-Second Fast Milliseconds Live Countdown
  const handleWhatsAppShare = async () => {
    if (shareMsLeft !== null) return;

    toast.loading("कार्ड तैयार हो रहा है...");
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
    targetWhatsappUrlRef.current = whatsappUrl;

    // Start 30 seconds fast milliseconds countdown
    shareEndTimestampRef.current = Date.now() + 30000;
    setShareMsLeft(30000);
    toast.info("WhatsApp शेयर 30 सेकंड में शुरू होगा...");
  };

  const displaySender = recipientGreeting?.name || (userName.trim() ? userName.trim() : (nameParam ? nameParam : "Anil"));
  const displayPhoto = photoPreview || recipientGreeting?.imageUrl;

  return (
    <div className="relative min-h-screen bg-[#FFFDF9] text-gray-900 overflow-x-hidden font-hindi-heading flex flex-col items-center justify-start pt-16 sm:pt-20 pb-12 px-4 sm:px-6">
      {/* Background Devotional Audio Player */}
      <DurgaAudioPlayer />

      {/* Main Clean Page Layout */}
      <div className="relative z-10 w-full max-w-lg sm:max-w-xl text-center text-gray-900 my-auto space-y-6">
        
        {/* Large Flowing Countdown & Sender Header (Clean: Milliseconds removed from top) */}
        <div className="text-center space-y-2 pt-2">
          <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#991B1B] font-mono tracking-tight leading-tight">
            <div>
              {timeLeft.days} दिन {timeLeft.hours} घंटा {timeLeft.minutes} मिनट
            </div>
            <div className="mt-0.5">
              {timeLeft.seconds} सेकंड पहले
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide festive-name-vibe my-1">
            {displaySender}
          </h2>

          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 font-hindi-festive pt-1 tracking-wide leading-relaxed">
            की तरफ से दुर्गा पूजा की हार्दिक शुभकामनाएं
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

        {/* Square Framed User Photo */}
        {displayPhoto && (
          <div className="relative inline-block mx-auto pt-2">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-amber-400 shadow-lg bg-white">
              <Image src={displayPhoto} alt="User" fill className="object-cover" />
            </div>
            {photoPreview && (
              <div className="absolute top-0 right-0 flex gap-1">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-amber-600 text-white rounded-full p-1.5 shadow hover:bg-amber-700 transition-colors"
                  title="क्रॉप / बदलें"
                >
                  <Crop className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleRemovePhoto}
                  className="bg-red-600 text-white rounded-full p-1.5 shadow hover:bg-red-700 transition-colors"
                  title="हटाएं"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
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
            onChange={handlePhotoSelect}
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

        {/* Big Grand 1-Tap WhatsApp Share Button with 30s Live Countdown & Milliseconds */}
        <div className="pt-2">
          <button
            type="button"
            disabled={isSavingDb || shareMsLeft !== null}
            onClick={handleWhatsAppShare}
            className="relative overflow-hidden w-full py-4 sm:py-4.5 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black rounded-2xl text-xl sm:text-2xl flex items-center justify-center gap-3 shadow-lg shadow-green-600/25 active:scale-95 transition-all disabled:opacity-90"
          >
            {shareMsLeft !== null && (
              <div
                className="absolute left-0 bottom-0 top-0 bg-black/25 pointer-events-none transition-all duration-75 ease-linear"
                style={{ width: `${((30000 - shareMsLeft) / 30000) * 100}%` }}
              />
            )}
            <svg className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 fill-current shrink-0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            <span className="relative z-10 font-mono tracking-tight">
              {shareMsLeft !== null
                ? `प्रतीक्षा करें... ${Math.floor(shareMsLeft / 1000)}.${String(Math.floor((shareMsLeft % 1000) / 10)).padStart(2, "0")}s`
                : "WhatsApp पर शेयर करें"}
            </span>
          </button>
        </div>

      </div>

      {/* Interactive Square Photo Crop Modal */}
      {isCropModalOpen && rawImageSrc && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-5 sm:p-6 w-full max-w-sm sm:max-w-md shadow-2xl text-center space-y-4">
            
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">फोटो एडजस्ट और क्रॉप करें</h3>
              <button
                onClick={() => setIsCropModalOpen(false)}
                className="p-1 rounded-full text-gray-500 hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Square Viewport Preview Box */}
            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-2xl overflow-hidden bg-gray-950 cursor-grab active:cursor-grabbing border-2 border-amber-400 select-none shadow-inner"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
            >
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-75"
                style={{
                  transform: `translate(${cropPosition.x}px, ${cropPosition.y}px) rotate(${cropRotation}deg) scale(${cropScale})`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={cropImageRef}
                  src={rawImageSrc}
                  alt="Crop Preview"
                  className="max-w-none w-auto h-auto max-h-[300%] object-contain"
                  draggable={false}
                />
              </div>

              {/* Grid guide overlay */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none border border-white/30">
                <div className="border-r border-b border-white/20" />
                <div className="border-r border-b border-white/20" />
                <div className="border-b border-white/20" />
                <div className="border-r border-b border-white/20" />
                <div className="border-r border-b border-white/20" />
                <div className="border-b border-white/20" />
                <div className="border-r border-white/20" />
                <div className="border-r border-white/20" />
                <div />
              </div>
            </div>

            <p className="text-xs text-gray-500">
              फोटो को खींचकर (Drag) बीच में सेट करें
            </p>

            {/* Zoom & Rotation Controls */}
            <div className="flex items-center justify-center gap-4 bg-gray-50 py-2.5 px-4 rounded-xl">
              <button
                type="button"
                onClick={() => setCropScale((prev) => Math.max(0.6, prev - 0.15))}
                className="p-2 bg-white rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 active:scale-95"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <input
                type="range"
                min="0.6"
                max="3"
                step="0.05"
                value={cropScale}
                onChange={(e) => setCropScale(parseFloat(e.target.value))}
                className="w-32 accent-amber-500 cursor-pointer"
              />

              <button
                type="button"
                onClick={() => setCropScale((prev) => Math.min(3, prev + 0.15))}
                className="p-2 bg-white rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 active:scale-95"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setCropRotation((prev) => (prev + 90) % 360)}
                className="p-2 bg-white rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 active:scale-95 ml-1"
                title="घुमाएं (Rotate)"
              >
                <RotateCw className="w-4 h-4" />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsCropModalOpen(false)}
                className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-bold rounded-xl text-sm hover:bg-gray-200 transition-colors"
              >
                रद्द करें
              </button>
              <button
                type="button"
                onClick={handleApplyCrop}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-1.5 shadow-md hover:brightness-105 active:scale-95 transition-all"
              >
                <Check className="w-4 h-4" />
                <span>क्रॉप करें और लगाएं</span>
              </button>
            </div>

          </div>
        </div>
      )}

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
