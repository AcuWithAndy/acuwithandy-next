import Link from "next/link";

export default function MissingArticle() {
  return <section className="blog-wrap blog-index"><h1 className="text-4xl">Article not found</h1><p className="mt-5">This article may have moved or is no longer published.</p><Link className="blog-read" href="/blog">Back to the journal →</Link></section>;
}
