const Game = require('../models/Game.js')

const gameController = {
    index: (req, res) => {
        res.send('Hello Neku!')
    }
}

module.exports = gameController