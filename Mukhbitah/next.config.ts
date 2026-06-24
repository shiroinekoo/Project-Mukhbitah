import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // Image optimization
  images: {
    domains: [
      // Add your image domains here
      // Example: 'your-cdn-domain.com'
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Compression
  compress: true,
  
  // Remove X-Powered-By header
  poweredByHeader: false,
  
  // Turbopack configuration for faster builds
  turbopack: {
    // Optimize for development speed
    resolveAlias: {},
  },
  
  // Optimize development experience
  experimental: {
    // Faster refresh
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
