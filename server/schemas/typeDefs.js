const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Upload
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
  type User {
    _id: ID!
    username: String!
    email: String!
    firstName: String!
    lastName: String!
    isAdmin: Boolean!
    activities: [Activity]
  }
  type Canine {
    _id: ID!
    name: String!
    kennel: String!
    demeanor: String!
    image: String
    status: String!
    walk: [Activity]
    potty: [Activity]
  }
  type Activity {
    _id: ID
    canindId: String
    timestamp: String
    activityType: String
    username: String
  }
  type UploadedFileResponse {
    filename: String!
    mimetype: String!
    encoding: String!
    url: String!
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    activities(
      _id: ID
      timestamp: String
      username: String
      activityType: String
    ): Activity
    canines: [Canine]
    canine(_id: ID!): Canine
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
    addDogWithImage(
      file: Upload!
      name: String!
      kennel: String!
      demeanor: String!
      status: String!
    ): Canine!
    addPotty(canineId: ID!): Activity
    addWalk(canineId: ID!): Activity
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
