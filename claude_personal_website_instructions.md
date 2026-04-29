# Claude CLI Build Instructions: Personal Research Website for Preeti Lamba

You are Claude CLI working inside a local project folder. Build a polished personal academic website for **Preeti Lamba**, a PhD researcher writing about **Machine Learning, Artificial Intelligence, Diffusion Language Models, AI Safety, Alignment, and Research**.

The goal is to create a clean, professional website where she can publish research articles, project summaries, technical notes, and PhD reflections.

---

## 0. Primary Goal

Build a complete personal website with:

1. Home page
2. About page
3. Blog / Articles page
4. Individual article pages using MDX
5. Research page
6. Projects page
7. CV link
8. Contact section
9. Clean academic design
10. Mobile responsive layout
11. Easy writing workflow for future articles

The website should feel like a serious PhD/researcher website, not a flashy startup landing page.

---

## 1. Recommended Tech Stack

Use the following stack unless the current project is already using something else:

- **Next.js App Router**
- **TypeScript**
- **Tailwind CSS**
- **MDX for articles**
- **Static generation where possible**
- **Vercel-compatible deployment**

If the project has not yet been created, create it using:

```bash
npx create-next-app@latest preeti-website
```

Recommended setup answers:

```text
TypeScript: Yes
ESLint: Yes
Tailwind CSS: Yes
src directory: Yes
App Router: Yes
Import alias: Yes
```

If the project already exists, inspect it first and adapt the implementation to the existing structure.

---

## 2. Design Direction

Create a minimal, elegant academic website.

### Visual Style

Use:

- Clean white or off-white background
- Excellent typography
- Soft gray borders
- Minimal accent color
- Spacious layout
- Clear navigation
- Readable article pages
- No unnecessary animations
- No flashy gradients unless extremely subtle
- No cluttered cards
- No corporate SaaS look

The design should feel inspired by:

- PhD student websites
- Research lab personal pages
- Academic blogs
- Minimal technical blogs

### Tone

The site should communicate:

- Serious researcher
- Clear writer
- Technically strong
- Curious and reflective
- Working at the intersection of ML, AI safety, and diffusion models

---

## 3. Website Identity

Use the following default identity information.

```text
Name: Preeti Lamba

Tagline:
PhD researcher working on diffusion language models, AI safety, alignment, and machine learning.

Short Bio:
I am a PhD researcher interested in diffusion language models, AI safety, alignment, and reliable machine learning systems. I write about research ideas, paper analyses, experiment logs, and the process of doing machine learning research.

Research Interests:
- Diffusion Language Models
- AI Safety
- Alignment
- Certified Decoding
- Machine Learning Theory
- Generative Models
- Reinforcement Learning for Alignment
- Robustness and Evaluation
```

Where exact personal details are unknown, use placeholders and TODO comments instead of inventing information.

---

## 4. Required Pages

Create the following pages.

---

### 4.1 Home Page

Route:

```text
/
```

The home page should include:

1. Hero section
2. Short bio
3. Research interests
4. Recent articles
5. Selected research/projects
6. Contact links
7. CV button

Hero section copy:

```text
Preeti Lamba

PhD researcher working on diffusion language models, AI safety, alignment, and machine learning.

I write about research ideas, technical experiments, paper analyses, and lessons from doing ML research.
```

Primary buttons:

```text
Read Articles
View Research
Download CV
```

The home page should feel strong but simple.

---

### 4.2 About Page

Route:

```text
/about
```

Include:

- Academic bio
- Research interests
- Current focus
- Writing philosophy
- Optional personal note about documenting the PhD journey

Use this draft:

```text
I am a PhD researcher working on machine learning, with a focus on diffusion language models, AI safety, alignment, and reliable generative systems.

My current research explores how iterative generation processes can be made safer, more controllable, and more interpretable. I am especially interested in inference-time safety mechanisms, certified decoding, recursive refinement, and evaluation methods for emerging language model families.

This website is a place where I document research ideas, explain papers, share technical notes, and reflect on the process of doing research.
```

