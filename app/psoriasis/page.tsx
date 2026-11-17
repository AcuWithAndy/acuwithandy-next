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
        <section className="px-6 py-14 md:py-24">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">
                TCM Dermatology · New York City
              </p>
              <h1
                className="mt-6 text-5xl leading-[1.05] text-[#263B38] md:text-7xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Psoriasis &amp; Chinese Medicine
              </h1>
              <p
                className="mt-6 max-w-xl text-2xl leading-snug text-[#5B767B]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Understanding psoriasis from a different perspective.
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#1F2A24]/75 md:text-lg">
                An integrative approach to psoriasis through acupuncture,
                Chinese herbal medicine, and individualized care.
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
                  src="/clay.jpg"
                  alt="Clay used in a skincare routine"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />
              </div>
            </figure>
          </div>
        </section>

        <nav aria-label="On this page" className="hidden border-y border-[#D9DCD3] px-6 md:block">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 py-4 text-sm text-[#435F64]">
            <a className="hover:underline" href="#symptoms">Symptoms</a>
            <a className="hover:underline" href="#perspective">TCM perspective</a>
            <a className="hover:underline" href="#care">Treatment approach</a>
            <a className="hover:underline" href="#conditions">Types of psoriasis</a>
            <a className="hover:underline" href="#faq">FAQs</a>
          </div>
        </nav>

        <section id="symptoms" className="scroll-mt-8 px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">
                Living with psoriasis
              </p>
              <h2
                className="mt-4 max-w-md text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Looking beyond the surface.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[#1F2A24]/75">
                Psoriasis can affect the skin, nails, joints, and everyday
                comfort. Common signs and experiences include:
              </p>
            </div>
            <div className="grid grid-cols-2">
              {[
                ["01", "Plaques & scaling"],
                ["02", "Dryness & itching"],
                ["03", "Recurring flare-ups"],
                ["04", "Nail changes"],
                ["05", "Joint pain or stiffness"],
                ["06", "Skin sensitivity"],
              ].map(([number, title]) => (
                <div key={title} className="border-t border-[#C9D0C8] py-5 pr-4 md:py-7 md:pr-8">
                  <span className="text-xs text-[#5B767B]">{number}</span>
                  <h3 className="mt-3 text-xl md:text-2xl" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-10 grid max-w-7xl gap-8 border-t border-[#D9DCD3] pt-8 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <h3 className="text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
              Contributing factors:
            </h3>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5B767B]">
                  Internal factors
                </h4>
                <p className="mt-3 leading-7 text-[#1F2A24]/75">
                  Genetics, immune activity, stress, infection or illness
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5B767B]">
                  External factors
                </h4>
                <p className="mt-3 leading-7 text-[#1F2A24]/75">
                  Skin injury or irritation, climate and environmental changes,
                  certain medications such as lithium and antimalarials
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="perspective" className="scroll-mt-8 bg-[#E9EFEB] px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">
                Traditional Chinese Medicine
              </p>
              <h2 className="mt-4 text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
                Different patterns. Different presentations.
              </h2>
              <p className="mt-5 leading-7 text-[#1F2A24]/75">
                In TCM, psoriasis is sometimes referred to as Bai Bi, or “white
                crust.” It may be described through patterns such as Blood Heat,
                Blood Dryness, and Blood Stasis. These traditional pattern
                descriptions are considered alongside each person’s symptoms
                and health history.
              </p>
              <p className="mt-5 border-l-2 border-[#5B767B] pl-4 text-sm leading-6 text-[#1F2A24]/70">
                Pattern identification is individualized. These descriptions
                are not a self-diagnosis or a substitute for medical care.
              </p>
            </div>
            <div className="border-t border-[#BAC8C1]">
              {[
                ["熱", "Blood Heat", "Redness, inflammation, rapid flare-ups, and itching", "In TCM, Blood Heat is a traditional pattern description sometimes associated with redness, irritation, and quickly developing flare-ups."],
                ["燥", "Blood Dryness", "Dry, thickened, or scaling skin", "Blood Dryness is a traditional pattern description that may be considered when skin is persistently dry, thickened, or scaling."],
                ["瘀", "Blood Stasis", "Longstanding plaques or darker discoloration", "Blood Stasis is a traditional pattern description sometimes considered with chronic, stubborn plaques or darker discoloration."],
                ["風", "Wind", "Itching and changing or spreading symptoms", "Wind is associated in TCM with itching and symptoms that may shift or spread over time."],
                ["濕熱", "Damp-Heat", "Inflamed or irritated presentations", "Damp-Heat is a traditional pattern description that may be considered with inflamed, irritated, or occasionally weeping areas."],
              ].map(([character, title, summary, detail]) => (
                <details key={title} className="group border-b border-[#BAC8C1]">
                  <summary className="grid cursor-pointer list-none grid-cols-[3.5rem_1fr_auto] items-center gap-4 py-5 marker:hidden md:py-6">
                    <span className="text-3xl text-[#5B767B]" lang="zh">{character}</span>
                    <span>
                      <span className="block text-2xl" style={{ fontFamily: "var(--font-heading)" }}>{title}</span>
                      <span className="mt-1 block text-sm text-[#1F2A24]/65">{summary}</span>
                    </span>
                    <span className="text-2xl font-light text-[#5B767B] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-2xl pb-6 pl-14 text-sm leading-7 text-[#1F2A24]/75 md:pl-[4.5rem]">{detail}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="care" className="scroll-mt-8 px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <figure>
              <div className="relative min-h-[300px] overflow-hidden bg-[#E9E5DC] md:min-h-[500px]">
                <Image
                  src="/herbal-formula2.jpg"
                  alt="Chinese herbs arranged for an individualized formula"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </figure>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">Individualized care</p>
              <h2 className="mt-4 text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
                Care shaped around you.
              </h2>
              <p className="mt-5 leading-7 text-[#1F2A24]/75">
                Your care plan is based on your psoriasis presentation, health
                history, and treatment goals. Depending on your needs, sessions
                may include:
              </p>
              <div className="mt-8">
                {[
                  ["01", "Acupuncture", "Acupuncture may be included as part of an individualized approach to symptom management and overall well-being."],
                  ["02", "Chinese herbal medicine", "An herbal prescription may be considered based on your TCM presentation, health history, and current medications."],
                  ["03", "Cupping & gua sha", "These techniques may be discussed as part of a personalized care plan when appropriate."],
                  ["04", "Lifestyle & nutrition", "Guidance may include conversations about stress, sleep, diet, and daily routines."],
                ].map(([number, title, text]) => (
                  <details key={title} className="group border-t border-[#D9DCD3] py-5">
                    <summary className="grid cursor-pointer list-none grid-cols-[2.5rem_1fr_auto] items-center gap-3 marker:hidden">
                      <span className="text-xs text-[#5B767B]">{number}</span>
                      <h3 className="text-xl" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
                      <span className="text-2xl font-light text-[#5B767B] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-3 pl-[2.5rem] text-sm leading-6 text-[#1F2A24]/70 md:pl-12">{text}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="conditions" className="scroll-mt-8 bg-[#F0F1EA] px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">Psoriasis presentations</p>
              <h2 className="mt-4 text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
                Different forms of psoriasis.
              </h2>
              <p className="mt-4 max-w-md leading-7 text-[#1F2A24]/70">
                Psoriasis has several forms, each with its own features and
                considerations. Select a type to read a brief description.
              </p>
              <figure className="mt-8">
                <div className="relative min-h-[300px] overflow-hidden bg-[#E8E9E3]">
                  <Image
                    src="/psoriasis.jpg"
                    alt="Plaque psoriasis affecting the elbow"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="mt-3 text-xs leading-5 text-[#1F2A24]/60">
                  Psoriasis image via{" "}
                  <a
                    href="https://commons.wikimedia.org/wiki/File:Psoriasis_on_elbow.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-[#5B767B]"
                  >
                    Wikimedia Commons
                  </a>
                  . Licensed under CC BY-SA 4.0.
                </figcaption>
              </figure>
            </div>
            <div className="border-t border-[#CCD0C7]">
              {[
                ["Plaque psoriasis", "Raised, red plaques with silvery scales, commonly affecting the elbows, knees, scalp, or lower back."],
                ["Guttate psoriasis", "Small, drop-like spots that can appear across the body and may follow an infection."],
                ["Flexural psoriasis", "Smooth, inflamed areas that appear in skin folds, such as the armpits or groin."],
                ["Pustular psoriasis", "A less common form involving inflamed skin and visible pustules; consult a medical professional for evaluation."],
                ["Erythrodermic psoriasis", "A rare, severe form involving widespread redness and skin shedding that requires urgent medical care."],
                ["Psoriatic arthritis", "An inflammatory condition associated with psoriasis that can cause joint pain, stiffness, and swelling."],
              ].map(([title, text], index) => (
                <details key={title} className="group border-b border-[#CCD0C7] py-6 md:py-8">
                  <summary className="grid cursor-pointer list-none grid-cols-[2.5rem_1fr_auto] items-center gap-3 marker:hidden">
                    <span className="pt-1 text-xs text-[#5B767B]">0{index + 1}</span>
                    <h3 className="text-2xl" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
                    <span className="shrink-0 text-2xl font-light text-[#5B767B] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 pl-[2.5rem] text-base leading-7 text-[#1F2A24]/75 md:pl-12">{text}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-8 px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">FAQ</p>
              <h2 className="mt-4 text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
                Frequently asked questions
              </h2>
            </div>
            <div className="divide-y divide-[#D9D4C9] border-y border-[#D9D4C9]">
              {[
                ["How long does psoriasis treatment take?", "The timeline depends on the type, duration, and individual presentation of psoriasis. Responses to care vary, and results are not guaranteed."],
                ["Do I need to use acupuncture and Chinese herbs together?", "Not necessarily. Acupuncture and Chinese herbal medicine may be used together or individually, depending on your needs and health history. Your practitioner can discuss the options with you."],
                ["Can I use acupuncture and Chinese herbs alongside my current psoriasis treatment?", "Complementary care may be used alongside conventional dermatological care. Share your medications and supplements with your practitioner so potential interactions can be reviewed, and continue to follow your medical provider’s advice."],
                ["Can acupuncture help psoriatic arthritis?", "Acupuncture may be discussed as complementary support for discomfort, but it does not treat the underlying disease. Talk with your rheumatologist or medical provider about joint symptoms and treatment options."],
              ].map(([question, answer]) => (
                <details key={question} className="group py-5 md:py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left marker:hidden">
                    <h3 className="text-xl leading-snug md:text-2xl" style={{ fontFamily: "var(--font-heading)" }}>{question}</h3>
                    <span className="shrink-0 text-2xl font-light text-[#5B767B] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 text-sm leading-7 text-[#1F2A24]/75 md:text-base">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#5B767B] px-6 py-16 text-[#FCFCF8] md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Andy Boehm, LAc</p>
              <h2 className="mt-4 text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
                Begin a conversation.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/80">
                Discuss your skin concerns and explore an individualized care
                plan with acupuncture and Chinese herbal medicine.
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