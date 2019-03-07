const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema



const CharSchema = new Schema({
    name: String,
    age: Number,
    game: String,
    gender: String,
    history: String,
    charLink: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

module.exports = mongoose.model('Char', CharSchema)