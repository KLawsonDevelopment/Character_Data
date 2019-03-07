const Game = require('../models/Game')
const Char = require('../models/Character')
const Comment = require('../models/Comment')

const commentController = {
    new: (req, res) =>{
        Char.findById(req.params.charId).then(char=>{
            res.render('commentView/new', {charId: req.params.charId, gameId:req.params.gameId})
        })
    },
    create: (req, res)=>{
        Char.findById(req.params.charId)
        .then((char) =>{
            Comment.create(req.body).then (comment =>{
                char.comments.push(comment)
                char.save()
                res.redirect(`/game/${req.params.gameId}/character/${req.params.charId}`)
            })
        })
    }
}

module.exports = commentController