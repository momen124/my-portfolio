import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Ensure static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;