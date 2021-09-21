const fs = require('fs')

// @method readFileText, read file any file from file root
function readFileText (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        throw err
      }
      resolve(data.toString().split('\r\n'))
    })
  })
}

module.exports = { readFileText }
