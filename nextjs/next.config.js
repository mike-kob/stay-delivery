module.exports = {
  async rewrites() {
    return [
      {source: '/graphql', destination: 'http://localhost:8000/graphql/'},
      {source: '/static/:path*', destination: 'http://localhost:8000/static/:path*'},
      {source: '/auth/login', destination: 'http://localhost:8000/login/'},
      {source: '/auth/signup/client', destination: 'http://localhost:8000/signup/client/'},
      {source: '/auth/signup/restaurant', destination: 'http://localhost:8000/signup/restaurant/'},
    ];
  },
};
