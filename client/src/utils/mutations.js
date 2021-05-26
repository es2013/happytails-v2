import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        isAdmin
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_CANINE = gql`
  mutation addDog(
    $name: String!
    $kennel: String!
    $demeanor: String!
    $status: String!
  ) {
    addDog(name: $name, kennel: $kennel, demeanor: $demeanor, status: $status) {
      _id
      name
      kennel
      demeanor
      status
    }
  }
`;

//mutation for add potty
export const ADD_POTTY = gql`
  mutation addPotty(
    $canineId: ID!
  )
  {
    addPotty(
      canineId: $canineId
    )
    {
      activityType
      timestamp
      _id
      username
    }
  }
`;

//mutation for add potty
export const ADD_WALK = gql`
mutation addWalk(
  $canineId:ID!)
  {
    addWalk(canineId:$canineId)
    {
      activityType
      timestamp
      _id
      username
    }
  }
`;


/*
export const ADD_EMPLOYEE = gql``;
export const ADD_VOLUNTEER = gql``;
*/
