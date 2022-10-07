/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: () => ({
    beforeFiles: [
      {
        source: '/my-app',
        destination: `${process.env.MY_APP_URL}/my-app`,
      },
      {
        source: '/my-app/:path*',
        destination: `${process.env.MY_APP_URL}/my-app/:path*`,
      },
    ],
  }),
};

module.exports = nextConfig;
