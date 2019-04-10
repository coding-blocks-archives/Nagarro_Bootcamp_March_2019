const { Vendors, db, Products } = require('../db')

// ;(async () => {
//   await db.sync()
//   await Vendors.bulkCreate([
//       { name: 'Samsung' },
//       { name: 'Huawei' },
//       { name: 'Xiaomi' },
//       { name: 'Apple' },
//       { name: 'Sony' }
//     ])
// })();

// ;(async () => {
//   await Products.create({
//     name: 'R2', quantity: 5, price: 2999900,
//     vendor: {
//       name: 'Oppo'
//     }
//   }, {
//     include: [ Vendors ]
//   })
// })();

;(async () => {
  await Products.bulkCreate([
    {
      name: 'S10',
      quantity: 5,
      price: 7999900,
      vendorId: 1,
    },
    {
      name: 'Note 9',
      quantity: 5,
      price: 9999900,
      vendorId: 1,
    },
    {
      name: 'Mi 6',
      quantity: 5,
      price: 2699900,
      vendorId: 3,
    },
    {
      name: 'Mi 7',
      quantity: 5,
      price: 2899900,
      vendorId: 3,
    },
  ])
})()
