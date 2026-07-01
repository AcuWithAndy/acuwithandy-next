"use client";

import { useEffect, useState } from "react";

const reviews = [
  "Andy is thoughtful, knowledgeable, and really listens.",
  "Professional, calming, and highly personalized care.",
  "A compassionate practitioner with a clear and grounded approach.",
];

export default function ReviewCard() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-20 -mt-72 px-8 pb-0 md:-mt-64">
      <div className="mx-auto max-w-5xl rounded-[48px] bg-[#f7f3ed] px-10 py-16 text-center shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
        <div className="text-2xl tracking-[0.25em] text-[#D4AF37]">
          ★★★★★
        </div>

        <h2 className="mt-6 text-4xl font-semibold leading-tight text-[#1f2a24] md:text-5xl">
          What Patients Are Saying...
        </h2>

        <div className="mx-auto mt-10 flex min-h-[180px] max-w-2xl items-center justify-center md:min-h-[140px]">
  <blockquote className="text-xl italic leading-9 text-[#1f2a24]">
    “{reviews[currentReview]}”
  </blockquote>
</div>
        <a
          href="https://share.google/ikzNq2qBgIa7ogJU0"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full bg-[#62757B] px-8 py-4 text-white transition hover:opacity-90"
        >
          Read Google Reviews →
        </a>
      </div>
    </section>
  );
}