/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
  },
  async rewrites() {
    return [
      {
        "source": "/",
        "destination": "/index",
      }
    ]
  }
}

module.exports = nextConfig
