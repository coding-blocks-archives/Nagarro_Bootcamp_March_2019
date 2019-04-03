const express = require('express')

const app = express()

function m1 (req, res, next) {
  console.log('running m1')
  res.send('resp1')
  next()
}
function m2 (req, res, next) {
  console.log('running m2')
  next()
}
function m3 (req, res, next) {
  console.log('running m3')
  next()
}

app.get('/', m1, m2, (req, res) => {
  res.send('Hello')
})


app.listen(9898)
