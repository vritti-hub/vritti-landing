# CLAUDE.md - Vritti Landing Page Development Guide

This guide provides essential rules and patterns for developing the Vritti landing page using the Quantum UI design system. Following these guidelines ensures consistency, performance, and maintainability.

## 🎯 Quick Start

### **Project Structure**
```
vritti-landing/
├── src/
│   ├── app/                    # Next.js 15 App Router
│   ├── components/
│   │   ├── sections/          # Page sections (Hero, Features, etc.)
│   │   ├── ui/                # Reusable UI components
│   │   └── layout/            # Layout components (Navbar, Footer)
│   ├── lib/                   # Utilities and helpers
│   └── styles/                # Global styles
├── public/                    # Static assets
└── CLAUDE.md                  # This file
```

### **Import Rules (CRITICAL)**
```typescript
// ✅ CORRECT: Direct component imports (Required for optimal bundle size)
import { Button } from '@vritti/quantum-ui/Button';
import { TextField } from '@vritti/quantum-ui/TextField';
import { Paper } from '@vritti/quantum-ui/Paper';
import { Typography } from '@vritti/quantum-ui/Typography';

// ✅ CORRECT: Theme utilities from main package
import { ThemeProvider, useTheme } from '@vritti/quantum-ui';

// ❌ WRONG: Barrel imports will increase bundle by 40kB+
import { Button, TextField } from '@vritti/quantum-ui'; // DON'T DO THIS!
```

## 🚀 Performance Rules

### **1. Animation Guidelines**
```typescript
// ✅ CORRECT: CSS animations only (Framer Motion has been removed)
const [isHovered, setIsHovered] = useState(false);

<Paper
  variant="feature"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  sx={{
    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
    transition: 'all 0.3s ease-out',
  }}
>
  <Typography variant="h3">Feature Card</Typography>
</Paper>

// ❌ WRONG: JavaScript animation libraries (removed for performance)
import { motion } from 'framer-motion'; // This will fail - library removed
```

### **2. Bundle Size Optimization**
- **Always use direct imports** - Saves 40kB+ bundle size
- **Lazy load sections** - Use `React.lazy()` for sections below the fold
- **Optimize images** - Use Next.js Image component with proper sizing
- **Minimize JavaScript** - Prefer CSS solutions over JavaScript when possible

## 📱 Component Usage Patterns

### **Paper Component (5 Variants)**

#### **1. Section Variant - Landing Page Sections**
```typescript
// Use for main page sections (Hero, Features, About, etc.)
<Paper variant="section" fullWidth>
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
    <Typography variant="h1">Welcome to Vritti</Typography>
    <Typography variant="body1">Transform your business with AI</Typography>
  </div>
</Paper>

// For full-width sections with built-in responsive padding
<Paper variant="section" fullWidth>
  <div style={{ 
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: '0 var(--quantum-spacing-comfortable)' 
  }}>
    <Typography variant="h2">Our Services</Typography>
  </div>
</Paper>
```

#### **2. Feature Variant - Interactive Cards**
```typescript
// Use for feature cards, service cards, team cards
<Paper 
  variant="feature" 
  glass  // Optional: glass effect
  compact  // Optional: smaller padding
  onClick={() => navigate('/feature-detail')}
>
  <Typography variant="h3">AI Analytics</Typography>
  <Typography variant="body2">
    Deep insights from your data with advanced machine learning
  </Typography>
</Paper>

// Feature grid example
<div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
  gap: '2rem' 
}}>
  {features.map((feature) => (
    <Paper key={feature.id} variant="feature" glass>
      <Typography variant="h4">{feature.title}</Typography>
      <Typography variant="body2">{feature.description}</Typography>
    </Paper>
  ))}
</div>
```

