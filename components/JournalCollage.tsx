import Image from "next/image";

export default function JournalCollage() {
  return <div className="journal-collage" aria-label="Nourishment, nature, and Chinese herbs">
    <div className="journal-tile journal-food"><Image src="/images/journal/nourishment.webp" alt="A bowl with chicken, egg, ginger, and fresh greens." fill sizes="(max-width: 800px) 44vw, 260px" priority /></div>
    <div className="journal-tile journal-flower"><Image src="/images/journal/flower.webp" alt="Purple and white passionflower among green leaves." fill sizes="(max-width: 800px) 44vw, 260px" priority /></div>
    <div className="journal-tile journal-herbs"><Image src="/images/journal/herbal-formula.webp" alt="Dried roots, red fruits, and other Chinese herbs arranged on paper." fill sizes="(max-width: 800px) 44vw, 260px" priority /></div>
  </div>;
}
