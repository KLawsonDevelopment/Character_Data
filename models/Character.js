const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const CharSchema = new Schema({
    name: String,
    age: Number,
    game: String,
    gender: String,
    history: String,
    charLink: String
})

module.exports = mongoose.model('Char', CharSchema)