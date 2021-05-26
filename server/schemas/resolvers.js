const { User, Canine, Activity } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { localTimestamp } = require( '../utils/local-timestamp');

const resolvers = {
  Query: {
    // Get a user by username
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({})
          .select('-__v -password')
          .populate('dogs')
          .populate('activity');
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return await User.find().populate('activity');
    },
    user: async (parent, { firstName }) => {
      return User.findOne({ firstName })
        .select('-__v -password')
        .populate('activity');
    },
    canines: async () => {
      return await Canine.find()
        .populate('potty')
        .populate('walk')
        .sort({ name: 1 });
    },
    canine: async (parent, { _id }) => {
      console.log('inside resovers.js => _id', _id);
      return await Canine.findOne({ _id }).populate('potty').populate('walk');
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
      console.log({ args, date:localTimestamp()});
      if (context.user) {
        const potty = await Activity.create({
          ...args,
          activityType: 'potty',
          timestamp: localTimestamp(),
          username: context.user.username,
        });
        console.log(potty);
        await Canine.findByIdAndUpdate(
          { _id: args.canineId },
          { $push: { potty: potty._id } },
          { new: true }
        );
        return potty;
      }
      throw new AuthenticationError('You need to be logged In!');
    },
    addWalk: async (parent, args, context) => {
      console.log(args, context);
      if (context.user) {
        const walk = await Activity.create({
          ...args,
          activityType: 'walk',
          timestamp: localTimestamp(),
          username: context.user.username,
        });
        console.log(walk);
        await Canine.findByIdAndUpdate(
          { _id: args.canineId },
          { $push: { walk: walk._id } },
          { new: true }
        );
        return walk;
      }
      throw new AuthenticationError('You need to be logged In!');
    },
    // updateDog: async (parent, args, context) => {
    //   const potty = await Activity.create({ ...args.potty });
    //   const walk = await Activity.create({ ...args.walk });
    //   const canine = await Canine.findByIdAndUpdate(
    //   { _id: args.canineId },
    //   { $addToSet: { walk: walk } },
    //   { $addToSet: { potty: potty } },
    //   { new: true }
    //   );
    //   return {walk, potty};
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
    },
  },
};
module.exports = resolvers;
