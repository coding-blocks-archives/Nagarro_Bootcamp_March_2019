const express = require('express')

const app = express()

let todos = []

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/todos', (req, res) =>  {
  res.send(todos)
})

app.get('/todos/:id', (req, res) => {
  res.send(todos[req.params.id])
})


app.post('/todos', (req, res) => {
  todos.push({
    task: req.body.task,
    priority: parseInt(req.body.priority)
  })
  res.send({success: true})
})

app.listen(7070)
