
function createGreeting(salutation) {
  function greet(name) {
    return salutation + ', ' + name
  }

  return greet
}

let gm = createGreeting('Good Morning')
let gn = createGreeting('Good Night')

console.log(
  createGreeting('Good Day')('Saul')
)

console.log(gm('John'))
console.log(gm('Jane'))
console.log(gn('John'))
console.log(gn('Jane'))
