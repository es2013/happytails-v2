const { Schema, model } = require('mongoose');
const Activity = require('./Activity');


const canineSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  kennel: {
    type: String,
    required: false,
  },
  demeanor: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  walk: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Activity'
    }
  ],
  potty: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Activity'
    }
  ]
});

const Canine = model('Canine', canineSchema);

module.exports = Canine;
