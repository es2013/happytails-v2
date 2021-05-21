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
    walk:[Activity]
    potty:[Activity]

  }
  type Activity {
    timestamp: String
    volunteer: User
  }

  type Query {
    me: User
    canines: [Canine]
    canine(
      name: String!
      kennel: String!
      demeanor: String!
      status: String!
    ): Canine
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      username: String!
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      isAdmin: Boolean
    ): Auth
    addDog(
      name: String!
      kennel: String!
      demeanor: String!
      status: String!
    ): Canine
    addPotty(_id:String!, volunteer: String!): Canine
    # addPotty(canineId: _id!, volunteer: String!, timestamp: String!): Canine
    # addWalk(canineId: ID!, volunteerId: username!, timestamp: String!): Activity

  }
  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
