const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send(`
  <html>
  <head>
    <title>My Awesome Page</title>
  </head>
  <body>
    <h1>Hello !!</h1>
    <p>Nice to see you</p>
  </body>
  </html>
  `)
})

app.get('/hi', (req, res) => {
  console.log(req.query)
  if (req.query.name) {
    res.send('Hello ' + req.query.name)
  } else {
    res.send('Hello Guest')
  }
})

app.get('/bye', (req, res) => {
  res.send('Goodbye')
})

app.use(
  '/pages',
  express.static(__dirname + '/public')
)

app.listen(8888)
