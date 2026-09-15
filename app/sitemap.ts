import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  return [
    { url: "https://www.acuwithandy.com/blog" },
    ...posts.map(post => ({ url: `https://www.acuwithandy.com/blog/${post.slug}`, lastModified: post.publishedAt })),
    {
      url: "https://www.acuwithandy.com",
    },
    {
      url: "https://www.acuwithandy.com/services",
    },
    {
      url: "https://www.acuwithandy.com/about-me",
    },
    {
      url: "https://www.acuwithandy.com/contact",
    },
    {
      url: "https://www.acuwithandy.com/faq",
    },
    {
      url: "https://www.acuwithandy.com/first-visit",
    },
    {
      url: "https://www.acuwithandy.com/eczema",
    },
    {
      url: "https://www.acuwithandy.com/psoriasis",
    },
  ];
}
