# GitHub Pages Deployment Guide

## Overview
HeavenApp is configured to deploy to GitHub Pages at `https://keyhelperteam.github.io/heavenapp/`

## Configuration
The following settings enable GitHub Pages deployment:

### next.config.ts
```typescript
const nextConfig: NextConfig = {
  basePath: '/heavenapp',      // GitHub Pages subdirectory
  output: 'export',             // Static export for GitHub Pages
  images: {
    unoptimized: true,          // Required for static export
  },
};
```

## Deployment Process

### Automatic (GitHub Actions)
Push to `main` or `master` branch and GitHub Actions will:
1. Install dependencies
2. Build the project (`npm run build`)
3. Generate static files in `/out` directory
4. Deploy to GitHub Pages

### Manual Deployment

1. **Build locally**
   ```bash
   npm run build
   ```
   This generates a `/out` directory with static files.

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Verify deployment**
   Visit `https://keyhelperteam.github.io/heavenapp/`

## Important Notes

### Image Paths
- All images use Next.js `Image` component
- The `basePath` configuration automatically prefixes image URLs
- Image sources should use `/images/filename.png` format
- ✅ Correct: `<Image src="/images/hero.png" ... />`
- ❌ Avoid: Relative paths like `./images/hero.png`

### Subdirectory Structure
- Repository: `https://github.com/keyhelperteam/heavenapp`
- GitHub Pages URL: `https://keyhelperteam.github.io/heavenapp/`
- All assets automatically resolve with `/heavenapp` prefix

### Cache Busting
If images still don't appear after deployment:
1. Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
2. Clear browser cache
3. Check browser DevTools Network tab for 404 errors

### Static Export Limitations
When using `output: 'export'`:
- ✅ Works: Static pages, images, CSS
- ✅ Works: Client-side components and interactivity
- ❌ Doesn't work: Server-side functions, API routes, dynamic routing with getStaticProps

Current setup uses static pages only, so no limitations apply.

## Troubleshooting

### Images Still Not Showing
1. Check browser console for 404 errors
2. Verify all image files exist in `/public/images/` directory
3. Ensure filenames match exactly (case-sensitive on Linux)
4. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Styling Issues
1. CSS is included in the build
2. If Tailwind styles missing: run `npm run build` again
3. Clear browser cache

### 404 on Pages
1. All pages should work since they're pre-rendered
2. Check if pages are included in build output

## Files Created/Modified

### New Files
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `.nojekyll` - Tells GitHub Pages to serve without Jekyll processing

### Modified Files
- `next.config.ts` - Added basePath and export settings

## Next Steps

1. Commit and push these changes:
   ```bash
   git add next.config.ts .github/ .nojekyll DEPLOYMENT.md
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. GitHub Actions will automatically build and deploy

3. Monitor the "Actions" tab in your GitHub repository to see deployment progress

4. Visit `https://keyhelperteam.github.io/heavenapp/` to verify

## GitHub Pages Settings

In your repository Settings → Pages:
- **Source**: Deploy from a branch
- **Branch**: `gh-pages` (automatically created by workflow)
- **Folder**: `/ (root)`

These should be automatically set by the GitHub Actions workflow.

## Local Testing

To test the GitHub Pages build locally:

```bash
# Build
npm run build

# Test static export
npx http-server out

# Visit http://localhost:8080/heavenapp/
```

---

**Last Updated**: March 8, 2026  
**Status**: Configured for automatic deployment via GitHub Actions
