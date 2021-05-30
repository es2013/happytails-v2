const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');
const PORT = process.env.PORT || 3001;
const app = express();
const Canine = require('./models/Canine');
const User = require('./models/User');
const { graphqlUploadExpress, processRequest } = require('graphql-upload');

// DO NOT REMOVE this canineData variable declaration
const canineData = require('./seeders/CanineSeeds');

// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  uploads: false,
});

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(
  graphqlUploadExpress({
    maxFileSize: 5000000, // 5MB in size
  })
);

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

/* Canine.deleteMany((err, datas) => {
  if (err) {
    console.log(err);
  };

  Canine.insertMany(canineData, function (err, r) {
    if (err) {
      console.log(err);
    };
  });
}); */

//////////////////////////////////////////////
///  END of Code to seed CANINE DATABASE ///
//////////////////////////////////////////////

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
