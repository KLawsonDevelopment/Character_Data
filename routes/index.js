const express = require('express')
const router = express.Router()
const gameController = require('../controllers/gameController.js')
const charController = require('../controllers/charController')
const commentController = require('../controllers/commentController')

router.get('/', gameController.index)
router.get('/new', gameController.new)
router.post('/', gameController.create)
router.get('/game/:gameId', gameController.show)
router.get('/game/:gameId/edit', gameController.edit)
router.put('/game/:gameId', gameController.update)
router.delete('/game/:gameId', gameController.delete)

router.get('/game/:gameId/new', charController.new)
router.post('/game/:gameId/character', charController.create)
router.get('/game/:gameId/character/:charId', charController.show)
router.get('/game/:gameId/character/:charId/edit', charController.edit)
router.put('/game/:gameId/character/:charId', charController.update)
router.delete('/game/:gameId/character/:charId', charController.delete)

router.get('/game/:gameId/character/:charId/comment/new', commentController.new)
router.post('/game/:gameId/character/:charId/', commentController.create)
router.delete('/game/:gameId/character/:charId/:commentId', commentController.delete)


module.exports = router