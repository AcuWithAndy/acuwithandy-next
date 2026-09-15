import { cache } from "react";

export type Span = { _key: string; text: string; marks?: string[] };
export type Block = { _key: string; _type: "block"; style?: string; listItem?: string; children: Span[]; markDefs?: { _key: string; _type: string; href: string }[] };
export type ImageBlock = { _key: string; _type: "image"; url?: string; alt?: string; children?: never; listItem?: never };
export type BlogContent = Block | ImageBlock;
export type Post = { _id: string; title: string; slug: string; excerpt: string; publishedAt: string; author: string; cover?: { url: string; alt: string }; body: BlogContent[]; tags?: string[] };

const project = process.env.SANITY_PROJECT_ID || "3e0xd4u7";
const dataset = process.env.SANITY_DATASET || "production";
export const blogConfigured = Boolean(project);

// Only the published perspective is requested. No credential is sent to the browser.
export const getPosts = cache(async (): Promise<Post[]> => {
  if (!project) return [];
  if (!/^[a-z0-9-]+$/.test(project) || !/^[a-z0-9_-]+$/.test(dataset)) throw new Error("Invalid blog configuration");
  const query = `*[_type == "post" && !(_id in path("drafts.**")) && defined(slug.current) && defined(publishedAt) && dateTime(publishedAt) <= dateTime(now())] | order(publishedAt desc) {_id,title,"slug":slug.current,excerpt,publishedAt,tags,"author":coalesce(author,"Andy Boehm, LAc."),"cover":cover{alt,"url":asset->url},body[]{..., _type == "image" => {"url":asset->url}}}`;
  const url = new URL(`https://${project}.api.sanity.io/v2025-02-19/data/query/${dataset}`);
  url.searchParams.set("query", query);
  url.searchParams.set("perspective", "published");
  const response = await fetch(url, { next: { revalidate: 60 }, signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw new Error("Blog content is temporarily unavailable");
  const data = await response.json();
  if (!Array.isArray(data.result)) throw new Error("Invalid blog response");
  return data.result;
});

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(date));
}

export function readTime(body: BlogContent[] = []) {
  const words = body.flatMap(block => block.children || []).map(span => span.text).join(" ").trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function safeLink(href: string) {
  try {
    const url = new URL(href);
    return ["https:", "http:", "mailto:"].includes(url.protocol) ? href : undefined;
  } catch { return undefined; }
}
