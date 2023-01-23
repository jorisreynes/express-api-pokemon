const asyncHandler = require("express-async-handler");

const Pokemon = require("../models/pokemonModel");

const getPokemons = asyncHandler(async (req, res) => {
  let pokemons = await Pokemon.find({});
  res.status(200).json(pokemons);
});

const addPokemon = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please write a name");
  }
  const pokemon = await Pokemon.create({
    idPokedex: req.body.idPokedex,
    name: req.body.name,
    height: req.body.height,
    weight: req.body.weight,
    statistiques: req.body.statistiques,
    type: req.body.type,
  });
  //res.json({ message: `Add goal ${req.body.text}`  })
  res.status(200).json(pokemon);
});

const updatePokemon = asyncHandler(async (req, res) => {
  res.json({ message: `Update goal ${req.params.id}` });
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
  addPokemon,
  updatePokemon,
  deletePokemon,
};
