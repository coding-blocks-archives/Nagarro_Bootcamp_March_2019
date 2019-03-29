
function area (a, b = a) {
  return a * b
}

if (typeof window  === 'undefined') {
  module.exports = {
    area
  }
}
