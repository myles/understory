# Understory

[Understory](https://github.com/myles/understory) is my opinionated Astro starter, pre-configured with the packages I reach for on every project.

```sh
npm create astro@latest -- --template myles/understory
```

## What's included

- **[Astro](https://astro.build)** with TypeScript's strict preset and an `@/` alias for `src/`.
- **[Tailwind CSS v4](https://tailwindcss.com)** as a Vite plugin, with design tokens and a `prose` utility from [`@myles-garden/styles`](https://github.com/myles/myles-garden-styles).
- **[`@myles-garden/utils`](https://github.com/myles/myles-garden-utils)** for text, date and array helpers.
- **[oxlint](https://oxc.rs/docs/guide/usage/linter) and [oxfmt](https://oxc.rs/docs/guide/usage/formatter)** for linting and formatting, with [Prettier](https://prettier.io) handling `.astro` files.
- **A base layout** with title, description and canonical URL handling.
- **GitHub Actions CI** that runs Astro check, lint and format, plus tests once a `test` script exists.
- **An `AGENTS.md`** that gives coding agents the project's conventions.

## Getting started

1. Create a project with the command above.
2. Copy `.env.example` to `.env` and fill in your site's details.
3. Run `npm run dev` and open <http://localhost:4321>.

### Making it yours

The template's name lives on in a few places: the `UNDERSTORY_` env prefix, the default site title, the package metadata and this README. `AGENTS.md` lists every step, so a coding agent can rename the lot to match your package name.

### Fonts

`@myles-garden/styles` references Inter, Bitter, JetBrains Mono and Architects Daughter, but doesn't install them. Until you do, pages use system fonts. To load them:

```sh
npm install @fontsource-variable/inter @fontsource-variable/bitter @fontsource-variable/jetbrains-mono @fontsource/architects-daughter
```

Then `@import` each one in `src/styles/global.css`, between `tailwindcss` and `@myles-garden/styles`.

## Configuration

Site settings come from environment variables, read at build time:

| Variable                      | Default                 | Used for                          |
| ----------------------------- | ----------------------- | --------------------------------- |
| `UNDERSTORY_SITE_URL`         | `http://localhost:4321` | Astro's `site` and canonical URLs |
| `UNDERSTORY_SITE_TITLE`       | `understory`            | Default page title                |
| `UNDERSTORY_SITE_DESCRIPTION` | none                    | Default meta description          |

Everything here ends up in the built HTML, so don't put secrets in them.

## Scripts

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the dev server                     |
| `npm run build`   | Build the site to `dist/`                |
| `npm run preview` | Preview the built site                   |
| `npm run check`   | Type-check Astro and TypeScript files    |
| `npm run lint`    | Lint with oxlint (`lint:fix` to fix)     |
| `npm run format`  | Check formatting (`format:write` to fix) |

## Licence

[MIT](LICENSE)
