import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SkinInfectionsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#EFEBFA] text-[#1F2A24]">
        <section className="bg-[#62757B] px-6 py-24 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/80">
              TCM Dermatology
            </p>

            <h1
              className="text-5xl leading-tight md:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Skin Infections &amp; Chinese Medicine
            </h1>
          </div>
        </section>

        <section className="px-6 py-32">
          <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-12 text-center shadow-lg">
            <h2
              className="text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Page Coming Soon
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#44524D]">
              I'm currently developing a comprehensive guide on skin infections
              and Traditional Chinese Medicine. Check back soon for more
              information.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}