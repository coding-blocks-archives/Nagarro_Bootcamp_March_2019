const { CartItems, Products, Vendors, Users } = require('../db')


// ;(async () => {
//   await CartItems.create({
//     userId: 3,
//     productId: 4,
//     quantity: 1
//   })
// })();

;(async () => {
  const items = await CartItems.findAll({
    include: [
      {
        model: Products,
        include: [ Vendors ]
      },
      Users
    ]
  })
  for (let item of items) {
    console.log(`
    item: ${item.product.name}
    vendor: ${item.product.vendor.name}
    user: ${item.user.username}
    qty: ${item.quantity}
    `)
  }
})();

CartItems.findOne({
  where: {
    productId: x,
    userId: y
  }
}).then((item) => {
  item.increment({
  quantity: 1
})
})

CartItems.increment({
  quantity: 1
}, {
  where: {
    productId: x,
    userId: y
  }
})
