import gql from 'graphql-tag';

// export const GET_ME = gql`
//   {
//     me {
//       _id
//       username
//       email
//       firstName
//       lastName
//     }
//   };

//  `;

// //toby added this
// export const GET_USERS = gql`
// {
//   users{
//     username

//   }
// }
// `;

//get all dogs
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

// create a GET_DOG query to use in SingleDog page.  It will pass the id to dogIdParam.

//get single dog
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
