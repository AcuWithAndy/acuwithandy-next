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
        className="mt-4 inline-flex items-center justify-center rounded-full bg-[#F1FFE0] px-4 py-2 text-xs font-medium text-[#1F2A24] transition hover:bg-[#E2F5C8] md:mt-7 md:px-6 md:py-3 md:text-sm"
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
      "Herbal formulas are selected with a commitment to purity, quality and trust.",
    image: "/kamwo.jpg",
    imageAlt: "Carefully selected Chinese herbs and botanicals",
    tone: "light",
    action: (
      <a
        href="https://www.acuwithandy.com/faq/herbal-medicine"
        className="mt-4 inline-flex items-center justify-center rounded-full bg-[#F1FFE0] px-4 py-2 text-xs font-medium text-[#1F2A24] transition hover:bg-[#E2F5C8] md:mt-7 md:px-6 md:py-3 md:text-sm"
      >
        Learn More
        <span className="ml-2" aria-hidden="true">
          →
        </span>
      </a>
    ),
  },
  {
    title: "Experience a more balanced approach to wellness with Acupuncture.",
    image: "/model.jpg",
    imageAlt: "Model featured in acupuncture services photography",
    tone: "photo",
    action: (
      <a
        href="https://www.acuwithandy.com/faq/general"
        className="mt-4 inline-flex items-center justify-center rounded-full bg-[#F1FFE0] px-4 py-2 text-xs font-medium text-[#1F2A24] transition hover:bg-[#E2F5C8] md:mt-7 md:px-6 md:py-3 md:text-sm"
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
      className="relative isolate aspect-[2056/765] w-full overflow-hidden bg-white"
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
          {(slide.tone === "dark" || slide.tone === "photo") && (
            <div
              className={`absolute inset-0 ${
                slide.tone === "photo"
                  ? "bg-gradient-to-r from-[#1f2a24]/70 via-[#1f2a24]/25 to-transparent"
                  : "bg-gradient-to-l from-[#1f2a24]/70 via-[#1f2a24]/40 via-65% to-transparent"
              }`}
            />
          )}

          {(slide.title || slide.action) && (
            <div
              className={`relative mx-auto flex h-full max-w-6xl items-center px-4 md:px-8 ${
                slide.tone === "dark" ? "justify-end" : ""
              }`}
            >
              <div
                className={`max-w-xl ${
                  slide.tone === "light" || slide.tone === "photo"
                    ? slide.tone === "photo"
                      ? "w-[54%] text-white md:w-[43%] md:max-w-lg"
                      : "w-[54%] text-[#1F2A24] md:w-[43%] md:max-w-lg"
                    : "ml-auto w-[62%] text-right text-white md:w-[54%]"
                }`}
              >
                <h1
                  className="leading-tight"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(0.875rem, 3.2vw, 3rem)",
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