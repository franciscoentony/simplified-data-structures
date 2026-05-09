/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/simplified-data-structures" : "",
  assetPrefix: isProd ? "/simplified-data-structures" : "",
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;