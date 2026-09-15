"use client";

export default function BlogError({ reset }: { reset: () => void }) {
  return <section className="blog-wrap blog-index"><h1 className="text-4xl">The journal is temporarily unavailable.</h1><p className="mt-5">Please try again in a moment.</p><button className="blog-button mt-6" onClick={reset}>Try again</button></section>;
}
