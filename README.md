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
- The interactive inspection bay figure (to be built with the Anatomy skill)

## Next

1. Build the inspection bay hero figure.
2. Add Contact and About pages.
3. Deploy the site.
