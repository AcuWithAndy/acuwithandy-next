"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaInstagram } from "react-icons/fa";
import type { InstagramPost } from "@/lib/instagram";

export default function InstagramCarousel({ posts }: { posts: InstagramPost[] }) {
  const track = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const row = track.current;
    if (!row || !row.firstElementChild) return;
    const step = row.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(row).columnGap || "0");
    const end = row.scrollWidth - row.clientWidth;
    const next = direction === 1 && row.scrollLeft >= end - 2
      ? 0
      : direction === -1 && row.scrollLeft <= 2
        ? end
        : Math.max(0, Math.min(end, row.scrollLeft + direction * step));
    row.scrollTo({ left: next, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  const arrowClass = "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#5B767B]/40 bg-[#EFEBFA] text-[#425C61] transition hover:bg-[#5B767B] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B767B]";

  return (
    <section aria-label="Instagram posts" className="bg-[#EFEBFA] px-3 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex justify-center">
          <a href="https://www.instagram.com/acuwithandy/" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram" className="inline-flex items-center gap-3 rounded-full border border-[#5B767B] px-6 py-3 text-[#425C61] transition hover:bg-[#5B767B] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B767B]">
            Follow on <FaInstagram aria-hidden="true" className="h-6 w-6" />
          </a>
        </div>
        {posts.length > 0 ? (
          <div className="flex items-center gap-2 md:gap-4">
            <button type="button" onClick={() => move(-1)} aria-label="Previous Instagram posts" aria-controls="instagram-posts" className={arrowClass}><FaChevronLeft aria-hidden="true" /></button>
            <div ref={track} id="instagram-posts" role="region" aria-label="Instagram post carousel" aria-roledescription="carousel" tabIndex={0}
              onKeyDown={(event) => { if (event.target === event.currentTarget && (event.key === "ArrowLeft" || event.key === "ArrowRight")) { event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1); } }}
              className="flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B767B]">
              {posts.map((post, index) => (
                <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" aria-label={`Post ${index + 1} of ${posts.length}: ${post.caption ? post.caption.slice(0, 140) : "View on Instagram"}`}
                  className="group relative block aspect-square w-full shrink-0 snap-start overflow-hidden rounded-2xl bg-[#5B767B]/10 sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#5B767B]">
                  {/* Instagram media links expire; load the current URL directly. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt="" width={600} height={600} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03] motion-reduce:transition-none" />
                  {post.type !== "IMAGE" && <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">{post.type === "VIDEO" ? "Video" : "Photos"}</span>}
                </a>
              ))}
            </div>
            <button type="button" onClick={() => move(1)} aria-label="Next Instagram posts" aria-controls="instagram-posts" className={arrowClass}><FaChevronRight aria-hidden="true" /></button>
          </div>
        ) : <p className="text-center text-[#4B5C52]">See the latest posts on Instagram.</p>}
      </div>
    </section>
  );
}
