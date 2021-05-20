const { User, Canine } = require('../models');
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
    canines: async () => {
      return await Canine.find();
    },
    canine: async () => {
      return await Canine.findById(context.canine._id).populate('name');
    },
  },

  Mutation: {
    // Add a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

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
    },
     // Add a new canine
    addDog: async (parent, args) => {
      const canine = await Canine.create(args);
      return { canine };
    }
    
  }
};

module.exports = resolvers;
