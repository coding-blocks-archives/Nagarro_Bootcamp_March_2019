const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/shop.db'
})


const Vendors = db.define('vendor', {
  name: Sequelize.STRING
})
const Products = db.define('product', {
  name: Sequelize.STRING,
  quantity: Sequelize.INTEGER,
  price: Sequelize.INTEGER
})

const Users = db.define('user', {
  username: Sequelize.STRING,
  email: Sequelize.STRING
})
const CartItems = db.define('cartitem', {
  quantity: Sequelize.INTEGER
})

Products.belongsTo(Vendors)
Vendors.hasMany(Products)

CartItems.belongsTo(Products)
CartItems.belongsTo(Users)
Users.hasMany(CartItems)
Products.hasMany(CartItems)

module.exports = {
  db, Users, Products, Vendors, CartItems
}
