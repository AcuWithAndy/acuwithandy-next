import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BOOKING_URL } from "@/lib/booking";

export const metadata = {
  title: "Acupuncture & Chinese Herbal Medicine NYC",
  description:
    "Acupuncture, electroacupuncture, Chinese herbal medicine, in-home care, and personalized Traditional Chinese Medicine services in Midtown Manhattan, NYC.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Acupuncture & Chinese Herbal Medicine NYC | Andy Boehm, LAc",
    description:
      "Explore acupuncture, Chinese herbal medicine, and personalized Traditional Chinese Medicine care in Midtown Manhattan and throughout NYC.",
    url: "https://www.acuwithandy.com/services",
    type: "website",
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Herbal Consultation",
      price: "$90",
      image: "/herbal-formula.jpg",
      imageAlt: "Customized Chinese herbal formula",
      description:
        "A personalized 30-minute consultation, available via telemedicine or in person.",
      includes: [
        "Detailed assessment and pattern diagnosis",
        "Customized herbal formula prescription",
      ],
      note: "Herbal formulas are billed separately and fulfilled through Kamwo Herbal Pharmacy in New York City. Prescriptions may be picked up, messenger-delivered within Manhattan, or shipped.",
      button: true,
    },
    {
      title: "Acupuncture + Herbal Care",
      price: "Starts at $150",
      image: "/patient.jpg",
      imageAlt: "Patient receiving acupuncture treatment",
      description:
        "A 60-minute, in-person session integrating acupuncture with herbal medicine.",
      includes: [
        "Detailed assessment and pattern diagnosis",
        "60-minute acupuncture treatment",
        "Customized herbal formula prescription",
      ],
      note: "Herbal formulas are billed separately and fulfilled through Kamwo Herbal Pharmacy in New York City. Prescriptions may be picked up, messenger-delivered within Manhattan, or shipped.",
      button: true,
    },
    {
      title: "Concierge In-Home Care",
      price: "Contact for Pricing / Packages",
      image: "/nyc.jpg",
      imageAlt: "Acupuncture house call in New York City",
      description:
        "A private, in-home acupuncture session with herbal consultation, available in NYC only.",
      includes: [
        "Detailed assessment and pattern diagnosis",
        "60-minute acupuncture treatment",
        "Customized herbal formula prescription",
      ],
      note: "Herbal formulas are billed separately and fulfilled through Kamwo Herbal Pharmacy in New York City. Prescriptions may be picked up, messenger-delivered within Manhattan, or shipped. In-home appointments require client-provided round-trip transportation via Uber or a similar service.",
      button: false,
    },
    {
      title: "Travel + Special Event",
      price: "Contact for Pricing",
      image: "/spa.jpg",
      imageAlt: "Wellness retreat treatment room",
      description:
        "Acupuncture services available for hotels, retreats, and private residences outside of New York City.",
      includes: [
        "Extended stays",
        "Wellness retreats",
        "Ongoing care while traveling",
      ],
      note: "Each experience is customized to the setting and individual needs. Please inquire for availability and custom rates.",
      button: false,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#EFEBFA] text-[#1F2A24]">
        <section className="bg-[#5B767B] px-6 pt-24 pb-20 text-center">
          <div className="mx-auto max-w-4xl">
            <h1
              className="text-5xl text-[#FCFCF8] md:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Your Care Options
            </h1>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-[2rem] border border-[#E6E2D8] bg-[#FCFCF8] p-8 shadow-sm md:p-10"
              >
                <div className="mb-6">
                  <h2
                    className="text-3xl leading-tight md:text-4xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {service.title}
                  </h2>

                  <p className="mt-3 inline-block rounded-full bg-[#F1FFE0] px-4 py-2 text-sm font-medium text-[#1F2A24]">
                    {service.price}
                  </p>

                  {service.image && (
                    <div className="mt-6 overflow-hidden rounded-3xl">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={700}
                        height={450}
                        className={`h-56 w-full rounded-3xl border border-[#E6E2D8] shadow-sm ${
                          service.title === "Acupuncture + Herbal Care"
                            ? "object-cover object-[center_15%]"
                            : service.title === "Concierge In-Home Care"
                            ? "object-cover object-[center_95%]"
                            : service.title === "Travel + Special Event"
                            ? "object-cover object-[center_99%]"
                            : "object-cover object-center"
                        }`}
                      />
                    </div>
                  )}
                </div>

                <p className="text-base leading-relaxed text-[#1F2A24]/80">
                  {service.description}
                </p>

                <div className="mt-8">
                  <p className="mb-4 font-semibold">Includes:</p>

                  <ul className="space-y-3">
                    {service.includes.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed">
                        <span className="mt-1 text-[#5B767B]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.button && (
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[#F1FFE0] px-8 py-4 font-medium text-[#1F2A24] transition hover:bg-[#E2F5C8]"
                  >
                    Book Appointment
                  </a>
                )}

                <p className="mt-8 border-t border-[#E6E2D8] pt-6 text-sm leading-relaxed text-[#1F2A24]/70">
                  {service.note}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}