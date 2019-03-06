const Game = require('../models/Game.js')
const Char = require('../models/Character.js')

const charController = {
    show: (req, res) => {
        Char.findById(req.params.charId).then(chara => {
            res.render('charView/show', {
                chara,
                gameId: req.params.gameId
            })
        })
    },
    new: (req, res) => {
        Game.findById(req.params.gameId).then(game =>
            res.render('charView/new', { game }))
    },
    create: (req, res) => {
        Game.findById(req.params.gameId)
            .then((game) => {
                Char.create(req.body).then(char => {
                    game.characters.push(char)
                    game.save()
                    res.redirect(`/game/${req.params.gameId}`)
                })
            })
    },
    edit: (req, res) => {
        Char.findById(req.params.charId)
            .then((char) => {
                res.render('charView/edit', { char })
            })
    }
}

module.exports = charController