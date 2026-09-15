"use client";

import { useEffect, useRef, useState } from "react";

export default function HomeBannerVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (!ref.current) return;
      ref.current.playbackRate = 0.5;
      if (media.matches) ref.current.pause();
      else void ref.current.play().catch(() => {});
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  return <>
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <video ref={ref} muted loop playsInline preload="metadata" poster="/images/journal/journal-video.jpg"
        className="h-full w-full object-cover" style={{ objectPosition: "center 40%", filter: "brightness(1.08) saturate(1.12) contrast(1.04)" }}
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
        <source src="/images/journal/journal-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(20,38,36,.78), rgba(30,48,44,.46))" }} />
    </div>
    <button type="button" className="absolute top-6 right-6 z-10 min-h-11 rounded-full border border-white/40 bg-black/40 px-4 py-2 text-sm text-white hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      aria-label={playing ? "Pause background video" : "Play background video"}
      onClick={() => { if (playing) ref.current?.pause(); else { if (ref.current) ref.current.playbackRate = 0.5; void ref.current?.play().catch(() => {}); } }}>
      {playing ? "Pause video" : "Play video"}
    </button>
  </>;
}