#### **3. Accent Variant - Call-to-Action Sections**
```typescript
// Use for CTAs, special announcements, highlighted content
<Paper variant="accent" emphasis="high">
  <Typography variant="h2" sx={{ mb: 2 }}>
    Ready to Transform Your Business?
  </Typography>
  <Typography variant="body1" sx={{ mb: 3 }}>
    Join thousands of companies already using Vritti AI solutions
  </Typography>
  <Button intent="primary" size="large">
    Get Started Today
  </Button>
</Paper>

// Subtle accent for less prominent CTAs
<Paper variant="accent">
  <Typography variant="h4">Subscribe to Our Newsletter</Typography>
  <TextField placeholder="Enter your email" />
  <Button intent="secondary">Subscribe</Button>
</Paper>
```

#### **4. Surface Variant - Form Containers**
```typescript
// Use for contact forms, login forms, interactive content
<Paper variant="surface">
  <Typography variant="h3" sx={{ mb: 3 }}>Contact Us</Typography>
  <form onSubmit={handleSubmit}>
    <TextField 
      label="Full Name" 
      fullWidth 
      sx={{ mb: 2 }}
    />
    <TextField 
      label="Email Address" 
      type="email"
      fullWidth 
      sx={{ mb: 2 }}
    />
    <TextField 
      label="Message"
      multiline
      rows={4}
      fullWidth
      sx={{ mb: 3 }}
    />
    <Button type="submit" intent="primary" fullWidth>
      Send Message
    </Button>
  </form>
</Paper>
```

#### **5. Minimal Variant - Subtle Containers**
```typescript
// Use for subtle containers, navigation elements, sidebars
<Paper variant="minimal">
  <Typography variant="body2">
    Trusted by 500+ companies worldwide
  </Typography>
</Paper>

// For navigation/sidebar styling
<Paper variant="minimal" nav>
  <nav>
    <a href="/about">About</a>
    <a href="/services">Services</a>
    <a href="/contact">Contact</a>
  </nav>
</Paper>
```

### **Typography System**

#### **Heading Hierarchy**
```typescript
// Hero sections
<Typography variant="display">
  Innovation Meets Intelligence
</Typography>

// Page titles
<Typography variant="h1">
  About Vritti
</Typography>

// Section headers
<Typography variant="h2">
  Our Services
</Typography>

// Subsection headers
<Typography variant="h3">
  AI Analytics Platform
</Typography>

// Component headers
<Typography variant="h4">
  Key Features
</Typography>
```

#### **Body Text and Content**
```typescript
// Main content paragraphs
<Typography variant="body1">
  Vritti provides cutting-edge AI solutions that help businesses 
  streamline operations and drive growth through intelligent automation.
</Typography>

// Secondary content, descriptions
<Typography variant="body2">
  Our platform integrates seamlessly with your existing workflows.
</Typography>

// Small text, captions, metadata
<Typography variant="caption">
  Last updated: June 2025
</Typography>
```

### **Button Usage**

#### **Intent-Based Variants**
```typescript
// Primary actions (CTAs, form submissions)
<Button intent="primary" size="large">
  Get Started
</Button>

// Secondary actions (learn more, view details)
<Button intent="secondary">
  Learn More
</Button>

// Tertiary actions (subtle interactions)
<Button intent="tertiary">
  Skip Tour
</Button>

// Ghost buttons (minimal styling)
<Button intent="ghost">
  Cancel
</Button>
```

#### **Common Button Patterns**
```typescript
// Hero CTA section
<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
  <Button intent="primary" size="large">
    Start Free Trial
  </Button>
  <Button intent="secondary" size="large">
    Watch Demo
  </Button>
</div>

// Form submission with loading state
const [loading, setLoading] = useState(false);

<Button 
  type="submit" 
  intent="primary" 
  fullWidth 
  loading={loading}
  onClick={() => setLoading(true)}
>
  {loading ? 'Submitting...' : 'Send Message'}
</Button>
```

## 🎨 Styling Guidelines (Variants Over sx Props)

