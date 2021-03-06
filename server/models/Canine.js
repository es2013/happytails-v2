const { Schema, model } = require('mongoose');
const Activity = require('./Activity');

const canineSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  kennel: {
    type: String,
    required: true,
  },
  demeanor: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: true,
  },
  walk: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Activity',
    },
  ],
  potty: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Activity',
    },
  ],
});

const Canine = model('Canine', canineSchema);

module.exports = Canine;
