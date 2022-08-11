/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mapbox_key: process.env.MAP_BOX_TOKEN
  }
}

module.exports = nextConfig
