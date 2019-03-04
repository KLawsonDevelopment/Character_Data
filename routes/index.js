const express = require('express')
const router = express.Router()
const gameController = require('../controllers/gameController.js')

router.get('/', gameController.index)
router.get('/:id', gameController.show)

module.exports = router