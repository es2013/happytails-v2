import gql from 'graphql-tag';

// DOUBLE CHECK TO SEE WHAT ELSE TO IMPLEMENT


export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_CANINE = gql`
  
`;

export const ADD_EMPLOYEE = gql`
  
`;

export const ADD_VOLUNTEER = gql`
  
`;