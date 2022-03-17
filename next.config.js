/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/poker-handle" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
