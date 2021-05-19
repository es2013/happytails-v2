const IsInteger = require("es-abstract/2015/IsInteger");
const { Schema } = require("mongoose");

const canineSchema = new Schema({
  kennelId: {
    type: INTEGER,
    required: true,
  },
  canineDemeanor: {
    type: String,
    required: true,
  },
  canineId: {
    type: INTEGER,
    required: true,
  },
  image: {
    type: String,
  },
  name: {
    type: String,
    required: true,
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
