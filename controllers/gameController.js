const Game = require('../models/Game.js')
const Char = require('../models/Character.js')

const gameController = {
    index: (req, res) => {
        Game.find().then(games => {
            res.render('gameView/index', { games })
        })
    },
    new: (req, res) => {
        res.render('gameView/new')
    },
    create: (req, res) => {
        Game.create(req.body).then(game => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        Game.findById(req.params.gameId).then(game => {
            res.render('gameView/show', { game })
        })
    },
    edit: (req, res) => {
        Game.findById(req.params.gameId).then(game => {
            res.render('gameView/edit', { game })
        })
    },
    update: (req, res)=>{
        Game.findByIdAndUpdate(req.params.gameId, req.body, {new:true}).then(()=>{
            res.redirect(`${req.params.gameId}`)
        })
    }
}

module.exports = gameController