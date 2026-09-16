import { getInstagramPosts } from "@/lib/instagram";
import InstagramCarousel from "./InstagramCarousel";

export default async function InstagramFeed() {
  const posts = await getInstagramPosts();
  if (posts === null) return null;
  return <InstagramCarousel posts={posts} />;
}
