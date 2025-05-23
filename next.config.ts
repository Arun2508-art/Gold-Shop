import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      },
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com'
      },

      {
        protocol: 'https',
        hostname: 'opencart.mahardhi.com'
      }
    ]
  }
};

export default nextConfig;
