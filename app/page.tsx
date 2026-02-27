import { formatDate } from "@/lib/format";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Home() {
  const [latestBlog, latestPhoto] = await Promise.all([
    getPosts("posts").then((p) => p[0]),
    getPosts("photography").then((p) => p[0]),
  ]);

  return (
    <main className="py-12">
      <section className="mb-16">
        <h1 className="text-3xl font-bold text-[#1a1a1a] mb-4">
          Hi, I&apos;m Justin
        </h1>
        <p className="text-lg text-[#444] leading-relaxed max-w-xl">
          I work in the public sector as a .NET web developer. I tinker with
          cyber security, photography, videography, electronics, programming,
          and 3D modeling. This is my corner of the internet - a place for
          projects, ideas, and photos.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-xl font-semibold text-[#1a1a1a]">
          Latest from the blog
        </h2>
        {latestBlog ? (
          <Link
            href={`/blog/${latestBlog.slug}`}
            className="block p-4 rounded-lg border border-[#ddd] hover:border-[#2EA7F2] hover:bg-[#f8f6f2] transition-colors"
          >
            <h3 className="font-semibold text-[#1a1a1a]">{latestBlog.title}</h3>
            {latestBlog.date && (
              <time className="text-sm text-[#666]">
                {formatDate(latestBlog.date)}
              </time>
            )}
          </Link>
        ) : (
          <p className="text-[#666]">No posts yet. Check back soon.</p>
        )}

        <h2 className="text-xl font-semibold text-[#1a1a1a] pt-4">
          Latest photography
        </h2>
        {latestPhoto ? (
          <Link
            href={`/photography/${latestPhoto.slug}`}
            className="block p-4 rounded-lg border border-[#ddd] hover:border-[#2EA7F2] hover:bg-[#f8f6f2] transition-colors"
          >
            <h3 className="font-semibold text-[#1a1a1a]">{latestPhoto.title}</h3>
            {latestPhoto.date && (
              <time className="text-sm text-[#666]">
                {formatDate(latestPhoto.date)}
              </time>
            )}
          </Link>
        ) : (
          <p className="text-[#666]">No photography yet. Check back soon.</p>
        )}
      </section>

      <div className="mt-12 flex gap-6">
        <Link
          href="/blog"
          className="text-[#2EA7F2] font-medium hover:underline"
        >
          View all posts →
        </Link>
        <Link
          href="/photography"
          className="text-[#2EA7F2] font-medium hover:underline"
        >
          View all photography →
        </Link>
      </div>
    </main>
  );
}
