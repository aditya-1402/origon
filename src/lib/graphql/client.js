// @ts-nocheck
import { ENDPOINT } from '@utils/constants';
import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(ENDPOINT);

const originalRequest = client.request.bind(client);
client.request = async (...args) => {
  try {
    return await originalRequest(...args);
  } catch (error) {
    // TODO: Handle 420 status code for refreshing expired token
    if (error.response && (error.response.status === 401 || error.response.status === 420)) {
      console.log('Unauthorized User. Logging Out.');
    }
    throw error;
  }
};
