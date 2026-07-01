"use client";

import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { BOOKING_URL } from "@/lib/booking";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const [mobileFaqOpen, setMobileFaqOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    ["Home", "/"],
    ["Services", "/services"],
    ["About Me", "/about-me"],
    ["Contact", "/contact"],
  ];

  return (
    <>
      <nav className="relative z-50 w-full border-b border-white/10 bg-[#5B767B]">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-5 md:px-8">
          <a
            href="/"
            className="shrink-0 whitespace-nowrap text-xl leading-none text-white md:text-[1.35rem] lg:text-[1.45rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Andy Boehm, LAc.
          </a>

          <div className="hidden justify-center md:flex">
            <div className="flex items-center gap-6 text-sm tracking-wide text-white lg:gap-8">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="whitespace-nowrap transition hover:text-white/75"
                >
                  {label}
                </a>
              ))}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setFaqOpen(!faqOpen)}
                  className="flex items-center gap-1 whitespace-nowrap transition hover:text-white/75"
                >
                  FAQ
                  <span
                    className={`text-xs transition-transform ${
                      faqOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {faqOpen && (
                  <div className="absolute left-1/2 top-full z-[9999] mt-3 w-80 -translate-x-1/2 overflow-hidden rounded-2xl border border-[#E6E2D8] bg-white shadow-2xl">
                    <a
                      href="/faq/general"
                      className="block whitespace-nowrap border-b border-[#E6E2D8] px-6 py-4 text-base font-medium text-[#1F2A24] transition hover:bg-[#FCFCF8] hover:text-[#4A4368]"
                    >
                      General FAQ
                    </a>

                    <a
                      href="/faq/herbal-medicine"
                      className="block whitespace-nowrap px-6 py-4 text-base font-medium text-[#1F2A24] transition hover:bg-[#FCFCF8] hover:text-[#4A4368]"
                    >
                      Herbal Medicine FAQ
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <div className="flex items-center gap-4 border-r border-white/20 pr-5">
              <a
                href="https://instagram.com/acuwithandy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-lg text-white transition hover:text-[#F1FFE0]"
              >
                <FaInstagram />
              </a>

              <a
                href="https://facebook.com/profile.php?id=61571352335709"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-lg text-white transition hover:text-[#F1FFE0]"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://tiktok.com/@acuwithandy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-lg text-white transition hover:text-[#F1FFE0]"
              >
                <FaTiktok />
              </a>
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full bg-[#F1FFE0] px-5 py-3 text-sm font-medium text-[#1F2A24] transition hover:bg-[#E2F5C8]"
            >
              Book Appointment
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="justify-self-end text-3xl leading-none text-white md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[999] bg-[#5B767B] transition-all duration-500 md:hidden ${
          menuOpen
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-8 pb-10 pt-10">
          <div className="mb-14 flex items-center justify-between">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-5xl font-light leading-none text-white"
              aria-label="Close menu"
            >
              ×
            </button>

            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="whitespace-nowrap text-xl leading-none text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Andy Boehm, LAc.
            </a>

            <div className="w-10" />
          </div>

          <div
            className="flex flex-col gap-6 text-4xl leading-none text-[#FCFCF8] sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between transition hover:text-white"
              >
                <span>{label}</span>
                <span>→</span>
              </a>
            ))}

            <div>
              <button
                type="button"
                onClick={() => setMobileFaqOpen(!mobileFaqOpen)}
                className="flex w-full items-center justify-between transition hover:text-white"
              >
                <span>FAQ</span>
                <span
                  className={`text-2xl transition-transform duration-300 ${
                    mobileFaqOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {mobileFaqOpen && (
                <div className="ml-6 mt-5 flex flex-col gap-5 text-3xl text-[#FCFCF8]/80">
                  <a
                    href="/faq/general"
                    onClick={() => setMenuOpen(false)}
                    className="transition hover:text-white"
                  >
                    General FAQ
                  </a>

                  <a
                    href="/faq/herbal-medicine"
                    onClick={() => setMenuOpen(false)}
                    className="transition hover:text-white"
                  >
                    Herbal Medicine FAQ
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1" />

          <div className="flex gap-5">
            <a
              href="https://instagram.com/acuwithandy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition hover:bg-white hover:text-[#5B767B]"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com/profile.php?id=61571352335709"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition hover:bg-white hover:text-[#5B767B]"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://tiktok.com/@acuwithandy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition hover:bg-white hover:text-[#5B767B]"
            >
              <FaTiktok />
            </a>
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-10 rounded-full bg-[#F1FFE0] py-5 text-center text-lg font-medium text-[#1F2A24] transition hover:bg-[#E2F5C8]"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </>
  );
}