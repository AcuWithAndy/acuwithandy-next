import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BOOKING_URL } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Urticaria & Hives Acupuncture & Chinese Medicine NYC",
  description:
    "Individualized acupuncture and Chinese herbal medicine for urticaria and hives in New York City.",
  alternates: {
    canonical: "/urticaria",
  },
  openGraph: {
    title: "Urticaria & Hives Acupuncture & Chinese Medicine NYC | Andy Boehm, LAc",
    description:
      "Personalized support for hives through acupuncture and Chinese herbal medicine in Midtown Manhattan.",
    url: "https://www.acuwithandy.com/urticaria",
    type: "website",
  },
};

const patterns = [
  ["Wind-Heat", "Sudden itching with red, warm wheals"],
  ["Wind-Cold", "Sudden itching with pale or whitish wheals"],
  ["Heat", "Pronounced redness and warmth"],
  ["Spleen & Stomach Disharmony", "Wheals accompanied by digestive symptoms"],
  ["Wei Qi Deficiency", "Recurrent itching, sometimes with clusters of wheals"],
  ["Qi & Blood Deficiency", "Hives that settle and return over a long period"],
];

const conditions = [
  [
    "Acute urticaria",
    "Hives that come and go for less than six weeks, sometimes following an illness or allergic reaction.",
  ],
  [
    "Chronic spontaneous urticaria",
    "Hives that recur for more than six weeks without a consistent external trigger.",
  ],
  [
    "Chronic inducible urticaria",
    "Recurring hives brought on by a specific trigger, such as scratching, pressure, cold, or exercise.",
  ],
];

