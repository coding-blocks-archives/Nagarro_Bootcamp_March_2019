const express = require('express')
const {
  db,
  Todos
} = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use('/',
  express.static(__dirname + '/public')
)

app.get('/todos', async (req, res) => {

  const todos = await Todos.findAll()
  res.send(todos)
})

app.post('/todos', async (req, res) => {

  try {
    const result = await Todos.create({
      name: req.body.name,
      priority: parseInt(req.body.priority)
    })
    res.send({success: true})
  } catch (e) {
    res.send({success: false, err: e.message})
  }


})

db.sync()
  .then(() => {
    app.listen(8989)
  })
