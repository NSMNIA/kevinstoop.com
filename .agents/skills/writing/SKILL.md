---
name: writing
description: Writing, editing, or reviewing posts on kevinstoop.com (src/content/writing, route /writing). Frontmatter, MDX, the Note component, images, and how a note or a longer build should be shaped. Builds on the tech-writing skill, which holds the voice and snippet rules.
metadata:
  author: kevin
  version: "1.0.0"
---

# Writing

For any post under `src/content/writing`. First read the tech-writing skill at [../tech-writing/SKILL.md](../tech-writing/SKILL.md) and its style-rules.md and anti-ai-patterns.md. They hold the voice, prose style, and snippet conventions. review-framework.md applies to every post. This skill adds what a post on this site is.

Before writing, read the existing posts in `src/content/writing` end to end, and the homepage at `src/pages/index.astro`. Match their rhythm. The body is the voice. Intros alone aren't.

The page chrome is not the post. `src/pages/writing/[slug].astro` renders the title, the date, the "Writing" link, and JSON-LD. The MDX file is only the body, rendered inside `.entry`.

## Audience

Readers who already build interfaces and care about performance and the small details. Start from the simplest version that works, but don't simplify a definition or drop a constraint to sound approachable. Link the actual rule (docs.astro.build, developer.mozilla.org, web.dev) when introducing one.

## Scaffold

The collection loader only picks up `**/*.mdx` (`src/content.config.ts`). A `.md` file will not appear. There is no template file. This is the template:

```yaml
---
title: Putting the notes here
description: One or two sentences. Used as the meta description and the list excerpt.
pubDate: 2026-10-31
draft: true
---
```

- `title` and `description` are required. Sentence case. The title names the concrete thing.
- `pubDate` is a date. `YYYY-MM-DD` is enough. `src/lib/date.ts` formats it in UTC as `en-GB` (`31 Oct 2026`).
- `updatedDate` is optional. Add it only when a published post is revised. The page prints it as "Updated".
- `draft: true` shows in `astro dev` and is excluded from production (`src/lib/posts.ts`). Omit it, or set `false`, to publish.
- Do not add `author`, `slug`, `tags`, `featured`, `pubDatetime`, or `modDatetime`. They are not in the schema, and Zod strips unknown keys. The route is `/writing/<filename>`. Renaming the file renames the route.
- Description is the excerpt on `/writing` and the meta description. Write it as a sentence a reader can use, not a label.

**Images.** Put them next to the post or in `src/assets/`, and reference them with a relative markdown image. Every image gets meaningful alt text and sits where the prose discusses it. This project has no `@assets` alias.

**MDX.** The default, and the only format the collection loads.

- Import Astro components with a relative path and the `.astro` extension: `import Note from "../../components/note.astro";`
- Asides use `<Note>`. Optional `label` prop, default `"Note"`. Use it for a tangent, not for the main point.
- There is no React integration. Don't add `client:*` directives or `.tsx` demos. If a post needs a client island, add the framework integration first, in a separate change, then write the post.
- Exported consts are in scope in the prose (`export const stack = "MDX"` then `{stack}`), which is the pattern in `putting-the-notes-here.mdx`.

## Shape

Match length to the point. A note can be a few paragraphs and a snippet, with no headings. Don't inflate it into a walkthrough.

A longer post:

1. Open in one or two short paragraphs. State the situation plainly. No "these days", no scene-setting, no roadmap sentence ("In this post, I'll walk through"). If the background runs past two paragraphs, it belongs in its own section.
2. Headings in sentence case, descriptive. "The draft filter" over a clever turn. No `## Table of contents`. Nothing on this site generates one.
3. One idea per section. Separate levels of abstraction. A general model is its own section, not the intro of the build that uses it. A tangent goes in `<Note>`.
4. Introduce an API in steps: name it, what it hooks into, what it gives you, what you can use it for.
5. Explain the progression between sections. End a section on the leftover need or a short confirmation. Open the next by addressing that. One clause back, never a recap paragraph. No "In this section we'll", no heading echo.
6. Put each image, code block, or example where it's discussed. Introduce it, then show it.
7. Never end a section on a code block. After the last snippet, one bridge line before the next heading: what now works, or why the next step exists.
8. Bridges carry the build forward in the same voice as the rest of the post. "The filename is the id, so the list can link to `/writing/${post.id}`." Don't announce the remainder ("What's left is the feed").
9. When the next snippet adds or changes behavior, say why before the snippet. After it, say what the code now does, in one or two sentences.
10. Avoid a heading over a single short paragraph. Widen the section to include the code, or fold it into a neighbor.
11. Feature builds are problem-driven. Open on the goal, show the obvious version, hit the concrete problem, then derive the fix. Don't introduce a helper before the problem exists, and don't pre-reveal the final design in the opener.
12. Stop a setup once the goal and the relevant file are clear. Implementation details arrive in the step that needs them. Nothing references a component or function the post hasn't introduced. A forward reference is only a promise, with nothing else revealed.
13. Give a component or function its role in the sentence that first names it. Don't name one that never comes back.
14. When another post on this site already covers the background, link it (`/writing/<id>`) instead of re-explaining.
15. Link a shipped doc to the live page, not the PR. A PR link is for citing a specific change.
16. The ending adds a takeaway or a cost. It does not recap the post, and it does not sign off. No "I hope this helped", no emoji, no social plug unless he asked for one.

## Updates

Material added after publishing goes in a `## Update` section at the end (before any closing takeaway, if there is one). Say what changed and whether it is safe to copy. Apply it to the post's own example. Reference anything above freely. Set `updatedDate` in the frontmatter. The page already prints that date, so the section doesn't need to repeat the calendar date unless the timing matters.

## Before finishing

Run the tech-writing review framework (all four passes), then:

- [ ] The file is `.mdx` under `src/content/writing`, and the frontmatter matches the schema (`title`, `description`, `pubDate`, optional `updatedDate` and `draft`)
- [ ] The body does not repeat the title, date, or "Writing" back-link
- [ ] The opening is one or two paragraphs and states the situation
- [ ] A build hits the problem before the fix. Nothing references context the post hasn't introduced
- [ ] Components and functions are introduced with their role
- [ ] Asides use `<Note>`, not a fake callout
- [ ] No React `client:*` demo unless the integration exists
- [ ] It reads like the other posts and the homepage, not a docs page and not a generated essay
- [ ] `pnpm build` passes
