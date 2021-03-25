const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

// const data = require('data')

module.exports = router

const filename = path.join(__dirname, 'data.json')

//routs
router.get('/', (req, res) => {    
  fs.readFile(filename, 'utf8', (err, content) => {
    const viewData = {}
    try {
      const parsedData = JSON.parse(content)
      viewData.messageHistory = parsedData.Quackalot
    } catch (parseError) {

      console.log(parseError)
    }
    res.render('home', viewData)
  })    
  })

router.get('/message', (req, res) => {

  fs.readFile(filename, 'utf8', (err, content) => {

    const viewData = {}
    try {
      const parsedData = JSON.parse(content)
      viewData.message = parsedData.Quackalot 
    } catch (parseError) {

     console.log(parseError)
    }

    res.render('messenger', viewData)
  })
})

router.get('/history', (req, res) => {
  fs.readFile(filename, 'utf8', (err, content) => {
    const viewData = {}
    try {
      const parsedData = JSON.parse(content)
      viewData.messageHistory = parsedData.Quackalot
    } catch (parseError) {

      console.log(parseError)
    }
    res.render('')
  })
})

  //POST
  router.post('/handleMessage', function (req, res) {
    false.readfile
    res.send('POST request to homepage')
  })