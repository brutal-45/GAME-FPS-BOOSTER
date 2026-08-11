--- VERCEL_DEPLOYMENT.md


+++ VERCEL_DEPLOYMENT.md
# 🚀 Vercel Deployment Guide

This guide explains how to deploy the BRUTAL-FPS web application to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free tier is sufficient)
- Node.js 18+ installed locally
- Git installed

## Quick Deploy (Recommended)

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/brutal-45/GAME-FPS-BOOSTER)

Click the button above and follow the prompts to deploy instantly.

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to your Vercel account
vercel login

# Navigate to project directory
cd /path/to/GAME-FPS-BOOSTER

# Deploy to production
vercel --prod
```

## Manual Deployment Steps

### Step 1: Prepare Your Repository

Ensure your repository has these essential files:
- `package.json` - Project configuration
- `next.config.ts` - Next.js configuration (already configured for Vercel)
- `src/app/page.tsx` - Main landing page
- `public/` - Static assets including standalone HTML

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Next.js project

### Step 3: Configure Build Settings

Vercel auto-configures most settings, but verify:

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Root Directory | `./` |
| Build Command | `npm run build` |
| Output Directory | `.next` |
| Install Command | `npm install` |

### Step 4: Environment Variables (Optional)

If you need environment variables:

1. Go to Project Settings → Environment Variables
2. Add any required variables
3. Redeploy

### Step 5: Deploy!

Click "Deploy" and wait 1-2 minutes. Your app will be live at:
- `https://your-project-name.vercel.app`

## Post-Deployment

### Access Download Features

After deployment, users can:

1. **Download Windows App**: Click download button on homepage
2. **Use Browser Version**: The standalone HTML file works directly
3. **View Documentation**: README links work automatically

### Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Troubleshooting

### Build Fails

**Issue**: TypeScript errors during build
**Solution**: The project has `ignoreBuildErrors: true` in `next.config.ts`, but fix critical errors locally first:

```bash
npm run build
```

### Downloads Not Working

**Issue**: Download API returns 404
**Solution**: Ensure files exist in `public/download/`:
- `BRUTAL-FPS-Windows-Portable.zip`
- `brutal-fps-standalone.html` (in `public/`)

### Large File Size

**Issue**: Files too large for Vercel functions
**Solution**: Host large downloads externally (GitHub Releases, AWS S3, etc.) and update download links in `src/app/api/download/route.ts`

## Features Available on Vercel

✅ Landing page with animations
✅ Stats display
✅ Feature showcase
✅ Download functionality
✅ Responsive design
✅ Dark theme
✅ Fast global CDN

## Limitations

⚠️ Vercel is for the **web preview only**. For full desktop app features:
- Users must download the Windows/macOS/Linux apps
- Desktop apps provide system-level optimizations
- Web version is for preview and information

## Updating Your Deployment

Every time you push to your main branch:

```bash
git add .
git commit -m "Update features"
git push origin main
```

Vercel automatically rebuilds and deploys within minutes.

## Preview Deployments

For pull requests, Vercel creates preview URLs automatically. Share these URLs for testing before merging.

## Performance Tips

1. **Optimize Images**: Use WebP format in `/public`
2. **Enable Caching**: Already configured in download API
3. **Minimize Bundle**: Tree-shaking enabled by default
4. **Use Edge Functions**: For faster global responses

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://nextjs.org/docs/deployment)
- [Community Discord](https://discord.gg/vercel)

---

**Your BRUTAL-FPS web app is now live on Vercel! 🎉**

Share your deployment URL with users worldwide.
