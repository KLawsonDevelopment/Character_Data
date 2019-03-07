const mongoose = require('./connection.js')
const moment = require('moment')
const Game = require('../models/Game')
const Char = require('../models/Character')
const Comment = require('../models/Comment')

const NekuComment = new Comment({
    user: 'Neku',
    comment: 'One of my favorite characters of all time.'
})

const roy = new Char({
    name: "Roy",
    age: 15,
    game: "Fire Emblem Series",
    gender: "Male",
    history: "Roy (pronounced /ɹɔɪ/[key][3]; Japanese: ロイ Roy) is the son of Marquess Eliwood of Lycia's House Pherae. In the Disturbance of Bern, he was entrusted with the leadership of Pherae's army in opposing the invading Kingdom of Bern in lieu of Eliwood's illness, later becoming the leader of the Lycian army as a whole following the death of Hector of Ostia, and ultimately assuming command of the Etrurian army. He sought to assist Bern's Princess Guinivere in finding a peaceful resolution to the war, to prevent King Zephiel's ambitions of exterminating humans and returning Elibe to the rule of dragons.",
    charLink: "https://fireemblemwiki.org/w/images/thumb/d/d5/FEA_Roy.png/400px-FEA_Roy.png",
    comments: [NekuComment]
})

const fox = new Char({
    name: "Fox McCloud",
    age: 29,
    game: "Star Fox Series",
    gender: "Male",
    history: "Fox McCloud is an anthropomorphic red fox and the main protagonist of the Star Fox series. He is sometimes referred to by the name of Star Fox, especially by his many enemies. He is additionally a pilot, combatant, adventurer, and the leader of the Star Fox team. Fox is the son of James McCloud, who edified him throughout his childhood to never give up.",
    charLink: "https://vignette.wikia.nocookie.net/starfox/images/2/2f/Fox_SSBU.png/revision/latest/scale-to-width-down/620?cb=20180615160436"
})

const gohan = new Char({
    name: "Son Gohan",
    age: 17,
    game: "Dragon Ball series",
    gender: "Male",
    history: "Son Gohan (孫そん悟ご飯はん Son Gohan) is the elder son of the series' primary protagonist Goku and his wife Chi-Chi, the older brother of Goten, the husband of Videl and father to Pan. He is named after Goku's adoptive grandfather, Gohan. Unlike his father, Gohan lacks a passion for fighting and prefers to do so only when the need to defend his loved ones arises. Nevertheless, Gohan fights alongside the Dragon Team in the defense of Earth for much of his life.",
    charLink: "http://www.dustloop.com/wiki/images/thumb/0/08/DBFZ_Adult_Gohan_Portrait.png/470px-DBFZ_Adult_Gohan_Portrait.png"
})

const bardock = new Char ({
    name: "Bardock",
    age: 26,
    game: "Dragon Ball series",
    gender: "Male",
    history: "Bardock (バーダック Bādakku) is a low-class Saiyan warrior, the husband of Gine, and the father of Raditz and Goku. He makes his debut as the main protagonist of the 1990 TV special Dragon Ball Z: Bardock - The Father of Goku. Bardock's childhood until his early years in adulthood is unknown, but he is shown to lead his own squad into battle, and they are very successful in accomplishing their assignments. He is an adept fighter and a devoted Saiyan Army soldier under Frieza's Force until he realizes that Frieza plans the annihilation of the Saiyan race.",
    charLink: "http://www.dustloop.com/wiki/images/thumb/0/0e/DBFZ_Bardock_Portrait.png/667px-DBFZ_Bardock_Portrait.png"
})

const smash = new Game({
    title: "Super Smash Brothers Ultimate",
    year: 2018,
    company: "Nintendo",
    imgLink: "https://vignette.wikia.nocookie.net/nintendo/images/3/35/Super_Smash_Bros._Ultimate_logo.png/revision/latest/scale-to-width-down/640?cb=20180612174504&path-prefix=en",
    characters: [roy, fox]
})

const fighterz = new Game({
    title: "Dragon Ball Figherz",
    year: 2018,
    company: "Bandai Namco",
    imgLink: "https://forums.launchbox-app.com/uploads/monthly_2018_01/Dragon-Ball-FighterZ.png.085fed6a4984a4bbeffe71a9456bd4bb.png",
    characters: [gohan, bardock]
})


Game.deleteMany({})
    .then(() => Char.deleteMany({}))
    .then(() => Comment.deleteMany({}))
    .then(() => Game.create(smash, fighterz))
    .then(() => Char.create(roy, fox, gohan, bardock))
    .then(() => Comment.create(NekuComment))
    .then(() => console.log(smash.title + " was added to datatbase"))
    .then(() => console.log(fighterz.title + " was added to the database"))
    .then(() => console.log(roy.name + " was added to the database"))
    .then(() => console.log(fox.name + " was added to the database"))
    .then(() => console.log(gohan.name + " was added to the database"))
    .then(() => console.log(bardock.name + " was added to the database"))
    .catch((err) => console.log(err))
    .then(() => mongoose.connection.close())