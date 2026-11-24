---
name: sigorhaus-magazine-publish
description: >
  Sigorhaus dual publish (KO WordPress day-trips + EN Astro magazine). Use for
  magazine.sigorhaus.com / blog.sigorhaus.com content, mobile image rules, tables,
  maps, cafes, related footers, region balance, 09:00/21:00 batches.
---

# Sigorhaus magazine + blog publish

## Paths
- Astro: `C:\Users\yubow\Documents\magazine-astro`
- Live EN: https://magazine.sigorhaus.com
- Live KO: https://blog.sigorhaus.com
- Ops: `ops/QUALITY_BAR.md`, `ops/REGION_BALANCE.md`, `ops/sources/ALLOWLIST.md`

## Cadence
- 09:00 and 21:00 KST finalize up to 10 quality pieces each (~20/day).
- Pre-work before checkpoints is allowed.

## Mobile image rule (critical — 2026-11-24 incident)
**Problem:** Astro had no `img` CSS; full-resolution illustrations filled the phone viewport and buried text (WP was fine via theme image blocks).

**Required CSS (already in `src/styles/global.css`):**
- `img { max-width: 100%; height: auto; max-height: 42vh; object-fit: contain; }`
- Desktop can use higher max-height (~520px).
- Never ship Astro posts assuming native PNG dimensions are OK.
- After CSS/layout changes, verify a post on mobile width (~390px) before calling done.

**When generating illustrations:** landscape compositions preferred; avoid ultra-tall portraits for hero art.

## Content requirements
1. Long-form + rebuilt tables + multi maps + real cafes + AI illustration caption + sources.
2. Region: Jeolla/Gyeongsang first; rotate cities; nationwide only if strong brief.
3. KO bottom: optional EN URL one-liner for sharing + 「함께 보면 좋은 지난 발행글」.
4. EN: `koUrl` when pair exists; header/footer link `sigorhaus.com/en/`; related archive footer automatic.
5. No invented businesses; no fake stats; no photo hotlink as final art.

## Publish path
1. Write/update `src/content/posts/*.md` (+ `public/illustrations/*` if needed).
2. GitHub Desktop commit/push `wonhundred1/magazine-astro` → Cloudflare Pages.
3. KO via WP REST with nonce; append EN link + related block; refresh related footers on batch publish.
4. Confirm live EN + KO mobile screenshot or narrow viewport check for images.