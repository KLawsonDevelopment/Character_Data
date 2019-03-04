const Game = require('../models/Game.js')

const gameController = {
    index: (req, res) => {
        Game.find().then(games => {
            res.render('index', {games})
        })
    }
}

module.exports = gameController