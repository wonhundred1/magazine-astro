# Editor gate (numeric hard fail)

Locked from audit 2026-11-26 (self-mail + live site check).  
Writer may draft only. **Editor publishes.** Thin pieces skip — never pad to hit a count. Batch “10” is a **cap**, not a quota.

## Authority split
| Role | May do | Must not |
|------|--------|----------|
| **Writer agent** | Research, draft, Drive `sigorhaus-queue/`, local `src/content/queue/`, WP `status: pending` (or private draft), Astro `draft: true` | WP `publish`, Astro `draft: false` + production push, public CF go-live |
| **Editor agent** | Run this gate; pass → WP publish / Astro `draft: false` + deploy; fail → reject with reasons; post-publish live verify | Invent shops/stats to “fix” a fail; lower the bar under time pressure |

## Hard minima (any miss = reject)

| Item | KO (WordPress) | EN (magazine Astro) |
|------|----------------|---------------------|
| Length | ≥ **1,000** chars (no spaces) | ≥ **450** words |
| Images | ≥1 body image + AI caption + **featured image** | File exists under `public/illustrations/` **and** live URL returns image |
| Tables | ≥2 (transit + hourly) | same |
| Map links | ≥3 (destination, hub, food cluster) | same |
| Required sections | **7**: who-for, transit, hourly, stops, food, manners, sources | same |
| Sources | ≥2 named agencies + `lastVerified` date | same |
| Pair links | EN URL line + related footer | `koUrl` when pair exists + related |

## Food / cafe rule (one line — resolves QUALITY_BAR vs CHECKLIST clash)
**Name a shop only if an official or allowlisted public source confirms it for that area; otherwise use zone + search method only. Never invent names.**

## Two-pass editor check
1. **Auto:** count chars/words, image presence, map/table counts, section headings, source names, pair links.
2. **Judgment:** not a KO↔EN summary clone; fares/hours match cited sources; no invented shops; hub-stay honest.
3. **Post-publish:** open live URL; image loads; mobile ~390px hero ≤ ~42vh; broken asset = fail even if markdown looked fine.

## Reject output format
```
REJECT <slug-or-title>
- missing: ...
- weak: ...
- fix-next: ...
```

## Pass output format
```
PASS <slug-or-title> → published URL
```

## Cadence
- Writer pre-work anytime; stage only.
- Publish windows remain **09:00 / 21:00 KST**.
- Editor post-audit routine: **09:30 / 21:30 KST** on the batch just published (and any pending queue).
- Daily report: pass/reject list + top missing items → Drive `02-status` and notify user.