---

### 4.3 Blog Page

Route:

```text
/blog
```

The blog page should list articles from MDX files.

Each article card should show:

- Title
- Date
- Summary
- Tags
- Reading time
- Link to full article

Blog page sections:

```text
Articles
Research notes, paper explanations, experiment logs, and reflections on ML/AI research.
```

Add filtering by tag only if simple and clean. Do not overcomplicate.

---

### 4.4 Individual Blog Article Page

Route:

```text
/blog/[slug]
```

Each article page should support:

- MDX content
- Frontmatter
- Title
- Date
- Summary
- Tags
- Reading time
- Table of contents if easy
- Code blocks
- Equations if MDX/math support is added
- Previous/next article optional

Article layout should be extremely readable.

Recommended max width:

```text
max-w-3xl
```

Use good typography for:

- h1, h2, h3
- paragraphs
- lists
- blockquotes
- code blocks
- inline code

---

### 4.5 Research Page

Route:

```text
/research
```

Create a research page with project cards.

Initial research projects:

#### Project 1

```text
Title:
Certified Safe Decoding in Diffusion Language Models

Description:
Investigating inference-time safety mechanisms for diffusion language models using contraction monitoring, risk estimation, and adaptive decoding interventions.

Tags:
Diffusion Language Models, AI Safety, Certified Decoding, Alignment

Status:
Ongoing
```

#### Project 2

```text
Title:
Tiny Recursive Language Diffusion Models

Description:
Studying recursive refinement mechanisms for language diffusion models, with experiments on structured reasoning tasks and compact model settings.

Tags:
Diffusion LMs, Recursive Refinement, Reasoning, Generative Models

Status:
Ongoing
```

#### Project 3

```text
Title:
DreamBoothGRPO

Description:
Exploring personalized image generation with group-relative policy optimization, LoRA-based updates, and reward-guided alignment.

Tags:
Diffusion Models, Personalization, GRPO, Alignment

Status:
Research Project
```

#### Project 4

```text
Title:
Semantically Aware Optimal Transport

Description:
Studying dense semantic transfer and optimal transport methods for vision domain adaptation using frozen visual features.

Tags:
Domain Adaptation, Optimal Transport, Vision, Representation Learning

Status:
Research Project
```

Each project card should include placeholder links:

```text
Paper
Code
Blog
Notes
```

Use disabled or `#` links where actual links are unavailable.

---

### 4.6 Projects Page

Route:

```text
/projects
```

This page should be slightly more practical than the Research page.

Include:

- Code projects
- Experiments
- Tools
- Repositories
- Research prototypes

Create placeholder cards for:

```text
Certified-Safe-DLLM
TR-LDM Experiments
DreamBoothGRPO
Research Blog Infrastructure
```

Each card should include:

- Short description
- Tech tags
- GitHub link placeholder
- Status

---

### 4.7 Contact Page or Contact Section

Route:

```text
/contact
```

Create a simple contact page with:

- Email placeholder
- GitHub placeholder
- Google Scholar placeholder
- LinkedIn placeholder
- X/Twitter placeholder if needed

Use placeholders like:

```text
Email: TODO
GitHub: TODO
Google Scholar: TODO
LinkedIn: TODO
```

Do not invent URLs.

---

### 4.8 CV

Add support for CV.

Expected file path:

```text
public/cv.pdf
```

Add a navigation link:

```text
CV
```

It should open:

```text
/cv.pdf
```

in a new tab.

If `public/cv.pdf` does not exist, add a note in the README telling the user to place the CV there.

---

## 5. Blog / MDX System

Implement an article system using MDX.

Articles should live here:

```text
content/blog/
```

Each article should use frontmatter:

```mdx
---
title: "Article Title"
date: "2026-04-26"
summary: "Short summary of the article."
tags: ["Diffusion Models", "AI Safety"]
slug: "article-title"
---

# Article Title

Article body goes here.
```

