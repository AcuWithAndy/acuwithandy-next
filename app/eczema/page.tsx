import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BOOKING_URL } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Eczema Acupuncture & Chinese Medicine NYC",
  description:
    "Personalized acupuncture and Chinese herbal medicine for eczema in Midtown Manhattan. Support for itching, dryness, inflammation, flare-ups, atopic dermatitis, dyshidrotic eczema, and TSW.",
  alternates: {
    canonical: "/eczema",
  },
  openGraph: {
    title: "Eczema Acupuncture & Chinese Medicine NYC | Andy Boehm, LAc",
    description:
      "Acupuncture and Chinese herbal medicine for eczema, itching, inflammation, dryness, and chronic flare-ups in Midtown Manhattan.",
    url: "https://www.acuwithandy.com/eczema",
    type: "website",
  },
};

export default function EczemaPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FCFCF8] text-[#1F2A24]">
        <section className="bg-[#5B767B] px-6 py-24 text-center text-[#FCFCF8]">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#FCFCF8]/80">
            TCM Dermatology
          </p>

          <h1
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Eczema & Chinese Medicine
          </h1>
        </section>

        <section style={{ backgroundColor: "#FCFCF8" }} className="px-6 py-20">
          <div className="mx-auto w-full max-w-[80rem] px-4">
            <h2
              className="text-3xl leading-tight text-[#5F587A] md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Eczema Overview
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#1F2A24]/80">
              Eczema is a chronic inflammatory skin condition that can affect
              sleep, stress levels, confidence, and daily comfort. Symptoms
              often include:
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-[#1F2A24]/80">
              <li>Itching</li>
              <li>Dryness and flaking</li>
              <li>Redness and inflammation</li>
              <li>Oozing or irritated lesions</li>
              <li>Recurrent flare-ups</li>
            </ul>

            <div className="py-24">
              <div className="overflow-hidden rounded-[2rem] border border-[#E6E2D8] shadow-sm">
                <Image
                  src="/dermatology.jpg"
                  alt="Eczema dermatitis on skin"
                  width={900}
                  height={500}
                  priority
                  className="h-72 w-full object-cover object-[center_18%] md:h-80"
                />
              </div>

            </div>

            <p className="text-lg leading-8 text-[#1F2A24]/80">
              Eczema can be influenced by both external triggers and internal
              imbalances. Common contributing factors include:
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-[#1F2A24]/80">
              <li>Stress and poor sleep</li>
              <li>Digestive and immune dysfunction</li>
              <li>Heat, dryness, sweat, and climate changes</li>
              <li>Foods, chemicals, fabrics, and skin irritation</li>
            </ul>

            <p className="mt-10 text-lg leading-8 text-[#1F2A24]/80">
              At Andy Boehm, LAc, treatment focuses on addressing both the root
              imbalance and visible skin symptoms through Chinese herbal
              medicine and acupuncture for eczema.
            </p>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-fit items-center justify-center rounded-full bg-[#F1FFE0] px-8 py-4 font-medium text-[#1F2A24] transition hover:bg-[#E2F5C8]"
            >
              Book Appointment
            </a>
          </div>
        </section>

        <section style={{ backgroundColor: "#efebfa" }} className="px-6 py-24">
          <div className="mx-auto w-full max-w-[80rem] px-4">
            <h2
              className="text-4xl leading-tight md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              How Traditional Chinese Medicine Views Eczema
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#1F2A24]/80">
              In Traditional Chinese Medicine (TCM), eczema is viewed as a
              pattern of internal imbalance combined with external pathogenic
              factors affecting the skin. Classical Chinese medicine texts
              describe eczema as conditions such as Shi Zhen ("damp eruption")
              and Feng Shi Chuang ("wind-damp sore"). Common TCM patterns
              associated with eczema include:
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {[
                ["Wind", "Itching and sudden flare-ups"],
                ["Dampness", "Oozing, weeping, or slow-healing lesions"],
                ["Heat", "Redness, inflammation, swelling, and irritation"],
                ["Deficiency", "Chronic, recurring, or dry skin conditions"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] bg-[#FCFCF8] p-6 shadow-sm"
                >
                  <h3
                    className="text-2xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#1F2A24]/75">{text}</p>
                </div>
              ))}
            </div>

            <div style={{ height: "50px" }} />

            <p className="text-lg leading-8 text-[#1F2A24]/80">
              TCM also views eczema as being connected to imbalances involving
              the:
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                ["Spleen", "Impaired fluid metabolism and damp accumulation"],
                ["Heart", "Heat and inflammation"],
                ["Kidneys", "Chronic weakness and long-term flare-ups"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] bg-[#FCFCF8] p-6 shadow-sm"
                >
                  <h3
                    className="text-2xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#1F2A24]/75">{text}</p>
                </div>
              ))}
            </div>

            <div style={{ height: "40px" }} />

            <p className="mt-14 text-lg leading-8 text-[#1F2A24]/80">
              Dietary factors such as spicy, greasy, or overly rich foods may
              also contribute to internal heat and dampness that can worsen
              eczema symptoms.
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: "#FCFCF8" }} className="px-6 py-20">
          <div className="mx-auto w-full max-w-[80rem] px-4">
            <h2
              className="text-4xl leading-tight md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Approach to Eczema Treatment
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#1F2A24]/80">
              Based on your eczema presentation, sessions may include
              acupuncture, Chinese herbal medicine, cupping, gua sha, and
              lifestyle guidance to help reduce inflammation, chronic itching,
              flare-ups, and nervous system dysregulation while supporting skin
              health.
            </p>

            <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#E6E2D8] shadow-sm">
              <Image
  src="/eczema-formula.jpg"
  alt="Chinese herbal formula for eczema care"
  width={900}
  height={600}
  className="h-72 w-full object-cover object-center md:h-96"
