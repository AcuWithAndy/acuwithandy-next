import "server-only";
import { getInstagramAccessToken } from "./instagram-token";

export type InstagramPost = {
  id: string;
  caption: string;
  image: string;
  permalink: string;
  type: string;
};

function httpsUrl(value: unknown, instagramOnly = false): string | null {
  if (typeof value !== "string") return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.username || url.password) return null;
    if (instagramOnly && !["instagram.com", "www.instagram.com"].includes(url.hostname)) return null;
    return url.href;
  } catch {
    return null;
  }
}

export async function getInstagramPosts(): Promise<InstagramPost[] | null> {
  const token = await getInstagramAccessToken();
  const userId = process.env.INSTAGRAM_USER_ID;
  const version = process.env.INSTAGRAM_API_VERSION?.trim() || "v25.0";
  // Remain hidden until the owner's Instagram connection has been configured.
  if (!token || !userId || !version) return null;
  if (!/^\d+$/.test(userId) || !/^v\d+\.\d+$/.test(version)) return null;

  const url = new URL(`https://graph.instagram.com/${version}/${userId}/media`);
  url.searchParams.set("fields", "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp");
  url.searchParams.set("limit", "12");
  try {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(6000),
    });
    if (!response.ok) {
      // Do not log API responses or request headers, which may expose credentials.
      console.warn("Instagram feed unavailable", response.status);
      return [];
    }
    const payload: unknown = await response.json();
    if (!payload || typeof payload !== "object" || !("data" in payload) || !Array.isArray(payload.data)) return [];
    return payload.data.flatMap((item: unknown): InstagramPost[] => {
      if (!item || typeof item !== "object") return [];
      const post = item as Record<string, unknown>;
      const image = httpsUrl(post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url);
      const permalink = httpsUrl(post.permalink, true);
      if (!image || !permalink || typeof post.id !== "string") return [];
      return [{ id: post.id, image, permalink, caption: typeof post.caption === "string" ? post.caption : "", type: String(post.media_type ?? "IMAGE") }];
    }).slice(0, 6);
  } catch {
    console.warn("Instagram feed temporarily unavailable");
    return [];
  }
}
