# [Church Name] website

A mobile-first, statically generated church website built with Nuxt 4, Vue 3, Nuxt UI 4, Tailwind CSS 4, and Bun.

## Run locally

```sh
bun install
bun run dev
```

## Build and preview

```sh
bun run generate
bun run preview
```

The static site is generated in `.output/public`. You can also run `bun run build` for a server build.

## Deploy

- **Netlify:** set the build command to `bun run generate` and publish directory to `.output/public`.
- **Vercel:** import the repository and use `bun run generate`; configure the output as static files from `.output/public` if prompted.

## Edit content and images

All church details, page copy, leaders, groups, social links, sermons, book information, and placeholder imagery paths are configured in `app/data/site.ts`. Replace the SVG artwork in `public/images/` with original, optimized images and update the corresponding paths and alt text in the config. Keep descriptive alt text and provide image dimensions when adding new images.
