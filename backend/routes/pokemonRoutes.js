
const express = require('express')

const router = express.Router()

const {
    getPokemons,
    getPokemon,
    addPokemon,
    updatePokemon,
    deletePokemon
} = require('../controllers/pokemonController')

router.get('/', getPokemons)
router.get('/:id', getPokemon)
router.post('/', addPokemon)
router.put('/:id', updatePokemon)
router.delete('/:id', deletePokemon)

module.exports = router