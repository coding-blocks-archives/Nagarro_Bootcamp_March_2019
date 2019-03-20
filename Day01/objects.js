let obj = {
  a: 245,
  b: 'aasdsad',
  c: false,
  d: [34, 'sdf', true],
  e: {
    p: 10,
    q: 'adb'
  },
  f: function () {
    return this.a + this.b
  }
}
for (let k in obj) {
  console.log(k + ' : ' + obj[k])
}

console.log(obj['a'])

let c = 'd'

console.log(obj[c])


