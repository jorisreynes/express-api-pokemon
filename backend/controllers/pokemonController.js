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

    const pokemon = await Pokemon.findById(req.params.id)
    if (pokemon) {
        await pokemon.remove()
        res.json({ message: 'Pokemon removed' })
    }
    else {
        res.status(404)
        throw new Error('Pokemon not found')
    }

    res.status(200).json(pokemon) 

})

module.exports = {
    getPokemons,
    addPokemon,
    updatePokemon,
    deletePokemon
}