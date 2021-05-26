const { Schema, model } = require('mongoose');
const { localTimestamp } = require('../utils/local-timestamp');

const activitySchema = new Schema({
  timestamp: {
    type: Date,
    default: localTimestamp
  },
  username: {
    type: String,
  },
  activityType: {
    type: String,
  },
});

const Activity = model('Activity', activitySchema);

module.exports = Activity;

// volunteer: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
// }
// volunteer: {
//     type: String,
//     required: true
// }
