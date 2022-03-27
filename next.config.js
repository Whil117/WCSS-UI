/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3.amazonaws.com', 'via.placeholder.com', 'www.elperiodicousa.com'],
  }
}

module.exports = nextConfig
