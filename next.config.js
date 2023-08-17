/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'ssd.jpl.nasa.gov',
        port: '',
        pathname: '/sbdb.cgi**',
      },
    ],
  },
};

module.exports = nextConfig;
