"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface DurgaAudioBengaliPlayerProps {
  trackSrc?: string;
}

export function DurgaAudioBengaliPlayer({
  trackSrc = "/audio/BengalisongDurgapuja.MP3",
}: DurgaAudioBengaliPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.9;

    const playAudio = () => {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    };

    playAudio();

    const handleFirstGesture = () => {
      playAudio();
    };

    window.addEventListener("pointerdown", handleFirstGesture, { passive: true });
    window.addEventListener("touchstart", handleFirstGesture, { passive: true });
    window.addEventListener("click", handleFirstGesture, { passive: true });
    window.addEventListener("scroll", handleFirstGesture, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("scroll", handleFirstGesture);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={trackSrc}
        loop
        preload="auto"
        autoPlay
        playsInline
        className="hidden"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Floating Ambient Music Control Button */}
      <button
        type="button"
        onClick={togglePlay}
        className="fixed top-3 right-3 z-40 p-2.5 rounded-full bg-rose-600/90 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/30 backdrop-blur-md border border-rose-300 active:scale-95 transition-all flex items-center justify-center animate-bounce-slow"
        title={isPlaying ? "গান বন্ধ করুন" : "গান চালু করুন"}
        aria-label="Toggle Bengali festive audio"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-pulse text-white" />
        ) : (
          <VolumeX className="w-5 h-5 text-white/80" />
        )}
      </button>
    </>
  );
}
