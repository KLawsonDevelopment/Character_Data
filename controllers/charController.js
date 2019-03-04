const Game = require('../models/Game.js')
const Char = require('../models/Character.js')

const charController = {
    show: (req, res) => {
        Char.findById(req.params.charId).then(chara => {
            res.render('charView/show', {chara})
        })
    }
}

module.exports = charController