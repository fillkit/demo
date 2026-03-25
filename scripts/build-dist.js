#!/usr/bin/env node

/**
 * Assembles all demo build outputs into a single `dist/` directory
 * for static deployment (GitHub Pages, any static host).
 *
 * Expected pre-condition: React, Vue, and Angular have already been built.
 *
 * Output structure:
 *   dist/
 *   ├── index.html          ← hub home
 *   ├── 404.html            ← copy of index.html (root SPA fallback)
 *   ├── favicon.svg
 *   ├── assets/             ← shared logos, icons
 *   ├── html/               ← raw HTML demos
 *   ├── anywhere/           ← extension page
 *   ├── react/              ← React SPA + 404.html
 *   ├── vue/                ← Vue SPA + 404.html
 *   └── angular/            ← Angular SPA + 404.html
 */

import { cpSync, mkdirSync, copyFileSync, existsSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const demoRoot = resolve(__dirname, '..');
const dist = resolve(demoRoot, 'dist');

// Clean previous build
if (existsSync(dist)) {
  rmSync(dist, { recursive: true });
}
mkdirSync(dist, { recursive: true });

console.log('Assembling demo dist...\n');

// --- Hub root files ---
const rootFiles = ['index.html', 'favicon.svg', 'CNAME'];
for (const file of rootFiles) {
  const src = resolve(demoRoot, file);
  if (existsSync(src)) {
    copyFileSync(src, resolve(dist, file));
    console.log(`  ${file}`);
  }
}

// Root 404.html = copy of index.html (GitHub Pages SPA fallback)
const hubIndex = resolve(demoRoot, 'index.html');
if (existsSync(hubIndex)) {
  copyFileSync(hubIndex, resolve(dist, '404.html'));
  console.log('  404.html (root fallback)');
}

// --- Static directories (assets, html, other) ---
const staticDirs = ['assets', 'html', 'anywhere'];
for (const dir of staticDirs) {
  const src = resolve(demoRoot, dir);
  if (existsSync(src)) {
    cpSync(src, resolve(dist, dir), { recursive: true });
    console.log(`  ${dir}/`);
  }
}

// --- Copy @fillkit/browser UMD into html/vendor/ ---
const vendorDest = resolve(dist, 'html/vendor');
mkdirSync(vendorDest, { recursive: true });
const browserPkg = resolve(demoRoot, 'node_modules/@fillkit/browser');
for (const file of ['fillkit.umd.js', 'fillkit.iife.js']) {
  const src = resolve(browserPkg, file);
  if (existsSync(src)) {
    copyFileSync(src, resolve(vendorDest, file));
    console.log(`  html/vendor/${file} (from @fillkit/browser)`);
  }
}

// --- Framework SPAs ---
const spas = [
  { name: 'react', src: resolve(demoRoot, 'react/dist') },
  { name: 'vue', src: resolve(demoRoot, 'vue/dist') },
  { name: 'angular', src: resolve(demoRoot, 'angular/dist/angular/browser') },
];

for (const spa of spas) {
  if (!existsSync(spa.src)) {
    console.warn(`  WARN: ${spa.name} build not found at ${spa.src} — skipping`);
    continue;
  }

  const dest = resolve(dist, spa.name);
  cpSync(spa.src, dest, { recursive: true });

  // SPA fallback: copy index.html → 404.html so GitHub Pages
  // serves the SPA shell for unknown sub-paths
  const spaIndex = resolve(dest, 'index.html');
  if (existsSync(spaIndex)) {
    copyFileSync(spaIndex, resolve(dest, '404.html'));
  }

  console.log(`  ${spa.name}/`);
}

console.log('\nDone! Output in demo/dist/');
