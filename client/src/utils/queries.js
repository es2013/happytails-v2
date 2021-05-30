import gql from 'graphql-tag';

export const GET_CURRENT_USER = gql`
  query {
    me {
      username
      email
      _id
      firstName
      lastName
      isAdmin
      isActive
    }
  }
`;

export const GET_ONE_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      username
      email
      _id
      firstName
      lastName
      isAdmin
      isActive
    }
  }
`;

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
      isActive
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
      image
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
      image
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
