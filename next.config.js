// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeholder.com'],
  },
  // experimental.serverActions has been removed as it's now default in Next.js 14
};

module.exports = nextConfig;