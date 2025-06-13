# CLAUDE.md - Vritti Landing Page Component Guide

This guide explains how to use quantum-ui components in the Vritti landing page project.

## 🎯 Quick Start

### Import Components (Direct Imports Required)
```typescript
// ✅ CORRECT: Direct component imports for optimal bundle size
import { Button } from 'quantum-ui/Button';
import { TextField } from 'quantum-ui/TextField';
import { Paper } from 'quantum-ui/Paper';
import { Typography } from 'quantum-ui/Typography';

// ✅ CORRECT: Theme utilities from main package
import { ThemeProvider, useTheme } from 'quantum-ui';

// ✅ CORRECT: Next.js server-safe imports
import { ThemeScript } from 'quantum-ui/next';

// ❌ WRONG: Barrel imports disabled for components
import { Button, TextField } from 'quantum-ui'; // Will fail
```

### Theme Setup (Next.js App Router)

**1. Add ThemeScript to layout.tsx**
```typescript
// app/layout.tsx
import { ThemeScript } from 'quantum-ui/next';

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
      <body>{children}</body>
    </html>
  );
}
```

**2. Wrap app with ThemeProvider**
```typescript
// app/providers.tsx
'use client';
import { ThemeProvider } from 'quantum-ui';

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

## 📱 Available Components

### Button
```typescript
import { Button } from 'quantum-ui/Button';

// Intent-based variants
<Button intent="primary">Get Started</Button>
<Button intent="secondary">Learn More</Button>
<Button intent="tertiary">Skip</Button>

// With loading state
<Button intent="primary" loading>Submitting...</Button>

// Sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// Full width
<Button fullWidth>Sign Up Now</Button>
```

### TextField
```typescript
import { TextField } from 'quantum-ui/TextField';

// Basic input
<TextField 
  label="Email Address" 
  placeholder="Enter your email"
  type="email"
/>

// With error state
<TextField 
  label="Password"
  type="password"
  error
  helperText="Password must be at least 8 characters"
/>

// Multiline
<TextField 
  label="Message"
  multiline
  rows={4}
  placeholder="Tell us about your project..."
/>
```

### Paper
```typescript
import { Paper } from 'quantum-ui/Paper';

// Basic surface
<Paper>
  <Typography variant="h2">Welcome to Vritti</Typography>
  <Typography variant="body1">Transform your business with AI</Typography>
</Paper>

// Glass effect for hero sections
<Paper variant="glass">
  <Typography variant="h1">Innovation Meets Intelligence</Typography>
</Paper>

// Elevated cards
<Paper variant="elevated">
  <Typography variant="h3">Our Services</Typography>
  <Typography variant="body2">Discover what we can do for you</Typography>
</Paper>
```

### Typography
```typescript
import { Typography } from 'quantum-ui/Typography';

// Headings
<Typography variant="h1">Main Hero Title</Typography>
<Typography variant="h2">Section Headers</Typography>
<Typography variant="h3">Card Titles</Typography>
<Typography variant="h4">Subsection Headers</Typography>

// Body text
<Typography variant="body1">Primary body text for main content</Typography>
<Typography variant="body2">Secondary text for descriptions</Typography>

// Special variants
<Typography variant="caption">Small labels and captions</Typography>
<Typography variant="overline">SECTION LABELS</Typography>

