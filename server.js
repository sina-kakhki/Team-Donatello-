const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use('/duck', routes)

// Your routes/router(s) should go here
module.exports = server

server.get('/', (req, res) => {
  res.redirect('/duck')
})

server.get('/messenger', (req, res) => {
  res.render('messenger')
})

server.get('/*', function (req, res) {
  res.redirect("https://www.youtube.com/watch?v=F-X4SLhorvw")
})