
const express = require('express')

const router = express.Router()

const {
    getCompetences,
    getCompetence,
    addCompetence,
    updateCompetence,
    deleteCompetence
} = require('../controllers/competenceController')

router.get('/', getCompetences)
router.get('/:id', getCompetence)
router.post('/', addCompetence)
router.put('/:id', updateCompetence)
router.delete('/:id', deleteCompetence)

module.exports = router