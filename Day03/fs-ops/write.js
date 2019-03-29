const fs = require('fs')

const FILE_NAME = __dirname + '/abc.txt'

fs.writeFile(
  FILE_NAME,
  'Some data that I want to write',
  (err) =>  {
    if  (err) throw err

    console.log('File write done!')
  }
)
