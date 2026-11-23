import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BOOKING_URL } from "@/lib/booking";

export const metadata = {
  title: "Acne Acupuncture & Chinese Medicine NYC",
  description:
    "Learn about acne, common contributing factors, and an individualized approach to acupuncture and Chinese herbal medicine in New York City.",
  alternates: { canonical: "/acne" },
  openGraph: {
    title: "Acne Acupuncture & Chinese Medicine NYC | Andy Boehm, LAc",
    description:
      "An integrative approach to acne through acupuncture, Chinese herbal medicine, and individualized care.",
    url: "https://www.acuwithandy.com/acne",
    type: "website",
  },
};

const tcmPatterns = [
  ["Heat", "Redness, warmth, or active inflammation"],
  ["Blood Heat", "Red, inflamed lesions and recurring flare-ups"],
  ["Qi & Blood Stagnation", "Persistent lesions that may be slow to resolve"],
  ["Blood Stasis with Phlegm", "Deeper, persistent nodules or cyst-like lesions"],
];

const presentations = [
  ["Comedonal acne", "Breakouts made up mostly of whiteheads and blackheads. The skin may look or feel bumpy, with little visible inflammation."],
  ["Papulopustular acne", "Breakouts with inflamed pimples that may feel sore or tender. Some develop a white or yellow center, and clogged pores may be present too."],
  ["Nodular & cystic acne", "Breakouts with deeper, often painful lumps beneath the skin. These can take longer to clear and are more likely to leave scars."],
];

export default function AcnePage() {
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
                Acne &amp; Chinese Medicine
              </h1>
              <p
                className="mt-6 max-w-xl text-2xl leading-snug text-[#5B767B]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Understanding acne from a different perspective.
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#1F2A24]/75 md:text-lg">
                An integrative approach to chronic skin conditions through
                acupuncture, Chinese herbal medicine, and individualized care.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#5B767B] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#435F64]"
              >
                Book an Appointment
              </a>
            </div>
            <figure className="relative min-h-[340px] overflow-hidden bg-[#E8E9E3] md:min-h-[520px]">
              <Image
                src="/acne.jpg"
                alt="Acne-affected skin"
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
            <a className="hover:underline" href="#conditions">Types of acne</a>
            <a className="hover:underline" href="#faq">FAQs</a>
          </div>
        </nav>

        <section id="symptoms" className="scroll-mt-8 px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">
                Living with acne
              </p>
              <h2
                className="mt-4 max-w-md text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Looking beyond the surface.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[#1F2A24]/75">
                Acne affects the hair follicles and sebaceous (oil-producing)
                glands, causing both noninflammatory and inflammatory blemishes.
                Acne is especially common during adolescence and young adulthood,
                though it can persist into later life. In women, hormonal changes
                before menstruation may trigger or worsen breakouts.
              </p>
            </div>
            <div className="grid grid-cols-2">
              {[
                ["01", "Small clogged pores"],
                ["02", "Raised, inflamed pimples"],
                ["03", "Lumps beneath the skin"],
                ["04", "Affects face, chest & upper back"],
              ].map(([number, title]) => (
                <div key={title} className="border-t border-[#C9D0C8] py-5 pr-4 md:py-7 md:pr-8">
                  <span className="text-xs text-[#5B767B]">{number}</span>
                  <h3 className="mt-3 text-xl md:text-2xl" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-7xl border-t border-[#D9DCD3] pt-8">
            <div className="grid gap-x-8 md:grid-cols-2">
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:hidden">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5B767B]">Internal factors</h3>
                  <span className="text-2xl font-light text-[#5B767B] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <ul className="mt-3 list-disc space-y-1 pl-5 leading-7 text-[#1F2A24]/75">
                  <li>Sebum excretion</li>
                  <li>Androgenic hormones</li>
                  <li>Genetic factors</li>
                  <li>Emotional factors</li>
                  <li>Diet</li>
                </ul>
              </details>
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:hidden">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5B767B]">External factors</h3>
                  <span className="text-2xl font-light text-[#5B767B] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <ul className="mt-3 list-disc space-y-1 pl-5 leading-7 text-[#1F2A24]/75">
                  <li>Occlusion of sebaceous gland pores</li>
                  <li>Cosmetic use</li>
                  <li>Cutibacterium acnes involvement (formerly Propionibacterium acnes)</li>
                </ul>
              </details>
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
                In TCM, acne is known as Fei Feng Fen Ci, or “Lung-Wind powder
                prickles.” TCM assessment may consider patterns such as Heat,
                Blood Heat, Qi and Blood Stagnation, and Blood Stasis with
                Phlegm.
              </p>
              <p className="mt-5 border-l-2 border-[#5B767B] pl-4 text-sm leading-6 text-[#1F2A24]/70">
                Pattern identification is individualized and considers the full
                health picture; these terms are not a self-diagnosis.
              </p>
            </div>
            <div className="border-t border-[#BAC8C1]">
              {tcmPatterns.map(([title, summary]) => (
                <article key={title} className="border-b border-[#BAC8C1] py-5 md:py-6">
                  <h3 className="text-2xl" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#1F2A24]/65">{summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="care" className="scroll-mt-8 px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <figure className="relative min-h-[300px] overflow-hidden bg-[#E8E9E3] md:min-h-[480px]">
              <Image
                src="/acne2.jpg"
                alt="Acne-affected skin"
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
                Treating the whole person, not just the skin.
              </h2>
              <p className="mt-5 leading-7 text-[#1F2A24]/75">
                Care is shaped around your presentation, health history, and
                individual goals. Depending on your needs, care may include:
              </p>
              <div className="mt-8">
                {[
                  ["01", "Acupuncture"],
                  ["02", "Chinese herbal medicine"],
                  ["03", "Lifestyle & nutrition"],
                ].map(([number, title]) => (
                  <div key={title} className="grid grid-cols-[2.5rem_1fr] items-center gap-3 border-t border-[#D9DCD3] py-5">
                    <span className="text-xs text-[#5B767B]">{number}</span>
                    <h3 className="text-xl" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
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
                Acne presentations
              </p>
              <h2
                className="mt-4 text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Different forms of acne.
              </h2>
              <p className="mt-4 max-w-md leading-7 text-[#1F2A24]/70">
                Acne has several forms, each with its own features and
                considerations. Select a type to read a brief description.
              </p>
            </div>
            <div className="border-t border-[#CCD0C7]">
              {presentations.map(([title, text], index) => (
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
              <h2
                className="mt-4 text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Frequently asked questions
              </h2>
            </div>
            <div className="divide-y divide-[#C9D0C8] border-y border-[#C9D0C8]">
              {[
                ["How long does acne treatment take?", "The timeline for acne treatment depends on the severity, duration, and overall presentation of the condition. Some patients report changes over several weeks of consistent care."],
                ["Do I need to use acupuncture and Chinese herbs together?", "Not necessarily. Acupuncture and Chinese herbal medicine may be used together or individually, depending on your needs and health history. Your practitioner can discuss the options with you."],
                ["Can I use acupuncture and Chinese herbs alongside my current medical treatment?", "Acupuncture and Chinese herbal medicine may be used alongside conventional dermatological care. Share your medications and supplements with your practitioner so potential interactions can be reviewed. Continue to follow your medical provider's advice."],
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
              <h2
                className="mt-4 text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
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
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#F1FFE0] px-6 py-3.5 text-sm font-medium text-[#1F2A24] transition hover:bg-[#E2F5C8]"
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