### **Design System Philosophy**
- **Semantic variants first** - Use Paper variants, Typography variants, Button intents
- **Semantic spacing tokens** - Always use CSS custom properties for spacing
- **Avoid sx props when possible** - They bypass the design system's semantic approach
- **Use style prop sparingly** - Only for truly custom styling that variants don't cover
- **CSS classes for complex animations** - Better performance and maintainability

### **Semantic Spacing System**
Quantum UI provides 5 semantic spacing tokens that are responsive and theme-aware:

```css
/* Available spacing tokens */
var(--quantum-spacing-tight)       /* 4px mobile, 4px tablet, 6px desktop */
var(--quantum-spacing-normal)      /* 6px mobile, 8px tablet, 10px desktop */
var(--quantum-spacing-comfortable) /* 12px mobile, 14px tablet, 16px desktop */
var(--quantum-spacing-spacious)    /* 16px mobile, 20px tablet, 24px desktop */
var(--quantum-spacing-loose)       /* 20px mobile, 28px tablet, 36px desktop */
```

**Usage Guidelines:**
- **tight**: Icon padding, small button spacing
- **normal**: Button internal padding, form field spacing
- **comfortable**: Card padding, section spacing, gaps between elements
- **spacious**: Section margins, feature card spacing
- **loose**: Hero section spacing, major layout gaps

### **Semantic Color System**
Quantum UI provides comprehensive semantic color tokens for all design needs:

```css
/* Surface colors */
var(--quantum-color-surface-primary)     /* Main backgrounds */
var(--quantum-color-surface-secondary)   /* Secondary backgrounds */
var(--quantum-color-surface-elevated)    /* Cards, modals */
var(--quantum-color-surface-input)       /* Form input backgrounds */

/* Text colors */
var(--quantum-color-text-primary)        /* Main text */
var(--quantum-color-text-secondary)      /* Secondary text */
var(--quantum-color-text-disabled)       /* Disabled text */

/* Action colors */
var(--quantum-color-action-primary)      /* Primary buttons, links */
var(--quantum-color-action-secondary)    /* Secondary actions */
var(--quantum-color-action-destructive)  /* Delete, error actions */

/* Border colors */
var(--quantum-color-border-default)      /* Standard borders */
var(--quantum-color-border-subtle)       /* Subtle borders */

/* Feedback colors */
var(--quantum-color-feedback-success)    /* Success states */
var(--quantum-color-feedback-warning)    /* Warning states */
var(--quantum-color-feedback-error)      /* Error states */
```

### **1. Use Semantic Variants Over sx Props**
```typescript
// ✅ CORRECT: Use semantic variants (preferred approach)
<Paper variant="feature">
  <Typography variant="h3">Feature Title</Typography>
  <Typography variant="body2">Feature description</Typography>
</Paper>

// ✅ ACCEPTABLE: CSS custom properties when style is necessary
style={{
  backgroundColor: 'var(--quantum-color-surface-primary)',
  color: 'var(--quantum-color-text-primary)',
  padding: 'var(--quantum-spacing-comfortable)',
  marginBottom: 'var(--quantum-spacing-spacious)',
}}

// ❌ WRONG: Hardcoded values in any props
sx={{
  backgroundColor: '#ffffff',  // Don't hardcode colors
  color: '#000000',           // Use semantic color tokens
  borderColor: '#e0e0e0',     // Don't hardcode border colors
  padding: '16px',            // Don't hardcode spacing
  marginBottom: '24px',       // Use semantic spacing tokens
}}
```

### **2. Responsive Design Patterns**
```typescript
// ✅ CORRECT: Use semantic variants with responsive containers
<Paper variant="section" fullWidth>
  <div style={{ 
    maxWidth: '1200px', 
    margin: '0 auto',
    padding: '0 1rem',
    textAlign: 'center'  // Center on all screens
  }}>
    <Typography variant="display">Hero Title</Typography>
  </div>
</Paper>

// ✅ CORRECT: CSS Grid for responsive layouts with semantic spacing
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: 'var(--quantum-spacing-spacious)',
  padding: '0 var(--quantum-spacing-comfortable)'
}}>
  {items.map(item => (
    <Paper key={item.id} variant="feature">
      <Typography variant="h4">{item.title}</Typography>
    </Paper>
  ))}
</div>

// ❌ AVOID: Complex sx props for responsive design
// Use CSS Grid, Flexbox, and semantic variants instead
```

