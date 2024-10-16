/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@coinbase/onchainkit'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.seadn.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
