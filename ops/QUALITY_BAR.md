# Quality bar (20/day target)

## Cadence (KST)
- **09:00** — publish/finalize up to 10 quality pieces (**cap, not quota**)
- **21:00** — publish/finalize up to 10 quality pieces
- Prefer skip over thin filler. Speed never overrides this bar.

## Authority split (locked 2026-11-26 audit)
- **Writer:** draft only → WP `status: pending` / Astro `draft: true` + Drive queue. **No public publish.**
- **Editor:** runs `ops/EDITOR_GATE.md` numeric gate; pass only → WP publish / Astro `draft: false` + deploy.
- Full numeric checklist + reject format: **`ops/EDITOR_GATE.md`**.

## Pre-work vs publish
- Research, outlines, tables, cafe/map checks, and AI illustrations **should start early and thoroughly** before 09:00 / 21:00 when possible — more prep enables more solid publishes at the checkpoint.
- Stage drafts on **Google Drive Aside-Fleet `sigorhaus-queue/YYYY-MM-DD_HHMM/`** (and/or local `src/content/queue/` with `draft: true`).
- **09:00 / 21:00 are publish-only windows**: WP go-live + GitHub/CF deploy happen then, not earlier, unless the user explicitly overrides that run.
- “Start early” from the user = aggressive pre-work + Drive staging, **not** public publish before the hour.

## Region
See `REGION_BALANCE.md`:
- **Priority bump:** regional **festivals, events, seasonal peaks, transit changes, traveler-relevant issues** → cover first with a day-trip/docent angle (still full quality bar).
- Default: Jeolla + Gyeongsang first; nationwide if the brief is strong; rotate cities; famous sites may repeat with new angles.

## Hard minima (editor auto-fail)
| Item | KO (WP) | EN (Astro) |
|------|---------|------------|
| Length | ≥ 1,000 chars no spaces | ≥ 450 words |
| Images | ≥1 body + AI caption + featured | file in repo + live URL is real image |
| Tables | ≥2 (transit + hourly) | same |
| Maps | ≥3 links (dest + hub + food) | same |
| Sections | who / transit / hourly / stops / food / manners / sources | same |
| Sources | ≥2 named orgs + lastVerified | same |
| Links | EN URL + related footer | koUrl + related |

## Food / cafe (single rule)
**Name a shop only if an official or allowlisted public source confirms it for that area; otherwise zone + search method only. Never invent names.**

## Each piece must include
1. Long-form sections (who / **hub stay** / transit table / hourly table / stops / food / manners / sources)
2. **Hub stay line** — not default-Busan-only. Metros/lodging-rich cities (Seoul, Busan, Ulsan, Gyeongju…): **stay in-city, roam nearby** (no alternate-city push). Satellites/thin lodging: nearest hub. Tie to airport/station when relevant (REGION_BALANCE.md)
3. Rebuilt tables (never leave source table screenshots as final)
4. Multiple maps (destination + **hub** + food cluster)
5. Food/cafe per single rule above
6. Illustration-style image (AI), composition shifted from photo refs; caption discloses AI; **file must exist in `public/illustrations/` and deploy**
7. EN = natural tone, not literal KO mirror / not a thin KO summary of a long EN
8. No invented businesses or fake stats
9. **Footer recommendations**: previous published posts always listed at bottom (related/archive)
10. **Mobile images**: every illustration must stay readable on phones — CSS constrains img to max-width:100% and max-height:~42vh (contain). Do not rely on raw full-bleed PNG height. Tables must scroll horizontally on small screens.
11. **Post-publish verify**: live image bytes (not HTML 200), mobile 390px check
