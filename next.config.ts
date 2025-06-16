import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Set basePath for GitHub Pages (will be automatically configured by GitHub Actions)
  basePath: process.env.NODE_ENV === 'production' ? '/vritti-landing' : '',
  
  // Ensure trailing slash for proper routing
  trailingSlash: true,
  
  experimental: {
    optimizePackageImports: ['quantum-ui', 'framer-motion'],
  },
  
  typescript: {
    // Allow production builds to succeed even if there are type errors
    ignoreBuildErrors: false,
  },
  
  eslint: {
    // Allow production builds to succeed even if there are ESLint errors
    // TODO: Fix ESLint errors and set back to false
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
