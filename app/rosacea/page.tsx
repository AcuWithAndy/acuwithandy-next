import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BOOKING_URL } from "@/lib/booking";
import Image from "next/image";

export const metadata = {
  title: "Rosacea Acupuncture & Chinese Medicine NYC",
  description: "Rosacea acupuncture and Chinese herbal medicine in New York City.",
  alternates: { canonical: "/rosacea" },
};

const symptoms = [["01", "Facial flushing & lingering redness"], ["02", "Small, inflamed bumps"], ["03", "Visible blood vessels"], ["04", "Sore, watery, or irritated eyes"]];
const patterns = [["Heat", "Facial warmth, flushing, or redness that comes and goes."], ["Blood Heat", "Pronounced redness with inflamed bumps or recurring flare-ups."], ["Blood Stasis", "Long-standing discoloration or thickening of the skin."]];
const presentations = [
  ["Flushing & persistent redness", "Flushing may come and go at first, often across the cheeks and nose. Over time, redness can linger, and tiny widened blood vessels may become visible. These are called telangiectasias."],
  ["Papulopustular rosacea", "Small, inflamed bumps called papules and pus-filled bumps called pustules can appear on the cheeks, nose, forehead, or chin."],
  ["Skin thickening & swelling", "In some people, the skin on the nose gradually thickens and develops an uneven texture. This is called rhinophyma and is more common in men. Rarely, rosacea can also cause persistent swelling around the eyes or across the forehead."],
  ["Ocular rosacea", "Rosacea can affect the eyes and eyelids, causing soreness, watering, redness, or a gritty feeling. It may involve inflammation of the eyelids (blepharitis) or conjunctiva (conjunctivitis). In some cases, it can affect the cornea (keratitis). Seek prompt eye care if you develop eye pain, light sensitivity, or changes in vision."],
];

