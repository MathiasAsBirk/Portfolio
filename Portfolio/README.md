# Portfolio (React + Vite)

Ready for GitHub Pages. The router now uses hashes and Vite builds to `docs/` with relative asset paths.

## Dev
```bash
npm install
npm run dev
```

## Build for GitHub Pages
```bash
npm run build   # outputs to docs/ (includes .nojekyll)
git add docs/
git commit -m "Build for Pages"
git push
```
Then in GitHub repo settings, set Pages → Source to `Deploy from branch` and choose `main` (or your default branch) with `/docs` folder.

## Preview local build
```bash
npm run preview
```
