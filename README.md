# noah-portfolio

Personal portfolio site for Noah Stokes — CS student at the University of Waterloo building AI tools, full-stack systems, and workflow automation.

Built with [Astro](https://astro.build) and Tailwind CSS v4.

## Development

```sh
npm install
npm run dev      # local dev server at localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the build locally
```

Requires Node >= 22.12.0.

## Structure

```
src/
  components/    # Hero, project grid, experience timeline, tech profile, contact
  data/profile.ts  # single source of truth: bio, projects, tech stack, timeline
  layouts/       # base page layout
  pages/         # routes
  styles/        # global CSS + Tailwind
```

Content lives in `src/data/profile.ts`. Edit that file to update projects, experience, or links. components read from it, so no markup changes needed.
