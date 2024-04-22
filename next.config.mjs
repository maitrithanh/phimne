/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'phim.nguonc.com',
            port: '',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
