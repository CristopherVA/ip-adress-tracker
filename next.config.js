/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mapbox_key: process.env.MAP_BOX_TOKEN,
    API_GEOLOCATION: process.env.API_GEOLOCATION
  }
}

module.exports = nextConfig
