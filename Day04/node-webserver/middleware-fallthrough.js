const express = require('express')

const app = express()

function m1(req, res, next) {
  if (req.query.m == 1) {
    res.send('hello from m1')
  } else {
    next()
  }
}

function m2(req, res, next) {
  if (req.query.m == 2) {
    res.send('hello from m2')
  } else {
    next()
  }
}

function m3(req, res, next) {
  if (req.query.m == 3) {
    res.send('hello from m3')
  } else {
    next()
  }
}
app.get('/', m1)
app.get('/', m2)
app.get('/', m3)

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(9000)
