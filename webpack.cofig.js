
const path = require('path');


module.exports = {
  entry: './client/src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  mode: 'development'
};




module.exports = {entry: './client/src/app.js',};