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

db.sync()
  .then(() => {
    console.log('Database synced')

    // Todos.create({name: 'random  task'})

    Todos.findAll({
      where: {
        [Op.or]: {
          priority: {
            [Op.lt]: 3
          },
          id: {
            [Op.gt]: 2
          }
        }
      }
    }).then((todos) => {
      for (let t of todos) {
        console.log(t.name + '  ' + t.priority)
      }
    })

  })
