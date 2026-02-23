import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const postsDir = path.join(process.cwd(), "content/posts");

export async function getPost(slug: string) {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");

  const { content, data } = matter(raw);

  const mdx = await compileMDX({
    source: content,
    options: {
      // you can add remark/rehype plugins here later
    },
  });

  return {
    meta: data as { title: string; date: string; cover?: string },
    Content: mdx.content,
  };
}