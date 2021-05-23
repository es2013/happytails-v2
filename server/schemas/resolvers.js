const { User, Canine, Activity } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
// const { users, canines } = require('../FakeData');

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
    users: async () => {
      return await User.find();
    },
    user: async (parent, args, context) => {
    return await User.findById(context.user._id).populate('username')
    }
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

    findUser: async (parent, args) => {
      const findUSer = await User.find(args);
      return {User};
    },
    //add potty activity to single dognpm 
    addPotty: async (parent, args, context) => {  
      const potty = await Activity.create({...args.potty})
        const canine =  await Canine.findByIdAndUpdate(
          {_id: args.canineId},
          {$addToSet: {potty: potty}},
          {new:true}
        );
      return potty;
      
    },
    //add a walk activity to single dog
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