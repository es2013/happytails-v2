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

export const REMOVE_USER = gql`
  mutation removeUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    removeUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_DOG = gql`
  mutation addDog($dogs: [ID]!) {
    addDog(dogs: $dogs) {
      dogs {
        _id
      name
      Demeanor 
      
      }
    }
  }
`;

export const REMOVE_DOG = gql`
  mutation removeDog($dogs: [ID]!) {
    removeDog(dogs: $dogs) {
      dogs {
        _id
      name
      Demeanor 
      }
    }
  }
`;

export const SEARCH_DOG = gql`
  mutation searchDog($dogs: [ID]!) {
    addOrder(products: $dogs) {
     dogs {
        _id
      name
      demeanor
       }
    }
  }
`;