# AGENTS.md

This file provides guidance to coding agents working with code in this repository.

## What this is

Understory is an Astro starter template, consumed via `npm create astro@latest -- --template myles/understory`. Changes here ship to every project created from it, so keep the baseline minimal and opinionated rather than feature-rich. Node `>=22.12.0`.

## Commands

| Task                    | Command                                   |
| ----------------------- | ----------------------------------------- |
| Dev server (port 4321)  | `npm run dev`                             |
| Build to `dist/`        | `npm run build`                           |
| Type-check (Astro + TS) | `npm run check`                           |
| Lint / autofix          | `npm run lint` / `npm run lint:fix`       |
| Format check / write    | `npm run format` / `npm run format:write` |

Before calling work done, run `npm run check`, `npm run lint`, `npm run format` and `npm run build`, plus tests once Vitest is set up. Nothing enforces this — there's no CI or pre-commit hook.

## Testing

Use [Vitest](https://vitest.dev) for tests. Don't add Jest, Mocha or another runner.

It isn't installed yet. When adding the first test:

1. Install `vitest` as a dev dependency.
2. Create `vitest.config.ts` that wraps Astro's `getViteConfig` (from `astro/config`), so tests share the `@/` alias and Vite plugins.
3. Add `"test": "vitest"` to the `package.json` scripts.

Run one file with `npx vitest run path/to/file.test.ts`, or filter by test name with `-t "name"`.

## Shared packages first

Prefer the `@myles-garden/*` packages over writing local code or installing alternatives.

### Utilities

Before writing a helper or installing a package, check `@myles-garden/utils` (see its README in `node_modules/@myles-garden/utils`). It covers display formatting for lists, URLs, ISBNs and coordinates; pluralisation; title case; sort keys; time-zone-aware date formatting and maths (defaults to `America/Toronto`); and zod schemas for partial dates. Its entry points are the root plus `/array`, `/date`, `/regex`, `/text` and `/zod`.

`/date` and `/zod` need the optional peers `date-fns`, `@date-fns/tz` and `zod`. Install those rather than an alternative date or validation library.

If a helper belongs in the shared package, say so rather than adding a local copy.

### Styles and fonts

Style with the tokens from `@myles-garden/styles` (README in `node_modules/@myles-garden/styles`) rather than raw hex values, Tailwind's default palette, or new `@theme` entries:

- **Colours:** `--color-*` tokens such as `parchment`, `inkwell`, `ash` and `sage-dark`, usable with any colour utility (`bg-parchment`, `text-sage-dark`).
- **Typefaces:** `font-sans` (Inter), `font-serif` (Bitter), `font-mono` (JetBrains Mono) and `font-handwritten` (Architects Daughter).
- **Long-form text:** the package's tuned `prose` utility.

The fonts are optional peers and aren't installed yet, so the tokens currently fall back to system stacks. To load one, install its Fontsource package (`@fontsource-variable/inter`, `@fontsource-variable/bitter`, `@fontsource-variable/jetbrains-mono`, `@fontsource/architects-daughter`) and `@import` it in `src/styles/global.css` between `tailwindcss` and `@myles-garden/styles`. Don't add Google Fonts links or other font sources.

## Formatting and linting split

Two formatters run side by side:

- **oxfmt** formats everything except `.astro` files (it can't parse them). Tailwind class sorting is driven by `src/styles/global.css`.
- **Prettier** exists only for `.astro` files, via `prettier-plugin-astro`, `prettier-plugin-tailwindcss`, and `prettier-plugin-astro-organize-imports` (must stay last in the plugin list).
- **oxlint** handles linting. `no-console` is disabled.

Shared presets come from `@mylesb/oxfmt-config`, `@mylesb/prettier-config`, and `@mylesb/oxlint-config` — check those before adding local overrides.

Side-effect imports (`import "dotenv/config"`, CSS imports) need an inline `oxlint-disable-line` comment for `no-unassigned-import`.

## Configuration flow

Site settings come from environment variables prefixed `UNDERSTORY_` (see `.env.example`):

1. `src/config.ts` loads `.env` via `dotenv`, applies defaults, and exports a typed `Config` object (`SITE_URL`, `SITE_TITLE`, `SITE_DESCRIPTION`).
2. `astro.config.ts` imports it to set `site`.
3. `src/layouts/Layout.astro` imports it for default `<title>`, description, and the canonical URL (built from `Astro.site` with the trailing slash stripped).

Add new site-wide settings to `Config` in `src/config.ts` rather than reading `process.env` elsewhere. Add a matching `UNDERSTORY_*` line to `.env.example` in the same change — projects created from the template start from that file.

Values are read at build time and the site is static, so anything a page renders ships in the HTML. Never put secrets in `UNDERSTORY_*` variables.

## Structure

- `@/*` aliases `src/*` (`tsconfig.json`). TypeScript uses Astro's `strict` preset.
- Tailwind v4 runs as a Vite plugin (`@tailwindcss/vite`), not an Astro integration. There is no `tailwind.config` — configuration lives in CSS.
- `src/styles/global.css` imports Tailwind plus `@myles-garden/styles` (design tokens and prose utilities). It is loaded once, from `Layout.astro`.
- `Layout.astro` accepts `pageTitle`/`pageDescription` (and `siteTitle`/`siteDescription` overrides); titles render as `Page | Site`.

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org): `type(scope): summary`, with a lowercase, imperative summary and no trailing period.

- **Types in use:** `feat`, `fix`, `chore`, `build`.
- **Scopes in use:** `deps`, `config`, `styles`, `lint`, `docs`, `release`. The scope is optional.
- **Releases:** `build(release): bump version to X.Y.Z`.

Examples: `feat(config): load site config from the environment`, `chore(deps): upgrade Astro to 7.3.3`.
