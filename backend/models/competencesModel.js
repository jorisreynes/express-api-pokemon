const mongoose = require("mongoose");


const competenceSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  description: {
    type: String,
    required: [true, "Please add a value"],
  },
  power: {
    type: Number,
    required: [true, "Please add a value"],
  },
  precision: {
    type: Number,
    required: [true, "Please add a value"],
  },
  ppMax: {
    type: Number,
    required: [true, "Please add a value"],
  },
  type: {
    type: String,
    required: [true, "please add a type"],
  },
});

module.exports = mongoose.model(
  "Competences",
  competenceSchema
);
