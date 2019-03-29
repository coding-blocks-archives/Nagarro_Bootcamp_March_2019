const fs = require('fs')

const FILE_NAME = __dirname + '/abc.txt'

fs.readFile(
  FILE_NAME,
  (err, data)  => {
    if (err)  throw err

    console.log(data.toString())
  }
)

