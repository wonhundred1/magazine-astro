# Sigorhaus Magazine publish pipeline

## Correction vs intuition

Astro on Cloudflare Pages is **static by default**.
WordPress is usually **more real-time** (save → next page load).
Astro becomes "fresh" only after **content change + build + deploy**.

Cron (Aside routine / n8n / Hermes) does **not** create true real-time.
It creates a **batch-updated static magazine** (good fit: 1–2 times per day).

## Recommended architecture

Allowlisted official sources
  -> scheduled agent drafts Markdown (draft: true)
  -> human approve (default)
  -> draft: false + git push
  -> Cloudflare Pages build
  -> magazine.sigorhaus.com

Updating old posts: edit the same Markdown, bump updatedDate/lastVerified, push.

## Folders
- src/content/posts/ published markdown
- src/content/queue/ scratch drafts
- ops/sources/ALLOWLIST.md source rules