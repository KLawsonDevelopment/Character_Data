const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')
const routes = require('./routes/index.js')
const path = require('path')


app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.use (express.json())
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(logger('dev'))

app.use('/', routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}, hello Neku!`)
})