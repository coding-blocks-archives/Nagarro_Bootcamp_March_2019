const { Users } = require('../db')

;(async () => {
  await Users.bulkCreate([
    {username: 'user1', email: 'u1@nagarro.com'},
    {username: 'user2', email: 'u2@nagarro.com'},
    {username: 'user3', email: 'u3@nagarro.com'},
    {username: 'user4', email: 'u4@nagarro.com'},
    {username: 'user5', email: 'u5@nagarro.com'},
    {username: 'user6', email: 'u6@nagarro.com'},
  ])
})();