### **3. Animation Best Practices**
```typescript
// ✅ CORRECT: CSS animations with semantic variants
const AnimatedCard = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Paper
      variant="feature"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'all 0.3s ease-out',
        cursor: 'pointer',
      }}
    >
      {children}
    </Paper>
  );
};

// ✅ CORRECT: CSS class-based animations (preferred)
// styles/animations.css
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
  color: var(--quantum-color-text-primary);
  backgroundColor: var(--quantum-color-surface-primary);
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .fade-in { transition: none; transform: none; }
}

// Component usage
const [isVisible, setIsVisible] = useState(false);

<Paper 
  variant="section" 
  className={`fade-in ${isVisible ? 'visible' : ''}`}
>
  <Typography variant="h2">Animated Section</Typography>
</Paper>
```

## 📄 Page Development Patterns

### **1. Landing Page Structure**
```typescript
// app/page.tsx - Home page
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

// components/sections/HeroSection.tsx
export default function HeroSection() {
  return (
    <Paper variant="section" fullWidth>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        padding: '0 var(--quantum-spacing-comfortable)',
        textAlign: 'center',
        color: 'var(--quantum-color-text-primary)'
      }}>
        <Typography variant="display" style={{ marginBottom: 'var(--quantum-spacing-spacious)' }}>
          Transform Your Business with AI
        </Typography>
        <Typography variant="body1" style={{ 
          marginBottom: 'var(--quantum-spacing-loose)', 
          maxWidth: '600px', 
          margin: '0 auto var(--quantum-spacing-loose) auto' 
        }}>
          Empower your team with intelligent automation and data-driven insights 
          that drive real business results.
        </Typography>
        <div style={{ 
          display: 'flex', 
          gap: 'var(--quantum-spacing-comfortable)', 
          justifyContent: 'center', 
          flexWrap: 'wrap' 
        }}>
          <Button intent="primary" size="large">
            Start Free Trial
          </Button>
          <Button intent="secondary" size="large">
            Watch Demo
          </Button>
        </div>
      </div>
    </Paper>
  );
}
```

### **2. Feature Grid Pattern**
```typescript
// components/sections/FeaturesSection.tsx
const features = [
  {
    title: 'AI Analytics',
    description: 'Deep insights from your data with advanced machine learning algorithms.',
    icon: '📊'
  },
  {
    title: 'Smart Automation',
    description: 'Streamline workflows with intelligent process automation.',
    icon: '🤖'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock expert support for your business needs.',
    icon: '🛟'
  }
];

export default function FeaturesSection() {
  return (
    <Paper variant="section" sx={{ py: { xs: 6, md: 10 } }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 var(--quantum-spacing-comfortable)' 
      }}>
        <Typography variant="h2" style={{ 
          textAlign: 'center', 
          marginBottom: 'var(--quantum-spacing-loose)' 
        }}>
          Why Choose Vritti
        </Typography>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--quantum-spacing-spacious)'
        }}>
          {features.map((feature, index) => (
            <Paper key={index} variant="feature" glass>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: 'var(--quantum-spacing-comfortable)', 
                textAlign: 'center',
                color: 'var(--quantum-color-text-primary)'
              }}>
                {feature.icon}
              </div>
              <Typography variant="h4" style={{ 
                marginBottom: 'var(--quantum-spacing-comfortable)', 
                textAlign: 'center' 
              }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" style={{ textAlign: 'center' }}>
                {feature.description}
              </Typography>
            </Paper>
          ))}
        </div>
      </div>
    </Paper>
  );
}
```

