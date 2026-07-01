import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "General FAQ",
  description:
    "Frequently asked questions about acupuncture and patient care with Andy Boehm, LAc.",
};

export default function GeneralFAQPage() {
  const faqs = [
    {
      q: "What conditions can acupuncture help treat?",
      a: (
        <p>
          At Andy Boehm, LAc, treatments specialize in TCM dermatology, pain
          and injury management, mental health support, stress management, and
          digestive disorders. Acupuncture and Chinese herbal medicine are
          individualized based on each patient's presentation and health goals.
        </p>
      ),
    },
    {
      q: "Does acupuncture hurt?",
      a: (
        <p>
          Acupuncture needles are extremely thin—approximately 20 acupuncture
          needles can fit inside a standard hypodermic needle. Most patients
          report little to no pain and may instead experience sensations such
          as heaviness, dullness, warmth, tingling, or a mild achy feeling
          during treatment.
        </p>
      ),
    },
    {
      q: "Is acupuncture safe?",
      a: (
        <p>
          Yes. Acupuncture is considered very safe when performed by a licensed
          practitioner. In some cases, minor bruising or slight bleeding may
          occur at the needle site, but these effects are typically minimal and
          temporary.
        </p>
      ),
    },
    {
      q: "How often should I get acupuncture?",
      a: (
        <p>
          Treatment frequency depends on the condition being treated. Acute
          injuries may improve within only a few sessions, while chronic
          conditions generally respond best with consistent care. For chronic
          concerns, a typical recommendation is one to two treatments per week
          for six to eight weeks.
        </p>
      ),
    },
    {
      q: "How long are acupuncture sessions?",
      a: (
        <p>
          Acupuncture appointments are approximately one hour long. Only one
          patient is scheduled per hour to provide individualized, focused
          care.
        </p>
      ),
    },
    {
      q: "What should I wear to an acupuncture appointment?",
      a: (
        <p>
          Comfortable clothing is recommended, including shorts or loose-fitting
          pants that can easily be rolled up for access to acupuncture points.
        </p>
      ),
    },
    {
      q: "Is acupuncture covered by insurance?",
      a: (
        <>
          <p>
            In many cases, yes. Insurance verification is required prior to
            treatment.
          </p>

          <p className="mt-6">
            To verify your benefits, please contact:
          </p>

          <div className="mt-6 space-y-2">
            <p>
              <strong>Email:</strong> andy@acuwithandy.com
            </p>
            <p>
              <strong>Text:</strong> (347) 789-2785
            </p>
          </div>
        </>
      ),
    },
    {
      q: "How do I book an appointment?",
      a: (
        <>
          <p>You can schedule an appointment by:</p>

          <ul className="mt-6 list-disc pl-8 space-y-3">
            <li>Emailing andy@acuwithandy.com</li>
            <li>Texting (347) 789-2785</li>
          </ul>
        </>
      ),
    },
    {
      q: "Where are you located in Manhattan?",
      a: (
        <p>
          Andy Boehm, LAc is located at 303 Fifth Avenue, conveniently near
          Herald Square and Koreatown (K-Town) in Midtown Manhattan.
        </p>
      ),
    },
    {
      q: "How do Telehealth appointments work?",
      a: (
        <>
          <p>
            Telehealth appointments are available for Chinese herbal medicine
            consultations only.
          </p>

          <p className="mt-6">
            Prescribed herbal formulas are available through:
          </p>

          <ul className="mt-6 list-disc pl-8 space-y-3">
            <li>Pickup</li>
            <li>Messenger delivery within Manhattan</li>
            <li>Shipping</li>
          </ul>

          <p className="mt-6">
            Delivery fees may apply depending on location and service type.
          </p>
        </>
      ),
    },
    {
      q: "How do In-Home Care appointments work?",
      a: (
        <p>
          In-home acupuncture appointments are performed in the patient's home.
          Patients are responsible for arranging round-trip transportation for
          the practitioner through Uber or an equivalent transportation
          service.
        </p>
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#FCFCF8] text-[#1F2A24]">
        <section className="mx-auto max-w-5xl px-6 py-32">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#62757B]">
            Frequently Asked Questions
          </p>

          <h1
            className="mb-24 text-5xl leading-tight text-[#4A4368] md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            General FAQ
          </h1>

          <div className="pt-20">
            {faqs.map((item, index) => (
              <div key={item.q}>
                <section className="pb-10">
                  <h2
                    className="mb-6 text-3xl leading-tight text-[#4A4368] md:text-4xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.q}
                  </h2>

                  <div className="text-lg leading-10 text-[#4B5C52]">
                    {item.a}
                  </div>
                </section>

                {index !== faqs.length - 1 && (
                  <div className="my-16 flex justify-center">
                    <div className="h-px w-48 bg-[#DDD8CF]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}