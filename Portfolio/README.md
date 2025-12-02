# Portfolio (React + Vite)

Ready for GitHub Pages via `gh-pages` branch. Router uses hashes; assets are relative to `/Portfolio/`.

## Dev
```bash
npm install
npm run dev
```

## Build / Deploy to GitHub Pages
```bash
npm run build   # outputs to dist/
npm run deploy  # pushes dist/ to gh-pages branch via gh-pages
```
Then in GitHub repo settings, set Pages → Source to `Deploy from a branch`, Branch `gh-pages`, Folder `/` (root).

## Preview local build
```bash
npm run preview
```
