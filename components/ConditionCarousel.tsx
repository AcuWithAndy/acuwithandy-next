"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const conditions = [
  {
    title: "Eczema",
    description: "Explore support for itching, dryness, and recurring flare-ups.",
    href: "/eczema",
    image: "/cream2.jpg",
    alt: "Cream used as part of a daily skin-care routine",
  },
  {
    title: "Psoriasis",
    description: "Learn about individualized support for scaling, itching, and chronic flares.",
    href: "/psoriasis",
    image: "/clay.jpg",
    alt: "Clay used in a skincare routine",
  },
  {
    title: "Acne",
    description: "Explore care for breakouts, inflammation, and persistent blemishes.",
    href: "/acne",
    image: "/acne.jpg",
    alt: "Acne-affected skin",
  },
  {
    title: "Rosacea",
    description: "Explore support for facial redness, flushing, and skin sensitivity.",
    href: "/rosacea",
    image: "/rosacea.jpg",
    alt: "Rosacea-affected skin",
  },
  {
    title: "Urticaria",
    description: "Explore support for itchy welts and recurring hives.",
    href: "/urticaria",
    image: "/Cold_Urticaria.jpg",
    alt: "Cold urticaria welts on a forearm",
  },
];

export default function ConditionCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateScrollButtons = () => {
      setCanScrollLeft(track.scrollLeft > 1);
      setCanScrollRight(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
    };

    updateScrollButtons();
    track.addEventListener("scroll", updateScrollButtons, { passive: true });

    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener("scroll", updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, []);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild;
    if (!track || !firstCard) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="mb-4 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Show previous dermatology conditions"
          onClick={() => scroll(-1)}
          disabled={!canScrollLeft}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5B767B]/40 text-[#435F64] transition hover:bg-[#5B767B] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#435F64]"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Show more dermatology conditions"
          onClick={() => scroll(1)}
          disabled={!canScrollRight}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5B767B]/40 text-[#435F64] transition hover:bg-[#5B767B] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#435F64]"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div
        ref={trackRef}
        aria-label="Explore dermatology conditions"
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {conditions.map((condition) => (
          <a
            key={condition.title}
            href={condition.href}
            className="group relative h-[32rem] w-[68vw] max-w-[17rem] flex-none snap-start overflow-hidden rounded-[1.75rem] bg-[#E8E9E3] shadow-lg md:h-[36rem] md:w-[18rem]"
          >
            <Image
              src={condition.image}
              alt={condition.alt}
              fill
              sizes="(max-width: 768px) 78vw, 480px"
              className={`object-cover transition-transform duration-700 ${
                condition.title === "Eczema"
                  ? "object-left group-hover:scale-[1.03]"
                  : condition.title === "Rosacea"
                    ? "object-center scale-[0.7] group-hover:scale-[0.74]"
                    : "object-center group-hover:scale-[1.03]"
              }`}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#263B38]/85 via-[#263B38]/45 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85 md:text-sm">
                TCM Dermatology
              </p>
              <h3
                className="mt-2 max-w-2xl text-3xl md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {condition.title}
              </h3>
              <p className="mt-2 max-w-xl text-base leading-7 text-white">
                {condition.description}
              </p>
              <span className="mt-3 inline-block border-b border-white/80 pb-1 text-base font-semibold text-white">
                Explore →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
