// app/blog/[slug]/page.tsx
import { getPhotos } from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const { meta, Content } = await getPhotos(slug);

  return (
    <article className="prose max-w-none">
      <h1>{meta.title}</h1>
      {Content}
    </article>
  );
}
