const Game = require('../models/Game.js')
const Char = require('../models/Character.js')

const gameController = {
    index: (req, res) => {
        Game.find().then(games => {
            res.render('gameView/index', {games})
        })
    },
    show: (req, res) => {
        Game.findById(req.params.gameId).then(game =>{
            res.render('gameView/show', {game})
        })
    },
    new: (req, res) => {
        res.render('gameView/new')
    },
    create: (req, res) => {
        Game.create(req.body).then(game => {
            res.redirect('/')
        })
    }
}

module.exports = gameController