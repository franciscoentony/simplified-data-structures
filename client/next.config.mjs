/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/simplified-data-structures",
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
