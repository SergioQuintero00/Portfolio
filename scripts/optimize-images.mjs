import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const imagePath = (name) => fileURLToPath(new URL(`../public/imagenes/${name}`, import.meta.url))

// The originals are inputs only. Keep the full portrait, proportions and logo transparency.
for (const width of [192, 288]) {
  const result = await sharp(imagePath('retrato-sergio.png'))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 85, effort: 6 })
    .toFile(imagePath(`retrato-sergio-${width}.webp`))
  console.log(`Portrait ${width}px: ${result.size} bytes`)
}

const logo = await sharp(imagePath('logo-sergio.png'))
  .resize({ width: 144, withoutEnlargement: true })
  .webp({ quality: 90, effort: 6 })
  .toFile(imagePath('logo-sergio-144.webp'))
const favicon = await sharp(imagePath('logo-sergio.png'))
  .resize({ width: 64, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toFile(imagePath('logo-sergio-64.png'))
console.log(`Logo: ${logo.size} bytes; favicon: ${favicon.size} bytes`)
