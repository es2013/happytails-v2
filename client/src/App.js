import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import AuthenticationGuard from "./AuthenticationGuard"
import { setContext }from '@apollo/client/link/context'
import { createUploadLink } from 'apollo-upload-client';
import './App.css';

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

/* Initialize the client with a terminating Apollo Link using createUploadLink.
This is needed to handle uploading of the dog's image of newly added dogs.
Apollo Client stores the results of its GraphQL queries in a normalized, in-memory cache.
This enables the client to respond to future queries for the same data without sending
unnecessary network requests. The InMemoryCache normalizes query response objects before
it saves them to its internal data store */
const client = new ApolloClient({
  link: authLink.concat(
    createUploadLink({ uri: '/graphql'})
  ),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthenticationGuard />
    </ApolloProvider>
  );
}

export default App;
