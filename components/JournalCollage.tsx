"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function JournalCollage() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (media.matches) video.current?.pause();
      else void video.current?.play().catch(() => {});
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  return <div className="journal-collage" aria-label="Scenes of nourishment, herbs, and nature">
    <div className="journal-tile journal-food"><Image src="/images/journal/nourishment.webp" alt="A bowl with chicken, egg, ginger, and fresh greens." fill sizes="(max-width: 800px) 44vw, 260px" priority /></div>
    <div className="journal-tile journal-flower"><Image src="/images/journal/flower.webp" alt="Purple and white passionflower among green leaves." fill sizes="(max-width: 800px) 44vw, 260px" priority /></div>
    <div className="journal-tile journal-herbs"><Image src="/images/journal/herbs.webp" alt="Colorful dried flowers, roots, and fruits for Chinese herbal medicine." fill sizes="(max-width: 800px) 44vw, 260px" priority /></div>
    <div className="journal-tile journal-film">
      <video ref={video} muted loop playsInline preload="metadata" poster="/images/journal/journal-video.jpg" aria-label="Sunflowers moving in the breeze" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
        <source src="/images/journal/journal-video.mp4" type="video/mp4" />
      </video>
      <button type="button" className="journal-video-toggle" aria-label={playing ? "Pause sunflower video" : "Play sunflower video"} onClick={() => {
        if (playing) video.current?.pause();
        else void video.current?.play().catch(() => {});
      }}>{playing ? "Pause" : "Play"}<span aria-hidden="true">{playing ? " Ⅱ" : " ▷"}</span></button>
    </div>
  </div>;
}
