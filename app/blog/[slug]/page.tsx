import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogBody from "@/components/BlogBody";
import { formatDate, getPosts, isEczemaPost, readTime } from "@/lib/blog";

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
  const posts = await getPosts();
  const post = posts.find(post => post.slug === slug);
  if (!post) notFound();
  const eczemaArticle = isEczemaPost(post);
  const relatedEczemaPosts = eczemaArticle
    ? posts.filter(
        relatedPost =>
          isEczemaPost(relatedPost) && relatedPost.slug !== post.slug,
      )
    : [];
  return <article className="blog-article">
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
      {eczemaArticle && (
        <nav className="mt-14 border-t border-[#62757b55] pt-8" aria-label="Related eczema content">
          <h2 className="text-3xl leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            More on eczema
          </h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            <li>
              <Link
                href="/eczema"
                className="inline-flex min-h-11 items-center rounded-full border border-[#62757b66] px-4 py-2 text-sm text-[#365a62] transition hover:bg-[#E9EFEB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#365a62]"
              >
                Eczema page
              </Link>
            </li>
            {relatedEczemaPosts.map(relatedPost => (
              <li key={relatedPost.slug}>
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-[#62757b66] px-4 py-2 text-sm text-[#365a62] transition hover:bg-[#E9EFEB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#365a62]"
                >
                  {relatedPost.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className="blog-end"><Link href="/blog">← Back to the journal</Link></div>
    </div>
  </article>;
}
