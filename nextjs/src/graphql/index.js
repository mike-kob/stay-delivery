import axios from 'axios';

export const clientGraphql = async (query, vars = {}) => {
  const resp = await axios.post('/graphql', {query: query, variables: vars});
  return resp.data;
};
