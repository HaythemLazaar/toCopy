/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.producthunt.com',
        port: '',
        pathname: '/widgets/**',
      }
    ]
  }
}

module.exports = nextConfig
