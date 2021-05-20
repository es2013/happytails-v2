const { Schema, model } = require('mongoose');

const canineSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  kennel: {
    type: String,
    required: true,
  },
  demeanor: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  walk: [
    {
      timestamp: {
        type: Date,
      },
      volunteer_id: {
        type: String,
      },
    },
  ],
  potty_break: [
    {
      timestamp: {
        type: Date,
      },
      volunteer_id: {
        type: String,
      },
    },
  ],
});

const Canine = model('Canine', canineSchema);

module.exports = Canine;
