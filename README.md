# 🚀 Vritti AI Landing Page

A modern, responsive landing page for Vritti AI - an AI Business Operating System for small businesses.

## ✨ Features

- **🎨 Modern Design**: Built with quantum-ui design system
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop
- **🌗 Dark/Light Mode**: Automatic theme switching with system preference
- **⚡ Performance Optimized**: Static generation with Next.js 15
- **🔒 Privacy Compliant**: GDPR/CCPA compliant with cookie consent
- **🛡️ Error Handling**: Comprehensive error boundaries and user feedback
- **📧 Contact Forms**: Smart form handling with validation
- **🎭 Smooth Animations**: Framer Motion powered interactions

## 🏗️ Built With

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Quantum UI** - Custom design system
- **Framer Motion** - Smooth animations
- **Material-UI** - Base component system
- **Emotion** - CSS-in-JS styling

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Serve static files locally
npm run serve
```

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── (static)/        # Static pages
│   ├── api/             # API routes
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── layout/         # Navigation, footer
│   ├── sections/       # Page sections
│   └── ui/             # Reusable UI components
├── lib/                # Utilities and constants
│   ├── constants/      # Content and configuration
│   └── utils/          # Helper functions
└── types/              # TypeScript type definitions
```

## 🌐 Deployment

### GitHub Pages (Automated)

1. **Push to main branch** - Automatic deployment via GitHub Actions
2. **Manual trigger** - Use GitHub Actions workflow dispatch
3. **Custom domain** - Rename `CNAME.example` to `CNAME` and add your domain

```bash
# Example for custom domain
echo "vritti.ai" > public/CNAME
```

### Manual Deployment

```bash
# Build static export
npm run build

# Deploy 'out' folder to any static hosting
# - Netlify: Drag and drop 'out' folder
# - Vercel: `vercel --prod`
# - AWS S3: `aws s3 sync out/ s3://your-bucket`
```

## 🔧 Configuration

### Environment Variables

```bash
# .env.local (for local development)
NEXT_PUBLIC_CONTACT_EMAIL=hello@vritti.ai
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
```

### Customization

1. **Content**: Edit `src/lib/constants/content.ts`
2. **Styling**: Modify quantum-ui theme tokens
3. **Components**: Customize components in `src/components/`
4. **Analytics**: Add tracking to `src/app/layout.tsx`

## 📊 Features Overview

### 🎯 Landing Page Sections

- **Hero Section** - Compelling value proposition with CTAs
- **Pain Points** - Problem identification with solutions
- **Features** - Core product capabilities
- **Industries** - Target market segments
- **Pricing** - Clear, transparent pricing
- **How It Works** - Step-by-step process
- **Contact** - Multiple contact methods

### 🛠️ Technical Features

- **Error Boundaries** - Graceful error handling
- **Toast Notifications** - User feedback system
- **Form Validation** - Real-time validation
- **Cookie Consent** - GDPR/CCPA compliance
- **Static Export** - GitHub Pages compatible
- **SEO Optimized** - Meta tags, structured data
- **Performance** - Code splitting, lazy loading

## 🎨 Design System

Built with **Quantum UI** design system featuring:

- **Consistent Spacing** - 8px grid system
- **Typography Scale** - Responsive text sizing
- **Color Tokens** - Dark/light mode support
- **Component Library** - Reusable UI components
- **Animation Library** - Smooth micro-interactions

## 📱 Browser Support

- **Modern Browsers** - Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile Support** - iOS Safari, Chrome Mobile
- **Progressive Enhancement** - Graceful degradation

## 🔒 Privacy & Compliance

- **Cookie Consent Banner** - Granular preference management
- **Privacy Policy** - Comprehensive data handling disclosure
- **Terms of Service** - Legal protection and user agreements
- **Data Security** - No sensitive data collection

## 📈 Performance

- **Lighthouse Score** - 95+ across all metrics
- **Bundle Size** - Optimized with tree shaking
- **Loading Speed** - Static generation + CDN
- **SEO Ready** - Structured data + meta tags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment guide
- **Issues**: Report bugs in GitHub Issues
- **Contact**: hello@vritti.ai

---

**🌟 Transform your small business with Vritti AI - Your AI Business Partner That Never Sleeps**

Built with ❤️ for small businesses worldwide.