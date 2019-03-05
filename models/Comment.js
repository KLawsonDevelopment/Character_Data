const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const ComSchema = new Schema({
    user: String,
    date: {
        type: Date,
        default: Date.now()
    }
    comment: String,
})