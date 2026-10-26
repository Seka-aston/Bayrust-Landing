# Bayrust website

Find the rust before your users do.

Design source for the Bayrust marketing website: independent software quality audits from Kigali, Rwanda.

## Running the site

The website is built with [Astro](https://astro.build). You need Node.js 22.12 or newer.

```sh
npm install      # first time only
npm run dev      # preview at http://localhost:4321
npm run build    # production build in ./dist
npm run check    # check for errors
```

## Where things live

| Path | What it is |
|---|---|
| `src/pages/` | One file per page: `index` (Home), `lenses`, `process`, `work` |
| `src/components/` | Shared pieces: header, footer, contact banner, lens illustrations |
| `src/layouts/Layout.astro` | The page frame every page uses |
| `src/data/site.ts` | Company details and the `[PLACEHOLDERS]` still to fill in |
| `src/data/` | Editable content: lenses, FAQs, process steps, case studies |
| `src/styles/global.css` | Brand colour tokens and shared styles |
| `public/` | Files served as-is, such as the favicon |
| `design/` | The original Claude Design artboards, kept as reference |
| `src/components/loops/` | The animated figures: Fig. 1 (`BayLoop`) and one loop per lens (Figs. 2–6), plus the shared phone, tracker and finding card |
| `src/styles/loop.css` | Shared stage, glass cards, phone and state classes for the figures |
| `src/scripts/loop.ts` | The small player that runs each figure's timeline |

### The animated figures

Each figure is a short scripted loop built in HTML and CSS, with no video files. A figure's script lists its steps (`{ at: ms, add: 'class names' }`) at the bottom of its component; `src/scripts/loop.ts` adds those classes on time, and CSS transitions do the motion. The state classes the shared parts respond to are listed at the top of the shared section in `src/styles/loop.css`.

Loops only play while they are on screen. With reduced motion turned on, each figure shows one still frame instead, set by its `still` list. Below 480px wide (560px for Fig. 1) the figures switch to a portrait layout so their text stays readable.

The names, amounts and timings shown in the figures are sample content.

The files in `design/` are artboards from the Claude Design canvas (`.dc.html` format). They need the canvas runtime to render, so use the Astro site to preview.

## Pages

| File | Page | Contents |
|---|---|---|
| `design/Main.dc.html` | Home | Hero with sample audit report, sectors strip, five-lens tabs, inspection bay figure slot, Why Bayrust, Our work, testimonials, FAQ, call to action |
| `design/Lenses.dc.html` | Five lenses | Usability, accessibility, system logic, user habits and operational requirements in depth |
| `design/Process.dc.html` | How it works | Five-stage audit timeline, anatomy of a finding, severity scale, report contents, pricing scope |
| `design/Work.dc.html` | Our work | Featured case study and filterable case study grid |
| `design/canvas.json` | Canvas index | Layout of the artboards on the canvas |

## Brand

| Token | Hex | Use |
|---|---|---|
| Bay Navy | `#13202E` | Primary text and dark surfaces |
| Steel | `#3C4A5A` | Secondary text |
| Rust Signal | `#C2511F` | The one accent: buttons, markers, findings |
| Rust Text | `#A8441A` | Rust at text sizes (passes AA on light grounds) |
| Report Paper | `#F4F1EC` | Neutral panels |
| Page ground | `#FAF9F7` | Light tint of Report Paper for page backgrounds |

Typefaces: Open Sans (primary), JetBrains Mono (technical detail only).
Logomark: `brand/bayrust-logomark.svg`.

## Still to fill in

- Contact details: email, LinkedIn, response time
- Audit duration and pricing details
- Case studies and testimonials (all placeholders)

## Next

1. Add Contact and About pages.
2. Deploy the site.
