const express = require('express')
const router = express.Router()
const gameController = require('../controllers/gameController.js')
const charController = require('../controllers/charController')

router.get('/', gameController.index)
router.get('/new', gameController.new)
router.post('/', gameController.create)
router.get('/game/:gameId', gameController.show)
router.get('/game/:gameId/edit', gameController.edit)
router.put('/game/:gameId', gameController.update)

router.get('/game/:gameId/new', charController.new)
router.post('/game/:gameId/character', charController.create)
router.get('/game/:gameId/character/:charId', charController.show)


module.exports = router