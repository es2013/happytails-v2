const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // Get a user by username
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({})
          .select('-__v -password')
          .populate('dogs');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async (parents, args, context) => {
      if (context.user) {
        return User.find().select('-__v -password')
      }
    }
  },

  Mutation: {
    // Add a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    // removeUser: async (parent, args, context) => {
    //   if (args.isAdmin && context.user != args.username) {
    //     const user = await User.findOneAndDelete({username: args.username}, function (error){
    //       console.log(error);
    //       console.log("This object will get deleted ");
         
    //       return ("success!");
    //   });
    //   }
    //   return ("failure")
    // },

    // Login an existing user
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    }
  }
};

module.exports = resolvers;
