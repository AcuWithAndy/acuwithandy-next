export default function Footer() {
  return (
    <footer className="bg-[#F1FFE0] text-[#1F2A24]">
      <div className="mx-auto max-w-6xl px-8 py-16">

        <div className="grid gap-8 text-center md:grid-cols-4">
          <div>
  <h3 className="mb-6 text-xs uppercase tracking-[0.3em] text-[#62757B]">
    Hours
  </h3>

  <div className="space-y-2 text-sm leading-6 text-[#4B5C52]">
    <p>
      <span className="font-medium text-[#1F2A24]">Mon:</span> 6:30 AM – 4:00 PM
    </p>

    <p>
      <span className="font-medium text-[#1F2A24]">Tue:</span> 6:30 AM – 4:00 PM
    </p>

    <p>
      <span className="font-medium text-[#1F2A24]">Wed:</span> 6:30 AM – 2:00 PM
    </p>

    <p>
      <span className="font-medium text-[#1F2A24]">Fri:</span> 6:30 AM – 11:30 AM
    </p>

    <p className="mt-4 text-xs italic text-[#62757B]">
      Telehealth &amp; In-Home Care ONLY Tuesday and Friday.
    </p>
  </div>
</div>

          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[0.3em] text-[#62757B]">
              Location
            </h3>

            <p className="text-sm leading-7 text-[#4B5C52]">
              303 Fifth Avenue
              <br />
              Suite 1209
              <br />
              New York, NY 10016
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[0.3em] text-[#62757B]">
              Contact
            </h3>

            <div className="space-y-3 text-sm">
              <a
                href="tel:3477892785"
                className="block text-[#4B5C52] transition hover:text-[#1F2A24]"
              >
                (347) 789-2785
              </a>

              <a
                href="mailto:AcuWithAndy@gmail.com"
                className="block text-[#4B5C52] transition hover:text-[#1F2A24]"
              >
                Andy@AcuWithAndy.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[0.3em] text-[#62757B]">
              Information
            </h3>

            <div className="space-y-3 text-sm">
              <a
                href="/terms"
                className="block text-[#4B5C52] transition hover:text-[#1F2A24]"
              >
                Terms &amp; Conditions
              </a>

              <a
                href="/privacy"
                className="block text-[#4B5C52] transition hover:text-[#1F2A24]"
              >
                Privacy Policy
              </a>

              <a
                href="/notice-of-privacy-practices"
                className="block text-[#4B5C52] transition hover:text-[#1F2A24]"
              >
                Notice of Privacy Practices
              </a>
            </div>
          </div>
        </div>

        <div className="my-12 h-px bg-[#D7E7C7]" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-[#62757B] md:flex-row">
  <p>© 2026 Andy Boehm, LAc. All rights reserved.</p>

  <p>
    Acupuncture • Chinese Herbal Medicine • TCM Dermatology
  </p>
</div>
      </div>
    </footer>
  );
}