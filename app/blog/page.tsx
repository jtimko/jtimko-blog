import { formatDate } from "@/lib/format";
import { getPosts } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getPosts("posts");

  return (
    <main className="py-8">
      <h1 className="text-3xl font-bold mb-8 text-[#1a1a1a]">Blog</h1>
      <ul className="space-y-10">
        {posts.map((p) => (
          <li key={p.slug} className="border-b border-[#ddd] pb-8 last:border-0">
            <Link href={`/blog/${p.slug}`} className="group block">
              <div className="flex gap-6">
                {p.cover && (
                  <div className="shrink-0 w-40 h-28 relative rounded overflow-hidden bg-[#e8e4dc]">
                    <Image
                      src={p.cover}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="160px"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-semibold text-[#1a1a1a] group-hover:text-[#2EA7F2] transition-colors">
                    {p.title}
                  </h2>
                  {p.date && (
                    <time className="text-sm text-[#666] block mt-1">
                      {formatDate(p.date)}
                    </time>
                  )}
                  {p.excerpt && (
                    <p className="mt-2 text-[#444] text-[0.95rem] line-clamp-2">
                      {p.excerpt}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
