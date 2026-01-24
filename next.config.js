/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Use an alternate dist directory to avoid Windows/OneDrive lock issues in `.next`.
  // Only use `.next-local` in development; production (Vercel) uses default `.next`
  ...(process.env.NODE_ENV === 'development' && { distDir: ".next-local" }),
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

module.exports = nextConfig;
