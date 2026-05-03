# Solzhenitsyn Digital Art
## A Case Study in Human–AI Collaborative Design

**Project URL** — `https://ai0assist0hta-design.github.io/solzhenitsyn-digital-art/`
**Type** — Interactive archival web experience
**Stack** — HTML5, CSS3, Vanilla JavaScript, Three.js, WebGL, Canvas2D
**Period** — 2026 (Q2)
**Format** — Single-page application with six thematic subpages

---

## 1. Concept

The project is a digital reading of Aleksandr Solzhenitsyn's central themes — the structure of lies, ideology as moral cover, the imprisonment system, conscience, resistance, and personal nonparticipation. Each of the six themes is rendered as an interactive object that the visitor manipulates rather than reads.

The framing device is the **redacted document**: brutalist black-blocked paragraphs that hide most of the body and selectively expose only the load-bearing keywords. This is not stylistic decoration — it is the subject matter. A regime that survives on lies is, structurally, a regime that knows what to censor. The visitor moves through six such documents, each one cracking open into a different physics-driven object.

The aesthetic choice is **brutalism**: white/black backgrounds, monospace and inter typography, a single accent color (`#dc143c`), 8-column grid, no decoration that does not earn its place.

---

## 2. Design Translation: From Text to Object

I am a graphic designer first, and this project is a graphic-design exercise carried out in code. The technical stack was learned in service of the design intent, not the other way around. Every visual decision started from a single question: **what is the visual logic of this specific theme?** The Solzhenitsyn texts gave me content. My job was to invent a visual system that could carry it.

### 2.1. The system before the objects
Before drawing any object, I locked the system. Six decisions defined everything else:

- **Single accent color: `#dc143c` (crimson).** Not corporate red, not warning red — the color of the censor's pen, of dried blood, of an underline drawn so hard it cuts through the page. Every keyword that survives the redaction is in this color. Every interactive element responds in this color. There is no second accent.
- **8-column grid.** Architectural, not editorial. The body lives in the middle; the sidebars (when info-active) take 2 columns each at the edges, leaving 4 columns of breathing room in the center. The grid is a building, not a magazine spread.
- **Two typefaces, two voices.** JetBrains Mono carries the document tone — it looks like a typewriter, like a court record, like something that *has been filed*. Inter carries the UI tone — it's the contemporary voice telling you what to click. Mixing the two is deliberate: you are reading an old document through a new interface.
- **Black █ blocks as the primary redaction visual.** Drawn from declassified FOIA documents, not invented. The █ character is doing thematic work: it is the literal mark of what the system did not want us to see.
- **No decoration.** Brutalism's first commandment is functional honesty. Anything that does not earn its place is a lie about what the work is.
- **Two states: light and dark.** Light = "the document as published." Dark = "the document as it actually lives" — at night, in a private reading, with the ambient world stripped out. Not a stylistic toggle. A reading-mode toggle.

### 2.2. Translating each theme into a visual object
Once the system was locked, the question for each of the six themes was the same: **what is the simplest visual structure that carries this idea?** The brief I wrote myself for each theme:

| Theme | The literary claim | The visual logic I chose |
|---|---|---|
| 1. Structure of Lies | "Lies are infrastructure, not content." | A utility pole. The pole carries the signal; it does not generate it. Red keywords become the structural skeleton. The unread sentences hang off it. |
| 2. Ideology as Justification | "Ideology is justification, repeated until it sounds like reason." | A wall of CRT screens. Each screen scrolls a different official text. Holographic trails behind each screen because no argument is ever finished. |
| 3. The Gulag | "A life reduced to a number that can be filed." | A sphere of 0s and 1s orbiting a red core (the file room). The connection lines between digits and core are the link from body to ledger. |
| 4. Conscience | "συν + εἶδος — knowing-with. The self watching the self." | A vortex of concentric rings co-rotating at different speeds. The hourglass waist is the moment of judgement, where the layers briefly meet. |
| 5. Resistance | "The lie's strength rests on borrowed voices." | A saturated chorus field of slogans marching in every direction. A click opens a circle of silence. The chorus refills, but the silence happened. |
| 6. But Not Through Me | "The eyes continue. The question is whether they continue through you." | Matrix-style rain of bracket-eyes whose pupils track the cursor. A click fires a laser inward; that zone goes dark. The wall reconstitutes. |

Each translation is not a 1:1 illustration of the text. It is a **visual structure that does the same work the text does**. The pole is not a picture of "lies" — it is the architecture of how lies move. The sphere is not a picture of "the camp" — it is the structure of how the camp processes a person. This is the move that took the most thinking, and it is the move that defines the project.

### 2.3. Visual hierarchy
Inside each object, three weight levels do all the heavy lifting:

