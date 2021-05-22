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
      return await Canine.find().populate('walk')    
      .populate('potty')
      .populate('walk');
    },
    canine: async () => {
      return await Canine.findById(context.canine._id).populate(
        'name',
        'kennel',
        'potty',
        'walk'
      );
    },
    activities: async () => {
      return await Activity.find();
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
      
      const potty = await Activity.create({...args.potty})

        const canine =  await Canine.findByIdAndUpdate(
          {_id: args.canineId},
          {$addToSet: {potty: potty}},
          {new:true}
        );
      return potty;
      
      

    },
    addWalk: async (parent, args, context) => {  
      const walk = await Activity.create({...args.walk})
        const canine =  await Canine.findByIdAndUpdate(
          {_id: args.canineId},
          {$addToSet: {walk: walk}},
          {new:true}
        );
      return walk
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
