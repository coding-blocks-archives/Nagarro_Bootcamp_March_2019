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
  res.send({success: true, message: todos.length})
})

app.listen(7070)

/**
 * /todos -
 *  GET fetch all todos
 *  POST add a new todo
 *
 * /todos/:id -
 *    GET - fetch single todo
 *    PUT - replace a todo
 *    PATCH - update data of a todo
 *    DELETE - delete the todo
 *
 * Appropriate error messages for operations not possible
 * Also send todos array length in response
 *
 * https://gist.github.com/championswimmer/2e3a309b880fdd2a9b12c1c3e0214bda
 */
