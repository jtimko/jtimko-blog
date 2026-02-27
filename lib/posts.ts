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
    content: mdx.content,
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
    content: mdx.content,
  };
}

type PostMeta = {
  slug: string;
  title: string;
  date?: string;
  cover?: string;
  excerpt?: string;
};

export async function getPosts(dir: string): Promise<PostMeta[]> {
  const filePath = path.join(process.cwd(), "content", dir);
  const files = await fs.readdir(filePath);

  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
      .map(async (filename) => {
        const fullPath = path.join(filePath, filename);
        const raw = await fs.readFile(fullPath, "utf8");

        const { data: frontmatter, content } = matter(raw);
        const slug = filename.replace(/\.(mdx|md)$/, "");
        const excerpt =
          content.slice(0, 160).replace(/\n/g, " ").trim() + (content.length > 160 ? "…" : "");

        const rawDate = frontmatter.date;
        const date =
          rawDate instanceof Date
            ? rawDate.toISOString().slice(0, 10)
            : (rawDate as string | undefined);

        return {
          slug,
          title: (frontmatter.title as string) ?? slug,
          date,
          cover: frontmatter.cover as string | undefined,
          excerpt,
        };
      })
  );

  posts.sort((postA, postB) => {
    const getTime = (date: string | undefined) => {
      if (!date) return 0;
      const parsed = new Date(date);
      return isNaN(parsed.getTime()) ? 0 : parsed.getTime();
    };
    return getTime(postB.date) - getTime(postA.date);
  });

  return posts;
}