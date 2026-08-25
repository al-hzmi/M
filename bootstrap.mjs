import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const base = 'https://raw.githubusercontent.com/al-hzmi/M/meem-market-storefront';
const parts = await Promise.all(
  [1, 2, 3, 4].map(async (part) => {
    const response = await fetch(`${base}/meem-market-source.part${part}.b64`);
    if (!response.ok) {
      throw new Error(`Unable to download source part ${part}: ${response.status}`);
    }
    return (await response.text()).trim();
  }),
);

const payload = parts.join('');
const files = JSON.parse(
  zlib.brotliDecompressSync(Buffer.from(payload, 'base64')).toString('utf8'),
);

for (const [relativePath, content] of Object.entries(files)) {
  const target = path.join(process.cwd(), relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content, 'utf8');
}

console.log(`Prepared ${Object.keys(files).length} Meem Market source files.`);
