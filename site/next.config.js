/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'CPS',
    description: 'The unofficial store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: ' https://Carysphotoservice.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Carysphotoservice/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
