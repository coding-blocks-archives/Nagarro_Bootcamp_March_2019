
// function Shape (sides, color) {
//   this.sides = sides
//   this.color = color

// }

class Shape {
  constructor(sides, color) {
    this.sides = sides
    this.color = color
  }
  isTriangle() {
    return this.vertices  === 3
  }
  get vertices() {
    return this.sides
  }
  set vertices (value) {
    this.sides = value
  }

}

let redSquare = new Shape(4, 'red')
