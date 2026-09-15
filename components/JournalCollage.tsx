import Image from "next/image";

export default function JournalCollage() {
  return <div className="journal-collage" aria-label="Nourishment, nature, and Chinese herbs">
    <div className="journal-tile journal-food"><Image src="/images/journal/nourishment.webp" alt="A bowl with chicken, egg, ginger, and fresh greens." fill sizes="(max-width: 800px) 44vw, 260px" priority /></div>
    <div className="journal-tile journal-flower"><Image src="/images/journal/flower.webp" alt="Purple and white passionflower among green leaves." fill sizes="(max-width: 800px) 44vw, 260px" priority /></div>
    <div className="journal-tile journal-herbs"><Image src="/images/journal/herbal-preparations.webp" alt="Chinese herbal preparations with dried roots, seeds, and red fruits arranged on sheets of paper." fill sizes="(max-width: 800px) 44vw, 260px" priority /></div>
  </div>;
}
