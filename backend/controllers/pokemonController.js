const asyncHandler = require('express-async-handler')

const Pokemon = require('../models/pokemonModel')

const getPokemons = asyncHandler(async (req, res) => {

    let pokemons = await Pokemon.find({})
    res.status(200).json(pokemons)
})

const addPokemon = asyncHandler(async (req, res) => {
    if (! req.body.text) {
        res.status(400)
        throw new Error('Please write a goal')
    }
    const pokemon = await Pokemon.create({ text: req.body.text })
    //res.json({ message: `Add goal ${req.body.text}`  })
    res.status(200).json(pokemon) 
})

const updatePokemon = asyncHandler(async (req, res) => {
    res.json({ message: `Update goal ${req.params.id}` })
})

const deletePokemon = asyncHandler(async (req, res) => {

    const index = req.params.id
    const pokemon = await Pokemon.remove({index})
    res.status(200).json(pokemon) 
    // res.json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
    getPokemons,
    addPokemon,
    updatePokemon,
    deletePokemon
}