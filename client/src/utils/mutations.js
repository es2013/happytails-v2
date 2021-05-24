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
  mutation addUser( $firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!
  ) {
    addUser( firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password
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
  $name:String!, 
  $kennel:String!, 
  $demeanor:String!, 
  $status:String!){
 addDog(
   name:$name, 
   kennel: $kennel, 
   demeanor: $demeanor, 
   status: $status){
  _id
  name 
  kennel
  demeanor 
  status 
}
}
`;



/*
export const ADD_CANINE = gql`
  mutation addDog(
    $name: String
    $kennel: String
    $demeanor: String
    $status: String
  ) {
    addDog(
      name: $username
      kennel: $password
      demeanor: $firstName
      status: $lastName
    ) {
      addPotty(
        canineId: $canineId
      ) {
        ActivityInput(
          timestamp: $timestamp
          volunteer: $volunteer
        )
        }
      addWalk(
        canineId: $canineId
      ) {
        ActivityInput(
          timestamp: $timestamp
          volunteer: $volunteer
        )
        }
      },
    }
`;
*/

/*
export const ADD_EMPLOYEE = gql``;
export const ADD_VOLUNTEER = gql``;
*/
