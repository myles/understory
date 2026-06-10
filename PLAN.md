# understory improvements plan

Analysis of arcana, clippings, grimoire, myles-garden, and registry projects.
Items are ordered by priority. Pick up from the top.

---

## Batch 1 — Foundation (low effort, high value)

- [x] **`public/robots.txt`** — all 5 reference projects have one; template has none
- [x] **`public/manifest.webmanifest`** — minimal PWA icons (192 + 512 maskable); 4 of 5 projects
- [x] **Full favicon set** — add `favicon-192.png`, `favicon-512.png`, `apple-touch-icon.png` to `public/`; all reference projects have these alongside svg/ico
- [x] **`src/pages/404.astro`** — registry and myles-garden both have one; expected on every site
- [x] **`.nvmrc`** — pin Node version (22.x); 4 of 5 projects have it; complements the `engines` field already in package.json

## Batch 2 — Integrations & tooling

- [x] **`@astrojs/sitemap`** — add to package.json and `astro.config.ts`; used by all 5 projects; include trailing-slash serialization:
  ```ts
  sitemap({ serialize(item) { item.url = item.url.replace(/\/$/, ''); return item; } })
  ```
- [x] **Vitest** — add `vitest` + `@vitest/coverage-v8` to devDeps; add `vitest.config.ts`; add `"test": "vitest run"` script; used by arcana, registry, grimoire; pattern is `src/lib/__tests__/*.test.ts`
- [x] **`Makefile`** — wrap common tasks (`make dev`, `make build`, `make test`, `make check`); 4 of 5 projects have one
- [x] **`date-fns`** — used by arcana, registry, myles-garden; worth including as a default dep

## Batch 3 — Layout.astro enhancements

The registry's `Layout.astro` is the reference. Add to understory's `src/layouts/Layout.astro`:

- [x] **Open Graph tags** — `og:type`, `og:url`, `og:title`, `og:description`, `og:site_name`
- [x] **Twitter/X Card tags** — `twitter:card`, `twitter:url`, `twitter:title`, `twitter:description`
- [x] **`<link rel="manifest" href="/site.webmanifest">`** — done in Batch 1
- [x] **`<link rel="sitemap" href="/sitemap-index.xml">`**
- [x] **`<link rel="apple-touch-icon" href="/apple-touch-icon.png">`** — done in Batch 1
- [x] **`structuredData` prop** — render as `<script type="application/ld+json">` in `<head>`; add `schema-dts` to devDeps for types
- [ ] **`hideHeader` / `hideFooter` props** — deferred to Batch 5 (no site header/footer components exist yet)
- [x] **IndieAuth links** — `authorization_endpoint` + `token_endpoint` (commented-out stubs)
- [x] **`fediverse:creator` meta** — commented-out stub
- [x] **`<link rel="webmention">` stub** — commented-out stub
- [x] **`rel="me"` link stubs** — commented-out stub
- [x] **Analytics stub** — commented-out Tinylytics `<script>` with a TODO

## Batch 4 — Pages

- [x] **`src/pages/llms.txt.ts`** — plain-text site index for LLMs; registry and myles-garden both have one; returns `text/plain` with title, description, and content index
- [x] **`src/pages/feed.xml.ts`** stub — add `@astrojs/rss` to deps; clippings, grimoire, myles-garden all have it; can be a stubbed-out example pointing at a content collection

## Batch 5 — Component scaffolding

- [ ] **`src/components/site/`** — SiteContainer, SiteHeader, SiteContent, SiteFooter pattern; used by arcana and registry; separates site chrome from page layout
- [ ] **`src/components/ui/Pagination.astro`** — appears in 4 of 5 projects; generic enough to template
- [ ] **`src/components/icons/`** — establish the SVG icon component pattern (even if empty); arcana, registry, grimoire, myles-garden all use it
- [ ] **`src/lib/urls.ts`** — URL builder helper stub; used by arcana, registry, clippings

## Packages summary

| Package | Batch | Type |
|---|---|---|
| `@astrojs/sitemap` | 2 | dep |
| `@astrojs/rss` | 4 | dep |
| `date-fns` | 2 | dep |
| `@tailwindcss/typography` | 3 | dep (arcana + registry use it for prose) |
| `vitest` | 2 | devDep |
| `@vitest/coverage-v8` | 2 | devDep |
| `schema-dts` | 3 | devDep |

## Skip (project-specific, not template material)

- ATProto DID (`public/.well-known/atproto-did`)
- `humans.txt`, `twtxt.txt`, `human.json`
- Sentry integration
- Content collections with actual content
- CLI scripts (`src/cli/`)
- Vue/Svelte UI components
- Search functionality
- Specific `rel="me"` / IndieAuth values (user fills these in)
