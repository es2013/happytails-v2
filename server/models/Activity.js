const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const activitySchema = new Schema ({
    timestamp: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp),
        // required:true
    },
    volunteer: {
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true
}

})

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