/>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#efebfa" }} className="px-6 py-20">
          <div className="mx-auto w-full max-w-[80rem] px-4">
            <h2
              className="text-center text-4xl leading-tight md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Types of Eczema
            </h2>

            <div style={{ height: "50px" }} />

            <div className="mt-14 grid gap-6 md:grid-cols-2">
  {[
    [
      "Atopic Dermatitis",
      "Chronic inflammation, dryness, itching, and recurrent flare-ups.",
    ],
    [
      "Dyshidrotic Eczema",
      "Itchy blisters affecting the hands and feet.",
    ],
    [
      "Facial & Scalp Eczema",
      "Redness, irritation, flaking, and sensitive skin.",
    ],
    [
      "Stress-Triggered Flare-Ups",
      "Symptoms worsened by stress, poor sleep, and nervous system dysregulation.",
    ],
    [
      "Topical Steroid Withdrawal",
      "Chinese medicine may help support skin healing, calm inflammation, reduce itching, and ease symptoms during withdrawal.",
    ],
  ].map(([title, text]) => (
    <div
      key={title}
      className="rounded-[2rem] bg-[#FCFCF8] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <h3
        className="text-3xl leading-tight text-[#1F2A24]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>

      <p className="mt-5 text-lg leading-8 text-[#1F2A24]/75">
        {text}
      </p>
    </div>
  ))}
</div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto w-full max-w-[80rem] px-4">
            <h2
              className="text-center text-3xl md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Frequently Asked Questions
            </h2>

            <div className="mt-12 space-y-10">
              {[
                [
                  "How long does eczema treatment take?",
                  "The timeline for eczema treatment depends on the severity, duration, and overall presentation of the condition. Many patients notice meaningful improvement within 6–8 weeks with consistent treatment 1–2 times per week, while relief from itching, inflammation, and discomfort may occur sooner.",
                ],
                [
                  "Do I need to use acupuncture and Chinese herbs together?",
                  "Acupuncture and Chinese herbal medicine are often most effective when used together. While acupuncture helps regulate inflammation, stress, and the nervous system, herbal medicine provides ongoing support between sessions to help reduce flare-ups and promote skin healing.",
                ],
                [
                  "Can I use acupuncture and Chinese herbs alongside my current medical treatment?",
                  "Yes. Acupuncture and Chinese herbal medicine can often be used alongside conventional dermatological care. Your practitioner will review your medications and supplements to ensure herbs are prescribed safely and appropriately.",
                ],
                [
                  "Do you treat topical steroid withdrawal (TSW)?",
                  "Yes. Many patients seek out Chinese medicine for support during topical steroid withdrawal (TSW). Treatment may help reduce inflammation, itching, discomfort, and nervous system dysregulation while supporting the skin's healing process naturally.",
                ],
              ].map(([question, answer]) => (
                <div key={question} className="border-b border-[#D9D4C9] pb-8">
                  <h3
                    className="text-2xl leading-tight text-[#1F2A24] md:text-3xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {question}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-[#1F2A24]/75">
                    {answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#5B767B] px-6 py-20 text-center text-[#FCFCF8]">
          <div className="mx-auto w-full max-w-[80rem] px-4">
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to start treating your eczema naturally?
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#FCFCF8]/80">
              Book an appointment at our Manhattan-based clinic to begin a
              personalized treatment plan using acupuncture and Chinese herbal
              medicine for chronic eczema relief and long-term skin health.
            </p>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[#F1FFE0] px-8 py-4 font-medium text-[#1F2A24] transition hover:bg-[#E2F5C8]"
            >
              Book Appointment
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}