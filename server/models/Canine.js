const { Schema } = require('mongoose');

const canineSchema = new Schema({
  kennelId: {
    type: String,
    required: true,
  },
  canineDemeanor: {
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
  age:{
      type:String,
      required:true,
  },
  has_potty_am: {
    type: String,
    required: true,
  },
  has_potty_pm: {
    type: String,
    required: true,
  },
  has_walked_am: {
    type: String,
    required: true,
  },
  has_walked_pm: {
    type: String,
    required: true,
  },
});

module.exports = canineSchema;
