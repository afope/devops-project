/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    assetPrefix: '/devops-project/',
    basePath: '/devops-project', // Note that the basePath doesnt end on a slash
  }
}

module.exports = nextConfig
