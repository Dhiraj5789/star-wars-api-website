/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ucarecdn.com','fontmeme.com']
  },
}

module.exports = nextConfig
