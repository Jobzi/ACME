const fs = require('fs')

// @method readFileText, read file any file from file root
function readFileText (nameFile) {
  return new Promise((resolve) => {
    fs.readFile(nameFile, (err, data) => {
      if (err) throw err
      resolve(data.toString().split('\r\n'))
    })
  })
}

module.exports = { readFileText }
