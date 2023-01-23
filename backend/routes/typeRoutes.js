
const express = require('express')

const router = express.Router()

const {
    getTypes,
    getType,
    addType,
    updateType,
    deleteType
} = require('../controllers/typeController')

router.get('/', getTypes)
router.get('/:id', getType)
router.post('/', addType)
router.put('/:id', updateType)
router.delete('/:id', deleteType)

module.exports = router