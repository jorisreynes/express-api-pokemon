const mongoose = require("mongoose");


const typeSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
  });

  module.exports = mongoose.model(
    "Types",
    typeSchema
  );
  