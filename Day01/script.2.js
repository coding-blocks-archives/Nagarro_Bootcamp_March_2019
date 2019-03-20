console.log('Hello World')

function alpha (a, b) {
  return a + " : " + b
}

function area (a, b = a) {
  return a * b
}


console.log(alpha('asd', 'dsfn'))
console.log(alpha(54, 457))
console.log(alpha(null, null))
console.log(alpha())
console.log(alpha(4,5,6))

console.log("Area = " + area(4 ,6))
console.log("Area = " + area(4))
