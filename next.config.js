/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Use an alternate dist directory to avoid Windows/OneDrive lock issues in `.next`.
  distDir: ".next-local",
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    workerThreads: true,
  },
};

module.exports = nextConfig;
