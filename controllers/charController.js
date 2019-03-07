const Game = require('../models/Game.js')
const Char = require('../models/Character.js')

const charController = {
    show: (req, res) => {
        Char.findById(req.params.charId).populate('comments').then(chara => {
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
                res.render('charView/edit', {
                    char,
                    gameId: req.params.gameId
                })
            })
    },
    update: (req, res) => {
        Char.findByIdAndUpdate(req.params.charId, req.body, {new:true}).then((char)=>{
            res.redirect(`/game/${req.params.gameId}`)
        })
    },
    delete: (req, res) => {
        Char.findByIdAndDelete(req.params.charId).then(() =>{
            console.log(`Deleted game with the id of ${req.params.charId}`)
            res.redirect(`/game/${req.params.gameId}`)
        })
    }
}

module.exports = charController