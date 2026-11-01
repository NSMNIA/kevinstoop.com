# Review framework

How to review a draft in Kevin's voice, whether an agent wrote it or edited it. Don't try to catch everything in one read. Use sequential passes, each with a single focus. If the content type has its own skill (`writing`), run its checklist after Pass 4.

## Pass 1: Facts and sources

Is every claim real?

- [ ] Every claim about his work, PRs, numbers, or behavior is verified against a real source (the repo, the PR, the site file), not a summary of one
- [ ] No invented examples where a real excerpt exists
- [ ] Nothing describes how he works or reads unless he or the repo confirmed it
- [ ] Anything unverifiable is marked `[VERIFY]` with a note on what to check, or removed

This is the highest-risk pass. Training data and plausible recall don't count as sources.

## Pass 2: Structure and ordering

Does the piece build in the right order?

- [ ] Nothing references a concept, component, or mechanism before the text introduces it
- [ ] Each mechanism appears at the point it does work, not earlier
- [ ] API behavior, component scope, control flow, and other implementation specifics are shown with the smallest relevant real snippet, not a long prose-only explanation
- [ ] Claims across sections line up. Contradictions are resolved into one stated distinction
- [ ] Paired information (before/after, finding/fix, option/trade-off) is a table or list, not a run-on sentence
- [ ] No heading sits over a single short paragraph
- [ ] A short note stays a short note. No headings added to satisfy a template

## Pass 3: Voice and anti-AI

Read every sentence against [anti-ai-patterns.md](anti-ai-patterns.md).

- [ ] Grep for `—`, `–`, and `;` in prose. Every remaining `:` introduces a list or a code block
- [ ] No inversions, aphorisms, signposting, empty frames, or essayist connectives
- [ ] No metaphor verbs, superlatives, filler words, or vague quantifiers
- [ ] No vague attributions, puffery, superficial `-ing` clauses, forced groups of three, or false ranges
- [ ] No decorative bold, inline-label colon lists, synonym cycling, or abstract technical nouns used as metaphors
- [ ] Active voice names the actor when it matters. Dense sentences are split. Adverbs carry a fact or are removed
- [ ] No sentence opens on inline code
- [ ] No vague referents. Every heading and claim names its noun
- [ ] No word echoes. No quality words that can't be unpacked into behavior
- [ ] "In the interface" / "in the UI" is replaced by the surface that changed
- [ ] The cleanup did not sterilize the draft. Supported first-person opinions, concrete reactions, and honest uncertainty remain
- [ ] No stock sign-off, emoji closer, or "I hope this helps"

## Pass 4: Code

Check every snippet against the code rules in [style-rules.md](style-rules.md).

- [ ] File-path comments, tagged fences, trimmed to the point
- [ ] The surrounding prose points at the artifact ("this hook", "this component", "this call", "here"), then adds only what the reader cannot see
- [ ] No unexplained helpers. What's beside the point is collapsed into a comment that says what it was
- [ ] All snippets type-check against each other. Simplifications are flagged and applied consistently
- [ ] Full-file snippets come from the repo file, not stitched from earlier fragments
- [ ] Snippets match the current state of the real repo
- [ ] Security checks before a write are still in the snippet

## Closing rule

Any rule added or clarified during the edit has been applied across the whole draft, not only to the sentence that prompted it.
