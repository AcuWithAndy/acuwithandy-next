import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy | Acu With Andy",
  description: "Privacy Policy for Andy Boehm, LAc.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FCFCF8] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-5xl font-serif text-[#4A4368]">
            Privacy Policy
          </h1>

          <p className="mb-10 text-[#6B6B6B]">
            <strong>Effective Date:</strong> March 24, 2026
            <br />
            <strong>Business Name:</strong> Andy Boehm, LAc
          </p>

          <div className="space-y-10 text-[#2E2E2E] leading-8">

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#4A4368]">
                1. Introduction
              </h2>
              <p>
                Your privacy is important to us. This Privacy Policy explains
                how we collect, use, and protect your information when you visit
                our website or communicate with our practice.
              </p>
              <p className="mt-4">
                By using this website, you agree to the terms outlined below.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#4A4368]">
                2. Information We Collect
              </h2>

              <h3 className="mt-6 text-xl font-semibold">
                Personal Information You Provide
              </h3>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>
                  Any information you submit through contact forms or
                  appointment requests
                </li>
              </ul>

              <h3 className="mt-8 text-xl font-semibold">
                Health Information (if voluntarily provided)
              </h3>

              <p className="mt-4">
                If you choose to share health-related information through forms
                or messages, it will be handled with care and confidentiality.
                However, submitting information through this website does not
                establish a provider–patient relationship.
              </p>

              <h3 className="mt-8 text-xl font-semibold">
                Automatically Collected Information
              </h3>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Pages visited</li>
                <li>
                  General usage data (via cookies or analytics tools)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#4A4368]">
                3. How We Use Your Information
              </h2>

              <p>We use your information to:</p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Respond to inquiries and appointment requests</li>
                <li>Communicate with you about services</li>
                <li>Improve our website and user experience</li>
                <li>Maintain internal records</li>
              </ul>

              <p className="mt-6">
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#4A4368]">
                4. Cookies and Analytics
              </h2>

              <p>
                This website may use cookies or similar technologies to enhance
                your browsing experience and collect general usage data.
              </p>

              <p className="mt-4">
                You can choose to disable cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#4A4368]">
                5. Data Security
              </h2>

              <p>
                We take reasonable measures to protect your personal
                information. However, no method of transmission over the
                internet is 100% secure.
              </p>

              <p className="mt-4">
                Please avoid submitting highly sensitive personal or medical
                information through general website forms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#4A4368]">
                6. Third-Party Links
              </h2>

              <p>
                This website may include links to third-party platforms (such as
                social media). We are not responsible for the privacy practices
                of those websites.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#4A4368]">
                7. Your Rights
              </h2>

              <p>You may request to:</p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Access the personal information we have about you</li>
                <li>Correct or update your information</li>
                <li>Request deletion of your information</li>
              </ul>

              <p className="mt-6">
                To make a request, please contact us using the information
                below.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#4A4368]">
                8. Contact Information
              </h2>

              <div className="rounded-2xl border border-[#D8D4CB] bg-white p-6 shadow-sm">
                <p className="font-semibold">Andy Boehm, LAc</p>
                <p>andy@acuwithandy.com</p>
                <p>(347) 789-2785</p>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#4A4368]">
                9. Changes to This Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Updates
                will be posted on this page with a revised effective date.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#4A4368]">
                10. Disclaimer
              </h2>

              <p>
                Information submitted through this website is for general
                communication purposes only and does not establish a
                practitioner–patient relationship. Clinical care is only
                established following a formal intake and consultation.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}