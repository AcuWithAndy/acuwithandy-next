import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReviewCard from "../components/ReviewCard";
import { BOOKING_URL } from "@/lib/booking";

export default function Home() {
  const services = [
    ["Acupuncture", "Pain, stress, digestion, sleep, and whole-body support."],
    ["Chinese Herbal Medicine", "Custom formulas tailored to your presentation and goals."],
    ["TCM Dermatology", "Support for eczema, psoriasis, itching, and inflammatory skin patterns."],
  ];

  const conditions = [
    "Eczema",
    "Psoriasis",
    "Neck & Back Pain",
    "Stress & Anxiety",
    "Digestive Issues",
    "Sleep Support",
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#EFEBFA] text-[#1f2a24]">
        <section className="bg-[#62757B] pb-64 text-white">
          <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-8 py-16 md:grid-cols-2 md:py-24">
            <div className="order-2 md:order-1">
              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/80">
                ACUWITHANDY.COM
              </p>

              <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
                Traditional Chinese Medicine for Dermatology, Pain & Stress
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/80 md:text-xl">
                Treatments designed to reduce symptoms, clear inflammation and address the underlying imbalances contributing to your condition.
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
              </div>
            </div>

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
  className="object-cover object-center"
/>
  </div>
</div>
          </div>
        </section>

        <ReviewCard />

        <section className="bg-[#EFEBFA] px-8 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="mb-16 grid gap-10 md:grid-cols-2 md:items-end">
  <div>
    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#6F8F7A]">
      Services
    </p>

    <h2 className="text-5xl leading-tight text-[#1F2A24] md:text-6xl">
      Holistic Care
    </h2>
  </div>

  <div className="border-l border-[#62757B]/30 pl-6">
    <p className="text-lg leading-8 text-[#4B5C52]">
      Comprehensive Chinese Medicine services, including Acupuncture, Herbal
      Medicine, and specialized TCM Dermatology treatment options.
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
          title: "Herbal Medicine",
          text: "Custom Chinese herbal formulas tailored to your health goals.",
          image: "/herbs.jpg",
        },
        {
          title: "TCM Dermatology",
          text: "Targeted support for eczema, psoriasis, itching, and inflammatory skin conditions.",
          image: "/dermatology.jpg",
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

<div
  style={{ backgroundColor: "#EFEBFA" }}
  className="overflow-hidden leading-none"
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

<section
  style={{ backgroundColor: "#E7D0C3" }}
  className="px-6 py-24 text-[#1F2A24]"
>
  <div className="mx-auto max-w-6xl">
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#5B767B]">
        Specialty Care
      </p>

      <h2
        className="text-4xl md:text-5xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        TCM Dermatology
      </h2>

      <p className="mt-6 text-base leading-relaxed text-[#1F2A24]/75 md:text-lg">
        Explore our approach to treating common dermatological conditions using
        acupuncture, Chinese herbal medicine, nutrition, and
        lifestyle modifications..
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {[
        { title: "Eczema", href: "/eczema" },
        { title: "Psoriasis", href: "/psoriasis" },
        { title: "Acne", href: "/acne" },
        { title: "Rosacea", href: "/rosacea" },
        { title: "Urticaria", href: "/urticaria" },
        {
          title: "Skin Infections",
          href: "/skin-infections",
        },
      ].map((condition) => (
        <a
          key={condition.title}
          href={condition.href}
          className="group flex h-48 flex-col justify-between rounded-[2rem] border border-[#E6E2D8] bg-[#FCFCF8] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <h3
            className="text-3xl leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {condition.title}
          </h3>

          <span className="text-base font-medium text-[#5B767B] transition-colors duration-300 group-hover:text-[#4A4368]">
            Learn More →
          </span>
        </a>
      ))}
    </div>
  </div>
</section>

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
      fill="#5B767B"
      d="M0,100 C240,20 480,0 720,40 C960,80 1200,100 1440,40 L1440,100 L0,100 Z"
    />
  </svg>
</div>

        <section className="bg-[#5B767B] px-8 py-24">
  <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[1fr_1fr] md:items-center">

    {/* Left Column */}
    <div>
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/70">
        Midtown Manhattan
      </p>

      <h2 className="text-5xl leading-tight text-white md:text-6xl">
        Visit the Clinic
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
        Located near Herald Square and Koreatown, the clinic offers
        Acupuncture and Chinese Herbal Medicine by appointment in a calm, private
        treatment setting.
      </p>

      <p className="mt-8 text-xl font-medium leading-relaxed text-white">
        303 Fifth Avenue<br />
        Suite 1209<br />
        New York, NY 10016
      </p>

      <a
  href={BOOKING_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-[#5B767B] transition hover:bg-[#F2F2F2]"
>
  Book Appointment
</a>
    </div>

    {/* Right Column */}
    <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
      <iframe
        title="Acu With Andy Clinic Location"
        src="https://www.google.com/maps?q=303%20Fifth%20Avenue%20Suite%201209%20New%20York%20NY%2010016&output=embed"
        className="h-[500px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

  </div>
</section>
      </main>

      <Footer />
    </>
  );
}