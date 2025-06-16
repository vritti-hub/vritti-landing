# 🚀 GitHub Pages Deployment - Complete Setup Guide

This guide provides step-by-step instructions for deploying the Vritti landing page to GitHub Pages, including solutions for common issues.

## 🎯 Quick Setup (Recommended)

### Step 1: Verify Workflow

The repository includes a single, optimized GitHub Actions workflow:
- **`deploy.yml`** - Simplified, reliable deployment without environment dependencies

### Step 2: Enable GitHub Pages

1. **Go to Repository Settings**:
   - Navigate to your GitHub repository
   - Click **Settings** (top menu)
   - Scroll down to **Pages** (left sidebar)

2. **Configure Source**:
   - **Source**: Select "GitHub Actions"
   - **Branch**: Leave as default (workflow handles this)
   - Click **Save**

3. **Verify Permissions**:
   - Settings → **Actions** → **General**
   - **Workflow permissions**: "Read and write permissions"
   - **Allow GitHub Actions to create and approve pull requests**: ✅ Enabled

### Step 3: Deploy

```bash
# Commit and push your changes
git add .
git commit -m "Deploy Vritti landing page to GitHub Pages 🚀"
git push origin main
```

### Step 4: Monitor Deployment

1. **Check Actions Tab**: Monitor build and deployment progress
2. **View Site**: Once deployed, visit `https://[username].github.io/vritti-landing/`
3. **Custom Domain** (optional): Add CNAME file for custom domain

---

## 🔧 Detailed Setup Instructions

### Prerequisites

- [x] Git repository with Vritti landing page code
- [x] GitHub account with repository access
- [x] Node.js 18+ installed locally (for testing)

### Repository Structure

Your repository should have these files:
```
vritti-landing/
├── .github/workflows/
│   ├── deploy.yml              # Main deployment workflow
│   └── deploy-fallback.yml     # Backup workflow
├── src/                        # Source code
├── public/                     # Static assets
├── next.config.ts             # Next.js configuration (static export)
├── package.json               # Dependencies and scripts
└── out/                       # Generated after build (ignored in git)
```

### Environment Configuration

#### Method 1: Automatic (Recommended)
GitHub automatically creates the `github-pages` environment when you:
1. Enable GitHub Pages in repository settings
2. Select "GitHub Actions" as the source

#### Method 2: Manual Environment Setup
If automatic creation fails:

1. **Go to Environments**:
   - Repository → Settings → Environments
   - Click **New environment**
   - Name: `github-pages`
   - Click **Configure environment**

2. **Add Protection Rules** (optional):
   - Required reviewers
   - Wait timer
   - Deployment branches

### Workflow Features

#### Deployment Workflow (`deploy.yml`)
- ✅ Simple, reliable deployment
- ✅ No environment dependencies  
- ✅ Automatic npm dependency caching
- ✅ Works with any repository configuration
- ✅ Single job for build and deploy
- ✅ Latest GitHub Actions (v4) - no deprecation warnings

### Custom Domain Setup

#### Step 1: Create CNAME File
```bash
# Add your domain to CNAME file
echo "vritti.ai" > public/CNAME
git add public/CNAME
git commit -m "Add custom domain"
git push origin main
```

#### Step 2: Update Next.js Config
```typescript
// next.config.ts
basePath: process.env.NODE_ENV === 'production' ? '' : '',
```

#### Step 3: Configure DNS
Add these DNS records:

**For Apex Domain (vritti.ai):**
```
Type: A
Host: @
Value: 185.199.108.153
```
```
Type: A  
Host: @
Value: 185.199.109.153
```
```
Type: A
Host: @  
Value: 185.199.110.153
```
```
Type: A
Host: @
Value: 185.199.111.153
```

**For Subdomain (www.vritti.ai):**
```
Type: CNAME
Host: www
Value: [username].github.io
```

#### Step 4: Enable Custom Domain in GitHub
1. Settings → Pages
2. Custom domain: Enter your domain
3. ✅ Enforce HTTPS (recommended)

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. Deployment Fails

**Cause**: GitHub Pages not properly configured
**Solutions**:
- Enable GitHub Pages first: Settings → Pages → Source: "GitHub Actions"
- Check workflow permissions: Settings → Actions → General
- Verify repository has `deploy.yml` workflow file

#### 2. Build Failures

**Cause**: Code issues or dependencies
**Solutions**:
```bash
# Test build locally
npm run build

# Check for errors
npm run lint

# Fix TypeScript errors
npm run dev
```

#### 3. 404 Errors on Deployed Site

**Cause**: Routing or base path issues
**Solutions**:
- Ensure URLs end with `/` (trailing slash)
- Check `basePath` in `next.config.ts`
- Verify case sensitivity in file names

#### 4. Contact Form Not Working

**Expected Behavior**: On GitHub Pages (static deployment), the contact form automatically falls back to opening the user's email client with pre-filled information.

**If Issues Persist**:
- Form should open `mailto:` link on static deployment
- Consider integrating with form services like Formspree or Netlify Forms

#### 5. Permissions Errors

**Cause**: Insufficient GitHub Actions permissions
**Solutions**:
- Settings → Actions → General
- Workflow permissions: "Read and write permissions"
- Allow pull request creation: ✅ Enabled

---

## 🎨 Customization

### Update Content
Edit `src/lib/constants/content.ts` to customize:
- Company information
- Contact details
- Feature descriptions
- Pricing information

### Modify Styling
The site uses the quantum-ui design system:
- Colors: Defined in CSS custom properties
- Components: Located in `src/components/`
- Layouts: Responsive grid system

### Add Analytics
Add tracking to `src/app/layout.tsx`:
```typescript
// Google Analytics example
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

---

## 📊 Performance Optimization

### Build Analysis
```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer
```

### Performance Tips
1. **Images**: Use Next.js Image component (configured for static export)
2. **Fonts**: Already optimized with Google Fonts
3. **Code Splitting**: Automatic with Next.js App Router
4. **Caching**: GitHub Pages provides CDN caching

---

## 🔐 Security Considerations

### HTTPS
- ✅ Enabled by default on GitHub Pages
- ✅ Enforced for custom domains (recommended)

### Content Security Policy
Add CSP headers for additional security:
```typescript
// next.config.ts
headers: async () => [
  {
    source: '/(.*)',
    headers: [
      {
        key: 'Content-Security-Policy',
        value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'"
      }
    ]
  }
]
```

---

## 🚀 Alternative Hosting Options

If GitHub Pages doesn't meet your needs:

### Netlify
```bash
npm run build
# Drag and drop 'out' folder to Netlify
```

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### AWS S3 + CloudFront
```bash
aws s3 sync out/ s3://your-bucket
# Configure CloudFront distribution
```

---

## 📞 Support

- **Documentation**: Complete guides in this repository
- **Issues**: Report problems in GitHub Issues
- **Community**: Join discussions in repository Discussions
- **Contact**: hello@vritti.ai

---

**🌟 Your Vritti landing page is now ready for the world! Every push to main will automatically update your live site.**