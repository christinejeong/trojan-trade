import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', '.nojekyll']) {
  await writeFile(new URL(file, output), await readFile(new URL(file, root)));
}
for (const directory of ['assets/', 'fonts/']) {
  await mkdir(new URL(directory, output), { recursive: true });
  for (const file of await readdir(new URL(directory, root))) {
    await writeFile(new URL(directory + file, output), await readFile(new URL(directory + file, root)));
  }
}
console.log('Built the static marketplace in dist/.');
