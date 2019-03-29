const fs = require('fs')

const FIN1 = __dirname + '/in1.txt'
const FIN2 = __dirname + '/in2.txt'
const FOUT = __dirname + '/out.txt'

fs.readFile(
  FIN1,
  (err, data) => {
    if (err) throw err

    let nums = data.toString().split('\n')
    nums.sort((a, b) => a - b)
    console.log(nums)

    fs.writeFile(
      FOUT,
      nums.join('\n'),
      (err) => {
        if (err) throw (err)

        console.log('All Done!!')
      }
    )
  }
)
