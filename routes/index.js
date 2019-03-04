const express = require('express')
const router = express.Router()
const gameController = require('../controllers/gameController.js')
const charController = require('../controllers/charController')

router.get('/', gameController.index)
router.get('/:gameId', gameController.show)
router.get('/:gameId/:charId', charController.show)
module.exports = router