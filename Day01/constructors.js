

function Fruit(taste, color) {
  this.taste = taste
  this.color = color
}
Fruit.prototype.edible = true

let obj = {
  f: Fruit
}

let apple = Fruit('sweet', 'red')

let guava = new Fruit('sweet', 'green')

