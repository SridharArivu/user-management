
/** @type {import('next').NextConfig} */

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.pngimg.me',
          port: '',
          pathname: '/thumb/**',
        },
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
          port: '',
          pathname: '/free-photo/**',
        },
      ],
    },
  };
  