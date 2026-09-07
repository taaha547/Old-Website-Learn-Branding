# learnbranding.me — content workflow

This turns your Stitch design into a normal Jekyll site. Jekyll is what
GitHub Pages runs natively — you don't install anything, and you don't need
Ruby on your own computer. You push files, GitHub builds the site.

**The rule going forward: you never edit HTML or Tailwind classes again.**
Every new article is one Markdown file. Everything else (header, footer,
fonts, colors, the Table of Contents, the reading-progress bar) is handled
automatically by the layout.

## How to add a new article

1. Copy `_articles/001-how-brands-actually-grow.md`.
2. Rename it to your new article's slug, e.g. `_articles/002-the-loyalty-myth.md`.
3. Edit the front matter (the part between the `---` lines) — title, subtitle,
   tag, category, author, date, read time. Everything there is optional except
   `title`.
4. Write your article body in plain Markdown below the front matter:
   - `## A Heading` becomes a numbered section AND is automatically added to
     the sidebar Table of Contents. You never write TOC links by hand.
   - Regular paragraphs, `**bold**`, `*italic*`, bullet lists (`- like this`),
     and tables all work exactly like a normal Markdown/Word-doc editor.
5. Drop in a reusable visual block anywhere in the body by pasting one line,
   e.g.:
   ```
   {% include components/stat-card.html label="Category Growth" value="24%" caption="Per Kantar tracking" %}
   ```
   See `_includes/components/` for the four available blocks (stat-card,
   quote-callout, key-takeaway, numbered-step) and the example usage comment
   at the top of each file.
6. Optional front-matter blocks:
   - `takeaways:` — a list of strings, renders the orange "Executive Summary" box.
   - `quiz:` — question / options / correct_index / feedback text, renders the
     interactive comprehension check at the end of the article.
   - `next_module:` — points to the next article in the sidebar callout card.
7. Commit and push. GitHub Pages builds it — no local install needed. The new
   article automatically appears on the homepage under its `category`.

## What's deliberately NOT done yet

- The homepage (`index.html`) is intentionally plain right now — not the
  dense multi-panel "workbench" dashboard from the original Stitch export.
  That's a real, separate design decision worth making on purpose (simple/wiki
  vs. dense/animated dashboard) rather than defaulting into it — see the note
  inside `index.html`.
- Three components from the original design were left out of this pass on
  purpose: the SVG data-visualization chart, the diagnostic matrix table, and
  the mid-article CTA banner. They're more one-off than the four included
  components, so they weren't worth generalizing until you know how often
  you'll actually reuse them. Ask for these to be built out once you do.
- This hasn't been tested with a live Jekyll build (this environment doesn't
  have Ruby installed). It should build cleanly on GitHub Pages, but check
  your very first real article's build output carefully before writing all 25.

## File map

```
_config.yml              site settings — collections, Markdown engine
_includes/head.html       fonts + Tailwind config (from the original design, untouched)
_includes/header.html     top navigation bar (from the original design, untouched)
_includes/footer.html     site footer (from the original design, untouched)
_includes/components/     the 4 reusable blocks you can drop into any article
_layouts/article.html     the template every article is wrapped in
_articles/                one file per chapter — this is where you'll spend your time
index.html                homepage, auto-lists every article by category
```
