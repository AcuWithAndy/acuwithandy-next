import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogBody from "@/components/BlogBody";
import { formatDate, getPosts, readTime } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = (await getPosts()).find(post => post.slug === slug);
  if (!post) return { title: "Article not found", robots: { index: false } };
  return { title: post.title, description: post.excerpt, alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, url: `/blog/${post.slug}`, type: "article", publishedTime: post.publishedAt, authors: [post.author] },
    twitter: { card: "summary", title: post.title, description: post.excerpt } };
}

export default async function Article({ params }: Props) {
  const { slug } = await params;
  const post = (await getPosts()).find(post => post.slug === slug);
  if (!post) notFound();
  return <article>
    <header className="blog-hero blog-article-heading"><div className="blog-reading">
      <Link href="/blog" className="blog-back">← All articles</Link>
      <p className="blog-eyebrow">THE JOURNAL</p><h1>{post.title}</h1>
      <p className="blog-intro">{post.excerpt}</p>
      <p className="blog-meta">{post.author} · <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> · {readTime(post.body)} min read</p>
    </div></header>
    <div className="blog-reading blog-article-body">
      {post.cover?.url && <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="blog-article-image" src={post.cover.url} alt={post.cover.alt || ""} width={1200} height={800} />
      </figure>}
      <BlogBody body={post.body} />
      {post.tags?.length ? <ul className="blog-tags" aria-label="Article topics">{post.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> : null}
      <div className="blog-end"><Link href="/blog">← Back to the journal</Link></div>
    </div>
  </article>;
}
