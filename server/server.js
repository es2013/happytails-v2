const express = require('express');

// Import the ApolloServer
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const assert = require('assert');
// Import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');
const PORT = process.env.PORT || 3001;
const Canine = require('./models/Canine');
const app = express();
const data = require('./seeders/CanineSeeds');
// console.log(data)
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

/////////////////////////////
///  FOR SEEDING DATABASE ///
/////////////////////////////
/* Canine.deleteMany((err, datas) => {
  if (err) {
    console.log(err);
  };

  Canine.insertMany(data, function (err, r) {
    //  assert.equal(null, err);
    //  assert.equal(4, r.insertedCount);
    if (err) {
      console.log(err);
    };

    console.log(r);
    //  db.close()
  });
}); */

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
