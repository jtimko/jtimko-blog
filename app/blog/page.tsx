import { getPosts } from "@/lib/posts";
import Link from "next/link";


export default async function Page() {
 
const posts = await getPosts("posts");

  return (
    <article className="prose max-w-none">
      {posts.map((p) => {
        return (
            <div key={p.slug}><Link href={"/blog/" + p.slug}>{p.title}</Link></div>
        )
      })}
    </article>
  );
}
