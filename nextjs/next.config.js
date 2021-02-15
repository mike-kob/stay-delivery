module.exports = {
  async rewrites() {
    return [
      {source: '/graphql', destination: 'http://localhost:8000/graphql/'},
      {source: '/auth/login', destination: 'http://localhost:8000/login/'},
      {source: '/auth/signup/client', destination: 'http://localhost:8000/signup/client/'},
    ];
  },
};
