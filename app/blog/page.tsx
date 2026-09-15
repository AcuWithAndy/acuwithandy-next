import type { Metadata } from "next";
import Link from "next/link";
import JournalCollage from "@/components/JournalCollage";
import { formatDate, getPosts, readTime } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog", description: "Notes on acupuncture, Chinese herbal medicine, and everyday wellbeing from Andy Boehm, LAc.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog | Acu With Andy", description: "Notes from Andy Boehm, LAc.", url: "/blog", type: "website" },
  twitter: { card: "summary", title: "Blog | Acu With Andy", description: "Notes from Andy Boehm, LAc." },
};

export default async function Blog() {
  const posts = await getPosts();
  return <>
    <header className="blog-hero"><div className="blog-wrap journal-hero-layout"><div className="journal-hero-copy">
      <p className="blog-eyebrow">ACUWITHANDY.COM / JOURNAL</p>
      <h1>Insights on<br /><em>living well.</em></h1>
      <p className="blog-intro">Acupuncture, Chinese herbal medicine, nutrition, and everyday wellbeing.</p>
    </div><JournalCollage /></div></header>
    <section className="blog-wrap blog-index" aria-label="Blog posts">
      <div className="blog-section-title"><h2>From the journal</h2><span>{posts.length} {posts.length === 1 ? "article" : "articles"}</span></div>
      {posts.length === 0 ? <div className="blog-empty"><h3>A little space for what’s next.</h3><p>New articles will appear here soon. Thank you for stopping by.</p></div> :
        <div className="blog-grid">{posts.map(post => <article className="blog-card" key={post._id}>
          {post.cover?.url && <Link href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true">
            {/* CMS image URLs are rendered without requiring remote image configuration. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.cover.url} alt={post.cover.alt || ""} width={900} height={600} loading="lazy" className="blog-cover" />
          </Link>}
          <div className="blog-card-content"><p className="blog-meta"><time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> · {readTime(post.body)} min read</p>
            <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p>
            <Link className="blog-read" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>Read article <span aria-hidden="true">→</span></Link>
          </div>
        </article>)}</div>}
    </section>
  </>;
}
