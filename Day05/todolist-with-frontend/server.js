const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/',
  express.static(__dirname + '/public')
)

let todos = [
  {name: 'first task', priority: 3},
  {name: 'another task', priority: 5},
]

app.get('/todos', (req, res) => {
  res.send(todos)
})

app.post('/todos', (req, res) => {
  todos.push({
    name: req.body.name,
    priority: parseInt(req.body.priority)
  })
  res.send({success: true})
})

app.listen(8989)