// With custom styling
<Typography 
  variant="h1" 
  sx={{ 
    background: 'linear-gradient(45deg, #0066CC, #4A90E2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
  Gradient Hero Text
</Typography>
```

## 🎨 Landing Page Patterns

### Hero Section
```typescript
import { Paper } from 'quantum-ui/Paper';
import { Typography } from 'quantum-ui/Typography';
import { Button } from 'quantum-ui/Button';

function HeroSection() {
  return (
    <Paper variant="glass" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div>
        <Typography variant="h1" sx={{ mb: 2 }}>
          Welcome to Vritti
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px' }}>
          Empowering businesses with cutting-edge AI solutions that drive growth and innovation.
        </Typography>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button intent="primary" size="large">
            Get Started
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

### Feature Cards
```typescript
import { Paper } from 'quantum-ui/Paper';
import { Typography } from 'quantum-ui/Typography';

function FeatureGrid() {
  const features = [
    { title: 'AI Analytics', description: 'Deep insights from your data' },
    { title: 'Smart Automation', description: 'Streamline your workflows' },
    { title: '24/7 Support', description: 'Always here when you need us' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
      {features.map((feature) => (
        <Paper key={feature.title} variant="elevated">
          <Typography variant="h3" sx={{ mb: 2 }}>
            {feature.title}
          </Typography>
          <Typography variant="body2">
            {feature.description}
          </Typography>
        </Paper>
      ))}
    </div>
  );
}
```

### Contact Form
```typescript
import { Paper } from 'quantum-ui/Paper';
import { Typography } from 'quantum-ui/Typography';
import { TextField } from 'quantum-ui/TextField';
import { Button } from 'quantum-ui/Button';

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Handle form submission
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Paper sx={{ maxWidth: '500px', mx: 'auto' }}>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Get in Touch
      </Typography>
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
          label="Company" 
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
  );
}
```

## 🌓 Theme Integration

### Theme Toggle Component
```typescript
import { Button } from 'quantum-ui/Button';
import { useTheme } from 'quantum-ui';

function ThemeToggle() {
  const { colorScheme, toggleColorScheme, isHydrated } = useTheme();
  
  if (!isHydrated) {
    return <div style={{ width: '44px', height: '44px' }} />; // Placeholder
  }
  
  return (
    <Button
      intent="tertiary"
      onClick={toggleColorScheme}
      aria-label={`Switch to ${colorScheme === 'light' ? 'dark' : 'light'} mode`}
    >
      {colorScheme === 'light' ? '🌙' : '☀️'}
    </Button>
  );
}
```

### Responsive Design
```typescript
import { Typography } from 'quantum-ui/Typography';

// Components automatically handle responsive behavior
// Use CSS or sx prop for custom responsive styling
<Typography 
  variant="h1"
  sx={{
    fontSize: {
      xs: '2rem',    // Mobile
      md: '3rem',    // Tablet
      lg: '4rem',    // Desktop
    }
  }}
>
  Responsive Hero
</Typography>
```

## 💡 Best Practices

### Performance
- **Always use direct imports** for components to enable tree-shaking
- Implement lazy loading for sections below the fold
- Use Paper variants appropriately (glass effects are more expensive)

### Accessibility
- Always provide meaningful labels for form fields
- Use semantic HTML structure with Typography variants
- Ensure sufficient color contrast in both themes

### SEO
- Use Typography variants for proper heading hierarchy (h1 → h2 → h3)
- Include descriptive alt text for images
- Structure content semantically

### Responsive Design
- Components are mobile-first by default
- Test on various screen sizes
- Use the sx prop for custom responsive behavior

## 🚀 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Start production server
npm start
```

## 📦 Import Reference

### Components (Direct Imports)
```typescript
import { Button, type ButtonProps } from 'quantum-ui/Button';
import { TextField, type TextFieldProps } from 'quantum-ui/TextField';
import { Paper, type PaperProps } from 'quantum-ui/Paper';
import { Typography, type TypographyProps } from 'quantum-ui/Typography';
```

### Theme System (Barrel Imports)
```typescript
// Client-side theme utilities
import { 
  ThemeProvider, 
  useTheme, 
  useIsClient,
  createQuantumTheme,
  SEMANTIC_TOKENS,
  type ThemeProviderProps,
  type ThemeContextType 
} from 'quantum-ui';

// Server-safe utilities for Next.js
import { ThemeScript, getThemeScript } from 'quantum-ui/next';
```

## 🔧 Customization

### Extending Components
```typescript
import { Button } from 'quantum-ui/Button';

// Create custom variants using sx prop
<Button 
  intent="primary"
  sx={{
    background: 'linear-gradient(45deg, #0066CC, #4A90E2)',
    '&:hover': {
      background: 'linear-gradient(45deg, #0052A3, #3A7BC8)',
    }
  }}
>
  Custom Gradient Button
</Button>
```

### Brand Colors
The quantum-ui system uses a blue-based brand palette:
- Primary: #0066CC (Universal Blue 500)
- Surfaces use subtle blue tints
- Glass effects have blue-tinted shadows

### Custom Styling with CSS Variables
```typescript
// Use CSS custom properties for consistent theming
const customStyles = {
  background: 'var(--quantum-color-surface-primary)',
  color: 'var(--quantum-color-text-primary)',
  borderRadius: 'var(--quantum-borderRadius-large)',
  padding: 'var(--quantum-spacing-large)',
};
```

## 🛠️ Current Setup

### Dependencies
- **quantum-ui**: Local design system (linked from ../quantum-ui)
- **Next.js 15**: React framework with App Router
- **Material-UI**: Base component system
- **Emotion**: Styling solution
- **TypeScript**: Type safety

### Architecture Notes
- Components enforce direct imports for optimal bundle splitting
- Theme utilities use barrel exports for convenience
- SSR-safe theme implementation prevents flickering
- Mobile-first responsive design with semantic tokens

---

*This guide covers the essential patterns for building the Vritti landing page with quantum-ui components. The design system ensures consistency, accessibility, and great performance through enforced direct imports and optimized theme handling.*