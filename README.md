# FillKit Demo

Multi-framework demo hub for [FillKit](https://fillkit.dev) — context-aware form autofill for developers, QA, and demos.

**Live:** [demo.fillkit.dev](https://demo.fillkit.dev)

## Structure

```
demo/
├── index.html          Hub landing page
├── assets/             Shared logos and icons
├── html/               Raw HTML demo pages (no build step)
├── anywhere/           Browser extension landing page
├── react/              React 19 + React Router 7 + Vite + Tailwind CSS v4
├── vue/                Vue 3 + Vue Router + Vite + Tailwind CSS v4
├── angular/            Angular 19 + Angular Router + Tailwind CSS v4
├── scripts/            Build tooling (build-dist.js)
├── .github/workflows/  GitHub Pages deploy action
└── dist/               Production output (gitignored)
```

Each framework app is independent — it has its own `package.json`, dependencies, and build pipeline.

## Prerequisites

- Node.js 20+
- npm

## Deployment

Deployed automatically to **GitHub Pages** via `.github/workflows/deploy.yml` on every push to `main` that touches `demo/**`.

## SDK Version Management

The FillKit SDK is referenced in four places:

| File | Package | Used by |
|------|---------|---------|
| `package.json` | `@fillkit/browser` | HTML demos (UMD/IIFE via `html/vendor/`) |
| `react/package.json` | `@fillkit/core` | React demo |
| `vue/package.json` | `@fillkit/core` | Vue demo |
| `angular/package.json` | `@fillkit/core` | Angular demo |

To bump the SDK version, update all four `package.json` files and re-run `npm install` in each directory.

## Adding a New Demo Page

### HTML

1. Create a new `.html` file in `html/`
2. Include `<script src="vendor/fillkit.umd.js"></script>` and initialize with `window.FillKit.FillKit.init({...})`
3. The file is automatically picked up by `build-dist.js`

### React / Vue / Angular

1. Add a new route and page component in the framework's `src/` directory
2. Follow the existing page patterns for FillKit integration
3. The framework build output is automatically copied to `dist/<framework>/`

## License

[FillKit Source Available License](https://fillkit.dev/license)
