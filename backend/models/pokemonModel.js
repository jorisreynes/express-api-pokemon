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
      type: 
      {
        "total": Number,
        "hp": Number,
        "attack": Number,
        "defense": Number,
        "sp_atk": Number,
        "sp_def": Number,
        "speed": Number
      },
      required: [true, 'Please add a stats value']
    },
    type: {
      type: [mongoose.Schema.Types.ObjectId], ref: 'Types',
      required: [true, "please add a type"],
    },
    competence: {
      type: [mongoose.Schema.Types.ObjectId], ref: 'Competences',
      required: [true, "please add a type"],
    },
    //
    photo: {
      //type: Image,
      type: String,
      required: [true, "Please add a value"],
    }
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model(
  "Pokemon",
  pokemonSchema
);
