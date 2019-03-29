const libA = require('./libA')
const libB = require('./libB')

function area (a, b = a) {
  return a * b
}

console.log('Hello from lib')

module.exports = {
  area,
  libA,
  libB
}
