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
        username {
          username
        }
        timestamp
      }
      walk {
        username {
          username
        }
        timestamp
      }
    }
  }
`;

//get single dog
export const GET_DOGS = gql`
query canine($id: ID!) {
  canine(_id: $id) {
    _id
    name
    kennel
    status
    potty {
      _id
      username{
        username
      }
      timestamp
      
    }
    walk {
      _id
      username {
        username
      }
      timestamp
    }
  }
}
`;