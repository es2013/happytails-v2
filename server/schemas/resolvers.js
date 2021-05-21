const { User, Canine, Activity } = require('../models');
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
      return await Canine.findById(context.canine._id).populate(
        'name',
        'kennel'
      );
    },
  },

  Mutation: {
    // Add a new canine
    addDog: async (parent, args) => {
      const canine = await Canine.create(args);
      return canine;
    },
    // Add a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addPotty: async (parent, args, context) => {
      console.log(args)
      console.log("-------------------")
      console.log(context)

      // if (context.User) {
      //   const potty = await Activity.create({...args, username:context.User.username})

      //   await User.findByIdAndUpdate(
      //     {_id: context.User._id},
      //     {$push: { activity : potty }},
      //     {new: true }
      //   );
      //   return activity
      // }
      // throw new AuthenticationError('You need to be logged in!');

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
  },
};

module.exports = resolvers;
