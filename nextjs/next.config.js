module.exports = {
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: process.env.PROXY_HOST + '/graphql/',
      },
      {
        source: '/static/:path*',
        destination: process.env.PROXY_HOST + '/static/:path*',
      },
      {
        source: '/auth/login',
        destination: process.env.PROXY_HOST + '/login/',
      },
      {
        source: '/auth/signup/client',
        destination: process.env.PROXY_HOST + '/signup/client/',
      },
      {
        source: '/auth/signup/restaurant',
        destination: process.env.PROXY_HOST + '/signup/restaurant/',
      },
    ];
  },
};
