import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from '@apollo/client';
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
