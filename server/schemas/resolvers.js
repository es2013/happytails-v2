const { User, Canine, Activity } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { localTimestamp } = require('../utils/local-timestamp');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { GraphQLUpload } = require('graphql-upload');

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    // Get a user by username
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findById(context.user._id);
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return await User.find()
        .populate('activity')
        .sort({ isAdmin: -1 })
        .sort({ lastName: 1 })
        .sort({ firstName: 1 });
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
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
      return await Canine.findOne({ _id }).populate('potty').populate('walk');
    },
  },
  Mutation: {
    // Add a new canine
    addDog: async (parent, args) => {
      const canine = await Canine.create(args);
      return canine;
    },
    addDogWithImage: async (parent, { file: fileInput, ...canine }) => {
      const file = await fileInput;
      const { createReadStream, filename } = file;
      const fileNameSplit = filename.split('.');
      const extension = fileNameSplit[fileNameSplit.length - 1];
      const imageId = uuidv4();
      const fileNameToSave = `${imageId}.${extension}`;
      
      const filePath = path.join(
        __dirname,
        `../public/assets/images/canines/${fileNameToSave}`
      );

      const fileStream = createReadStream();
      fileStream.pipe(fs.createWriteStream(filePath));

      const url = `/assets/images/canines/${fileNameToSave}`;

      const result = await Canine.create({
        ...canine,
        image: url,
      });

      return result;
    },
    // Add a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addPotty: async (parent, args, context) => {
      if (context.user) {
        const potty = await Activity.create({
          ...args,
          activityType: 'potty',
          timestamp: localTimestamp(),
          username: context.user.username,
        });
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
      if (context.user) {
        const walk = await Activity.create({
          ...args,
          activityType: 'walk',
          timestamp: localTimestamp(),
          username: context.user.username,
        });
        await Canine.findByIdAndUpdate(
          { _id: args.canineId },
          { $push: { walk: walk._id } },
          { new: true }
        );
        return walk;
      }
      throw new AuthenticationError('You need to be logged In!');
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
