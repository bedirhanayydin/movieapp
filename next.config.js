/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org", "cdn.goturkiye.com"],
  },
};

module.exports = nextConfig;
