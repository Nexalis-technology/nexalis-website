# AGENTS.md

Compact, repo-specific guidance for OpenCode sessions.

## Commands
- `npm run dev` (Next dev server)
- `npm run build` / `npm run start`
- `npm run lint` (ESLint; no test script configured)

## Architecture
- Next.js App Router; entrypoints: `app/layout.tsx`, `app/page.tsx`
- TypeScript strict; path alias `@/*` maps to repo root (`tsconfig.json`)

## Styling and linting
- Tailwind v4 via `postcss.config.mjs` with `@tailwindcss/postcss` (no `tailwind.config.*`)
- ESLint uses `eslint.config.mjs` with `eslint-config-next` core-web-vitals + typescript

## Runtime requirements
- Gemini demo needs `NEXT_PUBLIC_GEMINI_API_KEY` in `.env.local`

## Known config quirks
- Next.js image allowlist: `picsum.photos`, `images.unsplash.com` (`next.config.ts`)
