import { getPosts } from "@/lib/posts";
import Link from "next/link";


export default async function Photography() {
 
const posts = await getPosts("photography");

  return (
    <article className="prose max-w-none">
      {posts.map((p) => {
        return (
            <div key={p.slug}><Link href={"/photography/" + p.slug}>{p.title}</Link></div>
        )
      })}
    </article>
  );
}
