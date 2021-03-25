const express = require('express')
const router = express.Router()
module.exports = router

//routs
router.get('/', (req, res) => {
    
      res.send('hello')
  })

  router.get('/message', (req, res) => {
    
    res.send('this is the message route')
})

//POST
router.post('/handleMessage', function (req, res) {
  res.send('POST request to homepage')
})