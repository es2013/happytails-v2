import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import AuthenticationGuard from "./AuthenticationGuard"
import { createUploadLink } from 'apollo-upload-client';
import './App.css';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  link: createUploadLink({
    uri: '/graphql',
    headers: {
      authorization: localStorage.getItem('id_token') ? `Bearer ${localStorage.getItem('id_token')}` : '',
    }
  }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthenticationGuard />
    </ApolloProvider>
  );
}

export default App;
