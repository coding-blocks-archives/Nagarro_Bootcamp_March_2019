const fs = require('fs')

const FIN1 = __dirname + '/in1.txt'
const FIN2 = __dirname + '/in2.txt'
const FOUT = __dirname + '/out.txt'

fs.readFile(FIN1, (err, data) => {
  if (err) throw err

  let nums = data.toString().split('\n')

  fs.readFile(FIN2, (err, data) => {
    if (err) throw err

    nums = nums.concat(data.toString().split('\n'))
    nums.sort((a, b) => a - b)

    fs.writeFile(FOUT, nums.join('\n'), (err) => {
      if (err) throw (err)

      console.log('All Done!!')
    })

  })


})


async function task() {
  let nums = await fs.readFile()
  let nums2 = await fs.readFile()

  await fs.writeFile()
}
