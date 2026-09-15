"use client";

import { useEffect, useRef } from "react";

export default function HomeBannerVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (!ref.current) return;
      ref.current.playbackRate = 0.35;
      if (media.matches) ref.current.pause();
      else void ref.current.play().catch(() => {});
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  return <>
    <div className="absolute inset-0 -z-10 overflow-hidden motion-reduce:hidden" aria-hidden="true">
      <video ref={ref} muted loop playsInline preload="metadata" poster="/images/journal/sunflowers-smooth.jpg"
        className="h-full w-full object-cover" style={{ objectPosition: "center 40%", filter: "brightness(1.08) saturate(1.12) contrast(1.04)" }}>
        <source src="/images/journal/sunflowers-smooth.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(20,38,36,.78), rgba(30,48,44,.46))" }} />
    </div>
  </>;
}
