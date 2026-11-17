import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BOOKING_URL } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Eczema Acupuncture & Chinese Medicine NYC",
  description:
    "Personalized acupuncture and Chinese herbal medicine for eczema in Midtown Manhattan. Support for itching, dryness, inflammation, flare-ups, atopic dermatitis, dyshidrotic eczema, and TSW.",
  alternates: { canonical: "/eczema" },
  openGraph: {
    title: "Eczema Acupuncture & Chinese Medicine NYC | Andy Boehm, LAc",
    description:
      "Acupuncture and Chinese herbal medicine for eczema, itching, inflammation, dryness, and chronic flare-ups in Midtown Manhattan.",
    url: "https://www.acuwithandy.com/eczema",
    type: "website",
  },
};

const patterns = [
  ["風", "Wind", "Itching and sudden flare-ups", "In TCM, Wind is associated with symptoms that change location, arise suddenly, or involve pronounced itching."],
  ["濕", "Dampness", "Oozing and weeping lesions", "Dampness is a traditional pattern description sometimes used when lesions are weeping or slow to heal."],
  ["熱", "Heat", "Redness and inflammation", "Heat is a traditional pattern description associated with visible redness, warmth, swelling, or irritation."],
  ["虛", "Deficiency", "Chronicity and dryness", "Deficiency may be considered in longstanding presentations with dryness or recurring symptoms."],
];

const conditions = [
  ["Atopic dermatitis", "Chronic inflammation, dryness, itching, and recurrent flare-ups."],
  ["Dyshidrotic eczema", "Itchy blisters affecting the hands and feet."],
  ["Facial & scalp eczema", "Redness, irritation, flaking, and sensitive skin."],
  ["Stress-triggered flare-ups", "Symptoms that may worsen alongside stress, poor sleep, or nervous system dysregulation."],
  ["Topical steroid withdrawal", "Support for people navigating symptoms during topical steroid withdrawal."],
];

