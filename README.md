# Product Builder TS

A modern product catalog builder built with **React**, **TypeScript**, and **Vite**.  
The app lets users browse products and perform core product management actions (create, search, edit, and delete) through a clean UI.

## Highlights

- Product listing with responsive card layout
- Add new products using validated form inputs
- Edit and delete existing products
- Product search by title
- Category and color selection support
- Local persistence using `localStorage`
- Toast notifications for user actions

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Headless UI
- React Toastify
- ESLint

## Project Structure

```text
src/
  Components/       # Reusable UI and feature components
  Interfaces/       # Shared TypeScript interfaces
  Types/            # Shared TypeScript types
  data/             # Seed data (products, categories, colors)
  utils/            # Utility helpers
  validation/       # Form validation logic
  App.tsx           # Main app composition and state handling
  main.tsx          # React app entry point
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm ci
```

### Run in Development

```bash
npm run dev
```

Vite will start the app on `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Available Scripts

- `npm run dev` — start development server
- `npm run build` — run TypeScript build (`tsc -b`) and Vite production build
- `npm run preview` — preview the built app locally
- `npm run lint` — run ESLint checks
- `npm run deploy` — deploy `dist/` to GitHub Pages (`gh-pages`)

## Deployment

This project includes GitHub Pages deployment scripts:

```bash
npm run predeploy
npm run deploy
```

## License

This project is available for educational and personal use.
