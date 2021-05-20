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
  type Canine {
    _id: ID!
    name: String
    kennel: String
    demeanor: String
    status: String
    # walk:(timestamp:Date,volunteer_id:String)
    # potty:(timestamp:Date,volunteer_id:String)
  }

  type Query {
    me: User
    canines: [Canine]
    canine(name: String!): Canine
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!,
            email: String!,
            password: String!,
            firstName: String!,
            lastName: String!,
            isAdmin: Boolean): Auth
    addDog(name:String!, kennel:String!,demeanor: String!,status: String!): Canine

  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
