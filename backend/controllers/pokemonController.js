const asyncHandler = require("express-async-handler");

//const mongoose = require("mongoose");
const Pokemon = require("../models/pokemonModel");
const Type = require("../models/typesModel");
const Competence = require("../models/competencesModel");

const getPokemons = asyncHandler(async (req, res) => {
  
  let pokemons = await Pokemon.find({});

  for (const pokemon in pokemons) {
    let type = await Type.findById(pokemons[pokemon].type);
    let competence = await Competence.findById(pokemons[pokemon].competence);
    pokemons[pokemon].type = type;
    pokemons[pokemon].competence = competence 
  }
  res.status(200).json(pokemons);
});

const getPokemon = asyncHandler(async (req, res) => {
  const pokemon = await Pokemon.findById(req.params.id);
  let type = await Type.findById(pokemon.type);
  let competence = await Competence.findById(pokemon.competence);
  if (pokemon) {
    pokemon.type = type;
    pokemon.competence = competence
    res.status(200).json(pokemon);
  } else {
    res.status(404);
    throw new Error("Pokemon not found");
  }
});

const addPokemon = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please write a name");
  }

  let pokeType = await Type.findById(req.body.type);
  let pokeCompetence = await Competence.findById(req.body.competence)

  const pokemon = await Pokemon.create({
    idPokedex: req.body.idPokedex,
    name: req.body.name,
    height: req.body.height,
    weight: req.body.weight,
    statistiques: req.body.statistiques,
    type: pokeType,
    competence : pokeCompetence,
    photo : req.body.photo

  });
  res.status(200).json(pokemon);
});

const updatePokemon = asyncHandler(async (req, res) => {

  const pokemon = await Pokemon.findById(req.params.id);

  if (pokemon) {
    pokemon.idPokedex = req.body.idPokedex;
    pokemon.name = req.body.name ;
    pokemon.height = req.body.height ;
    pokemon.weight = req.body.weight;
    pokemon.statistiques = req.body.statistiques ;
    pokemon.type = req.body.type ;
  };

  await pokemon.save();

  res.status(200).json(pokemon);
});

const deletePokemon = asyncHandler(async (req, res) => {
  const pokemon = await Pokemon.findById(req.params.id);
  if (pokemon) {
    await pokemon.remove();
    res.json({ message: "Pokemon removed" });
  } else {
    res.status(404);
    throw new Error("Pokemon not found");
  }

  res.status(200).json(pokemon);
});

module.exports = {
  getPokemons,
  getPokemon,
  addPokemon,
  updatePokemon,
  deletePokemon,
};
