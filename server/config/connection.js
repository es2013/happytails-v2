const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/happytails-v2', {
=======
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/happy-tails', {
>>>>>>> 7cf7a707288b529516cff337611454f7e74cf4c3
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

<<<<<<< HEAD
module.exports = mongoose.connection;
=======
module.exports = mongoose.connection;
>>>>>>> 7cf7a707288b529516cff337611454f7e74cf4c3
