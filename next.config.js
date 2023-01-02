/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true,
  },
  swcMinify: true,
  experimental: {
      appDir: true,
  },
};

module.exports = nextConfig;
