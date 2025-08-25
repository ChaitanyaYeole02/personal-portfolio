/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghchart.rshah.org",
      },
    ],
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
