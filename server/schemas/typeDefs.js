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
  input ActivityInput {
    timestamp: String!
    volunteer: String!
  }
  type Activity {
    _id: ID!
    timestamp: String
    volunteer: String
  }

  type Query {
    me: User
    user: User
    users: [User]
    canines: [Canine]
    activities: [Activity]
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
    findUser(username:String!): User
    addDog(
      name: String!
      kennel: String!
      demeanor: String!
      status: String!
    ): Canine

    addPotty(canineId: ID!, potty: ActivityInput!): Activity
    addWalk(canineId: ID!, walk: ActivityInput!): Activity

    # addPotty(canineId: _id!, volunteer: String!, timestamp: String!): Canine
    # addWalk(canineId: ID!, volunteerId: username!, timestamp: String!): Activity
    
    
    
    
    updateDog( name: String!, kennel: String!, demeanor: String!, status: String!, walk: ActivityInput!, potty: ActivityInput!) Canine
    
    
  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
