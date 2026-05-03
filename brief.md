# Decision Triage App — PoC Brief

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

Weighted mode: select and rank factors (Urgency, Importance, etc.); tasks are scored against each factor and the ranking is computed — gives a real breakdown of what drove the order

Additional modes: what to watch, UCAS choices
Free tier: 4 tasks cap (6 comparisons)
Paid tier: higher limits, all modes, saved sessions
