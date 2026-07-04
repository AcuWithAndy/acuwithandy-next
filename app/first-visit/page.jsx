import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BOOKING_URL } from "@/lib/booking";

export default function FirstVisitPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FCFCF8] text-[#1F2A24]">
        <section className="bg-[#62757B] px-6 py-24 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <h1
              className="text-5xl leading-tight md:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What to Expect at Your First Acupuncture Visit
            </h1>
          </div>
        </section>

        <article className="px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8 text-xl leading-9 text-[#1F2A24]/85">
              <p>
                If you’ve never had acupuncture before, it’s completely normal to
                feel curious (and maybe a little unsure) about what to expect. In
                my NYC acupuncture practice, your first visit is designed to be
                thorough, relaxing, and customized entirely to you; not just your
                symptoms, but your whole system.
              </p>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
              <p>
                Here’s a breakdown of what your first session typically looks
                like:
              </p>
            </div>

            <div className="py-24">
              <div className="overflow-hidden rounded-[2rem] shadow-xl">
                <Image
                  src="/acupuncture.jpg"
                  alt="Acupuncture treatment room setup in NYC clinic"
                  width={1200}
                  height={700}
                  className="block h-auto w-full object-cover"
                />
              </div>
            </div>

            <section className="py-12">
              <h2
                className="text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                A Comprehensive Intake
              </h2>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
              <div className="mt-8 space-y-8 text-lg leading-8 text-[#1F2A24]/80">
                <p>
                  Your first acupuncture visit begins with an in-depth
                  conversation. In Chinese medicine, everything is connected, so
                  we look beyond just your chief complaint to understand why it’s
                  happening.
                </p>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
                <p>We’ll go over:</p>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Your health history",
                    "Your primary concerns and goals",
                    "Sleep quality",
                    "Temperature and sweating patterns",
                    "Appetite and thirst",
                    "Digestion",
                    "Stool and urination patterns",
                    "Menstrual health (if applicable)",
                    "Energy levels",
                    "Pain or discomfort in the body",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-[#EFEBFA] px-5 py-3 text-base text-[#1F2A24]/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
                <p>
                  This helps identify patterns of imbalance so your treatment is
                  precise and effective.
                </p>
              </div>
            </section>

            <section className="py-20">
              <h2
                className="text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Physical Assessment
              </h2>

              <div className="mt-8 space-y-8 text-lg leading-8 text-[#1F2A24]/80">
                <h3
                  className="text-2xl leading-tight text-[#1F2A24] md:text-3xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Pulse Diagnosis: Reading the Body Through the Wrist
                </h3>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
                <p>
                  Next, I’ll check your pulse at different positions on both
                  wrists. Each position corresponds to different organ systems
                  and meridians.
                </p>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
                <p>
                  This isn’t just about heart rate. It gives insight into things
                  like circulation, stress, and internal organ function from a
                  Chinese medicine perspective.
                </p>

                <h3
                  className="pt-10 text-2xl leading-tight text-[#1F2A24] md:text-3xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Tongue Diagnosis: A Window Into Internal Health
                </h3>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
                <p>
                  Your tongue provides a visual snapshot of what’s happening
                  inside your body.
                </p>

                <p>We look at:</p>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
                <div className="flex flex-wrap gap-3">
                  {["Color", "Shape", "Coating"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#EFEBFA] px-5 py-2.5 text-base font-medium text-[#1F2A24]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
                <p>
                  These clues help confirm patterns related to digestion, fluid
                  balance, heat, cold, and more.
                </p>
              </div>
            </section>

            <div className="py-18">
              <div className="overflow-hidden rounded-[2rem] shadow-xl">
                <Image
                  src="/needle.jpg"
                  alt="Acupuncture needles inserted during first treatment session"
                  width={1200}
                  height={700}
                  className="block h-auto w-full object-cover"
                />
              </div>
            </div>

            <section className="py-20">
              <h2
                className="text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Acupuncture Treatment
              </h2>

              <div className="mt-8 space-y-8 text-lg leading-8 text-[#1F2A24]/80">
                <h3
                  className="text-2xl leading-tight text-[#1F2A24] md:text-3xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  What It Actually Feels Like
                </h3>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
                <p>
                  This is the part most people are curious about, and often
                  pleasantly surprised by. The needles are extremely thin—about 20 can fit inside a
                  standard hypodermic needle. Sensation is usually minimal, often described as a dull ache,
                  heaviness, or gentle tingling. Many patients fall asleep during treatment. Once the needles are in place, you’ll rest while your body
                  responds.
                </p>


                <h3
                  className="pt-10 text-2xl leading-tight text-[#1F2A24] md:text-3xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Safety & Side Effects
                </h3>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
                <p>
                  Acupuncture is very safe when performed by a licensed
                  practitioner. Side effects are minimal and may include:
                </p>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
                <ul className="space-y-3">
                  <li>• Slight bruising</li>
                  <li>• Mild soreness</li>
                  <li>• Temporary fatigue</li>
                  <li>• Occasional minor bleeding at the needle site</li>
                </ul>
              </div>
            </section>

            <section className="py-18">
              <h2
                className="text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Herbal Medicine
              </h2>

              <div className="mt-8 space-y-8 text-lg leading-8 text-[#1F2A24]/80">
                <p>
                  Depending on your needs, herbal medicine may be recommended
                  alongside acupuncture.
                </p>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
                <p>
                  Formulas are customized and typically include 2–15+ herbs,
                  designed to address internal imbalances. These are often
                  prepared as water decoctions and taken over time to support
                  deeper healing.
                </p>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
                <p>
                  Herbs can be conveniently ordered through trusted pharmacies
                  like Kamwo, ensuring quality and consistency.
                </p>
              </div>

              <div className="py-24">
                <div className="overflow-hidden rounded-[2rem] shadow-xl">
                  <Image
                    src="/herbal-formula.jpg"
                    alt="Herbal formulas supporting treatment in Chinese medicine"
                    width={1200}
                    height={700}
                    className="block h-auto w-full object-cover"
                  />
                </div>
              </div>
            </section>

            <section className="py-18">
              <h2
                className="text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Additional Therapies
              </h2>

              <div className="mt-8 space-y-8 text-lg leading-8 text-[#1F2A24]/80">
                <p>
                  Your treatment may also include complementary techniques such
                  as:
                </p>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
                <ul className="space-y-4">
                  <li>
                    • Cupping – to relieve muscle tension and improve
                    circulation
                  </li>
                  <li>• Gua sha – to move stagnation and support recovery</li>
                  <li>
                    • Manual therapy/massage – to further promote the flow of qi
                    and blood
                  </li>
                </ul>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
                <p>
                  These are chosen based on your specific presentation and
                  comfort level.
                </p>
              </div>

              <div className="py-24">
                <div className="overflow-hidden rounded-[2rem] shadow-xl">
                  <Image
                    src="/cupping.jpg"
                    alt="Traditional cupping therapy to improve circulation and relieve tension"
                    width={1200}
                    height={700}
                    className="block h-auto w-full object-cover"
                  />
                </div>
              </div>
            </section>

            <section className="py-18">
              <h2
                className="text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                What Happens After Your Visit
              </h2>

              <div className="mt-8 space-y-8 text-lg leading-8 text-[#1F2A24]/80">
                <p>The treatment doesn’t stop when you leave. Acupuncture works by stimulating your body’s natural healing
                  response, and that process continues as your system integrates
                  the treatment throughout the day. Some patients feel immediate relief, while others notice
                  gradual improvements over time.</p>

              </div>
            </section>

            <section className="py-20">
              <h2
                className="text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Your Treatment Plan
              </h2>

              <div className="mt-8 space-y-8 text-lg leading-8 text-[#1F2A24]/80">
                <p>
                  For most new patients, treatments are recommended once per
                  week initially. As your symptoms improve and stabilize, visits
                  can be spaced out.
                </p>
<div className="mt-8 space-y-6 text-lg leading-8 text-[#1F2A24]/80"></div>
                <p>
                  The goal is not just short-term relief—but helping your body
                  return to a state where it can maintain balance on its own.
                </p>
              </div>
            </section>

            {/* Ready to Get Started */}
<section className="bg-[#FCFCF8] px-6 py-20">
  <div className="mx-auto max-w-4xl text-center">
    <h2
      className="text-4xl leading-tight text-[#1F2A24] md:text-5xl"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      Ready to Get Started?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#1F2A24]/80">
      Schedule your first acupuncture session in NYC today and take the first
      step toward improved health and overall well-being.
    </p>

    <a
  href={BOOKING_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-12 inline-block rounded-full bg-[#62757B] px-8 py-4 text-white transition duration-300 hover:bg-[#4B5C52]"
>
  Book Appointment
</a>
  </div>
</section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}