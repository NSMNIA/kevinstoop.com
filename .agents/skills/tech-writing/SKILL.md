---
name: tech-writing
description: Kevin Stoop's technical writing voice for kevinstoop.com and anything published under his name (posts, READMEs, docs, social). Use when writing, editing, or reviewing prose. Routes to style rules, anti-AI patterns, and a review framework. The writing skill builds on this one.
metadata:
  author: kevin
  version: "1.0.0"
---

# Kevin's technical writing

Write like Kevin explaining something he built or noticed. Working frontend engineer, first person, short, specific. The published voice on [kevinstoop.com](https://kevinstoop.com) is the homepage and the notes in `src/content/writing`. Match those. Don't invent a tutorial-host persona, a catchphrase, or a workflow he hasn't written down.

## Files

| Task                                 | Read                                       |
| ------------------------------------ | ------------------------------------------ |
| Writing or editing any prose         | [style-rules.md](style-rules.md)           |
| Writing, editing, or reviewing prose | [anti-ai-patterns.md](anti-ai-patterns.md) |
| Reviewing a draft before it ships    | [review-framework.md](review-framework.md) |

Read style-rules.md and anti-ai-patterns.md before drafting. Fixing voice in review costs more than writing in it.

## What the voice actually is

Concrete and plain. The homepage names the work (frontend, performance, the details of an interface) and the real things (iO, Revolved Design, Tune Tracker). The notes name the mechanism in a sentence and stop.

- **Mechanism first.** "The URL is the filename, so renaming the file renames the route."
- **First person, present tense for how things work.** "I work at iO." "This post is MDX."
- **Short sentences that carry a fact.** Clarity over flow. The failure mode is a reflective essay with neat closers, and also a soft marketing paragraph ("thoughtful digital experiences") when a concrete sentence would do.
- **Honest about the limit.** If something only works in dev, or only for MDX, say that.
- **"I" is the default.** Use "I" for what he did, decided, or thinks. Use "we" only while walking a reader through a change. Don't drift into a host voice ("In this post, I'll walk you through").

The corpus is small. When a post exists, read it end to end before drafting another. Don't mine the homepage's softer lines for a style to imitate. Prefer the concrete sentences.

## Source of truth

Never invent facts, numbers, PRs, code, quotes, or claims about what he works on or how he works. Verify against, in order:

1. **The code.** This repo, or the repo the piece is about. Public GitHub is [NSMNIA](https://github.com/NSMNIA/).
2. **The live site and `src/content/writing`.** Voice only. Facts on the site can be stale. Check the current file.
3. **What he just said in the conversation.** That outranks a guess from training data.

Known public facts, until the site says otherwise: software engineer, frontend, [iO](https://iodigital.com/), [Revolved Design](https://revolveddesign.com/), [Tune Tracker](https://tune-tracker.com/), [GitHub](https://github.com/NSMNIA/), [LinkedIn](https://www.linkedin.com/in/kevinstoop/), [X](https://x.com/kevinstoop_), hello@kevinstoop.com, Ambt Delden, NL.

If you can't verify something, ask, leave it out, or mark it `[VERIFY]` and say what to check. A confident wrong claim is the worst failure. Verify against the source, not a summary of it.

## Core principles

| Principle                 | Do                                             | Don't                                     |
| ------------------------- | ---------------------------------------------- | ----------------------------------------- |
| **Mechanism first**       | Name the subject, the action, and the result   | Dress the point up with a figurative verb |
| **Show the thing**        | A real snippet or a trimmed real file          | A description of code, or a fake example  |
| **Verify**                | Check the repo or the docs                     | Write what sounds right                   |
| **Plain words**           | "trimmed", "the build failed"                  | "excerpted", "leverage", "utilize"        |
| **Choices**               | "we can cache the shell"                       | "the framework gifts you a shell"         |
| **Honest about the cost** | "Drafts stay visible in dev and drop in prod." | Hype, or hiding the catch                 |

## Standing rules

- Don't overstate scope. Don't describe his job, reading habits, or process unless the repo or he confirmed it.
- Read the whole piece for contradictions. If two paragraphs disagree, find the real distinction and state it once.
- Prefer a real excerpt over an invented example.
- Stay plain about tools. Don't announce that you're being honest.
- Never invent how he works to make a sentence land.

## Content-type skills

This skill has no format of its own. Format-specific skills add structure and a checklist on top of the review framework.

| Content type                      | Skill                     |
| --------------------------------- | ------------------------- |
| Notes and posts on kevinstoop.com | `.agents/skills/writing/` |

When a content-type skill exists, read its `SKILL.md` too. To add another type (talks, social), create a sibling skill that points here, and add it to this table.

## Installing elsewhere

This directory is the source of truth. To use the voice in another repo, copy `tech-writing/` into that repo's `.agents/skills/`. Don't sync edits back to anyone else's site.
