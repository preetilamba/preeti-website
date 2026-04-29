# Preeti Lamba — Personal Research Website

A clean, academic personal website for publishing articles, reading notes, and writing about ML and AI research. Built with Next.js, TypeScript, Tailwind CSS, and MDX.

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with bio and recent articles |
| About | `/about` | Background, interests, and writing philosophy |
| Articles | `/blog` | All published articles |
| Research Interests | `/research` | Broad research areas with open questions |
| Reading Notes | `/reading-notes` | Short notes from papers read |
| Resources | `/resources` | Curated learning resources |
| Contact | `/contact` | Contact links |
| CV | `/cv.pdf` | Opens CV PDF in new tab |

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building

```bash
npm run build
npm run start
```

## How to add a new article

1. Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "New Article Title"
date: "YYYY-MM-DD"
summary: "One-sentence summary of the article."
tags: ["Tag1", "Tag2"]
slug: "new-article-title"
---

# New Article Title

Write here.
```

2. The article will automatically appear on the `/blog` page, sorted by date (newest first).

3. It is accessible at `/blog/new-article-title`.

## How to add a CV

Place your CV PDF at:

```
public/cv.pdf
```

The "Download CV" button and CV nav link will then link to `/cv.pdf`, which opens in a new tab.

> **Note**: `public/cv.pdf` is not included in this repository. Add your own CV file here before deploying.

## How to update contact links

Contact links appear in:
- `src/app/contact/page.tsx`
- `src/app/page.tsx` (home page)
- `src/components/Footer.tsx`

Search for `TODO` in these files and replace with real URLs and email addresses.

## How to deploy on Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. No special configuration is required — Next.js is detected automatically.
4. Set the root directory to the project root.
5. Deploy.

The site uses static generation where possible and is fully compatible with Vercel's free tier.

## Tech stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **MDX** via `next-mdx-remote`
- **gray-matter** for frontmatter parsing
- **reading-time** for estimated read times

## Project structure

```
content/
  blog/               # MDX article files
public/
  cv.pdf              # Place your CV here (not included)
src/
  app/
    about/            # About page
    blog/             # Articles list + [slug] individual pages
    contact/          # Contact page
    reading-notes/    # Reading notes page
    research/         # Research interests page
    resources/        # Resources page
    layout.tsx        # Root layout with Navbar and Footer
    page.tsx          # Home page
  components/
    ArticleCard.tsx
    Footer.tsx
    Navbar.tsx
    ProjectCard.tsx
    SectionHeading.tsx
    Tag.tsx
  lib/
    blog.ts           # MDX utilities (read, parse, sort articles)
```
