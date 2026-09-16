import { getInstagramPosts } from "@/lib/instagram";

export default async function InstagramFeed() {
  const posts = await getInstagramPosts();
  if (posts === null) return null;

  return (
    <section aria-labelledby="instagram-heading" className="bg-[#EFEBFA] px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#5B767B]">Instagram</p>
            <h2 id="instagram-heading" className="text-4xl leading-tight text-[#1F2A24] md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>@acuwithandy</h2>
          </div>
          <a href="https://www.instagram.com/acuwithandy/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#5B767B] px-6 py-3 text-[#425C61] transition hover:bg-[#5B767B] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B767B]">Follow on Instagram <span aria-hidden="true">↗</span></a>
        </div>
        {posts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {posts.map((post) => (
              <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" aria-label={post.caption ? `View Instagram post: ${post.caption.slice(0, 140)}` : "View post on Instagram"} className="group relative block aspect-square overflow-hidden rounded-2xl bg-[#5B767B]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B767B]">
                {/* Instagram image URLs expire; use the current URL without an image proxy cache. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt="" width={600} height={600} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03] motion-reduce:transition-none" />
                {post.type !== "IMAGE" && <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">{post.type === "VIDEO" ? "Video" : "Photos"}</span>}
              </a>
            ))}
          </div>
        ) : <p className="text-[#4B5C52]">See the latest posts on Instagram.</p>}
      </div>
    </section>
  );
}
