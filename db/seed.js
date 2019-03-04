const mongoose = require('./connection.js')
const Game = require('../models/Game')
const Char = require('../models/Character')

const roy = new Char ({
    name: "Roy",
    age: 15,
    game: "Fire Emblem Series",
    gender: "Male",
    history: "Roy (pronounced /ɹɔɪ/[key][3]; Japanese: ロイ Roy) is the son of Marquess Eliwood of Lycia's House Pherae. In the Disturbance of Bern, he was entrusted with the leadership of Pherae's army in opposing the invading Kingdom of Bern in lieu of Eliwood's illness, later becoming the leader of the Lycian army as a whole following the death of Hector of Ostia, and ultimately assuming command of the Etrurian army. He sought to assist Bern's Princess Guinivere in finding a peaceful resolution to the war, to prevent King Zephiel's ambitions of exterminating humans and returning Elibe to the rule of dragons.",
    charLink: "https://fireemblemwiki.org/w/images/thumb/d/d5/FEA_Roy.png/400px-FEA_Roy.png"
})

const fox = new Char({
        name: "Fox McCloud",
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
    characters: [roy, fox]
})

const fighterz = new Game ({
    title: "Dragon Ball Figherz",
    year: 2018,
    company: "Bandai Namco",
    imgLink: "https://forums.launchbox-app.com/uploads/monthly_2018_01/Dragon-Ball-FighterZ.png.085fed6a4984a4bbeffe71a9456bd4bb.png",
    characters: []
})


Game.deleteMany({})
    .then(() => Char.deleteMany({}))
    .then(() => Game.create(smash, fighterz))
    .then(() => Char.create(roy, fox))
    .then(() => console.log(smash.title + " was added to datatbase"))
    .then(() => console.log(fighterz.title + " was added to the database"))
    .then(() => console.log(roy.name + " was added to the database"))
    .then(() => console.log(fox.name + " was added to the database"))
    .catch((err) => console.log(err))
    .then(() => mongoose.connection.close())