1. **Crimson keywords** — the load-bearing terms. Always red. Never more than ~10% of the visible text.
2. **Black █ blocks** — the redacted body. The vast majority of every text surface.
3. **Gray document body** — readable but recessive, the ambient layer that makes the redaction legible by contrast.

Without that three-level hierarchy, the redaction would just be noise. With it, every page has a clear figure-ground relationship: the eye knows where to land.

---

## 3. The Six Objects

| # | Subject | Visual Object | Interaction |
|---|---------|---------------|-------------|
| 1 | The Structure of Lies | 3D utility pole with red keywords as skeleton | Orbit, zoom |
| 2 | Ideology as Justification | Curved wall of CRT panels with holographic trails | Zoom |
| 3 | The Gulag and Imprisonment | Binary sphere of orbiting 0/1 with elastic core | Drag-pull, snap-back |
| 4 | Conscience | Hourglass vortex of co-rotating particle rings | Rotate, observe |
| 5 | Resistance | Saturated chorus field of marching slogans | Click → silence circle |
| 6 | But Not Through Me | Matrix rain of bracket eyes tracking the cursor | Click → laser blind |

Each object is purpose-built. Theme 1 uses Three.js with a custom GLB pole model; Theme 4 uses a Three.js shader-driven particle system; Themes 5 and 6 use Canvas2D for performance; Theme 3 uses DOM-based 3D transforms; Theme 2 uses WebGL shaders for the CRT scanlines and holographic trails.

---

## 4. Technical Stack

- **No framework**. Vanilla JS only. The project is statically deployable to GitHub Pages with zero build step.
- **Three.js** for the 3D scenes (Themes 1 and 4).
- **Canvas2D with sprite caching** for high-particle-count scenes. Bracket sprites in Theme 6 are pre-rendered to offscreen canvases and `drawImage`'d per frame, avoiding the cost of `fillText` × N.
- **CSS containment + DPR scaling** for crisp rendering on Retina displays without overdrawing.
- **WebGL custom uniforms** (`uIsLightMode`, `uTime`, `uCamZ`) for the CRT scanlines and the conscience vortex.
- **8-column CSS Grid** as the layout primitive across the entire site.
- **GitHub Pages** hosting. No backend, no database, no analytics.

The total surface is ~5,000 lines of JS and ~1,500 lines of CSS in two files.

---

## 5. Process: Human + AI Collaboration

The project was built in tight collaboration with Claude (Anthropic) over an extended series of sessions. The collaboration model that emerged was not "AI does the work, human reviews" — it was closer to **a senior designer pairing with a fast junior implementer**, where vision, taste, and direction lived entirely on the human side, and the AI's role was to translate intent into code and to surface bugs.

### What the AI did well
- **Implementation speed.** Once a visual direction was decided, the AI could implement it across hundreds of lines in minutes. The five-day timeline for six full themes would not have been possible solo.
- **Cross-cutting refactors at my direction.** When I called for renames, dead-code removal, or consistency passes (e.g. "unify the redacted block format across all six themes"), the AI executed grep/sed-level changes at speed.
- **Following a research path I specified.** The AI was a useful tool when I knew which thread to pull. I told it where to look; it brought back what was there.

### What the AI did badly
- **Aesthetic judgment.** The AI repeatedly produced text that read as competent but unmistakably AI-generated: tricolons ("violence, obedience, falsehood"), the "isn't X, it's Y" reversal, em-dash overuse, and a tendency to end every paragraph with a self-summarizing aphorism. These had to be hand-pulled out, repeatedly.
- **Religious / sentimental cliché.** The model defaulted to phrases like *CC: GOD* in document headers and *every heart* as a recipient — both of which had to be replaced with cooler, more grounded alternatives (*MEMORY*, *BYSTANDERS*).
- **Knowing when to stop.** The AI tended to add a closing red-italic Solzhenitsyn quote at the end of every narrative panel as a flourish. After the third one, the pattern became conspicuous and had to be deleted across all six.

