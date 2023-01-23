const mongoose = require("mongoose");

const Types = require("../models/typesModel");


const pokemonSchema = mongoose.Schema(
  {
    idPokedex: {
      type: Number,
      required: [true, "Please add a value"],
    },
    name: {
      type: String,
      required: [true, "Please add a text value"],
    },
    height: {
      type: Number,
      required: [true, "Please add a value"],
    },
    weight: {
      type: Number,
      required: [true, "Please add a value"],
    },
    statistiques: {
      type: String,
      required: [true, "Please add a value"],
    },
    type: {
      type: mongoose.Schema.Types.ObjectId, ref: 'Types',
      required: [true, "please add a type"],
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model(
  "Pokemon",
  pokemonSchema
);
