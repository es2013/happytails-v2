// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    firstName: String
    lastName: String
    isAdmin: Boolean
  }

  type Query {
    me: User
    users: [User]
  }

 

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!,
            email: String!,
            password: String!,
            firstName: String!,
            lastName: String!,
            isAdmin: Boolean): Auth
    removeUser(username: String!,
            isAdmin: Boolean): String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
