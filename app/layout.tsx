import BackToTop from "@/components/BackToTop";
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
  title: "Acu With Andy | Andy Boehm, LAc",
  description:
    "Acupuncture and Chinese herbal medicine in NYC for TCM dermatology, pain, stress, digestion, and whole-body wellness.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${poppins.variable}`}>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}