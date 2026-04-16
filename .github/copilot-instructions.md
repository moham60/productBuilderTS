## Quick context

- Project: React + TypeScript + Vite (template-derived). Main source is in `src/`.
- Build: `npm run build` runs `tsc -b` then `vite build` (project references in `tsconfig.json`).
- Dev: `npm run dev` starts Vite dev server with HMR (open http://localhost:5173 by default).

## Big-picture architecture

- Single-page client app. No backend code in this repo.
- TS project uses project references: `tsconfig.json` references `tsconfig.app.json` and `tsconfig.node.json`. The app uses `noEmit` in `tsconfig.app.json`, so builds are validated with `tsc -b` before `vite build`.
- UI is component-driven. Key folders:
  - `src/Components/` — presentational components (e.g. `ProductCard.tsx`, `Image.tsx`).
  - `src/Interfaces/` and `src/Types/` — shared type definitions used across components.

## Important files and examples

- `package.json` — scripts you should use: `dev`, `build`, `preview`, `lint`.
- `vite.config.ts` — Vite and React plugin configuration.
- `src/main.tsx` — app bootstrap. `src/App.tsx` composes `ProductCard` components.
- Example component pattern (follow this style):

  - Default-export a small functional component. E.g. `src/Components/ProductCard.tsx` is used directly in `App.tsx`:

    import ProductCard from './Components/ProductCard'

    // use <ProductCard /> as presentational component

- CSS: Tailwind is used. Use `className` with utility classes (see `App.css` and classes in `App.tsx`).

## Conventions & patterns for edits

- When adding a component:
  - Put it under `src/Components/` and default-export the component.
  - If it needs shared types, add/update `src/Interfaces/index.ts` or `src/Types/index.ts` and import those types.
  - Prefer small, focused components; keep markup and styling via Tailwind utility classes.

- TypeScript & build expectations:
  - Run `npm run build` locally to catch type/check errors because `tsc -b` enforces project-level checks.
  - `tsconfig.app.json` enables strict checks. New files must satisfy these rules.

## Developer workflows (practical commands)

- Start dev server (PowerShell):

  npm run dev

- Build for production:

  npm run build

- Preview production build locally:

  npm run preview

- Lint: `npm run lint` (project-level ESLint config is `eslint.config.js` — it expects the tsconfigs to be present).

## Integration & external deps

- Tailwind CSS + `@tailwindcss/vite` plugin are used for styling pipeline.
- React 19 + Vite react plugin. No server-side APIs in this repo; external integrations (APIs) should be added via typical fetch/axios calls inside components or hooks.

## What an agent should do first

1. Run `npm ci` or `npm install` to ensure deps are present.
2. Run `npm run dev` to spin up the app and observe UI/console for runtime issues.
3. Run `npm run build` to validate TypeScript and bundling.

## Examples of repo-specific checks for PRs

- If modifying types, run `npm run build` — `tsc -b` will catch missing exports or broken references.
- If adding UI, open the dev server to verify HMR and expected Tailwind classes.

## Where to look for more context

- `src/Components/` — concrete UI patterns to copy.
- `src/Interfaces/index.ts`, `src/Types/index.ts` — canonical place for shared type shapes.
- `tsconfig.app.json` — strictness and module settings that affect compiled output and linting.

If any section is unclear or you want more examples (component template, common types, or a small unit-test harness), tell me which area to expand.
