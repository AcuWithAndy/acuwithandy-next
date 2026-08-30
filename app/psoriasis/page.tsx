import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BOOKING_URL } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Psoriasis Acupuncture & Chinese Medicine NYC",
  description:
    "Personalized acupuncture and Chinese herbal medicine for psoriasis in Midtown Manhattan. Support for plaques, scaling, itching, inflammation, flare-ups, and psoriatic arthritis.",
  alternates: {
    canonical: "/psoriasis",
  },
  openGraph: {
    title: "Psoriasis Acupuncture & Chinese Medicine NYC | Andy Boehm, LAc",
    description:
      "Acupuncture and Chinese herbal medicine for psoriasis, scaling, itching, inflammation, chronic flare-ups, and psoriatic arthritis in Midtown Manhattan.",
    url: "https://www.acuwithandy.com/psoriasis",
    type: "website",
  },
};

export default function PsoriasisPage() {
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
            Psoriasis & Chinese Medicine
          </h1>
        </section>

        <section style={{ backgroundColor: "#FCFCF8" }} className="px-6 py-20">
          <div className="mx-auto w-full max-w-[80rem] px-4">
            <h2
              className="text-3xl leading-tight text-[#5F587A] md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Psoriasis Overview
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#1F2A24]/80">
              Psoriasis is a chronic inflammatory skin condition characterized by
              well-defined plaques with thick, silvery scaling. In psoriasis,
              skin cells known as keratinocytes proliferate at an accelerated
              rate, leading to the buildup of inflamed, scaly lesions on the
              skin. In Traditional Chinese Medicine (TCM), psoriasis is referred
              to as Bai Bi, or “white crust,” for this reason.
            </p>

            <p className="mt-8 text-lg leading-8 text-[#1F2A24]/80">
              Common signs and presentations of psoriasis may include:
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-[#1F2A24]/80">
              <li>Red, inflamed plaques with silvery scales</li>
              <li>Dry, cracked, or itchy skin lesions</li>
              <li>
                Flare-ups commonly affecting the elbows, knees, scalp, and lower
                back
              </li>
              <li>Nail involvement affecting the fingers or toes</li>
              <li>Pinpoint bleeding when scales are removed, known as Auspitz’s sign</li>
              <li>Joint pain or stiffness associated with psoriatic arthritis</li>
            </ul>

            <div className="py-24">
              <div className="overflow-hidden rounded-[2rem] border border-[#E6E2D8] shadow-sm">
                <Image
  src="/psoriasis.jpg"
  alt="Plaque psoriasis affecting the elbow"
  width={900}
  height={500}
  priority
  className="h-72 w-full object-cover object-center md:h-80"
/>
              </div>
              <p className="mt-4 text-sm text-[#1F2A24]/60">
  Psoriasis image via{" "}
  <a
    href="https://commons.wikimedia.org/wiki/File:Psoriasis_on_elbow.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-[#5B767B]"
  >
    Wikimedia Commons
  </a>
  . Licensed under CC BY-SA 4.0.
</p>
            </div>

            <p className="text-lg leading-8 text-[#1F2A24]/80">
              Psoriasis is believed to involve immune, genetic, metabolic, and
              environmental factors. Common triggers that may worsen symptoms
              include:
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-[#1F2A24]/80">
              <li>Stress and emotional strain</li>
              <li>Infection or illness</li>
              <li>Skin trauma or irritation</li>
              <li>Climate and environmental changes</li>
              <li>Certain medications, including lithium and antimalarials</li>
            </ul>

            <p className="mt-10 text-lg leading-8 text-[#1F2A24]/80">
              Psoriasis can occur at any age, though onset most commonly appears
              between ages 15–30. At Andy Boehm, LAc, treatment focuses on
              helping to reduce inflammation, calm flare-ups, and support skin
              health through acupuncture and Chinese herbal medicine.
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
              How Traditional Chinese Medicine Views Psoriasis
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#1F2A24]/80">
              Common TCM patterns associated with psoriasis include:
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {[
                ["Blood Heat", "Redness, inflammation, rapid flare-ups, and itching"],
                ["Blood Dryness", "Dry, thickened, or scaling skin lesions"],
                ["Blood Stasis", "Chronic, stubborn plaques and darker discoloration"],
                ["Wind", "Itching, spreading lesions, and fluctuating symptoms"],
                ["Damp-Heat", "Inflamed, irritated, or weeping presentations"],
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
              TCM also considers psoriasis to be influenced by:
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                ["Stress", "Emotional stress and prolonged internal heat"],
                [
                  "Digestion",
                  "Digestive imbalance involving the spleen and stomach",
                ],
                [
                  "Diet",
                  "Spicy foods, alcohol, shellfish, and greasy foods",
                ],
                [
                  "Deficiency",
                  "Liver and kidney deficiency patterns contributing to chronic or recurring flare-ups",
                ],
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
          </div>
        </section>

        <section style={{ backgroundColor: "#FCFCF8" }} className="px-6 py-20">
          <div className="mx-auto w-full max-w-[80rem] px-4">
            <h2
              className="text-4xl leading-tight md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Approach to Psoriasis Treatment
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#1F2A24]/80">
              Based on your psoriasis presentation, sessions may include
              acupuncture, Chinese herbal medicine, cupping, gua sha, and
              lifestyle guidance to help reduce inflammation, scaling, chronic
              itching, flare-ups, and immune dysregulation while supporting skin
              and joint health.
            </p>

            <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#E6E2D8] shadow-sm">
              <Image
                src="/herbal-formula2.jpg"
                alt="Chinese herbal formula for psoriasis care"
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
              Types of Psoriasis
            </h2>

            <div style={{ height: "50px" }} />

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {[
                [
                  "Plaque Psoriasis",
                  "Red, scaly plaques commonly affecting the elbows, knees, scalp, and lower back.",
                ],
                [
                  "Guttate Psoriasis",
                  "Small drop-like lesions often triggered by infection.",
                ],
                [
                  "Flexural Psoriasis",
                  "Inflamed psoriasis affecting skin folds and sensitive areas.",
                ],
                [
                  "Pustular Psoriasis",
                  "Inflamed skin with pustules and irritation.",
                ],
                [
                  "Erythrodermic Psoriasis",
                  "A severe inflammatory form of psoriasis involving widespread redness and skin shedding.",
                ],
                [
                  "Psoriatic Arthritis",
                  "Psoriasis associated with joint pain, stiffness, and inflammation.",
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

    <div className="mx-auto mt-12 max-w-4xl divide-y divide-[#D9D4C9] border-y border-[#D9D4C9]">
      {[
        [
          "How long does psoriasis treatment take?",
          "The timeline for psoriasis treatment depends on the severity, chronicity, and overall presentation of the condition. Many patients notice improvement within 6–8 weeks with consistent treatment 1–2 times per week, though relief from itching, inflammation, and flare-ups may occur sooner.",
        ],
        [
          "Do I need to use acupuncture and Chinese herbs together?",
          "Acupuncture and Chinese herbal medicine are often most effective when used together. Acupuncture helps regulate inflammation, stress, and immune function, while herbal medicine provides continued support between sessions to help reduce scaling, irritation, and recurrent flare-ups.",
        ],
        [
          "Can I use acupuncture and Chinese herbs alongside my current psoriasis treatment?",
          "Yes. Acupuncture and Chinese herbal medicine can often be used alongside conventional dermatological care. Your practitioner will review your medications and supplements to ensure herbs are prescribed safely and appropriately.",
        ],
        [
          "Can acupuncture help psoriatic arthritis?",
          "Acupuncture may help support patients experiencing psoriatic arthritis by helping reduce joint pain, stiffness, inflammation, and stress associated with chronic flare-ups.",
        ],
      ].map(([question, answer]) => (
        <details key={question} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
            <h3
              className="text-2xl leading-tight text-[#1F2A24] md:text-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {question}
            </h3>

            <span className="shrink-0 text-3xl font-light text-[#5B767B] transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>

          <p className="max-w-3xl pt-5 text-base leading-7 text-[#1F2A24]/75">
            {answer}
          </p>
        </details>
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
              Ready to start treating your psoriasis naturally?
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#FCFCF8]/80">
              Book an appointment at our Manhattan-based clinic to begin a
              personalized treatment plan using acupuncture and Chinese herbal
              medicine for chronic psoriasis relief and long-term skin health.
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