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

      <main className="bg-[#5B767B] text-[#1F2A24]">
        <div className="h-8"></div>

        <section className="px-6 pb-28">
          {/* CONTACT CARDS */}
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.4fr]">
            {/* GET IN TOUCH */}
            <div className="rounded-[2rem] bg-[#FCFCF8] p-8 shadow-xl md:p-10">
              <h2 className="font-serif text-3xl">Get In Touch</h2>

              <div className="mt-8 space-y-6 text-base leading-relaxed">
                <div>
                  <p className="font-semibold">Location</p>
                  <p>303 5th Avenue, Suite 1209</p>
                  <p>New York, NY 10016</p>
                </div>

                <div>
                  <p className="font-semibold">Phone (Text)</p>
                  <a
                    href="sms:+13477892785"
                    className="hover:underline"
                  >
                    (347) 789-2785
                  </a>
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:andy@acuwithandy.com"
                    className="hover:underline"
                  >
                    andy@acuwithandy.com
                  </a>
                </div>

                <div>
                  <p className="font-semibold">Office Hours</p>
                  <p>By appointment</p>
                </div>

                <div>
                  <p className="font-semibold">Accepting New Patients</p>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="rounded-[2rem] bg-[#EFEBFA] p-8 shadow-xl md:p-10">
              <h2 className="font-serif text-3xl">Contact Form</h2>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <input
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full rounded-xl border border-[#D4D1CC] bg-white px-5 py-4 outline-none focus:border-[#DDE6A8]"
                />

                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-[#D4D1CC] bg-white px-5 py-4 outline-none focus:border-[#DDE6A8]"
                />

                <input
                  name="phone"
                  placeholder="Phone"
                  className="w-full rounded-xl border border-[#D4D1CC] bg-white px-5 py-4 outline-none focus:border-[#DDE6A8]"
                />

                <select
                  name="reason"
                  className="w-full rounded-xl border border-[#D4D1CC] bg-white px-5 py-4 outline-none focus:border-[#DDE6A8]"
                >
                  <option value="">Reason for Contact</option>

                  <option value="Schedule Appointment">
                    Schedule Appointment
                  </option>

                  <option value="Insurance Verification">
                    Insurance Verification
                  </option>

                  <option value="Herbal Refill">
                    Herbal Refill
                  </option>

                  <option value="Workshops & Collaborations">
                    Workshops & Collaborations
                  </option>

                  <option value="General Question">
                    General Question
                  </option>
                </select>

                <input
                  name="subject"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-[#D4D1CC] bg-white px-5 py-4 outline-none focus:border-[#DDE6A8]"
                />

                <textarea
                  name="message"
                  required
                  placeholder="Message"
                  rows="7"
                  className="w-full resize-none rounded-xl border border-[#D4D1CC] bg-white px-5 py-4 outline-none focus:border-[#DDE6A8]"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-full bg-[#F1FFE0] px-10 py-4 text-lg font-medium transition hover:scale-[1.02] hover:bg-[#E2F5C8] disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>

                {status === "success" && (
                  <p className="text-sm font-medium">
                    Thank you. Your message has been sent.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm font-medium text-red-700">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* COMMUNITY + COLLABORATIONS */}
          <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-[2rem] bg-[#FCFCF8] shadow-xl">
            <div className="grid items-start gap-4 md:grid-cols-2 md:gap-6">
              {/* TEXT */}
              <div className="p-8 md:px-10 md:py-8">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#62757B]">
                  Community + Collaborations
                </p>

                <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                  Beyond the Clinic
                </h2>

                <p className="mt-5 max-w-md leading-7 text-[#4B5C52]">
                  I collaborate with businesses, wellness brands, and community
                  organizations to develop thoughtful Chinese medicine
                  programming—from seasonal wellness workshops and educational
                  events to experiences featuring herbal medicine, food
                  therapy, and acupressure.
                </p>

                <p className="mt-5 max-w-md text-sm leading-6 text-[#62757B]">
                  Interested in hosting an event or collaborating? Send me a
                  message through the contact form above.
                </p>
              </div>

              {/* COLLAGE */}
              <div className="flex justify-center p-6 md:justify-end md:p-8">
                <div className="w-full max-w-[460px] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/community-collage.png"
                    alt="Andy Boehm sharing Chinese medicine, seasonal wellness, food therapy, and acupressure at a community event in New York City"
                    width={1600}
                    height={1350}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}