### **3. Contact/CTA Section Pattern**
```typescript
// components/sections/ContactSection.tsx
export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Handle form submission
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Paper variant="section" sx={{ py: { xs: 6, md: 10 } }}>
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '0 var(--quantum-spacing-comfortable)' 
      }}>
        <Typography variant="h2" style={{ 
          textAlign: 'center', 
          marginBottom: 'var(--quantum-spacing-comfortable)' 
        }}>
          Ready to Get Started?
        </Typography>
        <Typography variant="body1" style={{ 
          textAlign: 'center', 
          marginBottom: 'var(--quantum-spacing-loose)' 
        }}>
          Contact us today to learn how Vritti can transform your business.
        </Typography>

        <Paper variant="surface">
          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              fullWidth
              style={{ marginBottom: 'var(--quantum-spacing-comfortable)' }}
            />
            <TextField
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              fullWidth
              style={{ marginBottom: 'var(--quantum-spacing-comfortable)' }}
            />
            <TextField
              label="Tell us about your project"
              multiline
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              fullWidth
              style={{ marginBottom: 'var(--quantum-spacing-spacious)' }}
            />
            <Button
              type="submit"
              intent="primary"
              fullWidth
              loading={loading}
            >
              Send Message
            </Button>
          </form>
        </Paper>
      </div>
    </Paper>
  );
}
```

## 🌓 Theme Integration

### **Theme Toggle Component**
```typescript
// components/ui/ThemeToggle.tsx
import { useTheme } from '@vritti/quantum-ui';
import { Button } from '@vritti/quantum-ui/Button';

export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme, isHydrated } = useTheme();

  // Prevent hydration mismatch
  if (!isHydrated) {
    return <div style={{ width: '44px', height: '44px' }} />;
  }

  return (
    <Button
      intent="ghost"
      onClick={toggleColorScheme}
      aria-label={`Switch to ${colorScheme === 'light' ? 'dark' : 'light'} mode`}
      style={{
        minWidth: '44px',
        height: '44px',
        borderRadius: '50%',
        padding: 'var(--quantum-spacing-normal)',
        backgroundColor: 'var(--quantum-color-surface-secondary)',
        border: '1px solid var(--quantum-color-border-subtle)',
        color: 'var(--quantum-color-text-primary)',
        '&:hover': {
          backgroundColor: 'var(--quantum-color-surface-elevated)',
          borderColor: 'var(--quantum-color-border-default)',
        }
      }}
    >
      {colorScheme === 'light' ? '🌙' : '☀️'}
    </Button>
  );
}
```

### **SSR-Safe Theme Setup**
```typescript
// app/layout.tsx
import { ThemeScript } from '@vritti/quantum-ui/next';
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeScript 
          defaultColorScheme="light"
          storageKey="vritti-theme"
          attribute="data-theme"
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

// app/providers.tsx
'use client';
import { ThemeProvider } from '@vritti/quantum-ui';

export function Providers({ children }) {
  return (
    <ThemeProvider
      defaultColorScheme="light"
      storageKey="vritti-theme"
      attribute="data-theme"
    >
      {children}
    </ThemeProvider>
  );
}
```

## 🚫 Common Anti-Patterns to Avoid

### **1. Bundle Size Mistakes**
```typescript
// ❌ WRONG: Barrel imports (adds 40kB+)
import { Button, TextField, Paper } from '@vritti/quantum-ui';

// ✅ CORRECT: Direct imports
import { Button } from '@vritti/quantum-ui/Button';
import { TextField } from '@vritti/quantum-ui/TextField';
import { Paper } from '@vritti/quantum-ui/Paper';
```

### **2. Color and Styling Mistakes**
```typescript
// ❌ WRONG: Hardcoded colors anywhere
style={{
  backgroundColor: '#ffffff',      // Use semantic tokens
  color: '#000000',               // Use semantic tokens
  borderColor: '#e0e0e0',         // Use semantic tokens
}}

// ✅ CORRECT: Semantic color tokens
style={{
  backgroundColor: 'var(--quantum-color-surface-primary)',
  color: 'var(--quantum-color-text-primary)',
  borderColor: 'var(--quantum-color-border-default)',
}}
```

