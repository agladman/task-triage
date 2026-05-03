# Decision Triage App — PoC Brief

**[→ Try it](https://agladman.github.io/task-triage/)**

## Concept
A local, single-file HTML/JS app (no API, no dependencies) that helps users make quick decisions by structuring their thinking. The core philosophy: help the user discover what they already know, not impose false objectivity.

## PoC: To-do Triage

The app adapts based on how many tasks are entered:

### 1 task — Just do it
The app closes the tab. If it can't, it redirects to a Rickroll. No results screen. The app refuses to engage.

### 2 tasks — Coin toss
A random winner is picked. Result screen: "The coin has spoken." / "Now stop dithering."

### 3–8 tasks — Full triage
Enter tasks → pairwise A/B comparisons → ranked result

Minimum 3 tasks, maximum 8 (28 comparisons). Ties broken by head-to-head result.

### Design Principles

- Clean, fast UI — feels considered, not like a settings panel
- Has a point of view
- Rotating comparison prompts across 8 variants
- Dot-per-comparison progress indicator; undo last choice ("← Actually…")
- Results exportable as plain text or markdown checklist
- TASK TRIAGE background texture; Anton display font for headings
- Accent colour cycles randomly on each reload (violet, teal, orange, pink, blue, green)

## Future thinking (not for PoC)

### Weighted mode
A hybrid scoring model for decisions where external constraints are real and quantifiable:

- **Hard factors** (concrete, external) — deadline proximity, money/payment status, blocking dependencies. Contribute real weighted scores. Input via fast bucket selection, not typing or date pickers (e.g. deadline: this week / this month / this quarter / none; payment: paid / unpaid but funded / speculative)
- **Soft factors** (personal, directional) — long-term importance, goal alignment. Act as a +1 nudge rather than a primary score driver. Binary yes/no per task.

When hard factor scores are tied, soft +1s break the deadlock. Designed for portfolio-style decisions (e.g. competing creative or professional projects) where opportunity cost is real.

Input must feel like rapid-fire tagging — tap tap tap, done. Not a form, not a spreadsheet.

### Other
Additional modes: what to watch, UCAS choices
Free tier: 4 tasks cap (6 comparisons)
Paid tier: higher limits, all modes, saved sessions
