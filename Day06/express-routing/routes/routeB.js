const express = require('express')
const routeAA = require('./routeAA')


const route = express.Router()

route.get('/', (req, res) => {
  res.send('You are on route B')
})

route.use('/a', routeAA)

module.exports = route
