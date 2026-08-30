import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.acuwithandy.com"),

  title: {
    default: "Acupuncturist NYC | Chinese Herbal Medicine | Andy Boehm, LAc",
    template: "%s | Andy Boehm, LAc",
  },

  description:
    "Licensed acupuncturist in Midtown Manhattan offering acupuncture, electroacupuncture, Chinese herbal medicine, and TCM dermatology care for pain, stress, digestion, and whole-body wellness.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Acupuncturist NYC | Andy Boehm, LAc",
    description:
      "Acupuncture, Chinese herbal medicine, electroacupuncture, and TCM dermatology care in Midtown Manhattan.",
    url: "https://www.acuwithandy.com",
    siteName: "Acu With Andy",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Acupuncturist NYC | Andy Boehm, LAc",
    description:
      "Acupuncture, Chinese herbal medicine, electroacupuncture, and TCM dermatology care in Midtown Manhattan.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.acuwithandy.com/#business",
      name: "Andy Boehm, LAc - Acupuncture & Chinese Herbal Medicine",
      url: "https://www.acuwithandy.com",
      description:
        "Acupuncture, electroacupuncture, Chinese herbal medicine, and Traditional Chinese Medicine care in Midtown Manhattan.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "303 Fifth Avenue, Suite 1209",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10016",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "City",
        name: "New York City",
      },
      medicalSpecialty: [
        "Acupuncture",
        "Traditional Chinese Medicine",
        "Chinese Herbal Medicine",
      ],
      knowsAbout: [
        "Acupuncture",
        "Electroacupuncture",
        "Chinese herbal medicine",
        "Traditional Chinese Medicine",
        "Eczema",
        "Psoriasis",
        "Pain management",
        "Stress",
        "Digestive health",
      ],
      founder: {
        "@id": "https://www.acuwithandy.com/#andy-boehm",
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.acuwithandy.com/#andy-boehm",
      name: "Andy Boehm",
      honorificSuffix: "LAc",
      url: "https://www.acuwithandy.com/about-me",
      jobTitle: "Licensed Acupuncturist",
      worksFor: {
        "@id": "https://www.acuwithandy.com/#business",
      },
      knowsAbout: [
        "Acupuncture",
        "Electroacupuncture",
        "Traditional Chinese Medicine",
        "Chinese Herbal Medicine",
        "TCM Dermatology",
        "Pain Management",
        "Stress Management",
        "Digestive Health",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${poppins.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}
      </body>
    </html>
  );
}