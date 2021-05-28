import gql from 'graphql-tag';

// Retrieve all users
export const GET_USERS = gql`
  query {
    users {
      username
      email
      _id
      firstName
      lastName
      isAdmin
    }
  }
`;

// Retrieve all dogs
export const GET_DOGS = gql`
  query {
    canines {
      name
      _id
      kennel
      demeanor
      status
      potty {
        username
        timestamp
        _id
      }
      walk {
        username
        timestamp
        _id
      }
    }
  }
`;

// Retrieve a single dog
export const GET_DOG = gql`
  query canine($id: ID!) {
    canine(_id: $id) {
      _id
      name
      kennel
      status
      potty {
        _id
        username
        timestamp
      }
      walk {
        _id
        username
        timestamp
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($donation: [ID]!) {
    checkout(donation: $donation) {
      session
    }
  }
`;
