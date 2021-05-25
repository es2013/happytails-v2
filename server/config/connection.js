const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/happy-tails', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then((success) => console.log('Successful DB Connection!!'))
  .catch((error) => console.log('Failed DB Connection!!', error));

//////////////////////////////////////////////////////////////
// DO NOT DELETE THE CODE BELOW, USED TO SEED PRODUCTION DB //
//////////////////////////////////////////////////////////////
/* mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://sidonie:<password>@pizza-hunt.qhbsp.mongodb.net/happy-tails?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
}).then(success => console.log("Successful DB Connection!!"))
.catch(error => console.log("Failed DB Connection!!", error)) */

module.exports = mongoose.connection;
