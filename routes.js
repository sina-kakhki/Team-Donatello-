const express = require('express')
const router = express.Router()
const fs = require('fs')
const { parse } = require('path')
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
      console.log(messageHistory)
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

router.get('/message/:id', (req, res) => {

  fs.readFile(filename, 'utf8', (err, content) => {

    const viewData = {}
    try {
      const parsedData = JSON.parse(content)
      viewData.message = parsedData.Quackalot.find(({id}) => id === Number(req.params.id))
      viewData.message.messages = viewData.message.messages.reverse()
    } catch (parseError) {

     console.log(parseError)
    }
    console.log(viewData)
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
    const createdDate = new Date().toLocaleDateString("en-NZ")
    const {message, topic, id} = req.body
    console.log (req.body)
    fs.readFile(filename, 'utf8', (err, content) => {
      try{
        const parsedData = JSON.parse(content)
        let dumbName = parsedData.Quackalot.find(ele => ele.id === Number(id))
        if(dumbName){
          dumbName.messages.push({"name":'', "date": createdDate, "message": message})
        }else{
          dumbName = {"id": parsedData.Quackalot.length+1,"topic": topic, "messages": []}
          dumbName.messages.push({"name":'', "date": createdDate, "message": message})
        }
        // console.log(dumbName)
        fs.writeFile(filename, JSON.stringify(parsedData), 'utf8', (err)=>{
          if(err){
          console.log('LOOK AT ALL THESE CHICKENs')
          res.redirect("https://www.youtube.com/watch?v=F-X4SLhorvw")
          }else{
            res.redirect(`/duck/message/${id}`)
          }
        })
      }catch(e){
        console.log(e)
      }
    })
  })