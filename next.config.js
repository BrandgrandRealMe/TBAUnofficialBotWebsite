/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'top.gg',
        port: '',
        pathname: '/api/widget/**',
      },
    ],
  },
}

module.exports = nextConfig