### **3. Animation Mistakes**
```typescript
// ❌ WRONG: JavaScript animation libraries (removed)
import { motion } from 'framer-motion';
<motion.div whileHover={{ scale: 1.05 }} />

// ✅ CORRECT: CSS animations with semantic colors
<div 
  onMouseEnter={() => setHovered(true)}
  style={{
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.2s ease-out',
    backgroundColor: 'var(--quantum-color-surface-elevated)',
    color: 'var(--quantum-color-text-primary)',
  }}
/>
```

### **4. Spacing and Layout Mistakes**
```typescript
// ❌ WRONG: Hardcoded spacing and colors
<div 
  style={{
    backgroundColor: '#ffffff',  // Hardcoded color
    color: '#000000',           // Hardcoded color
    borderRadius: '8px',
    padding: '24px',           // Hardcoded spacing
    margin: '16px 0',         // Hardcoded spacing
    gap: '12px',              // Hardcoded spacing
    border: '1px solid #e0e0e0', // Hardcoded color
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}
>
  Content here
</div>

// ✅ CORRECT: Use semantic Paper variants
<Paper variant="surface">
  Content here
</Paper>

// ✅ ACCEPTABLE: When style prop is needed, use semantic tokens
style={{
  backgroundColor: 'var(--quantum-color-surface-primary)',
  color: 'var(--quantum-color-text-primary)',
  borderColor: 'var(--quantum-color-border-default)',
  padding: 'var(--quantum-spacing-comfortable)',
  marginBottom: 'var(--quantum-spacing-spacious)',
  gap: 'var(--quantum-spacing-normal)',
}}
```

### **5. Component Usage Mistakes**
```typescript
// ❌ WRONG: Generic div with hardcoded styling
<div 
  style={{
    backgroundColor: 'white',        // Hardcoded color
    color: 'black',                  // Hardcoded color
    borderRadius: '8px',
    padding: '24px',                 // Hardcoded spacing
    margin: '16px',                  // Hardcoded spacing
    border: '1px solid #e0e0e0',     // Hardcoded color
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}
>
  <h3 style={{ color: '#333' }}>Feature Title</h3>  {/* Hardcoded color */}
  <p style={{ color: '#666' }}>Feature description</p>  {/* Hardcoded color */}
</div>

// ✅ CORRECT: Use semantic Paper variant with semantic Typography
<Paper variant="feature">
  <Typography variant="h4">Feature Title</Typography>
  <Typography variant="body2">Feature description</Typography>
</Paper>
```

## 📋 Development Checklist

### **Before Creating New Pages/Components**
- [ ] Import components directly from their individual paths
- [ ] Use Paper variants instead of custom div containers
- [ ] Use Typography variants instead of custom text styling
- [ ] Use Button intents instead of custom button styling
- [ ] Use semantic color tokens for all colors (no hardcoded hex/rgb values)
- [ ] Use semantic spacing tokens for all spacing (no hardcoded px/rem values)
- [ ] Prefer semantic variants over sx props
- [ ] Use CSS Grid/Flexbox for layouts instead of sx responsive props
- [ ] Use CSS classes for animations instead of sx props
- [ ] Test in both light and dark themes

### **Performance Checklist**
- [ ] Direct imports for all Quantum UI components
- [ ] Use semantic variants instead of sx props (better performance)
- [ ] Use CSS classes instead of inline styles when possible
- [ ] Lazy load components below the fold
- [ ] Optimize images with Next.js Image component
- [ ] Use semantic spacing tokens for all margins, padding, and gaps
- [ ] Use semantic color tokens for all colors (backgrounds, text, borders)
- [ ] Never use hardcoded hex codes, rgb values, or px spacing
- [ ] Minimize use of sx props and custom styling
- [ ] Test bundle size impact of new features

