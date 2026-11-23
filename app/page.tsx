import Image from "next/image";
import { Suspense } from "react";
import InstagramFeed from "../components/InstagramFeed";
import Navbar from "../components/Navbar";
import HomeBannerVideo from "../components/HomeBannerVideo";
import Footer from "../components/Footer";
import ReviewCard from "../components/ReviewCard";
import ConditionCarousel from "../components/ConditionCarousel";
import { BOOKING_URL } from "@/lib/booking";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#EFEBFA] text-[#1f2a24]">
        {/* HERO SECTION */}
        <section className="relative isolate bg-[#62757B] pb-64 text-white">
          <HomeBannerVideo />
          <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-8 py-16 md:grid-cols-2 md:py-24">
            {/* Left Column */}
            <div className="order-2 md:order-1 md:max-w-[620px]">
              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/80">
                ACUWITHANDY.COM
              </p>

              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                Traditional Chinese Medicine for Dermatology, Pain & Stress
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/80 md:text-xl">
                Treatments designed to reduce symptoms, clear inflammation, and
                address the underlying imbalances contributing to your condition.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-8 py-4 text-[#62757B] transition hover:bg-[#f2f2f2]"
                >
                  Book Appointment
                </a>

                <a
                  href="/services"
                  className="rounded-full border border-white/30 px-8 py-4 text-white transition hover:bg-white hover:text-[#62757B]"
                >
                  Explore Services
                </a>

                <a
                  href="https://patientportal.allacuservices.com/andyboehm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/30 px-8 py-4 text-white transition hover:bg-white hover:text-[#62757B]"
                >
                  Verify Insurance Benefits
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative order-1 flex justify-center md:order-2">
              <div className="absolute h-[520px] w-[320px] rounded-full bg-white/15 blur-3xl md:h-[700px] md:w-[460px]" />

              <div
                className="
                  relative
                  h-[470px]
                  w-full
                  max-w-[320px]
                  overflow-hidden
                  rounded-t-[170px]
                  rounded-b-[24px]
                  shadow-[0_35px_90px_rgba(0,0,0,0.22)]
                  md:h-[640px]
                  md:max-w-[430px]
                  md:rounded-t-[230px]
                  md:rounded-b-[30px]
                "
              >
                <Image
                  src="/headshot.jpg.png"
                  alt="Andy Boehm, Licensed Acupuncturist"
                  fill
                  sizes="(max-width: 768px) 320px, 430px"
                  priority
                  className="object-cover object-[center_25%]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <ReviewCard />

        {/* DERMATOLOGY */}
        <section
          style={{ backgroundColor: "#EFEBFA" }}
          className="px-6 py-24 text-[#1F2A24]"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-16">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#62757B]">
                  Specialty Care
                </p>
                <h2
                  className="text-5xl leading-[0.98] text-[#263B38] md:text-7xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  TCM{" "}
                  <span className="italic text-[#5B767B]">Dermatology</span>
                </h2>
              </div>

              <p className="max-w-xl border-l border-[#5B767B]/50 pl-6 text-lg leading-8 text-[#1F2A24]/80 md:text-xl">
                Explore our approach to treating common dermatological
                conditions using acupuncture, Chinese herbal medicine,
                nutrition, and lifestyle modifications.
              </p>
            </div>

            <ConditionCarousel />
          </div>
        </section>

        {/* WAVE */}
        <div
          className="overflow-hidden leading-none"
          style={{ backgroundColor: "#EFEBFA" }}
        >
          <svg
            viewBox="0 0 1440 100"
            xmlns="http://www.w3.org/2000/svg"
            className="block h-20 w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#E7D0C3"
              d="M0,40 C240,100 480,80 720,40 C960,0 1200,20 1440,100 L1440,100 L0,100 Z"
            />
          </svg>
        </div>

        {/* SERVICES */}
        <section className="bg-[#E7D0C3] px-8 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 grid gap-10 md:grid-cols-2 md:items-end">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#5B767B]">
                  Services
                </p>

                <h2 className="text-5xl leading-tight text-[#1F2A24] md:text-6xl">
                  Holistic Care
                </h2>
              </div>

              <div className="border-l border-[#62757B]/30 pl-6">
                <p className="text-lg leading-8 text-[#4B5C52]">
                  Comprehensive Chinese Medicine services, including
                  Acupuncture, Electroacupuncture, Herbal Medicine, and
                  specialized TCM Dermatology treatment options.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Acupuncture",
                  text: "Musculoskeletal pain, stress, digestion, sleep, and whole-body support.",
                  image: "/acupuncture.jpg",
                },
                {
                  title: "Electroacupuncture",
                  text: "Gentle electrical stimulation to enhance treatment for pain, muscle recovery, and nervous system regulation.",
                  image: "/estim.jpg",
                },
                {
                  title: "Herbal Medicine",
                  text: "Custom Chinese herbal formulas tailored to your health goals.",
                  image: "/herbs.jpg",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >
                  <div className="p-4">
                    <div className="overflow-hidden rounded-[1.5rem] bg-[#EFEBFA]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={700}
                        height={500}
                        priority={service.title === "Herbal Medicine"}
                        className={`h-64 w-full object-cover ${
                          service.title === "Acupuncture"
                            ? "object-[center_75%]"
                            : "object-center"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="px-8 pb-8 pt-2">
                    <h3 className="text-2xl font-semibold text-[#1F2A24]">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-[#4B5C52]">
                      {service.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAVE */}
        <div
          className="overflow-hidden leading-none"
          style={{ backgroundColor: "#E7D0C3" }}
        >
          <svg
            viewBox="0 0 1440 100"
            xmlns="http://www.w3.org/2000/svg"
            className="block h-20 w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#EFEBFA"
              d="M0,100 C240,20 480,0 720,40 C960,80 1200,100 1440,40 L1440,100 L0,100 Z"
            />
          </svg>
        </div>

        {/* CLINIC LOCATION */}
        <section className="bg-[#EFEBFA] px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-[#E6E2D8] bg-[#FCFCF8] p-6 shadow-sm md:gap-10 md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col items-start">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#62757B]">
                Midtown Manhattan
              </p>

              <h2 className="text-5xl leading-tight text-[#263B38] md:text-6xl">
                Visit the Clinic
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-[#1F2A24]/85">
                I see patients for acupuncture and Chinese herbal medicine in a
                private treatment room on Fifth Avenue, near Herald Square and
                Koreatown.
              </p>

              <p className="mt-5 text-lg leading-7 text-[#1F2A24]">
                303 Fifth Avenue, Suite 1209
                <br />
                New York, NY 10016
              </p>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=303+Fifth+Avenue+Suite+1209+New+York+NY+10016"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 border-b border-[#1F2A24]/70 text-[#1F2A24] transition hover:border-[#5B767B] hover:text-[#5B767B]"
              >
                Get directions <span aria-hidden="true">↗</span>
              </a>

              <div className="mt-6 text-[#1F2A24]">
                <h3 className="font-semibold">In-person appointments</h3>
                <p className="mt-1 leading-7 text-[#1F2A24]/85">
                  Monday · 6:30 AM–4 PM
                  <br />
                  Wednesday · 6:30 AM–2 PM
                </p>
              </div>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-xl bg-[#4B5C35] px-7 py-4 text-center font-semibold text-white transition hover:bg-[#3D4B2D]"
              >
                Book an In-Person Visit
              </a>

              <p className="mt-5 text-[#1F2A24]">Prefer to meet online?</p>
              <a
                href="/services"
                className="mt-1 border-b border-[#1F2A24]/70 text-[#1F2A24] transition hover:border-[#5B767B] hover:text-[#5B767B]"
              >
                Explore virtual herbal consultations{" "}
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="grid gap-3 lg:grid-rows-[1fr_1fr]">
              <div className="relative order-2 h-64 overflow-hidden rounded-[1.5rem] bg-[#E8E9E3] md:h-[320px] lg:order-1">
                <Image
                  src="/acupuncture.jpg"
                  alt="Acupuncture treatment room at the clinic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-[center_70%]"
                />
              </div>

              <div className="order-1 overflow-hidden rounded-[1.5rem] bg-white shadow-sm lg:order-2">
              <iframe
                title="Acu With Andy Clinic Location"
                src="https://www.google.com/maps?q=303%20Fifth%20Avenue%20Suite%201209%20New%20York%20NY%2010016&output=embed"
                className="h-[320px] w-full border-0 md:h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              </div>
            </div>
          </div>
        </section>
        <Suspense fallback={null}>
          <InstagramFeed />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}