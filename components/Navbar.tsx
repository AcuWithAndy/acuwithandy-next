"use client";

import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    ["Home", "/"],
    ["Services", "/services"],
    ["Conditions", "/eczema"],
    ["About Me", "/about-me"],
    ["Contact", "/contact"],
  ];

  return (
    <>
      <nav className="relative z-50 w-full border-b border-white/10 bg-[#5B767B]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
          <a
            href="/"
            className="text-[1.45rem] leading-none text-white md:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Andy Boehm, LAc.
          </a>

          <div className="hidden items-center gap-8 md:flex">

  {/* Navigation Links */}
  <div className="flex items-center gap-8 text-sm tracking-wide text-white">
    {links.map(([label, href]) => (
      <a
        key={label}
        href={href}
        className="transition hover:text-white/75"
      >
        {label}
      </a>
    ))}
  </div>

  {/* Social Icons */}
  <div className="ml-4 flex items-center gap-4 border-l border-white/20 pl-6">

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

  {/* CTA */}
  <a
    href="/contact"
    className="ml-2 rounded-full bg-[#F1FFE0] px-6 py-3 text-sm font-medium text-[#1F2A24] transition hover:bg-white"
  >
    Book Appointment
  </a>

</div>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-3xl leading-none text-white md:hidden"
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
          <div className="mb-16 flex items-center justify-between">
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
              className="text-2xl leading-none text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Andy Boehm, LAc.
            </a>

            <div className="w-10" />
          </div>

          <div
            className="flex flex-col gap-8 text-6xl leading-none text-[#F7F3ED]"
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
                <span className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </a>
            ))}
          </div>

          <div className="flex-1" />

          <div>

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
          </div>

          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-10 rounded-full bg-[#F1FFE0] py-5 text-center text-lg font-medium text-[#1F2A24] transition hover:bg-white"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </>
  );
}