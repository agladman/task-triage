# Decision Triage App — PoC

**[→ Try it](https://agladman.github.io/task-triage/)**

A single-file HTML/JS app (no server, no dependencies) that helps you prioritise a list of tasks through pairwise comparison. The core philosophy: help the user discover what they already know, not impose false objectivity.

Based on the [prioritisation matrix](https://en.wikipedia.org/wiki/Paired_comparison_analysis) method.

## How it works

The app adapts based on how many tasks you enter:

- **1 task** — the app closes the tab. You don't need an app for this.
- **2 tasks** — coin toss. "The coin has spoken."
- **3–8 tasks** — full triage: pairwise A/B comparisons → ranked result

Ties are broken by the head-to-head result between tied tasks.

## Future modes

- **Weighted mode** — for decisions where external constraints (deadlines, money, dependencies) are real and quantifiable, alongside softer personal factors
