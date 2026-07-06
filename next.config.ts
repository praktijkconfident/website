import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/energetische-geinstherapie',
        destination: '/aanbod',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
