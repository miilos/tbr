const path = require('path')
const express = require('express')
const tbrRouter = require('./routes/tbrRouter')
const viewRouter = require('./routes/viewRouter')

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(__dirname + '/public'))

app.use(express.json())

app.use('/', viewRouter)
app.use('/api/tbr', tbrRouter)

module.exports = app