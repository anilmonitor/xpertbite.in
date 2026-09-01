"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface DurgaAudioPlayerProps {
  trackSrc?: string;
}

export function DurgaAudioPlayer({
  trackSrc = "/audio/DurgapujaSong.MP3",
}: DurgaAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 1.0;
    audio.muted = false;

    const playAudio = () => {
      if (!audio) return;
      audio.muted = false;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay blocked by browser until user touches the screen
          });
      }
    };

    // 1. Try immediate play on mount
    playAudio();

    // 2. Play on any initial interaction (tap, scroll, pointer, click)
    const handleInteraction = () => {
      playAudio();
    };

    window.addEventListener("pointerdown", handleInteraction, { passive: true });
    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("click", handleInteraction, { passive: true });
    window.addEventListener("scroll", handleInteraction, { passive: true });
    window.addEventListener("mousemove", handleInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener("pointerdown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.muted = false;
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

      {/* Floating Music Control Button */}
      <button
        type="button"
        onClick={togglePlay}
        className="fixed top-3 right-3 z-40 p-2.5 rounded-full bg-amber-500/90 hover:bg-amber-600 text-white shadow-lg shadow-amber-600/30 backdrop-blur-md border border-amber-300 active:scale-95 transition-all flex items-center justify-center animate-bounce-slow"
        title={isPlaying ? "संगीत रोकें" : "संगीत बजाएं"}
        aria-label="Toggle festive audio"
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
