/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
