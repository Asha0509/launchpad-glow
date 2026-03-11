// Run this script with: node convert-to-webp.cjs
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const exts = ['.jpg', '.jpeg'];
const assetDirs = [
  path.join(__dirname, 'src', 'assets'),
  path.join(__dirname, 'src', 'assets', 'products'),
  path.join(__dirname, 'public'),
];

function getAllImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImages(filePath));
    } else if (exts.includes(path.extname(file).toLowerCase())) {
      results.push(filePath);
    }
  });
  return results;
}

async function convertToWebp(file) {
  const outFile = file.replace(/\.(jpg|jpeg)$/i, '.webp');
  await sharp(file)
    .webp({ quality: 80 })
    .toFile(outFile);
  console.log(`Converted: ${file} -> ${outFile}`);
}

(async () => {
  for (const dir of assetDirs) {
    if (!fs.existsSync(dir)) continue;
    const images = getAllImages(dir);
    for (const img of images) {
      await convertToWebp(img);
    }
  }
  console.log('All images converted to .webp!');
})();
