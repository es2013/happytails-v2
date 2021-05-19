const { Schema } = require('mongoose');

const canineSchema = new Schema({
  owner: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  canineId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = canineSchema;
