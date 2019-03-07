const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const ComSchema = new Schema({
    user: String,
    comment: String
})

module.exports = mongoose.model('Comment', ComSchema)