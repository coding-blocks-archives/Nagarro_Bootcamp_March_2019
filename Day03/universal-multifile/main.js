let lib;
if (typeof window  === 'undefined') {
  lib = require('./lib')
} else {
  lib = window
}

console.log(lib.area(3))
console.log(lib.area(3, 4))
