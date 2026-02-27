import { formatDate } from "@/lib/format";
import { getPost, getPosts } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPosts("posts");
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = await getPost(slug);
    return {
      title: `${meta.title} | JTimko`,
      description: meta.title,
    };
  } catch {
    return { title: "Post | JTimko" };
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const { meta, content } = await getPost(slug);

  return (
    <main className="py-8">
      <Link
        href="/blog"
        className="text-sm text-[#666] hover:text-[#2EA7F2] mb-6 inline-block"
      >
        ← Back to blog
      </Link>
      <article className="prose prose-neutral max-w-none">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#1a1a1a] mb-2">
            {meta.title}
          </h1>
          {meta.date && (
            <time className="text-[#666] text-sm">
              {formatDate(meta.date)}
            </time>
          )}
        </header>
        {meta.cover && (
          <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden mb-8 bg-[#e8e4dc]">
            <Image
              src={meta.cover}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
        )}
        <div className="prose prose-neutral max-w-none [&_a]:text-[#2EA7F2] [&_a:hover]:underline">
          {content}
        </div>
      </article>
    </main>
  );
}