Create utility functions to:

1. Read all article files
2. Parse frontmatter
3. Sort articles by date descending
4. Get article by slug
5. Compute reading time
6. Render MDX content

Suggested files:

```text
src/lib/blog.ts
src/app/blog/page.tsx
src/app/blog/[slug]/page.tsx
content/blog/
```

Use stable and maintainable libraries. If adding dependencies, update `package.json`.

Possible dependencies:

```bash
npm install gray-matter reading-time next-mdx-remote
```

If using another MDX setup, ensure it works with Next.js App Router.

---

## 6. Initial Articles to Create

Create at least three starter MDX articles.

---

### Article 1

File:

```text
content/blog/why-diffusion-language-models-matter.mdx
```

Frontmatter:

```mdx
---
title: "Why Diffusion Language Models Matter"
date: "2026-04-26"
summary: "A beginner-friendly explanation of diffusion language models and why they are becoming important in AI research."
tags: ["Diffusion Language Models", "Generative Models", "AI Research"]
slug: "why-diffusion-language-models-matter"
---
```

Content outline:

```text
# Why Diffusion Language Models Matter

## The usual way language models generate text

## What changes in diffusion language models

## Why iterative refinement is interesting

## Why this matters for safety and control

## Open questions

## Conclusion
```

Write this article in an accessible but technically serious style.

---

### Article 2

File:

```text
content/blog/certified-decoding-for-diffusion-lms.mdx
```

Frontmatter:

```mdx
---
title: "Certified Decoding for Diffusion Language Models"
date: "2026-04-26"
summary: "Notes on why inference-time safety for diffusion language models may require different tools from autoregressive decoding."
tags: ["AI Safety", "Diffusion Language Models", "Certified Decoding"]
slug: "certified-decoding-for-diffusion-lms"
---
```

Content outline:

```text
# Certified Decoding for Diffusion Language Models

## Motivation

## Why decoding-time safety is different for diffusion LMs

## Iterative denoising as a control process

## Risk monitoring during generation

## The safety-utility tension

## What I am currently thinking about

## Conclusion
```

Keep claims careful and avoid overclaiming.

---

### Article 3

File:

```text
content/blog/how-i-read-ml-papers.mdx
```

Frontmatter:

```mdx
---
title: "How I Read Machine Learning Papers"
date: "2026-04-26"
summary: "A practical workflow for reading ML papers as a PhD researcher."
tags: ["PhD", "Research Process", "Machine Learning"]
slug: "how-i-read-ml-papers"
---
```

Content outline:

```text
# How I Read Machine Learning Papers

## First pass: What problem is this paper solving?

## Second pass: What is the method really doing?

## Third pass: What evidence supports the claims?

## Fourth pass: What are the limitations?

## My notes template

## Conclusion
```

---

## 7. Navigation

Create a clean navbar with:

```text
Home
About
Blog
Research
Projects
Contact
CV
```

Rules:

- Navbar should be responsive.
- On mobile, use a simple collapsible menu if necessary.
- The active page can be highlighted subtly.
- CV should open in a new tab.

---

## 8. Footer

Create a footer with:

```text
© 2026 Preeti Lamba
Writing about ML, AI safety, diffusion models, and research.
```

Also include placeholder links:

```text
GitHub
Google Scholar
LinkedIn
Email
```

Do not invent actual URLs.

---

## 9. Components to Create

Create reusable components where useful.

Suggested components:

```text
src/components/Navbar.tsx
src/components/Footer.tsx
src/components/ArticleCard.tsx
src/components/ProjectCard.tsx
src/components/Tag.tsx
src/components/SectionHeading.tsx
```

Keep components simple.

---

## 10. Styling Requirements

Use Tailwind CSS.

Global style goals:

- Body background: white or near-white
- Text: neutral dark
- Muted text: gray
- Accent: subtle blue, indigo, or violet
- Borders: soft gray
- Cards: simple border, slight hover effect
- Avoid heavy shadows
- Avoid excessive animations

