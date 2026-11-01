# Patterns that read as generated

When one of these shows up, rewrite the sentence's structure. Swapping the flagged word for a sibling keeps the same rhythm and stays wrong. Watch tightening passes. Compression breeds punch lines, turning a plain two-clause explanation into a see-saw ("The pattern went in, and plain relative anchors came out."). Shorter means plainer, never punchier. Re-check every shortened sentence against this list.

## Punctuation and rhythm

- **Em dashes, semicolons, and colons that splice clauses.** No em dashes or semicolons in prose. A colon only introduces a list or a code block. Use commas, periods, or parentheses. Punctuation inside quoted data is fine.
- **Comma splices.** Two independent clauses joined by a bare comma. Fix with a period, a conjunction, or a rephrase that folds them into one clause.
- **Choppy declarative flourishes and clipped contrasts** dropped in as a punch line: "That's the whole game." "Scrolling past it doesn't." Explain the action and its purpose in connected prose. Short sentences are fine when they carry information. Don't produce choppy staccato as a workaround for a banned mark either.
- **Repetitive series / tricolons:** "No config. No setup. No maintenance." Combine them.
- **Forced groups and false ranges.** Don't force unrelated points into three items, or write "from X to Y" when X and Y aren't a range. Use the number and relationship the material actually has.
- **Stacked negations as a payoff.** Two "no X" clauses in a row read as marketing. State the payoff, or fold it into a positive clause.
- **See-saw balance:** "a developer routes around it, while an agent walks into the wall". Rephrase so it isn't a matched pair.
- **Decorative bold and inline-label lists.** Don't bold every proper noun or turn prose into `**Performance:** Performance improved...`. Use normal prose, or a real list with a short bold label ending in a period when the list is easier to scan.

## Inversions, aphorisms, and framing

- **"It's not X, it's Y"** and other tidy inversions, including the trailing "..., not just a shell" form and the aphoristic flip. State the point and stop.
- **Aphorism closers and mid-body maxims.** Don't end a section on a neat one-liner. Let the concrete point stand.
- **Signposting and framing inflation:** "The job behind all of this is the same", "It's worth noting that", "That is what makes it interesting". Say the thing.
- **Empty frame sentences:** "The thing to notice here is...". Cut the frame and start with the point.
- **Generic transitions:** "Those releases provide the framework APIs." Name the actual relationship. If the connection is already clear, omit the transition.
- **Restating without adding information.** A sentence that repeats the previous point or paraphrases numbers the reader just saw. Keep an interpretation when it explains a decision. Cut a summary that adds nothing.
- **Over-explaining and self-justifying.** Don't defend choices, don't announce what you're about to explain, don't add a disclaimer nobody asked for.
- **Essayist connectives and stock words:** "wrinkle", "Crucially,", "the fix is", "the common thread", "I want to be upfront", "sharpens the constraint". Prefer plain moves: "However,", "Notice that", "Instead, we can".
- **Sterile cleanup.** Cutting generated phrases can leave a draft flat. Keep supported first-person opinions, concrete reactions, and useful asides. Never invent quirks or feelings that aren't in the source.
- **Vague attribution and puffery:** "experts believe", "industry reports suggest", "pivotal moment", "evolving landscape". Name the source and the fact, or cut the sentence.
- **Superficial `-ing` clauses:** "highlighting", "ensuring", "reflecting", "showcasing" often append a vague consequence. Delete the clause or state the mechanism.

## Verbs and vocabulary

- **Literary flourishes and metaphor verbs,** especially figurative verbs on abstract things: "the friction quietly disappears", "where it pays off", "params landing in the result". Use a concrete verb.
- **Superlatives and hype:** "the truest test", "unusually honest", "surprisingly good".
- **Minimizing and filler words:** just, very, simply, basically, obviously, seamless, robust, leverage, utilize, "in order to".
- **Fancy ways to say `is` or `has`:** "serves as", "stands as", "boasts", "features". Use the plain verb.
- **Abstract technical nouns used as metaphors:** substrate, vector, locus, nexus, primitive, harness, surface, scaffolding, endgame, north star. Keep them when they are the real domain term. Otherwise name the concrete thing.
- **Abstract descriptions in place of a concrete explanation:** "we audited the matching write paths" instead of "we checked that saving a setting invalidates its cached content". Describe what changed, why, and what the user sees when that explains the point.
- **Synonym cycling.** Pick the correct term and repeat it.
- **Adverbs hiding a missing fact:** "significantly improves", "runs quickly". Need a measurement or a concrete behavior, or cut the adverb.
- **Breezy "straight from" phrasing:** "served straight from the edge". State the mechanism: "its result is cached and reused".
- **Generalizing "every" and "each":** "every prompt is a task". Rephrase with a plural, with "the", or drop the quantifier. Idioms like "everything went fine" are fine.
- **Gratuitous counts:** "three calls do everything", "one command". Say what it does. Real load-bearing numbers stay.
- **Vague scale filler:** "a whole screen of links", "a ton of requests". Name the concrete thing.

## Framing the work

- **Passive scene-setting:** "The part we are going to change is...". Start with the component and its role: "The writing page renders each post inside `.entry`."
- **Generic causal justification:** "Dragging requires event handlers, so this is a client component." Name the component's role and show the boundary. Explain the constraint only when it changes the architecture.
- **Presenting a choice as a finished, handed-down feature.** Describe the work as a choice or a capability: "we can give the agent a sandbox".
- **Describing an optional workflow as a fixed pipeline.** Frame it as something he could reach for, not a routine, unless the repo shows it runs every time.
- **Repeated workflow explanations.** Explain a process where it belongs, then let the examples show the changes.
- **Unsupported ownership or causality.** Don't add "we decided" or "the agent did" to make a sentence active. Verify who decided, what the code does, and what the framework does. Don't turn an observed result into a causal claim without evidence.
- **Explaining a mechanism before the reader needs it.** Introduce each mechanism at the point it does work.
- **An inline colon introducing a list mid-sentence** when it's really a list. Use "including" or a real list.

## Communication artifacts

- **Chatbot phrases:** "Of course!", "Great question!", "You're absolutely right!", "I hope this helps", "Let me know if...". Respond to the substance. Posts don't get a stock sign-off.
- **Cutoff disclaimers:** "while specific details are limited". Find the source, mark `[VERIFY]`, or remove the claim.
- **Generic endings:** "the future looks bright". End on the specific result, the trade-off, or the next step.