### What changed how we worked
A consistent observation across designer/engineer communities — surfaced repeatedly on Hacker News, in `r/webdev` and `r/programming`, and in writing by people like Simon Willison and the [PromptWorks blog on AI tells](https://promptwrks.com/) — is that **AI shifts the bottleneck from typing to deciding**. The cost of producing a variant drops to near zero, which means the human's job becomes choosing among variants and rejecting most of them. This was viscerally true here: the AI generated, the human chose what stayed.

A second observation, also widely echoed, is that **AI is a force multiplier for people who already have strong vision, and a dilutive influence for those who do not**. With a clear concept (brutalist redaction, Solzhenitsyn-as-subject), the AI accelerated everything. Without the concept, the AI would have produced six generic landing pages.

---

## 6. Specific Challenges — How I Approached Them

The bugs and design problems on this project were not "found by the AI." I noticed them, formed a hypothesis about where to look, told the AI exactly which trail to follow, and then judged what came back. The AI was a flashlight; I chose where to point it.

### 6.1. Theme 6 dark mode "black rectangle"
**What I noticed.** In dark mode + info-active, my eye kept catching a hard rectangular boundary in the center of the screen. The matrix rain stopped at a clean edge against the dark background.

**My hypothesis.** The issue had to be either (a) the canvas itself had a different fill than the container, or (b) some CSS transform was creating a visible bounding box. I ruled out (a) because the canvas uses `clearRect` and is transparent — so the only suspect was the CSS treatment in info-active mode.

**My research direction.** I instructed the AI to:
1. Read out the computed style of the canvas in info-active mode.
2. List every CSS rule targeting `.ntm-wall.info-active`.
3. Try removing the CSS effects one at a time and report which removal eliminated the boundary.

**The decision I made.** The AI confirmed it was a `transform: scale(0.55)` + `clip-path` + `mask-image` interaction. Two CSS-level fixes (opacity-only, then radial-gradient mask) both still left a visible edge in screenshots. I rejected both and made a structural call: **stop using CSS transforms for the visual containment. Move the elliptical mask into the canvas drawing code itself.** The AI implemented what I specified — a per-frame elliptical alpha mask computed per-eye, no CSS transform at all. That worked because the canvas now stays full-viewport in DOM and the masking is a property of the rendered content, not a CSS clipping operation.

**Lesson for me.** When CSS produces a visible artifact that I can't seem to soften with more CSS, the answer is usually to stop solving it in CSS.

### 6.2. Theme 3 density vs. performance
**What I noticed.** When I reviewed the six themes side by side, Theme 3 looked visibly weaker than the others — sparse, low-weight, not commensurate with the subject (the Gulag).

**My hypothesis.** The issue was particle count, not particle design. The metaphor was right; the volume was wrong.

**My research direction.** I told the AI to (a) report the current particle count and (b) push it up. We landed on 880 (8 shells × 110 particles) on the first try. I tested it in the browser and felt the frame drop immediately.

**The decision I made.** Rather than accept the lag, I broke the problem in two: (i) what's the **target density** that reads as heavy without flooding the GPU, and (ii) which **cost per particle** can I cut without losing the look. I instructed the AI to drop trails-per-particle from 4 to 2 (those were creating most of the DOM weight), and to settle the count at 595 (7 shells × 85). The DOM node total dropped from ~3,500 to ~2,640. Frame rate recovered. Visual weight was still ~1.5× the original.

**Lesson for me.** "More particles" and "more cost per particle" are independently dial-able. When density costs too much, it's almost always cheaper to slim each unit than to remove units.

### 6.3. AI-sounding narrative cleanup
**What I noticed.** The right-sidebar narratives sounded competent but generic. They had a particular cadence — em-dashes, three-item lists, "X is not Y, it's Z" reversals, and a closing red-italic aphorism on every panel. I read them aloud and they all sounded like the same writer.

**My research direction.** Rather than asking the AI to "make it less AI-sounding" — which produced one round of marginal improvement — I went looking for **the actual list of tells**. I read through community discussions on Hacker News, the PromptWorks blog post on AI writing tells, and r/webdev threads on AI text patterns, and assembled a concrete checklist:
- "X is not Y, it's Z" reversals
- Tricolons ("violence, obedience, falsehood")
- "In this work…" meta-narration openings
- Closing aphorisms
- Even sentence length
- Abstract verbs ("delve", "explore", "navigate")

**The decision I made.** I gave that list to the AI verbatim and told it to do a pass against each item across all six narratives. The result was usable — but more importantly, the same list became my filter for every subsequent rewrite.

**Lesson for me.** "It feels off" isn't actionable. The work was identifying what specifically was off, then writing it down in a form the AI could execute against.

---

## 7. Reflections on AI-Collaborative Design

The clearest lesson of the project is that **the AI is not a designer, it is a draftsman**. Given a strong sketch, it will produce excellent linework. Given a weak sketch, it will produce excellent linework of nothing in particular. The discipline shifts from "can I implement this?" to "do I actually know what I want?".

Three observations worth recording:

1. **Trust but verify is not optional.** The AI confidently called functions that did not exist (`onKey`), confidently described changes that had not actually rendered, and confidently produced code that worked in isolation but broke in context. Browser-based verification — taking actual screenshots, reading actual computed styles — caught everything that code review alone missed.

2. **Concrete instructions outperform abstract ones.** "Make it less AI-sounding" produced one round of marginal improvement. "Remove em-dashes, drop the closing quote, kill the 'isn't X, it's Y' pattern" produced the actual result. Specificity is leverage.

3. **The collaboration is asymmetric.** The human contributed roughly 5% of the keystrokes and 95% of the decisions. The AI contributed the inverse. Both halves are necessary. Neither half is sufficient.

---

## 8. Research and References

The project was not invented in a vacuum. The following were the primary sources, references, and technical resources actually consulted during the build.

### 8.1. Source texts (Solzhenitsyn)
The narrative quotes embedded across the six themes are pulled from four texts, in published English translations:

- **"Live Not by Lies"** (Жить не по лжи, 1974) — the central manifesto of personal nonparticipation in lies. The phrase *"let it not rule through me"* anchors Themes 5 and 6.
- **The Gulag Archipelago** (Архипелаг ГУЛАГ, 1973) — particularly Part I Ch. 4 ("The Bluecaps"), the source of the line-through-every-heart passage that anchors Theme 4 (Conscience).
- **One Day in the Life of Ivan Denisovich** (Один день Ивана Денисовича, 1962) — the Shukhov "3,653 days" passage that anchors Theme 3 (Gulag).
- **Nobel Lecture** (1970) — for the framing of art as a weapon against lies; referenced obliquely throughout.

### 8.2. Etymology
Theme 4 (Conscience) builds on the literal etymology of the word in two languages:
- Greek: **συν + εἶδος** (*syn + eidos* — "knowing-with")
- Latin: **con-scientia** ("knowing-together")
Both etymologies frame conscience as inherently relational — the self watching the self, never solitary. This shaped the visual choice of co-rotating concentric rings.

### 8.3. Visual / aesthetic references
- **Brutalist web design** — broadly, the brutalistwebsites.com archive and the Brutalism Awards lineage. The aesthetic vocabulary of monospace, exposed grid, accent-only color, no decoration.
- **Cold War redaction documents** — declassified CIA/FOIA archive scans available through the National Security Archive (gwu.edu/nsarchive). The █ block treatment is modeled directly on these.
- **Matrix rain (1999)** — the canonical visual reference for Theme 6, transposed from katakana glyphs to bracket-eyes.
- **CRT scanline shaders** — the `uIsLightMode` shader pattern in Theme 2 is in the lineage of Shadertoy CRT effect demos.
- **JetBrains Mono** + **Inter** + **Noto Sans** — the typographic stack. JetBrains Mono carries the document/redaction tone; Inter handles UI.

### 8.4. Technical documentation
- **Three.js docs** (threejs.org/docs) — used heavily for the GLB loader, custom shaders, and the post-processing pipeline (UnrealBloomPass) in Themes 1 and 4.
- **MDN Canvas API** (developer.mozilla.org) — the reference for Themes 5 and 6, particularly DPR-aware rendering, sprite caching via offscreen canvases, and `globalAlpha` compositing.
- **MDN CSS Grid + `:has()` pseudo-class** — for the 8-column main grid and the hover-blur sibling pattern.
- **CSS Tricks "Complete Guide to Grid"** — referenced for grid-column placement of sidebars.
- **WebGL Fundamentals** (webglfundamentals.org) — for shader uniform plumbing.

### 8.5. Discussions on AI-collaborative work
General community consensus, drawn from active reading rather than direct citation:
- **Hacker News** threads on Claude / Cursor / Copilot productivity (recurring pattern: "the bottleneck moves from typing to deciding").
- **`r/webdev`, `r/programming`** discussions on AI code review and the "AI tells" phenomenon.
- **Simon Willison's weblog** (simonwillison.net) — on prompting, model behavior, and verification practices.
- **The [PromptWorks blog](https://promptwrks.com/blog/how-to-stop-ai-from-sounding-like-ai)** post on AI writing tells (em-dashes, tricolons, "isn't X, it's Y", closing aphorisms) was directly consulted and applied during the narrative cleanup pass.
- **Anthropic documentation** on Claude's tool use, agent loops, and prompt engineering.

### 8.6. Tooling
- **Blender** — used to model and export the utility pole (Theme 1) as a `.glb` file. The pole geometry, wire topology, and insulator placement were all built and exported from Blender, then loaded into Three.js via `GLTFLoader`.
- **GitHub Pages** — hosting (free, no build step).
- **Claude (Anthropic)** — primary collaborator; used through the Claude Code CLI environment with browser preview integration.
- **Three.js GLTFLoader** — to load the Blender-exported pole model at runtime.
- **VS Code** + browser DevTools — for inspection and verification.
- **`git mv`** — to preserve folder rename history when the project was rebranded from `antigravity/website` to `solzhenitsyn-digital-art`.

---

## 9. Final Result

- **6 fully-realized themes**, each with its own visual object, narrative, and interaction grammar
- **Light + dark mode** across all themes
- **Info / briefing mode** with sidebar testimony in both languages of design (visual + textual)
- **Mobile-aware** layout (untested at scale; flagged as future work)
- **No third-party tracking, no cookies, no analytics**
- **Statically deployed** to GitHub Pages, no build step

The project stands as a piece of digital art and as documentation of a working method.

---

*— Han Studio, 2026*