export default function UrticariaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FCFCF8] text-[#1F2A24]">
        <section className="px-6 py-14 md:py-24">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">
                TCM Dermatology · New York City
              </p>
              <h1
                className="mt-6 text-5xl leading-[1.05] text-[#263B38] md:text-7xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Urticaria (Hives) &amp; Chinese Medicine
              </h1>
              <p
                className="mt-6 max-w-xl text-2xl leading-snug text-[#5B767B]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                An individualized approach to hives through acupuncture and Chinese herbal medicine.
              </p>
              <div className="mt-8">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#5B767B] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#435F64]"
                >
                  Book an Appointment
                </a>
              </div>
            </div>
            <figure>
              <div className="relative min-h-[340px] overflow-hidden bg-[#E8E9E3] md:min-h-[520px]">
                <Image
                  src="/Cold_Urticaria.jpg"
                  alt="Cold urticaria welts on a forearm"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-3 text-xs leading-5 text-[#1F2A24]/60">
                <a
                  href="https://commons.wikimedia.org/wiki/File:Cold_Urticaria.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  Rylan7667
                </a>
                , CC0, via Wikimedia Commons
              </figcaption>
            </figure>
          </div>
        </section>

        <nav aria-label="On this page" className="hidden border-y border-[#D9DCD3] px-6 md:block">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 py-4 text-sm text-[#435F64]">
            <a className="hover:underline" href="#symptoms">Symptoms</a>
            <a className="hover:underline" href="#perspective">TCM perspective</a>
            <a className="hover:underline" href="#care">Treatment approach</a>
            <a className="hover:underline" href="#conditions">Types of urticaria</a>
            <a className="hover:underline" href="#faq">FAQs</a>
          </div>
        </nav>

        <section id="symptoms" className="scroll-mt-8 px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">
                Living with hives
              </p>
              <h2
                className="mt-4 max-w-md text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Looking beyond the surface.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[#1F2A24]/75">
                Urticaria, commonly called hives, causes raised, itchy welts known as
                <em> wheals</em>. They can appear anywhere on the body. Each welt usually
                fades within 24 hours, though new ones may appear elsewhere.
              </p>
            </div>
            <div className="grid grid-cols-2">
              {[
                ["01", "Welts of varying shapes/sizes"],
                ["02", "Itching or burning"],
                ["03", "Welts that fade and reappear"],
                ["04", "Swelling around eyes & lips"],
              ].map(([number, title]) => (
                <div key={title} className="border-t border-[#C9D0C8] py-5 pr-4 md:py-7 md:pr-8">
                  <span className="text-xs text-[#5B767B]">{number}</span>
                  <h3
                    className="mt-3 text-xl md:text-2xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-7xl border-t border-[#D9DCD3] pt-8">
            <div className="py-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5B767B]">
                Contributing factors
              </h3>
              <p className="mt-3 max-w-3xl leading-7 text-[#1F2A24]/75">
                Possible triggers include infections, certain foods or medications,
                insect stings, cold, heat, and pressure on the skin. Recurring hives
                may have no clear trigger.
              </p>
            </div>
          </div>
        </section>

        <section id="perspective" className="scroll-mt-8 bg-[#E9EFEB] px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">
                Traditional Chinese Medicine
              </p>
              <h2
                className="mt-4 text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Different patterns. Different presentations.
              </h2>
              <p className="mt-5 leading-7 text-[#1F2A24]/75">
                In TCM, urticaria is sometimes called <em>Yin Zhen</em>, or “dormant
                papules.” Pattern identification takes into account the appearance
                of the wheals, the timing of flare-ups, and your overall health history.
              </p>
              <p className="mt-5 border-l-2 border-[#5B767B] pl-4 text-sm leading-6 text-[#1F2A24]/70">
                Pattern identification is individualized. These descriptions are not
                a self-diagnosis or a substitute for medical care.
              </p>
            </div>
            <div className="border-t border-[#BAC8C1]">
              {patterns.map(([title, summary]) => (
                <article key={title} className="border-b border-[#BAC8C1] py-5 md:py-6">
                  <h3 className="text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#1F2A24]/65">{summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="care" className="scroll-mt-8 px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <figure className="relative min-h-[300px] overflow-hidden bg-[#E8E9E3] md:min-h-[500px]">
              <Image
                src="/urticaria-herbs.jpeg"
                alt="Chinese herbs and herbal ingredients"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </figure>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">
                Individualized care
              </p>
              <h2
                className="mt-4 text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Care shaped around you.
              </h2>
              <p className="mt-5 leading-7 text-[#1F2A24]/75">
                Your care plan is based on your symptoms, health history, and
                treatment goals. Depending on your needs, sessions may include:
              </p>
              <div className="mt-8">
                {[
                  ["01", "Acupuncture"],
                  ["02", "Chinese herbal medicine"],
                  ["03", "Lifestyle & nutrition"],
                ].map(([number, title]) => (
                  <div key={title} className="grid grid-cols-[2.5rem_1fr] items-center gap-3 border-t border-[#D9DCD3] py-5">
                    <span className="text-xs text-[#5B767B]">{number}</span>
                    <h3 className="text-xl" style={{ fontFamily: "var(--font-heading)" }}>
                      {title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="conditions" className="scroll-mt-8 bg-[#F0F1EA] px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">
                Urticaria presentations
              </p>
              <h2
                className="mt-4 text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Different forms of urticaria.
              </h2>
              <p className="mt-4 max-w-md leading-7 text-[#1F2A24]/70">
                Urticaria can be acute or chronic, and recurrent hives may be tied
                to a specific physical trigger or have no consistent external cause.
              </p>
            </div>
            <div className="border-t border-[#CCD0C7]">
              {conditions.map(([title, text], index) => (
                <details key={title} className="group border-b border-[#CCD0C7] py-6 md:py-8">
                  <summary className="grid cursor-pointer list-none grid-cols-[2.5rem_1fr_auto] items-center gap-3 marker:hidden">
                    <span className="pt-1 text-xs text-[#5B767B]">0{index + 1}</span>
                    <h3 className="text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
                      {title}
                    </h3>
                    <span
                      className="shrink-0 text-2xl font-light text-[#5B767B] transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 pl-[2.5rem] text-base leading-7 text-[#1F2A24]/75 md:pl-12">
                    {text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-8 px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">
                FAQ
              </p>
              <h2
                className="mt-4 text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Frequently asked questions
              </h2>
            </div>
            <div className="divide-y divide-[#D9D4C9] border-y border-[#D9D4C9]">
              {[
                [
                  "Are hives always caused by an allergy?",
                  "No. Infections and physical triggers can also cause hives, and many recurring cases have no identifiable allergen.",
                ],
                [
                  "What if my skin is clear at my appointment?",
                  "Bring a photo if you have one. Seeing the shape and distribution of the welts helps me understand what a flare looks like for you.",
                ],
                [
                  "When do hives need emergency care?",
                  "Call 911 if your lips, mouth, tongue, or throat suddenly swell, or if you have trouble breathing or swallowing or feel faint.",
                ],
              ].map(([question, answer]) => (
                <details key={question} className="group py-5 md:py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left marker:hidden">
                    <h3
                      className="text-xl leading-snug md:text-2xl"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {question}
                    </h3>
                    <span
                      className="shrink-0 text-2xl font-light text-[#5B767B] transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pt-4 text-sm leading-7 text-[#1F2A24]/75 md:text-base">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#5B767B] px-6 py-16 text-[#FCFCF8] md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                Andy Boehm, LAc
              </p>
              <h2
                className="mt-4 text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Begin a conversation.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/80">
                Discuss your skin concerns and explore an individualized care plan
                with acupuncture and Chinese herbal medicine.
              </p>
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit shrink-0 items-center justify-center bg-[#F1FFE0] px-6 py-3.5 text-sm font-medium text-[#1F2A24] transition hover:bg-[#E2F5C8]"
            >
              Book an Appointment
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
