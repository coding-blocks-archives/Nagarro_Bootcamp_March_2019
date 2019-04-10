const express = require('express')

const routeA = require('./routes/routeA')
const routeB = require('./routes/routeB')

const app = express()

app.use('/a', routeA)

app.use('/b', routeB)


app.listen(7676, () => {
  console.log('Running on http://localhost:7676')
})
