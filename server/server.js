const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');
const PORT = process.env.PORT || 3001;
const app = express();
const Canine = require('./models/Canine');
const canineData = require('./seeders/CanineSeeds');
const User = require('./models/User');
const userData = require('./seeders/UserSeeds');

// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// integrate our Apollo server with the Express application as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//////////////////////////////////////////////
///  START of Code to seed CANINE DATABASE ///
//////////////////////////////////////////////
// To seed the Canine table:
// 1.) Uncomment the follow section of code, then save.
// 2.) Run the server in the Server directory.
// 3.) The Canine table is now seeded.
// 4.) Comment out this block of code again.


 Canine.deleteMany((err, datas) => {
  if (err) {
    console.log(err);
  };

  Canine.insertMany(canineData, function (err, r) {
    if (err) {
      console.log(err);
    };
  });
});

//////////////////////////////////////////////
///  END of Code to seed CANINE DATABASE ///
//////////////////////////////////////////////

//******************************************
//*  START of Code to seed USER DATABASE ***
//******************************************
// To seed the User table:
// 1.) Uncomment the follow section of code, then save.
// 2.) Run the server in the Server directory.
// 3.) The User table is now seeded.
// 4.) Comment out this block of code again.

User.deleteMany((err, datas) => {
  if (err) {
    console.log(err);
  };

  User.insertMany(userData, function (err, r) {
    if (err) {
      console.log(err);
    };
  });
}); 



//****************************************
//*  END of Code to seed USER DATABASE ***
//****************************************

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
