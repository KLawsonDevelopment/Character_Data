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
            let characters = game.characters
            res.render('gameView/show', {characters})
        })
    }
}

module.exports = gameController