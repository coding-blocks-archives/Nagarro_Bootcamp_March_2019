console.log(module.exports)
const  libB = require('./libB')
console.log('running libA')

module.exports.a = 10
module.exports.libB = libB