export default function RosaceaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FCFCF8] text-[#1F2A24]">
        <section className="px-6 py-14 md:py-24">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">TCM Dermatology · New York City</p>
              <h1 className="mt-6 text-5xl leading-[1.05] text-[#263B38] md:text-7xl" style={{ fontFamily: "var(--font-heading)" }}>Rosacea &amp; Chinese Medicine</h1>
              <p className="mt-6 max-w-xl text-2xl leading-snug text-[#5B767B]" style={{ fontFamily: "var(--font-heading)" }}>Understanding rosacea from a different perspective.</p>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#1F2A24]/75 md:text-lg">Individualized care for rosacea through acupuncture, Chinese herbal medicine, and guidance on everyday habits.</p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#5B767B] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#435F64]">Book an Appointment</a>
            </div>
            <figure className="relative min-h-[340px] overflow-hidden bg-[#E8E9E3] md:min-h-[520px]">
              <Image
                src="/rosacea3.jpg"
                alt="Portrait associated with rosacea"
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
            <a className="hover:underline" href="#symptoms">Symptoms</a><a className="hover:underline" href="#perspective">TCM perspective</a><a className="hover:underline" href="#care">Treatment approach</a><a className="hover:underline" href="#conditions">Types of rosacea</a><a className="hover:underline" href="#faq">FAQs</a>
          </div>
        </nav>

        <section id="symptoms" className="scroll-mt-8 px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">Living with rosacea</p>
              <h2 className="mt-4 max-w-md text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>Looking beyond the surface.</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[#1F2A24]/75">Rosacea is a chronic inflammatory skin condition that mainly affects the nose, cheeks, forehead, and chin. Flushing can come and go, and for some people, facial redness becomes more persistent. Small inflamed bumps, visible blood vessels, and eye irritation can also occur.</p>
            </div>
            <div className="grid grid-cols-2">
              {symptoms.map(([number, title]) => (
                <div key={title} className="border-t border-[#C9D0C8] py-5 pr-4 md:py-7 md:pr-8">
                  <span className="text-xs text-[#5B767B]">{number}</span>
                  <h3 className="mt-3 text-xl md:text-2xl" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-7xl border-t border-[#D9DCD3] pt-8">
            <div className="grid gap-x-8 md:grid-cols-2">
              <details className="group py-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:hidden"><h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5B767B]">Internal factors</h3><span className="text-2xl font-light text-[#5B767B] transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><ul className="mt-3 list-disc space-y-1 pl-5 leading-7 text-[#1F2A24]/75"><li>Emotional stress</li><li>Digestive dysfunction</li><li>Endocrine dysfunction</li></ul></details>
              <details className="group py-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:hidden"><h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5B767B]">External factors</h3><span className="text-2xl font-light text-[#5B767B] transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><ul className="mt-3 list-disc space-y-1 pl-5 leading-7 text-[#1F2A24]/75"><li>Sun exposure and heat</li><li>Alcohol and spicy foods</li><li>Hot drinks, including tea</li></ul></details>
            </div>
          </div>
        </section>

        <section id="perspective" className="scroll-mt-8 bg-[#E9EFEB] px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">Traditional Chinese Medicine</p><h2 className="mt-4 text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>Different patterns. Different presentations.</h2><p className="mt-5 leading-7 text-[#1F2A24]/75">In Traditional Chinese Medicine, rosacea is described as Jiu Zha Bi (“drinker’s nose”) or Bi Chi (“red nose”). TCM assessment may consider patterns such as Heat, Blood Heat, and Blood Stasis. Pattern identification is individualized and takes your skin symptoms and overall health history into account.</p><p className="mt-5 border-l-2 border-[#5B767B] pl-4 text-sm leading-6 text-[#1F2A24]/70">Pattern identification is individualized. These descriptions are not a self-diagnosis or a substitute for medical care.</p></div>
            <div className="border-t border-[#BAC8C1]">{patterns.map(([title, summary]) => (<article key={title} className="border-b border-[#BAC8C1] py-5 md:py-6"><h3 className="text-2xl" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3><p className="mt-1 text-sm leading-6 text-[#1F2A24]/65">{summary}</p></article>))}</div>
          </div>
        </section>

        <section id="care" className="scroll-mt-8 px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <figure className="relative min-h-[300px] overflow-hidden bg-[#E8E9E3] md:min-h-[480px]">
              <Image
                src="/rosacea2.jpg"
                alt="Rosacea care and treatment setting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </figure>
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">Individualized care</p><h2 className="mt-4 text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>Treating the whole person, not just the skin.</h2><p className="mt-5 leading-7 text-[#1F2A24]/75">Care is shaped around how your rosacea shows up, what tends to trigger your flares, and what you’d like help with. Depending on your needs, care may include:</p><div className="mt-8">{[["01", "Acupuncture"], ["02", "Chinese herbal medicine"], ["03", "Lifestyle & nutrition"]].map(([number, title]) => (<div key={title} className="grid grid-cols-[2.5rem_1fr] items-center gap-3 border-t border-[#D9DCD3] py-5"><span className="text-xs text-[#5B767B]">{number}</span><h3 className="text-xl" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3></div>))}</div></div>
          </div>
        </section>

        <section id="conditions" className="scroll-mt-8 bg-[#F0F1EA] px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">Rosacea presentations</p><h2 className="mt-4 text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>Different forms of rosacea.</h2><p className="mt-4 max-w-md leading-7 text-[#1F2A24]/70">Rosacea can show up in several ways, and these features can overlap. Select a presentation to learn more.</p><figure className="relative mt-8 min-h-[300px] overflow-hidden bg-[#E8E9E3]"><Image src="/rosacea.jpg" alt="Rosacea-affected skin" fill sizes="(max-width: 1024px) 100vw, 35vw" className="object-cover object-center" /></figure></div>
            <div className="border-t border-[#CCD0C7]">{presentations.map(([title, text], index) => (<details key={title} className="group border-b border-[#CCD0C7] py-6 md:py-8"><summary className="grid cursor-pointer list-none grid-cols-[2.5rem_1fr_auto] items-center gap-3 marker:hidden"><span className="pt-1 text-xs text-[#5B767B]">0{index + 1}</span><h3 className="text-2xl" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3><span className="shrink-0 text-2xl font-light text-[#5B767B] transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="mt-4 pl-[2.5rem] text-base leading-7 text-[#1F2A24]/75 md:pl-12">{text}</p></details>))}</div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-8 px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B767B]">FAQ</p><h2 className="mt-4 text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>Frequently asked questions</h2></div>
            <div className="divide-y divide-[#C9D0C8] border-y border-[#C9D0C8]">
              {[["How long does rosacea treatment take?", "The timeline varies with your symptoms, how long you have had them, and your care plan. At your first visit, we will discuss your goals and how to assess changes over time."], ["Do I need to use acupuncture and Chinese herbs together?", "You can use either approach on its own or combine them, depending on your preferences, health history, and care goals."], ["Can I use acupuncture and Chinese herbs alongside my current medical treatment?", "We can discuss how Chinese medicine might fit alongside your dermatology care. Bring a list of your medications and supplements so we can review potential interactions before starting herbs."]].map(([question, answer]) => (<details key={question} className="group py-5 md:py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left marker:hidden"><h3 className="text-xl leading-snug md:text-2xl" style={{ fontFamily: "var(--font-heading)" }}>{question}</h3><span className="shrink-0 text-2xl font-light text-[#5B767B] transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pt-4 text-sm leading-7 text-[#1F2A24]/75 md:text-base">{answer}</p></details>))}
            </div>
          </div>
        </section>

        <section className="bg-[#5B767B] px-6 py-16 text-[#FCFCF8] md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Andy Boehm, LAc</p><h2 className="mt-4 text-4xl leading-tight md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>Begin a conversation.</h2><p className="mt-4 max-w-2xl leading-7 text-white/80">Tell me how rosacea shows up for you, and we can talk through whether individualized Chinese medicine care fits your goals.</p></div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#F1FFE0] px-6 py-3.5 text-sm font-medium text-[#1F2A24] transition hover:bg-[#E2F5C8]">Book an Appointment</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}