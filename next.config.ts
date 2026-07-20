import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/energetische-geinstherapie',
        destination: '/aanbod',
        permanent: true,
      },
      {
        source: '/tarieven-voor-de-behandelingen',
        destination: '/aanbod',
        permanent: true,
      },
      {
        source: '/startpagina',
        destination: '/',
        permanent: true,
      },
      {
        source: '/diensten',
        destination: '/aanbod',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
