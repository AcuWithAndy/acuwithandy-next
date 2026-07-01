import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Herbal Medicine FAQ",
  description:
    "Frequently asked questions about Chinese herbal medicine with Andy Boehm, LAc.",
};

export default function HerbalMedicineFAQPage() {
  const faqs = [
    {
      q: "What is Chinese herbal medicine?",
      a: (
        <p>
          Chinese herbal medicine is a traditional form of medicine that uses
          customized herbal formulas to support the body holistically. Formulas
          typically contain between 2–15 herbs that work synergistically
          together based on the patient's individual presentation, symptoms,
          and constitution. Herbs are commonly prepared as concentrated teas
          or decoctions and are often taken multiple times per day as
          prescribed.
        </p>
      ),
    },
    {
      q: "Are Chinese herbs safe?",
      a: (
        <p>
          Yes. Chinese herbs are generally very safe when prescribed by a
          licensed acupuncturist and herbal medicine practitioner and sourced
          from reputable suppliers such as Kamwo Herbal Pharmacy. Imported
          Chinese herbs undergo strict testing for contaminants including heavy
          metals and pesticides before entering the United States. During
          treatment, herbal prescriptions are customized while taking into
          account your health history, medications, supplements, and
          constitution to support safe use.
        </p>
      ),
    },
    {
      q: "Can Chinese herbs be taken with medications?",
      a: (
        <p>
          In many cases, yes. It is important to share all medications,
          supplements, and health conditions during your visit so herbal
          formulas can be prescribed safely and appropriately. A common
          guideline is to take herbal formulas approximately one hour before
          or two hours after medications or supplements unless otherwise
          directed.
        </p>
      ),
    },
    {
      q: "Do I need herbs and acupuncture together?",
      a: (
        <p>
          Acupuncture and Chinese herbal medicine can each be effective
          independently, but when used together, results are often quicker,
          more comprehensive, and longer lasting. Acupuncture helps regulate
          the body and nervous system while herbal medicine provides ongoing
          support between treatments.
        </p>
      ),
    },
    {
      q: "What conditions are commonly treated with Chinese herbal medicine?",
      a: (
        <>
          <p>
            At Andy Boehm, LAc, Chinese herbal medicine is commonly used to
            support:
          </p>

          <ul className="mt-6 list-disc pl-8 space-y-3">
            <li>TCM dermatology and skin conditions</li>
            <li>Pain and injury management</li>
            <li>Women's health</li>
            <li>Stress and mental health support</li>
            <li>Digestive health</li>
          </ul>

          <p className="mt-6">
            Chinese herbal medicine is highly individualized, and formulas are
            selected based on pattern differentiation rather than solely on a
            Western medical diagnosis.
          </p>
        </>
      ),
    },
    {
      q: "What do Chinese herbs taste like?",
      a: (
        <p>
          Chinese herbs are often assumed to taste unpleasant, but this varies
          greatly depending on the formula. Some formulas may taste earthy,
          bitter, sweet, or mild. There are also multiple delivery methods
          available including powders, capsules, tinctures, granules, and
          decoctions which can make herbs easier to take depending on patient
          preference.
        </p>
      ),
    },
    {
      q: "Are herbal formulas customized?",
      a: (
        <p>
          Yes. All herbal formulas are customized to the individual patient.
          In Traditional Chinese Medicine (TCM), there is not always a
          one-to-one relationship between a Western diagnosis and a specific
          herbal formula. Instead, formulas are prescribed based on the
          patient's overall constitution, symptoms, presentation, and
          underlying TCM pattern.
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
            Herbal Medicine
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