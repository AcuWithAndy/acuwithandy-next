import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutMePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#EFEBFA] text-[#1F2A24]">
        <section className="px-8 py-20 md:py-32">
          <div className="mx-auto grid max-w-7xl items-start gap-16 md:grid-cols-[48%_52%] md:gap-20">
            {/* IMAGE */}
            <div className="order-1 flex justify-center md:order-1 md:pt-20">
              <div className="relative w-full max-w-[540px] md:max-w-[660px] md:-translate-y-16">
                <div className="overflow-hidden rounded-t-[340px] rounded-b-[32px] shadow-2xl">
                  <Image
                    src="/headshot.jpg.png"
                    alt="Andy Boehm, Licensed Acupuncturist"
                    width={950}
                    height={1300}
                    priority
                    className="h-auto w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div className="order-2 md:order-2">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#62757B]">
                About Me
              </p>

              <h1 className="text-6xl leading-tight md:text-7xl">
                Andy Boehm
              </h1>

              <p className="mt-4 text-xl text-[#62757B]">
                Licensed Acupuncturist + Chinese Herbalist
              </p>

              <div className="mt-10 max-w-lg">
                <div className="space-y-6 text-lg leading-8 text-[#4B5C52]">
                  <p>
                    I am a licensed acupuncturist and clinical herbalist trained
                    in both Eastern and Western applications of herbal
                    supplements, with over four years of focused study in
                    Chinese medicine and herbal formulation.
                  </p>

                  <p>
                    My training included more than 2,500 hours of coursework and
                    supervised clinical practice, where I worked directly with
                    patients to develop individualized acupuncture treatments
                    and personalized Chinese herbal formulas tailored to their
                    unique health goals.
                  </p>
                </div>

                <div className="my-12 h-px w-20 bg-[#62757B]/25" />

                <div>
                  <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#62757B]">
                    Clinical Specialties
                  </p>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[#1F2A24]">
                    <p>Musculoskeletal Pain</p>
                    <p>Digestive Health</p>
                    <p>TCM Dermatology</p>
                    <p>Stress Support</p>
                  </div>
                </div>

                <div className="my-12 h-px w-20 bg-[#62757B]/25" />

              </div>

              <a
                href="/contact"
                className="mt-12 inline-block rounded-full bg-[#62757B] px-8 py-4 text-white transition duration-300 hover:bg-[#4B5C52]"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}