"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Your health insurance plan may include acupuncture benefits.",
    image: "/insurance-acupuncture.jpg",
    imageAlt: "Acupuncture treatment",
    tone: "dark",
    action: (
      <a
        href="https://patientportal.allacuservices.com/andyboehm"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-full bg-[#F1FFE0] px-5 py-3 text-sm font-medium text-[#1F2A24] transition hover:bg-[#E2F5C8] md:mt-7 md:px-7 md:py-4 md:text-base"
      >
        Verify Benefits
        <span className="ml-2" aria-hidden="true">
          →
        </span>
      </a>
    ),
  },
  {
    title:
      "Herbal medicine you can trust- Carefully sourced formulas selected with a commitment to quality.",
    image: "/kamwo.jpg",
    imageAlt: "Carefully selected Chinese herbs and botanicals",
    tone: "light",
    action: (
      <a
        href="https://www.acuwithandy.com/faq/herbal-medicine"
        className="mt-4 inline-flex items-center justify-center rounded-full bg-[#F1FFE0] px-5 py-3 text-sm font-medium text-[#1F2A24] transition hover:bg-[#E2F5C8] md:mt-7 md:px-7 md:py-4 md:text-base"
      >
        Learn More
        <span className="ml-2" aria-hidden="true">
          →
        </span>
      </a>
    ),
  },
  {
    title: "Personalized acupuncture, grounded in traditional Chinese medicine.",
    image: "/model.jpg",
    imageAlt: "Model featured in acupuncture services photography",
    tone: "photo",
    action: (
      <a
        href="https://www.acuwithandy.com/faq/general"
        className="mt-4 inline-flex items-center justify-center rounded-full bg-[#F1FFE0] px-5 py-3 text-sm font-medium text-[#1F2A24] transition hover:bg-[#E2F5C8] md:mt-7 md:px-7 md:py-4 md:text-base"
      >
        Learn More
        <span className="ml-2" aria-hidden="true">
          →
        </span>
      </a>
    ),
  },
];

export default function ServicesBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const showSlide = (direction) => {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <section
      className="relative isolate aspect-[4/3] w-full overflow-hidden bg-white md:aspect-[2056/765]"
      aria-roledescription="carousel"
      aria-label="Services highlights"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
            index === activeSlide ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== activeSlide}
        >
          <div
            className={`absolute ${
              slide.tone === "light"
                ? "inset-0 bg-cover bg-right bg-no-repeat"
                : "inset-0 bg-cover bg-center"
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition:
                slide.tone === "dark"
                  ? "center 75%"
                  : slide.tone === "photo"
                    ? "center 65%"
                    : undefined,
            }}
            role="img"
            aria-label={slide.imageAlt}
          />
          {(slide.tone === "dark" || slide.tone === "photo" || slide.tone === "light") && (
            <div
              className={`absolute inset-0 ${
                slide.tone === "light"
                  ? "bg-gradient-to-r from-[#1f2a24]/80 via-[#1f2a24]/45 via-80% to-transparent"
                  : slide.tone === "photo"
                  ? "bg-gradient-to-r from-[#1f2a24]/80 via-[#1f2a24]/40 via-60% to-transparent"
                  : "bg-gradient-to-l from-[#1f2a24]/70 via-[#1f2a24]/40 via-65% to-transparent"
              }`}
            />
          )}

          {(slide.title || slide.action) && (
            <div
              className={`relative mx-auto flex h-full max-w-6xl items-center px-4 pb-8 md:px-8 md:pb-0 ${
                slide.tone === "dark" ? "justify-end" : ""
              }`}
            >
              <div
                className={`max-w-xl ${
                  slide.tone === "light" || slide.tone === "photo"
                    ? slide.tone === "light"
                      ? "w-[78%] text-white md:w-[55%] md:max-w-xl"
                      : "w-[60%] text-white md:w-[43%] md:max-w-lg"
                    : "ml-auto w-[62%] text-right text-white md:w-[54%]"
                }`}
              >
                <h1
                  className="text-[clamp(1.5rem,6vw,2rem)] leading-tight md:text-[clamp(1.5rem,4vw,3.75rem)]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {slide.title}
                </h1>
                {slide.action}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="absolute bottom-1 right-2 z-10 flex items-center gap-1 md:bottom-6 md:right-8 md:gap-2">
        <button
          type="button"
          onClick={() => showSlide(-1)}
          aria-label="Previous banner"
          className="flex size-7 items-center justify-center rounded-full border border-[#1F2A24]/25 bg-white/90 text-base text-[#1F2A24] transition hover:bg-white md:size-9 md:text-lg"
        >
          <span aria-hidden="true">{"<"}</span>
        </button>
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Show banner ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
            className={`size-2 rounded-full border border-[#1F2A24]/60 md:size-2.5 ${
              index === activeSlide ? "bg-[#1F2A24]" : "bg-white/80"
            }`}
          />
        ))}
        <button
          type="button"
          onClick={() => showSlide(1)}
          aria-label="Next banner"
          className="flex size-7 items-center justify-center rounded-full border border-[#1F2A24]/25 bg-white/90 text-base text-[#1F2A24] transition hover:bg-white md:size-9 md:text-lg"
        >
          <span aria-hidden="true">{">"}</span>
        </button>
      </div>
    </section>
  );
}