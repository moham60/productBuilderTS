# Product Builder TS

A modern **React + TypeScript** product management UI built with **Vite** and styled with **Tailwind CSS**.  
The app allows users to view, search, create, edit, and delete products with category and color selection, while persisting data in browser local storage.

## Live Behavior

- Product grid with reusable `ProductCard` components
- Add product modal with field validation
- Edit product modal with prefilled values
- Delete confirmation modal
- Product title search
- Color picker for product variants
- Category selector with image previews
- Toast notifications for user actions
- Local persistence via `localStorage`

## Tech Stack

- **Frontend:** React 19, TypeScript
- **Build Tooling:** Vite 6
- **Styling:** Tailwind CSS 4
- **UI Utilities:** Headless UI, Heroicons, React Icons
- **Validation:** Custom validation helpers (TypeScript)
- **Notifications:** React Toastify
- **Utilities:** UUID, clsx

## Project Structure

```text
src/
├── Components/
│   ├── ui/
│   ├── Image.tsx
│   └── ProductCard.tsx
├── data/
│   ├── categories.ts
│   ├── colors.ts
│   └── productsList.ts
├── Interfaces/
├── Types/
├── utils/
├── validation/
├── App.tsx
└── main.tsx
```

## Getting Started

### 1) Prerequisites

- Node.js 18+
- npm 9+

### 2) Install dependencies

```bash
npm ci
```

### 3) Run development server

```bash
npm run dev
```

Default local URL: `http://localhost:5173`

### 4) Build for production

```bash
npm run build
```

### 5) Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — TypeScript project build (`tsc -b`) + Vite build
- `npm run lint` — run ESLint
- `npm run preview` — preview production output
- `npm run deploy` — deploy `dist/` to GitHub Pages via `gh-pages`

## Data & State Notes

- Initial product data is seeded from `src/data/productsList.ts`
- Product categories and color options come from `src/data/categories.ts` and `src/data/colors.ts`
- Runtime state is managed in `src/App.tsx`
- Product list is persisted under local storage key: `storedProducts`

## Validation Rules

Defined in `src/validation/index.ts`:

- Product title: required, minimum 8 characters
- Description: required, between 20 and 200 characters
- Image URL: must match URL pattern
- Price: required and numeric

## Deployment

The project includes GitHub Pages deployment support:

```bash
npm run deploy
```

Vite base path is configured in `vite.config.ts` as:

```ts
base: '/productBuilderTS/'
```

## License

This project is available for learning and personal use. Add a formal license file if you plan to distribute it publicly.