export default function EczemaPage() {
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
                Eczema &amp; Chinese Medicine
              </h1>
              <p
                className="mt-6 max-w-xl text-2xl leading-snug text-[#5B767B]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Understanding eczema from a different perspective.
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#1F2A24]/75 md:text-lg">
                An integrative approach to chronic skin conditions through
                acupuncture, Chinese herbal medicine, and individualized care.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
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
            <figure className="relative min-h-[340px] overflow-hidden bg-[#E8E9E3] md:min-h-[520px]">
              <Image
                src="/cream2.jpg"
                alt="Cream used as part of a daily skin-care routine"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />
            </figure>
          </div>
        </section>

        <nav aria-label="On this page" className="hidden border-y border-[#D9DCD3] px-6 md:block">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 py-4 text-sm text-[#435F64]">
            <a className="hover:underline" href="#symptoms">Symptoms</a>
            <a className="hover:underline" href="#perspective">TCM perspective</a>
            <a className="hover:underline" href="#care">Treatment approach</a>
            <a className="hover:underline" href="#conditions">Types of eczema</a>
            <a className="hover:underline" href="#faq">FAQs</a>
          </div>
        </nav>

        <section id="symptoms" className="scroll-mt-8 px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">
                Living with eczema
              </p>
              <h2 className="mt-4 max-w-md text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
                More than a skin condition.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[#1F2A24]/75">
                Symptoms can shift over time and affect sleep, stress, confidence,
                and daily comfort. Common experiences include:
              </p>
            </div>
            <div className="grid grid-cols-2">
              {[
                ["01", "Itching"],
                ["02", "Dryness"],
                ["03", "Inflammation"],
                ["04", "Flare-ups"],
              ].map(([number, title]) => (
                <div key={title} className="border-t border-[#C9D0C8] py-5 pr-4 md:py-7 md:pr-8">
                  <span className="text-xs text-[#5B767B]">{number}</span>
                  <h3 className="mt-3 text-2xl md:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
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
                  Genetics, stress, poor sleep, digestive function, immune function
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5B767B]">
                  External factors
                </h4>
                <p className="mt-3 leading-7 text-[#1F2A24]/75">
                  Hard water, heat, dryness, sweat, climate changes, foods,
                  chemicals, fabrics, skin irritation
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
                TCM considers patterns of internal imbalance alongside external
                factors affecting the skin. Classical texts describe eczema as
                Shi Zhen (&quot;damp eruption&quot;) and Feng Shi Chuang (&quot;wind-damp sore&quot;).
                Select a pattern to learn more.
              </p>
              <p className="mt-5 border-l-2 border-[#5B767B] pl-4 text-sm leading-6 text-[#1F2A24]/70">
                Pattern identification is individualized. These descriptions
                are not a self-diagnosis.
              </p>
            </div>
            <div className="border-t border-[#BAC8C1]">
              {patterns.map(([character, title, summary, detail]) => (
                <details key={title} className="group border-b border-[#BAC8C1]">
                  <summary className="grid cursor-pointer list-none grid-cols-[3.5rem_1fr_auto] items-center gap-4 py-5 marker:hidden md:py-6">
                    <span className="text-3xl text-[#5B767B]" lang="zh">{character}</span>
                    <span>
                      <span className="block text-2xl" style={{ fontFamily: "var(--font-heading)" }}>{title}</span>
                      <span className="mt-1 block text-sm text-[#1F2A24]/65">{summary}</span>
                    </span>
                    <span className="text-2xl font-light text-[#5B767B] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-2xl pb-6 pl-14 text-sm leading-7 text-[#1F2A24]/75 md:pl-[4.5rem]">
                    {detail}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="care" className="scroll-mt-8 px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <figure className="relative min-h-[300px] overflow-hidden bg-[#E9E5DC] md:min-h-[500px]">
              <Image
                src="/eczema-formula.jpg"
                alt="A Chinese herbal formula prepared as part of individualized care"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </figure>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">Individualized care</p>
              <h2 className="mt-4 text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
                Treating the person behind the skin.
              </h2>
              <p className="mt-5 leading-7 text-[#1F2A24]/75">
                Care is tailored to your presentation, health history, and
                treatment goals. Depending on your needs, sessions may include:
              </p>
              <div className="mt-8">
                {[
                  ["01", "Acupuncture", "Part of an individualized approach to symptom management and overall well-being."],
                  ["02", "Chinese herbal medicine", "An individualized herbal prescription based on your TCM presentation and health history."],
                  ["03", "Lifestyle & nutrition", "Guidance around diet, sleep, stress, and daily habits."],
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">Eczema presentations</p>
              <h2 className="mt-4 text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
                Conditions we explore.
              </h2>
              <p className="mt-4 max-w-md leading-7 text-[#1F2A24]/70">
                Different forms of eczema can bring different concerns. Care
                begins with your particular symptoms and history.
              </p>
              <figure className="relative mt-8 min-h-[300px] overflow-hidden bg-[#E8E9E3]">
                <Image
                  src="/dermatology.jpg"
                  alt="A close view of irritated skin associated with eczema"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover object-[center_42%]"
                />
              </figure>
            </div>
            <div className="border-t border-[#CCD0C7]">
              {conditions.map(([title, text], index) => (
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
                ["How long does eczema treatment take?", "The timeline for eczema treatment depends on the severity, duration, and overall presentation of the condition. Some patients report changes over several weeks of consistent care; timing varies, and results are not guaranteed."],
                ["Do I need to use acupuncture and Chinese herbs together?", "Not necessarily. Acupuncture and Chinese herbal medicine may be used together or individually, depending on your needs and health history. Your practitioner can discuss the options with you."],
                ["Can I use acupuncture and Chinese herbs alongside my current medical treatment?", "Acupuncture and Chinese herbal medicine may be used alongside conventional dermatological care. Share your medications and supplements with your practitioner so potential interactions can be reviewed. Continue to follow your medical provider's advice."],
                ["Do you treat topical steroid withdrawal (TSW)?", "Many people seek Chinese medicine as supportive care while navigating topical steroid withdrawal. Treatment is individualized and is not a substitute for medical guidance; consult your prescribing clinician about changes to topical medication."],
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