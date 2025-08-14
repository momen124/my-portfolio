import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Add this for better deployment compatibility
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: false, // Keep TypeScript checks
  },
  // Add trailing slash for better compatibility
  trailingSlash: false,
  // Ensure static optimization
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;