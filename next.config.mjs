/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    API_URL: process.env.API_URL,
    ESEWA_URL: process.env.ESEWA_URL,
  }
};

export default nextConfig;
