// function add (a) {
//   return function add2(b) {
//     return function () {
//       return a + b
//     }
//   }
// }

let add = (a) => (b) => () => a + b


let mult = (a, b) => a * b

console.log(mult(10, 4))


let a = add(3)(4)() // 7
let b = add(5)(6)() // 11

console.log(a, b)





// add(1)(2)(3)() // return 6

// add(5)() // return 5

// add(2)(8)(6)(4)() // return 20
