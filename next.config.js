/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Optimize compilation
  typescript: {
    // Skip type checking in development for faster builds
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  // Disable unnecessary features
  eslint: {
    // Skip eslint during builds for faster compilation
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },
  // Optimize output
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig 