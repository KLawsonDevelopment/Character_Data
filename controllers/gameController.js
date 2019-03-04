const Game = require('../models/Game.js')
const Char = require('../models/Character.js')

const gameController = {
    index: (req, res) => {
        Game.find().then(games => {
            res.render('index', {games})
        })
    },
    show: (req, res) => {
        Char.find().then(chara => {
            res.render('show', {chara})
        })
    }
}

module.exports = gameController