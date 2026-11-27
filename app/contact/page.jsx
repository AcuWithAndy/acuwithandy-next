"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      reason: form.reason.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#5B767B] px-4 py-6 text-[#1F2A24] md:px-8 md:py-8 lg:pb-12">
        <section className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex min-h-[520px] flex-col bg-white p-6 text-[#1F2A24] md:p-10 lg:min-h-[560px] lg:p-12">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#62757B]">
                Get in touch
              </p>
              <h1 className="mt-4 max-w-lg font-serif text-5xl font-semibold leading-[0.98] text-[#405C61] md:text-6xl">
                Have a question before booking?
              </h1>
              <p className="mt-4 max-w-md text-base leading-7 text-[#1F2A24]/80 md:text-lg">
                I&apos;m happy to help you find the right next step for your
                care. Fill out the form and I&apos;ll be in touch.
              </p>
              <address className="mt-6 space-y-3 not-italic">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#62757B]">
                    Phone
                  </p>
                  <a
                    href="tel:+13477892785"
                    className="mt-1 inline-block transition hover:text-[#4A4368] hover:underline"
                  >
                    (347) 789-2785
                  </a>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#62757B]">
                    Email
                  </p>
                  <a
                    href="mailto:andy@acuwithandy.com"
                    className="mt-1 inline-block transition hover:text-[#4A4368] hover:underline"
                  >
                    andy@acuwithandy.com
                  </a>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#62757B]">
                    Office
                  </p>
                  <p className="mt-1">
                    303 5th Avenue, Suite 1209
                    <br />
                    New York, NY 10016
                  </p>
                </div>
              </address>
            </div>
          </div>

          <div className="relative overflow-hidden p-6 md:p-8 lg:flex lg:items-center lg:p-10">
            <Image
              src="/herbs.jpg"
              alt=""
              aria-hidden="true"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-center"
            />

            <div className="relative z-10 w-full">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-3 md:grid-cols-2"
              >
              <input
                name="name"
                required
                placeholder="Name"
                className="w-full rounded-xl border border-[#D4D1CC] bg-white px-5 py-2.5 outline-none transition focus:border-[#62757B] focus:ring-2 focus:ring-[#62757B]/15"
              />

              <input
                name="email"
                required
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-[#D4D1CC] bg-white px-5 py-2.5 outline-none transition focus:border-[#62757B] focus:ring-2 focus:ring-[#62757B]/15"
              />

              <input
                name="phone"
                placeholder="Phone"
                className="w-full rounded-xl border border-[#D4D1CC] bg-white px-5 py-2.5 outline-none transition focus:border-[#62757B] focus:ring-2 focus:ring-[#62757B]/15"
              />

              <select
                name="reason"
                className="w-full rounded-xl border border-[#D4D1CC] bg-white px-5 py-2.5 outline-none transition focus:border-[#62757B] focus:ring-2 focus:ring-[#62757B]/15"
              >
                <option value="">Reason for Contact</option>
                <option value="Schedule Appointment">Schedule Appointment</option>
                <option value="Insurance Verification">
                  Insurance Verification
                </option>
                <option value="Herbal Refill">Herbal Refill</option>
                <option value="Workshops & Collaborations">
                  Workshops & Collaborations
                </option>
                <option value="General Question">General Question</option>
              </select>

              <input
                name="subject"
                placeholder="Subject"
                className="w-full rounded-xl border border-[#D4D1CC] bg-white px-5 py-2.5 outline-none transition focus:border-[#62757B] focus:ring-2 focus:ring-[#62757B]/15 md:col-span-2"
              />

              <textarea
                name="message"
                required
                placeholder="Message"
                rows="3"
                className="w-full resize-y rounded-xl border border-[#D4D1CC] bg-white px-5 py-2.5 outline-none transition focus:border-[#62757B] focus:ring-2 focus:ring-[#62757B]/15 md:col-span-2"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-[#F1FFE0] px-8 py-2.5 text-lg font-medium text-[#1F2A24] transition hover:bg-[#E2F5C8] disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
              >
                {status === "sending" ? "Sending..." : "Send message →"}
              </button>

              {status === "success" && (
                <p className="text-sm font-medium text-[#315B43] md:col-span-2">
                  Thank you. Your message has been sent.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm font-medium text-red-700 md:col-span-2">
                  Something went wrong. Please try again.
                </p>
              )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}