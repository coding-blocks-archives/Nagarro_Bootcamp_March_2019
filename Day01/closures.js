
function outer (init) {
  let x = init
  function inner (delta) {
    x = x + delta
    return x
  }

  return inner
}

let a = outer(10)

console.log(a(5))
console.log(a(5))
console.log(a(5))
console.log(a(5))

let b = outer(20)

console.log(b(2))
console.log(b(2))
console.log(b(2))
console.log(b(2))

