# 🚀 Vritti Landing Page - GitHub Pages Deployment Guide

This guide explains how to deploy the Vritti landing page to GitHub Pages with automatic CI/CD using GitHub Actions.

## 📋 Prerequisites

1. **GitHub Repository**: Your code should be in a GitHub repository
2. **GitHub Pages Access**: Repository should have GitHub Pages enabled
3. **Node.js 18+**: For local development and testing

## 🔧 Deployment Configuration

### 1. Next.js Configuration

The `next.config.ts` file is already configured for static export:

```typescript
{
  output: 'export',                    // Enable static export
  images: { unoptimized: true },      // Disable image optimization
  basePath: '/vritti-landing',        // GitHub Pages subdirectory
  trailingSlash: true,                // Ensure proper routing
}
```

### 2. GitHub Actions Workflow

The deployment workflow (`.github/workflows/deploy.yml`) automatically:
- ✅ Detects package manager (Yarn/npm) automatically
- ✅ Builds the Next.js application
- ✅ Exports to static files
- ✅ Deploys to GitHub Pages
- ✅ Caches dependencies for faster builds
- ✅ Uses latest GitHub Actions (v4) for reliability

## 🚀 How to Deploy

### Option 1: Automatic Deployment (Recommended)

1. **Push to Main Branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically trigger

3. **Access Your Site**:
   - Your site will be available at: `https://[username].github.io/vritti-landing/`
   - Check the **Actions** tab to monitor deployment progress

### Option 2: Manual Workflow Trigger

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Select **Deploy to GitHub Pages** workflow
4. Click **Run workflow** → **Run workflow**

## 📁 Build Output

The build process creates:
```
out/                 # Static export directory
├── _next/          # Next.js assets
├── index.html      # Home page
├── about/          # Static pages
├── contact/
├── privacy/
├── terms/
└── ...
```

## 🔧 Local Testing

Test the static export locally before deployment:

```bash
# Build static export
npm run build

# Serve the static files locally
npx serve out

# Or use Python (if available)
cd out && python -m http.server 3000
```

## ⚠️ Important Considerations

### 1. **API Routes Limitation**
- GitHub Pages only serves static files
- API routes (`/api/*`) won't work in static deployment
- Contact form automatically falls back to `mailto:` links on static deployment

### 2. **Image Optimization**
- Next.js image optimization is disabled (`unoptimized: true`)
- All images are served as static files
- Consider optimizing images manually before deployment

### 3. **Routing**
- All routes use trailing slashes (`/about/` instead of `/about`)
- Ensures compatibility with GitHub Pages routing

### 4. **Base Path**
- Production URLs include the repository name: `/vritti-landing/`
- Local development uses root path: `/`

## 🎯 Custom Domain (Optional)

To use a custom domain (e.g., `vritti.ai`):

1. **Add CNAME file**:
   ```bash
   echo "vritti.ai" > public/CNAME
   ```

2. **Configure DNS**:
   - Add CNAME record: `www.vritti.ai` → `[username].github.io`
   - Add A records for apex domain pointing to GitHub Pages IPs

3. **Update Next.js config**:
   ```typescript
   basePath: process.env.NODE_ENV === 'production' ? '' : '',
   ```

## 🔍 Troubleshooting

### Build Failures

1. **Check Actions Tab**: View detailed error logs
2. **ESLint Errors**: Fix linting issues in your code
3. **TypeScript Errors**: Resolve type errors before deployment

### GitHub Actions Issues

If deployment fails:

1. **Enable GitHub Pages First**:
   - Go to repository **Settings** → **Pages**
   - Select **GitHub Actions** as source
   - This automatically configures the deployment environment

2. **Check Workflow Permissions**:
   - Settings → Actions → General
   - Workflow permissions: "Read and write permissions"
   - Allow GitHub Actions to create and approve pull requests: ✅

### 404 Errors

1. **Check trailing slashes**: Ensure URLs end with `/`
2. **Verify basePath**: Check if links include repository name
3. **Case sensitivity**: GitHub Pages is case-sensitive

### Contact Form Issues

1. **Static deployment**: Form uses `mailto:` fallback
2. **Local development**: Form uses API routes
3. **Integration options**: Consider Formspree, Netlify Forms, or Getform

### Workflow Permission Issues

If deployment fails with permission errors:

1. **Check Repository Settings**:
   - Settings → Actions → General
   - Workflow permissions: "Read and write permissions"
   - Allow GitHub Actions to create and approve pull requests: ✅

2. **Pages Configuration**:
   - Settings → Pages
   - Source: "GitHub Actions"
   - Custom domain (optional): Add your domain

## 📊 Deployment Status

Monitor your deployments:

- **GitHub Actions**: `https://github.com/[username]/vritti-landing/actions`
- **Live Site**: `https://[username].github.io/vritti-landing/`
- **Build Logs**: Available in Actions tab with detailed output

## 🔄 Continuous Deployment

The workflow automatically triggers on:
- ✅ Push to `main` branch
- ✅ Manual workflow dispatch
- ✅ Pull request merges to `main`

## 📈 Performance Optimization

For optimal GitHub Pages performance:

1. **Image Optimization**: Use tools like `next-optimized-images`
2. **Bundle Analysis**: Run `npm run build && npm run analyze`
3. **Caching**: Static assets are automatically cached by GitHub Pages
4. **CDN**: GitHub Pages uses a global CDN by default

## 🆘 Support

If you encounter issues:

1. Check the **Issues** tab in the repository
2. Review GitHub Pages documentation
3. Verify Next.js static export requirements
4. Test locally with `npm run build && npx serve out`

---

**✨ Your Vritti landing page is now ready for automatic deployment to GitHub Pages!**

Every push to `main` will trigger a new deployment, making your site always up-to-date with your latest changes.