# Style rules

Sentence-level and snippet-level rules for anything written in Kevin's voice. The [anti-AI patterns](anti-ai-patterns.md) are the never-do list.

## Prose

- Connected sentences that show the relationship (because, so, while), with short sentences to land a fact.
- First person. Past tense for what he did, present tense for how things work.
- Keep a real speaker. When he has an opinion or an uncertainty, state it in first person and tie it to the detail that caused it. Never invent personality to liven up neutral material.
- Default to "I". Use "we" / "our" for a walkthrough the reader is doing with him. When a sentence could go either way, use "I".
- Let code and real examples carry the weight. The prose points at them.
- When prose explains API behavior, component scope, control flow, or several implementation details, show the smallest relevant real snippet. Don't carry a walkthrough in a long prose-only paragraph when the code is more precise.
- Point at the artifact. "This hook", "this component", "this call", "here". Then explain only what the reader cannot see in the snippet.
- Divide the work around a snippet. The lead-in says why the code is here and names the new idea. The paragraph after it says what now happens, or what it costs. Don't narrate the lines, and don't repeat the same result on both sides.
- After the code, at most one line on what now works.
- Paragraphs lead. One idea per beat. The detail lives in the snippet.
- Consecutive paragraphs connect. The opener picks up something from the paragraph before it. Mark a pivot ("However,", "Instead,"). A topic change says why the previous paragraph made it necessary.
- Prefer direct containment. "We can handle a failed save inside the callback." Don't say a callback "gives us a place" to handle it.
- Name the surface. "On screen", "in the sidebar", "in the footer". Not "in the interface" or "in the UI" when a concrete part changed.
- Plain words. "The logs in this post", not "the excerpts". "Trimmed", not "excerpted". If a fancier word does no more than a plain one, use the plain one.
- Describe the process. "The task stays fixed and one thing changes" beats a list of personal capabilities.
- Link a tool where it's used, with a short note on what it does. Link once unless a reader might land in a later section directly.
- Open a paragraph on what it's about. Don't open on a back-reference that only parses if you already know the topic.
- Don't open a sentence with inline code. Lead with a word: "Turning on `draft` keeps the post in dev and drops it from the production build." A definition list may start each item on the name it defines.
- No vague referents. "The simplest one", "that changes things", or a heading like "Driving it from the URL" leave the reader asking what. Name the noun, including in headings.
- Watch for word echoes: the same distinctive word twice in close range. Vary one, or restructure.
- Repeat the correct technical term when it keeps the subject clear. Don't cycle synonyms to avoid repetition.
- A quality word has to mean a behavior. "The field stays instant" says nothing. "It renders in the static shell and keeps focus while results stream" says what happens. If a claim can't be unpacked, replace it with the behavior.
- Active voice when the actor matters. "The loader skips drafts in production" is clearer than "drafts are skipped". Passive is fine when the actor is unknown or beside the point.
- Split a sentence when the reader has to backtrack. One main idea per sentence, then connect the next one with the real cause.
- Cut adverbs that only prop up a weak verb. Replace them with the behavior, a measurement, or a plainer verb.
- When two kinds of information pair up (before and after, finding and fix, option and cost), use a table or list.
- When a claim needs a quantity, give the real number or qualify it ("up to", "approximately"). No vague quantifiers ("significantly", "dramatically") and no decorative counts.

## Punctuation and mechanics

- No em dashes and no semicolons in prose. A colon only introduces a list or a code block. Use commas, periods, or parentheses. Punctuation inside quoted data, like a real log, stays as-is.
- Oxford commas.
- Spell out an abbreviation on first use unless it's universal (HTML, CSS, API, URL, MDX).
- Inline code for identifiers, file paths, config values, and commands. Function references in prose take parentheses: `getPosts()`.
- Sentence case for headings and post titles. "Putting the notes here", not "Putting The Notes Here".

## Code snippets

- **Start most snippets with a file-path comment:** `// src/lib/posts.ts`. It tells the reader where the code lives.
- **Keep each snippet to the one point** the paragraph makes. Drop unrelated markup.
- **Collapse the parts that don't matter** with `// ...` or `// ...fetch logic...`.
- **Keep the structural outline when it explains the pattern.** For a switch, a route tree, or a group of handlers, show the cases and collapse the bodies that aren't the point.
- **Never collapse security checks into a comment.** Auth, ownership, and validation before a write stay in any snippet that shows the write. Readers copy the code and skip comments. Elide payload shaping or cache invalidation instead.
- **Don't leave unexplained helpers in a snippet.** An identifier is introduced, obvious from the platform, or central to the pattern. Decide per piece. Don't pull in a helper the text never explains just to make a snippet look full.
- **Flag the key line with an inline comment:** `const posts = await getPosts(); // drafts already removed in prod`.
- **Snippets look real.** Include the imports that matter. If a value needs replacing, make the placeholder obvious.
- **Use the real names from the repo** (`getPosts`, `Note`, `writing`), not `getData` / `MyComponent` stand-ins. Verify snippets against the current file before publishing.
- **All snippets in a piece type-check against each other.** If a function is defined with one argument, later call sites use one argument. When the text simplifies the real file, flag it (`// Simplified: no draft filter`) and keep every later snippet on that simplified version.
- **Assemble a full-file snippet from the repo file,** not by stitching earlier fragments. If you can't read the real file, assemble only what the text already shows, leave out guesses, and say what to check.
- **Drop comments that carry no information.** Keep the file-path comment and key-line flags. No decorative arrows. The explanation lives in the prose.
- **Always tag the fence** (`tsx`, `ts`, `astro`, `mdx`, `bash`, `text`). Use `text` for terminal output, build output, route tables, file trees, and verbatim prompts.
- **Show expected output when it makes the point,** in its own `text` block.
- A before/after pair is for contrasting two approaches, not as decoration.
- Anything quoted verbatim (a log, a terminal transcript) is data. Keep it exact, including punctuation the prose rules ban.
