<<<<<<< HEAD
const resolvers = {
    Query: {
    //   helloWorld: () => {
    //     return 'Hello world!';
    //   }
    // }
  };
  
  module.exports = resolvers;
=======
const { AuthenticationError } = require("apollo-server-express");
const { User, Canine } = require("../models");
const { signToken } = require("../utils/auth");


module.exports = resolvers;
>>>>>>> 7cf7a707288b529516cff337611454f7e74cf4c3
