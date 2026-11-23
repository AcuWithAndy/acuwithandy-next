import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogBody from "@/components/BlogBody";
import EczemaArticlesCarousel from "@/components/EczemaArticlesCarousel";
import { formatDate, getPosts, isEczemaPost, readTime, type Post } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };
export const dynamic = "force-dynamic";

function removeLearnMoreSection(body: Post["body"]): Post["body"] {
  const sectionStart = body.findIndex(
    block =>
      block._type === "block" &&
      block.style === "h2" &&
      block.children.map(span => span.text).join("").trim().toLowerCase() ===
        "learn more",
  );
  return sectionStart === -1 ? body : body.slice(0, sectionStart);
}

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
  const articleBody = eczemaArticle
    ? removeLearnMoreSection(post.body)
    : post.body;
  return <article className="blog-article">
    <header className="blog-hero blog-article-heading"><div className="blog-reading">
      <Link href="/blog" className="blog-back">← All articles</Link>
      <p className="blog-eyebrow">THE JOURNAL</p><h1>{post.title}</h1>
      <p className="blog-intro">{post.excerpt}</p>
      <p className="blog-meta">{post.author} · <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> · {readTime(articleBody)} min read</p>
    </div></header>
    <div className="blog-reading blog-article-body">
      {post.cover?.url && <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="blog-article-image" src={post.cover.url} alt={post.cover.alt || ""} width={1200} height={800} />
      </figure>}
      <BlogBody body={articleBody} />
      {!eczemaArticle && post.tags?.length ? <ul className="blog-tags" aria-label="Article topics">{post.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> : null}
      {eczemaArticle && (
        <section className="mt-14 border-t border-[#62757b55] pt-8" aria-label="Related eczema pages and articles">
          <EczemaArticlesCarousel
            articles={[
              {
                title: "Eczema care overview",
                slug: "eczema",
                href: "/eczema",
                excerpt:
                  "Explore individualized acupuncture and Chinese herbal medicine care for eczema.",
                cover: {
                  url: "/eczema-formula.jpg",
                  alt: "Chinese herbal formula used in eczema care",
                },
              },
              ...relatedEczemaPosts.map(relatedPost => ({
                title: relatedPost.title,
                slug: relatedPost.slug,
                excerpt: relatedPost.excerpt,
                cover: relatedPost.cover,
              })),
            ]}
          />
        </section>
      )}
      <div className="blog-end"><Link href="/blog">← Back to the journal</Link></div>
    </div>
  </article>;
}
