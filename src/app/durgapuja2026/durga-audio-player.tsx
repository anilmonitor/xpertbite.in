"use client";

import { useEffect, useRef } from "react";

interface DurgaAudioPlayerProps {
  trackSrc?: string;
}

export function DurgaAudioPlayer({
  trackSrc = "/audio/durgapujaaudio.mp3",
}: DurgaAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const synthIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Background temple bell synthesizer fallback
  const startSyntheticBhaktiSound = () => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const playTempleBell = (freq: number, decay: number) => {
        if (!ctx || ctx.state !== "running") return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + decay);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + decay);
      };

      const playDrone = () => {
        if (!ctx || ctx.state !== "running") return;
        const notes = [130.81, 196.0, 261.63, 329.63, 392.0];
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        playTempleBell(randomNote, 3.5);
      };

      playDrone();
      if (synthIntervalRef.current) clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = setInterval(playDrone, 2200);
    } catch {}
  };

  const attemptPlay = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.85;
      audioRef.current
        .play()
        .then(() => {
          if (synthIntervalRef.current) {
            clearInterval(synthIntervalRef.current);
            synthIntervalRef.current = null;
          }
        })
        .catch(() => {
          startSyntheticBhaktiSound();
        });
    } else {
      startSyntheticBhaktiSound();
    }
  };

  useEffect(() => {
    // Attempt auto-play on mount
    attemptPlay();

    // Ensure audio starts on first click/touch if blocked by browser policy
    const handleFirstGesture = () => {
      attemptPlay();
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("scroll", handleFirstGesture);
    };

    window.addEventListener("click", handleFirstGesture, { once: true });
    window.addEventListener("touchstart", handleFirstGesture, { once: true });
    window.addEventListener("scroll", handleFirstGesture, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("scroll", handleFirstGesture);
      if (synthIntervalRef.current) clearInterval(synthIntervalRef.current);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={trackSrc}
      loop
      autoPlay
      preload="auto"
      onError={() => {
        // Fallback to chime synth if mp3 not yet present
        startSyntheticBhaktiSound();
      }}
    />
  );
}
