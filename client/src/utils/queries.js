import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      firstName
      lastName
    }
  };

  
`;

//toby added this 
export const GET_USERS = gql`
{
  users{
    username
    
  }
}
`;
