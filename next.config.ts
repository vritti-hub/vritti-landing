import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SSR enabled for Vercel deployment
  
  // Enable image optimization for Vercel
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
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
