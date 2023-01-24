const mongoose = require("mongoose");


const typeSchema = mongoose.Schema({
    type: {
      type: String,
      required: [true, "Please add a name"],
    },
  });

  module.exports = mongoose.model(
    "Types",
    typeSchema
  );
  