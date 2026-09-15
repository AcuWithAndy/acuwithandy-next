import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Blog editor", robots: { index: false, follow: false }, alternates: { canonical: "/admin" } };
export default function Admin() {
  const configured = process.env.SANITY_STUDIO_URL || "https://acuwithandy-blog.sanity.studio/";
  let studio: URL | undefined;
  try { if (configured) { const url = new URL(configured); if (url.protocol === "https:") studio = url; } } catch { /* Show setup state for invalid URLs. */ }
  return <main className="min-h-screen bg-[#62757B] px-6 py-24 text-white"><div className="mx-auto max-w-xl">
    <Link href="/blog" className="underline underline-offset-4">← Back to the journal</Link>
    <h1 className="mt-12 text-5xl">Your writing space.</h1>
    {studio ? <><p className="mt-6 text-lg leading-8">Write new articles, add photos, and save drafts. Sign in to your editor when you’re ready.</p><a href={studio.href} className="mt-8 inline-block rounded-full bg-[#F1FFE0] px-7 py-4 text-[#1f2a24]">Open blog editor</a></> : <p className="mt-6 text-lg leading-8">The blog editor hasn’t been connected yet.</p>}
  </div></main>;
}