### **Accessibility Checklist**
- [ ] Proper heading hierarchy (h1 → h2 → h3 → h4)
- [ ] Meaningful alt text for images
- [ ] Keyboard navigation support
- [ ] Sufficient color contrast in both themes
- [ ] Screen reader friendly content structure
- [ ] Focus states for interactive elements

## 🔧 Development Commands

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Run production build locally
yarn start

# Type checking
yarn type-check

# Linting
yarn lint

# Bundle analysis
yarn analyze
```

## 📈 Performance Monitoring

### **Bundle Size Targets**
- **Page bundles**: < 200kB (we achieved 152kB)
- **Component chunks**: < 50kB each
- **Theme system**: ~9KB (already optimized)
- **Individual components**: < 1KB each

### **Core Web Vitals Targets**
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

---

## 📚 Quick Reference

### **Essential Imports**
```typescript
// Components (always direct imports)
import { Button } from '@vritti/quantum-ui/Button';
import { TextField } from '@vritti/quantum-ui/TextField';
import { Paper } from '@vritti/quantum-ui/Paper';
import { Typography } from '@vritti/quantum-ui/Typography';

// Theme utilities
import { ThemeProvider, useTheme } from '@vritti/quantum-ui';
import { ThemeScript } from '@vritti/quantum-ui/next';
```

### **Semantic Token Reference**

#### **Spacing Tokens**
```css
/* Always use these instead of hardcoded spacing values */
var(--quantum-spacing-tight)       /* Small spacing: 4-6px */
var(--quantum-spacing-normal)      /* Normal spacing: 6-10px */
var(--quantum-spacing-comfortable) /* Comfortable spacing: 12-16px */
var(--quantum-spacing-spacious)    /* Spacious spacing: 16-24px */
var(--quantum-spacing-loose)       /* Loose spacing: 20-36px */
```

#### **Color Tokens**
```css
/* Always use these instead of hardcoded colors */
/* Surfaces */
var(--quantum-color-surface-primary)     /* #ffffff / #0a0a0a */
var(--quantum-color-surface-secondary)   /* #f5f5f5 / #0a0a0a */
var(--quantum-color-surface-elevated)    /* #ffffff / #0a0a0a */

/* Text */
var(--quantum-color-text-primary)        /* #0a0a0a / #fafafa */
var(--quantum-color-text-secondary)      /* #525252 / #d4d4d4 */

/* Actions */
var(--quantum-color-action-primary)      /* #0066CC (Universal Blue) */
var(--quantum-color-action-secondary)    /* #10b981 (Emerald) */

/* Borders */
var(--quantum-color-border-default)      /* #d4d4d4 / #525252 */
var(--quantum-color-border-subtle)       /* #e5e5e5 / #404040 */
```

#### **Example Usage**
```typescript
style={{
  backgroundColor: 'var(--quantum-color-surface-primary)',
  color: 'var(--quantum-color-text-primary)',
  borderColor: 'var(--quantum-color-border-default)',
  padding: 'var(--quantum-spacing-comfortable)',
  marginBottom: 'var(--quantum-spacing-spacious)',
  gap: 'var(--quantum-spacing-normal)',
}}
```

### **Paper Variants Quick Guide**
- **`variant="section"`** - Main page sections, full-width containers
- **`variant="feature"`** - Interactive cards, hover effects
- **`variant="accent"`** - CTAs, highlighted content
- **`variant="surface"`** - Forms, interactive containers
- **`variant="minimal"`** - Subtle containers, navigation

### **Typography Hierarchy**
- **`variant="display"`** - Hero titles
- **`variant="h1"`** - Page titles
- **`variant="h2"`** - Section headers
- **`variant="h3"`** - Subsection headers
- **`variant="h4"`** - Component headers
- **`variant="body1"`** - Main content
- **`variant="body2"`** - Secondary content

*This guide ensures optimal performance, accessibility, and maintainability for the Vritti landing page. Always prioritize semantic components, direct imports, and CSS-first animations.*