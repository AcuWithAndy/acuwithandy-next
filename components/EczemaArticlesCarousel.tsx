"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type EczemaArticle = {
  title: string;
  slug: string;
  href?: string;
  excerpt: string;
  cover?: {
    url: string;
    alt?: string;
  };
};

export default function EczemaArticlesCarousel({
  articles,
}: {
  articles: EczemaArticle[];
}) {
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
    const firstArticle = track?.firstElementChild;
    if (!track || !firstArticle) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (firstArticle.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="mb-4 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Show previous eczema articles"
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
          aria-label="Show more eczema articles"
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
        aria-label="Eczema articles"
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {articles.map((article) => (
          <Link
            key={article.href ?? article.slug}
            href={article.href ?? `/blog/${article.slug}`}
            className="group relative h-[22rem] w-[82vw] max-w-[25rem] flex-none snap-start overflow-hidden rounded-[1.75rem] bg-[#E8E9E3] shadow-lg md:h-[25rem]"
          >
            {article.cover?.url ? (
              <Image
                src={article.cover.url}
                alt={article.cover.alt || ""}
                fill
                unoptimized
                sizes="(max-width: 768px) 82vw, 400px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="absolute inset-0 bg-[#D9DCD3]" aria-hidden="true" />
            )}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#263B38]/90 via-[#263B38]/45 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
                From the journal
              </p>
              <h3
                className="mt-2 line-clamp-3 text-2xl leading-tight md:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {article.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/90 md:text-base">
                {article.excerpt}
              </p>
              <span className="mt-3 inline-block border-b border-white/80 pb-1 text-sm font-semibold text-white">
                {article.href ? "Explore page →" : "Read article →"}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
