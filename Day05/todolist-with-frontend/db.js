const Sequelize = require('sequelize')
const Op = Sequelize.Op

const db = new Sequelize({
  dialect: 'sqlite', // mysql, postgres, mssql
  storage: __dirname + '/todos.db'
  // database : '',
  // host: 'localhost',
  // username: '',
  // password: '',
  // port: ''
})

const Todos = db.define('todo', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  priority: {
    type: Sequelize.INTEGER,
    defaultValue: 5
  }
})

module.exports = {
  db, Todos
}
