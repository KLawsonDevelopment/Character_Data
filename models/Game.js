const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const GameSchema = new Schema({
    title: String,
    year:Number,
    company: String,
    imgLink: String,
    characters: [{
        type: Schema.Types.ObjectId,
        ref: "Char"
    }]
})

module.exports = mongoose.model('Game', GameSchema)