#!/usr/bin/env node

/**
 * One-off script to generate PWA icon PNGs from the SVG logo.
 * Run once and commit the output — not part of the build pipeline.
 *
 * Usage: node scripts/generate-icons.js
 */

import sharp from 'sharp';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = resolve(__dirname, '..', 'assets');
const svgPath = resolve(assetsDir, 'logo.svg');

const sizes = [192, 512];

for (const size of sizes) {
  const outPath = resolve(assetsDir, `icon-${size}.png`);
  await sharp(svgPath)
    .resize(size, size, { fit: 'contain', background: { r: 249, g: 250, b: 251, alpha: 1 } })
    .png()
    .toFile(outPath);
  console.log(`Generated ${outPath}`);
}
