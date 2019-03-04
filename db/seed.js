const mongoose = require('./connection.js')
const Game = require('../models/Game')
const Char = require('../models/Character')

const fox = new Char({
        name: "Fox",
        age: 29,
        game: "Star Fox Series",
        gender: "Male",
        history: "Fox McCloud is an anthropomorphic red fox and the main protagonist of the Star Fox series. He is sometimes referred to by the name of Star Fox, especially by his many enemies. He is additionally a pilot, combatant, adventurer, and the leader of the Star Fox team. Fox is the son of James McCloud, who edified him throughout his childhood to never give up.",
        charLink: "https://vignette.wikia.nocookie.net/starfox/images/2/2f/Fox_SSBU.png/revision/latest/scale-to-width-down/620?cb=20180615160436"
})

const smash = new Game ({
    title: "Super Smash Brothers Ultimate",
    year: 2018,
    company: "Nintendo",
    imgLink: "https://vignette.wikia.nocookie.net/nintendo/images/3/35/Super_Smash_Bros._Ultimate_logo.png/revision/latest/scale-to-width-down/640?cb=20180612174504&path-prefix=en",
    characters: [fox]
})


Game.deleteMany({})
    .then(() => Char.deleteMany({}))
    .then(() => Game.create(smash))
    .then(() => Char.create(fox))
    .then(() => console.log(smash.name + " was added to datatbase"))
    .then(() => console.log(fox.name + " was added to the database"))
    .catch((err) => console.log(err))
    .then(() => mongoose.connection.close())