# Pacific Floors and Coatings

Marketing website for Pacific Floors and Coatings, an epoxy flooring and concrete coating contractor serving Surrey, BC and Metro Vancouver.

The site showcases residential, commercial, industrial, and specialty flooring services, provides service-area landing pages, and helps visitors request an estimate.

## Features

- Responsive marketing pages for epoxy flooring and concrete coating services
- Service detail pages with FAQs and project-specific content
- Location pages for Surrey and surrounding Metro Vancouver communities
- Contact and quote-request flows
- Customer reviews and company information pages
- SEO metadata, canonical URLs, Open Graph data, and structured business data
- Automatically generated XML sitemap at `/sitemap.xml`
- Server-side rendering through TanStack Start
- Accessible UI built with Radix UI and shadcn/ui components

## Tech stack

- React 19
- TypeScript
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS 4
- Radix UI primitives
- React Hook Form and Zod
- Bun for package management and scripts

## Requirements

- Bun 1.x recommended
- Node.js 20 or newer if using an alternative package manager

## Getting started

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the Vite development server |
| `bun run build` | Create a production build |
| `bun run build:dev` | Create a development-mode build |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Run ESLint |
| `bun run format` | Format the project with Prettier |

## Project structure

```text
src/
├── assets/             Images used by the marketing pages
├── components/         Shared site components and UI primitives
├── hooks/              Reusable React hooks
├── lib/                Site data, services, reviews, SEO, and utilities
├── routes/             File-based TanStack Router routes
│   ├── __root.tsx      Application shell and global metadata
│   ├── index.tsx       Home page
│   ├── about.tsx       About page
│   ├── contact.tsx     Contact and quote page
│   ├── reviews.tsx     Reviews page
│   ├── services.*.tsx  Service index and dynamic service pages
│   └── service-areas.*.tsx  Service-area index and dynamic location pages
├── router.tsx          TanStack Router configuration
├── server.ts           SSR server entry and error handling
├── start.ts            TanStack Start middleware configuration
└── styles.css          Global styles and design tokens
```

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Homepage |
| `/about` | Company information |
| `/contact` | Contact details and quote request |
| `/reviews` | Customer reviews |
| `/services` | Service directory |
| `/services/:slug` | Service detail page |
| `/service-areas` | Service-area directory |
| `/service-areas/:slug` | Location detail page |
| `/sitemap.xml` | XML sitemap |

Routes use TanStack Start file-based routing. Add or update pages in `src/routes/`; do not edit `src/routeTree.gen.ts` manually because it is generated from the route files.

## Updating site content

- Update business details, social links, service areas, and shared site metadata in `src/lib/site.ts`.
- Update service descriptions, FAQs, and service groupings in `src/lib/services.ts`.
- Update customer reviews in `src/lib/reviews.ts`.
- Add or replace site imagery in `src/assets/` and update the relevant imports or image mappings.
- Keep route-level titles, descriptions, canonical URLs, and structured data aligned with the page content.

There are currently no required environment variables for local development. If deployment-specific configuration is added later, document the variable name and example value here without committing secrets.

## Code conventions

- Use the `@/` alias for imports from `src/`.
- Prefer shared components in `src/components/` for repeated site UI.
- Keep route-specific content and composition in the corresponding route file.
- Run linting and a production build before submitting changes:

```bash
bun run lint
bun run build
```

## Deployment

Build the application with:

```bash
bun run build
```

Deploy the generated TanStack Start/Nitro output using the runtime and adapter configured for the target hosting platform. Confirm that server-side rendering, dynamic service and location routes, and `/sitemap.xml` are all available after deployment.
