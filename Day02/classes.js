
// function Shape (sides, color) {
//   this.sides = sides
//   this.color = color

// }

class Shape {
  constructor(sides, color) {
    let a = 10
    console.log(this.vertices)
    this.vertices = sides
    console.log(this.vertices)
    this.color = color

    this.getA = function (){
      return a
    }
    this.setA = function (val){
      a = val
    }
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
