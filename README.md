# FinTrack

FinTrack is a personal finance dashboard built with **Nuxt 4** and **Vue 3**. The application includes transaction and category management, a financial blog, and a savings calculator, with route handling optimized for SSR and pre-rendering.

## Overview

- Home page with quick access to the main features
- Category management for income and expense tracking
- Transaction list and detail views
- Blog with finance-focused articles
- Savings calculator for financial goals
- SSR support for key pages and pre-rendered blog routes
- Styling via Bootstrap and FontAwesome

## Technology stack

- Nuxt 4
- Vue 3
- Nitro
- Bootstrap 5
- FontAwesome

## Project structure

- `app/pages/` — application routes
- `app/components/` — reusable components
- `app/data/` — static blog content
- `app/utils/` — helper utilities like `Formatters`
- `server/api/` — API endpoints for categories and transactions

## How to run

```bash
cd Fintrack/
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available routes

- `/` — Home
- `/blog` — Blog list
- `/blog/[id]` — Blog article
- `/categories` — Category list
- `/categories/[id]` — Category detail
- `/transactions` — Transaction list
- `/transactions/[id]` — Transaction detail
- `/resources/savings-calculator` — Savings calculator

## Notes

- Blog routes are pre-rendered using Nitro.
- `/categories` and `/transactions` are rendered with SSR.
- Bootstrap and FontAwesome are loaded from CDN configuration in `nuxt.config.ts`.

## Next steps

Potential improvements include:

- user authentication and profiles
- database persistence
- search and filter features
- budget planning and custom financial goals
