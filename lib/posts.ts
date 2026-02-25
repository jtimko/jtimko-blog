import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

export async function getPost(slug: string) {
  const postsDir = path.join(process.cwd(), "content/posts");

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

export async function getPhotos(slug: string) {
  const postsDir = path.join(process.cwd(), "content/photography");

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

type PostMeta = {
  slug: string;
  title: string;
  date?: string;
  cover?: string;
};

export async function getPosts(dir: string): Promise<PostMeta[]> {
  const filePath = path.join("content", `${dir}`);
  const files = await fs.readdir(filePath);

  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
      .map(async (filename) => {
        const fullPath = path.join(filePath, filename);
        const raw = await fs.readFile(fullPath, "utf8");

        const data = matter(raw);
        const slug = filename.replace(/\.(mdx|md)$/, "");

        return {
          slug,
          title: (data.title as string) ?? slug,
          date: data.date as string | undefined,
          cover: data.cover as string | undefined,
        };
      })
  );
  //   posts.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

  return posts;
}