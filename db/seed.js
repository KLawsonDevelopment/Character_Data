const mongoose = require('./connection.js')
const Game = require('../models/Game')

const Smash = new Game ({
    name: "Super Smash Brothers Ultimate",
    year: 2018,
    company: "Nintendo",
    imgLink: "https://vignette.wikia.nocookie.net/nintendo/images/3/35/Super_Smash_Bros._Ultimate_logo.png/revision/latest/scale-to-width-down/640?cb=20180612174504&path-prefix=en"
})

Game.deleteMany({}).then(() =>
Game.create(data)).then((game) =>
console.log(game, "database seeded successfully")).catch((err) =>
console.log(err))