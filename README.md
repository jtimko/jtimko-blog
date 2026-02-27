# JTimko Blog

A personal blog built with Next.js 16, MDX, and Tailwind CSS. Write posts locally and deploy to your server.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Writing Blog Posts

### Blog posts

Create `.mdx` files in `content/posts/`:

```mdx
---
title: Your post title
date: 2026-02-26
cover: /images/your-cover.jpg  # optional, path relative to public/
---

Your content in **Markdown** or MDX.
```

### Photography posts

Create `.mdx` files in `content/photography/` with the same frontmatter format.

### Frontmatter

| Field  | Required | Description                          |
|--------|----------|--------------------------------------|
| `title`| Yes      | Post title                           |
| `date` | No       | Publication date (YYYY-MM-DD)         |
| `cover`| No       | Cover image path (e.g. `/photos/cover.jpg`) |

Cover images go in `public/`. For example, `cover: /photos/redwoods/cover.jpg` expects `public/photos/redwoods/cover.jpg`.

## Deploying

1. Add or edit MDX files in `content/posts/` and `content/photography/`.
2. Build: `npm run build`
3. Deploy the output to your server (e.g. Vercel, your own VPS).
4. Run `npm run start` on the server, or use a static export if preferred.

Posts are sorted by date (newest first). New files are picked up on the next build.

## Project Structure

```
content/
  posts/        # Blog posts (.mdx)
  photography/  # Photography posts (.mdx)
app/
  blog/         # Blog listing and [slug] pages
  photography/  # Photography listing and [slug] pages
  about/        # About page
  contact/      # Contact page
lib/
  posts.ts      # MDX loading and metadata
```
