const fs = require('fs')
const path = require('path')

module.exports = {
  postMessage
}

function postMessage(stringifiedData, callback) {
  const filename = path.join(__dirname, 'data.json')

  fs.writeFile(filename, stringifedData, 'utf8', (err, contents) => {
    if (err) {
      console.log(err.message)
    }
    try {
      callback(null, stringifiedData)
    } catch (parseError) {
      console.log(parseError)
      callback(new Error('Unable to post your message'))
    }
  })
}