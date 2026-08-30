"use client";

import { useEffect, useRef } from "react";

export function ChhathAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    const playAudio = () => {
      audio.play().catch(() => {});
    };

    playAudio();

    const handleFirstInteraction = () => {
      playAudio();
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });
    window.addEventListener("scroll", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audio/durgapujaaudio.mp3"
      loop
      preload="auto"
      className="hidden"
      aria-hidden="true"
    />
  );
}
