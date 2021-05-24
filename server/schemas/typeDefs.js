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
    activities: [Activity]
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
  # input ActivityInput {
  #   _id: ID!
  #   timestamp: String!
  # }
  type Activity {
    _id: ID
    timestamp: String
    activityType: String
    username: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    activities(_id: ID, timestamp: String, username: String, activityType: String): Activity
    canines: [Canine]
    canine(
      _id: ID!
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
    addPotty(canineId: ID!, timestamp: String! activityType:String!): Activity
    addWalk(canineId: ID!, timestamp:String! activityType: String!): Activity
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