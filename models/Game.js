const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const GameSchema = new Schema({
    name: String,
    year:Number,
    company: String,
    imgLink: String,
})

module.exports = mongoose.model('Game', GameSchema)