Article typography:

- Comfortable line height
- Large readable headings
- Good paragraph spacing
- Code blocks clearly styled
- Inline code readable
- Links visibly styled

---

## 11. SEO and Metadata

Add metadata for:

- Home page
- Blog page
- Article pages
- Research page

Default metadata:

```text
Title:
Preeti Lamba — ML, AI Safety, and Diffusion Language Models

Description:
Personal research website of Preeti Lamba, featuring articles and research notes on machine learning, diffusion language models, AI safety, alignment, and generative models.
```

Add Open Graph metadata if simple.

---

## 12. Accessibility Requirements

Ensure:

- Semantic HTML
- Proper heading hierarchy
- Good color contrast
- Keyboard accessible links/buttons
- Alt text for images if images are added
- No tiny unreadable text
- Mobile readability

---

## 13. README

Create or update `README.md` with:

1. Project description
2. How to run locally
3. How to add a new blog article
4. How to update research projects
5. How to add CV
6. How to deploy on Vercel

Include these commands:

```bash
npm install
npm run dev
npm run build
```

Also include article template:

```mdx
---
title: "New Article Title"
date: "YYYY-MM-DD"
summary: "One-sentence summary."
tags: ["Tag1", "Tag2"]
slug: "new-article-title"
---

# New Article Title

Write here.
```

---

## 14. Quality Checks

After implementation, run:

```bash
npm install
npm run lint
npm run build
```

Fix all errors.

The final website should satisfy:

- Home page loads
- Blog page loads
- Individual article pages load
- Research page loads
- Projects page loads
- Contact page loads
- CV link exists
- Website is responsive
- Build passes
- No broken imports
- No TypeScript errors
- No placeholder code that breaks deployment

---

## 15. Important Constraints

Do not:

- Invent real links, papers, affiliations, email addresses, or credentials.
- Add fake publications.
- Make exaggerated claims.
- Use a flashy corporate design.
- Overcomplicate the website with unnecessary backend/database logic.
- Require a paid CMS.
- Add authentication.
- Add comments system.
- Add analytics unless explicitly requested.
- Make the blog hard to maintain.

Do:

- Use TODO placeholders where information is missing.
- Keep the design academic and elegant.
- Make article writing easy.
- Make the project easy to deploy.
- Keep code readable and maintainable.

---

## 16. Suggested Folder Structure

Aim for a structure like this:

```text
preeti-website/
├── content/
│   └── blog/
│       ├── why-diffusion-language-models-matter.mdx
│       ├── certified-decoding-for-diffusion-lms.mdx
│       └── how-i-read-ml-papers.mdx
├── public/
│   └── cv.pdf
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── research/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ArticleCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SectionHeading.tsx
│   │   └── Tag.tsx
│   └── lib/
│       └── blog.ts
├── README.md
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

Adapt if the Next.js template creates a slightly different structure.

---

## 17. Final Response Required from Claude CLI

After completing the implementation, summarize:

1. Files created
2. Files modified
3. Dependencies added
4. How to run locally
5. How to add a new article
6. Any remaining TODOs

Also explicitly report whether:

```text
npm run build
```

passes or fails.

If it fails, explain the exact error and fix it if possible.

---

## 18. Extra Polish If Time Allows

If the core site is complete and build passes, add:

1. Dark mode toggle
2. RSS feed
3. Sitemap
4. Better code block styling
5. Article tag index
6. Simple search over articles
7. `Now` page at `/now`

Only add these after the main website is stable.

---

## 19. First Command to Run

Start by inspecting the project:

```bash
ls
pwd
find . -maxdepth 2 -type f | sed 's#^\./##' | sort | head -100
```

Then proceed with implementation.

---

## 20. One-Sentence Product Definition

Build a clean, academic, MDX-powered personal research website for Preeti Lamba to publish ML/AI research articles, project notes, and PhD reflections.
